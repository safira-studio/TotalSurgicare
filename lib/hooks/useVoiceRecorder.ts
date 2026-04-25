"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type RecorderStatus = "idle" | "requesting" | "recording" | "stopping" | "error";

export interface RecordingResult {
  blob: Blob;
  base64: string;
  mimeType: string;
  durationMs: number;
}

export interface UseVoiceRecorderOptions {
  /** Max recording length in milliseconds. Auto-stops after this. Default 180_000 (3 min). */
  maxDurationMs?: number;
}

/** Pick the best MediaRecorder MIME for the current browser. */
function pickMimeType(): string {
  if (typeof window === "undefined" || typeof MediaRecorder === "undefined") return "";
  const candidates = [
    "audio/webm;codecs=opus",
    "audio/webm",
    "audio/mp4", // iOS Safari 14.5+
    "audio/ogg;codecs=opus",
  ];
  for (const mime of candidates) {
    if (MediaRecorder.isTypeSupported(mime)) return mime;
  }
  return "";
}

/** Convert a Blob to a base64 string (without the data URI prefix). */
function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Failed to read audio blob"));
    reader.onload = () => {
      const result = reader.result;
      if (typeof result !== "string") {
        reject(new Error("Unexpected FileReader result"));
        return;
      }
      const commaIdx = result.indexOf(",");
      resolve(commaIdx >= 0 ? result.slice(commaIdx + 1) : result);
    };
    reader.readAsDataURL(blob);
  });
}

/**
 * React hook wrapping the MediaRecorder API for single-shot voice capture.
 * Handles permission prompts, MIME detection (webm/mp4), elapsed-time tracking,
 * automatic cleanup, and returns base64-encoded audio ready to POST.
 */
export function useVoiceRecorder(options: UseVoiceRecorderOptions = {}) {
  const { maxDurationMs = 180_000 } = options;

  const [status, setStatus] = useState<RecorderStatus>("idle");
  const [elapsedMs, setElapsedMs] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const recorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const startedAtRef = useRef<number>(0);
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const maxTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resolveRef = useRef<((r: RecordingResult) => void) | null>(null);
  const rejectRef = useRef<((err: Error) => void) | null>(null);

  const cleanup = useCallback(() => {
    if (tickRef.current) {
      clearInterval(tickRef.current);
      tickRef.current = null;
    }
    if (maxTimerRef.current) {
      clearTimeout(maxTimerRef.current);
      maxTimerRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    recorderRef.current = null;
    chunksRef.current = [];
    resolveRef.current = null;
    rejectRef.current = null;
  }, []);

  useEffect(() => {
    return () => cleanup();
  }, [cleanup]);

  const start = useCallback(async () => {
    if (status === "recording" || status === "requesting") return;
    setError(null);
    setElapsedMs(0);
    setStatus("requesting");

    if (typeof navigator === "undefined" || !navigator.mediaDevices?.getUserMedia) {
      setStatus("error");
      setError("Microphone access is not supported in this browser.");
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const mimeType = pickMimeType();
      const recorder = mimeType
        ? new MediaRecorder(stream, { mimeType })
        : new MediaRecorder(stream);

      chunksRef.current = [];
      recorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) chunksRef.current.push(e.data);
      };
      recorder.onerror = (ev) => {
        const err = (ev as unknown as { error?: Error }).error;
        setError(err?.message ?? "Recording error");
        rejectRef.current?.(err ?? new Error("Recording error"));
        setStatus("error");
        cleanup();
      };
      recorder.onstop = async () => {
        const actualMime = recorder.mimeType || mimeType || "audio/webm";
        const blob = new Blob(chunksRef.current, { type: actualMime });
        const durationMs = Date.now() - startedAtRef.current;

        try {
          const base64 = await blobToBase64(blob);
          resolveRef.current?.({ blob, base64, mimeType: actualMime, durationMs });
        } catch (err) {
          rejectRef.current?.(err instanceof Error ? err : new Error("Failed to encode audio"));
        } finally {
          setStatus("idle");
          cleanup();
        }
      };

      recorderRef.current = recorder;
      startedAtRef.current = Date.now();
      // 1-second timeslice: ensures ondataavailable fires regularly on iOS Safari
      // instead of only on stop(), which can produce an empty blob on some devices.
      recorder.start(1000);
      setStatus("recording");

      tickRef.current = setInterval(() => {
        setElapsedMs(Date.now() - startedAtRef.current);
      }, 200);

      maxTimerRef.current = setTimeout(() => {
        if (recorderRef.current?.state === "recording") {
          recorderRef.current.stop();
        }
      }, maxDurationMs);
    } catch (e: unknown) {
      const msg =
        e instanceof Error
          ? e.name === "NotAllowedError"
            ? "Microphone permission denied."
            : e.message
          : "Could not start recording.";
      setError(msg);
      setStatus("error");
      cleanup();
    }
  }, [cleanup, maxDurationMs, status]);

  const stop = useCallback((): Promise<RecordingResult> => {
    return new Promise((resolve, reject) => {
      const rec = recorderRef.current;
      if (!rec || rec.state === "inactive") {
        reject(new Error("No active recording"));
        return;
      }
      resolveRef.current = resolve;
      rejectRef.current = reject;
      setStatus("stopping");
      rec.stop();
    });
  }, []);

  const cancel = useCallback(() => {
    if (recorderRef.current && recorderRef.current.state !== "inactive") {
      recorderRef.current.onstop = null;
      recorderRef.current.stop();
    }
    cleanup();
    setStatus("idle");
    setElapsedMs(0);
    setError(null);
  }, [cleanup]);

  return {
    status,
    elapsedMs,
    error,
    start,
    stop,
    cancel,
    isSupported:
      typeof window !== "undefined" &&
      typeof MediaRecorder !== "undefined" &&
      !!navigator?.mediaDevices?.getUserMedia,
  };
}
