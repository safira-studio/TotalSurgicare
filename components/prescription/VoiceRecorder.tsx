"use client";

import { useRef, useState } from "react";
import { useVoiceRecorder } from "@/lib/hooks/useVoiceRecorder";

export interface ExtractedFieldsResult {
  transcript: string;
  patientName?: string;
  patientAge?: number;
  patientMobile?: string;
  testIds: string[];
}

interface VoiceRecorderProps {
  onExtracted: (result: ExtractedFieldsResult) => void;
  disabled?: boolean;
}

function formatDuration(ms: number): string {
  const total = Math.floor(ms / 1000);
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function VoiceRecorder({ onExtracted, disabled = false }: VoiceRecorderProps) {
  const { status, elapsedMs, error, start, stop, cancel, isSupported } =
    useVoiceRecorder({ maxDurationMs: 180_000 });

  const [transcribing, setTranscribing] = useState(false);
  const [transcript, setTranscript] = useState<string | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);
  const [nothingFound, setNothingFound] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  const isRecording = status === "recording";
  const isRequesting = status === "requesting";
  const isStopping = status === "stopping";

  async function handleStart() {
    setApiError(null);
    setTranscript(null);
    setNothingFound(false);
    await start();
  }

  async function handleStop() {
    setApiError(null);
    setNothingFound(false);
    try {
      const result = await stop();

      // Guard: reject recordings under 1 second — too short to contain useful speech
      if (result.durationMs < 1000) {
        setApiError("Recording too short. Please hold the button and speak clearly.");
        return;
      }

      setTranscribing(true);
      abortRef.current = new AbortController();

      const res = await fetch("/api/prescription/transcribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: abortRef.current.signal,
        body: JSON.stringify({
          audioBase64: result.base64,
          mimeType: result.mimeType,
        }),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        setApiError(json.error ?? "Transcription failed. Please try again.");
        setTranscribing(false);
        return;
      }

      const json = (await res.json()) as ExtractedFieldsResult;
      setTranscript(json.transcript ?? "");

      // If nothing was extracted, tell the doctor clearly instead of silently doing nothing
      const hasData =
        json.patientName ||
        json.patientAge != null ||
        json.patientMobile ||
        (json.testIds?.length ?? 0) > 0;

      if (!hasData) {
        setNothingFound(true);
      } else {
        onExtracted(json);
      }
    } catch (e: unknown) {
      if (e instanceof Error && e.name === "AbortError") return;
      const msg = e instanceof Error ? e.message : "Recording failed";
      setApiError(msg);
    } finally {
      setTranscribing(false);
      abortRef.current = null;
    }
  }

  if (!isSupported) {
    return (
      <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 px-4 py-3 text-xs text-gray-500">
        Voice input is not supported in this browser. Please use Chrome, Safari, or Edge.
      </div>
    );
  }

  return (
    <div
      className="rounded-2xl border p-4"
      style={{
        borderColor: isRecording ? "#00A9B7" : nothingFound ? "#FCA5A5" : "#E0F3F5",
        background: isRecording
          ? "rgba(0,169,183,0.04)"
          : nothingFound
            ? "rgba(254,202,202,0.15)"
            : "rgba(0,169,183,0.02)",
      }}
    >
      <div className="flex items-start gap-3">
        {/* Mic / Stop button */}
        <button
          type="button"
          disabled={disabled || isRequesting || isStopping || transcribing}
          onClick={isRecording ? handleStop : handleStart}
          className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white shadow-md transition-all active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
          style={{
            background: isRecording
              ? "linear-gradient(135deg, #E53935 0%, #C62828 100%)"
              : "linear-gradient(135deg, #00A9B7 0%, #007D8C 100%)",
          }}
          aria-label={isRecording ? "Stop recording" : "Start voice recording"}
        >
          {isRecording ? (
            <span
              aria-hidden
              className="absolute inset-0 rounded-full"
              style={{
                boxShadow: "0 0 0 0 rgba(229,57,53,0.6)",
                animation: "voice-pulse 1.4s infinite",
              }}
            />
          ) : null}

          {isRequesting || isStopping || transcribing ? (
            <Spinner />
          ) : isRecording ? (
            <StopIcon />
          ) : (
            <MicIcon />
          )}
        </button>

        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold" style={{ color: "#1B2A41" }}>
            {transcribing
              ? "Transcribing…"
              : isRecording
                ? "Listening…"
                : isRequesting
                  ? "Requesting mic…"
                  : nothingFound
                    ? "Nothing recognized"
                    : "Dictate patient details"}
            {isRecording && (
              <span className="ml-2 font-mono text-xs" style={{ color: "#E53935" }}>
                ● {formatDuration(elapsedMs)}
              </span>
            )}
          </p>

          <p className="mt-0.5 text-xs" style={{ color: nothingFound ? "#DC2626" : "#6B7280" }}>
            {isRecording ? (
              <>
                Say:{" "}
                <em>
                  &quot;Patient Rahul Sharma, age 45, mobile 9876543210, advise CBC, lipid profile, ECG&quot;
                </em>
              </>
            ) : transcribing ? (
              "Analyzing your voice note…"
            ) : nothingFound ? (
              "Couldn't recognize any details. Try again — speak clearly and include name, age, mobile, and tests."
            ) : transcript ? (
              "Details filled below. Review and edit as needed."
            ) : (
              "Tap the mic, speak the patient's name, age, mobile, and the tests to advise."
            )}
          </p>

          {isRecording && (
            <button
              type="button"
              onClick={cancel}
              className="mt-2 text-xs font-semibold text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
          )}

          {transcript && !isRecording && !transcribing && (
            <details className="mt-2">
              <summary className="cursor-pointer text-xs font-medium text-gray-500 hover:text-gray-700">
                Show transcript
              </summary>
              <p className="mt-1 rounded-lg bg-white/70 px-3 py-2 text-xs text-gray-700">
                {transcript}
              </p>
            </details>
          )}

          {(apiError || error) && (
            <p className="mt-2 text-xs font-medium text-red-600">{apiError ?? error}</p>
          )}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `@keyframes voice-pulse {
            0% { box-shadow: 0 0 0 0 rgba(229,57,53,0.6); }
            70% { box-shadow: 0 0 0 14px rgba(229,57,53,0); }
            100% { box-shadow: 0 0 0 0 rgba(229,57,53,0); }
          }`,
        }}
      />
    </div>
  );
}

function MicIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
      />
    </svg>
  );
}

function StopIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <rect x="6" y="6" width="12" height="12" rx="2" />
    </svg>
  );
}

function Spinner() {
  return (
    <svg
      className="h-5 w-5 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}
