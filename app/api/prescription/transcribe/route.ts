import { NextResponse } from "next/server";
import { z } from "zod";
import { AssemblyAI } from "assemblyai";
import { createClient } from "@/lib/supabase/server";
import { extractFields, type AssemblyAIEntity } from "@/lib/voice/extract";

export const runtime = "nodejs";
export const maxDuration = 60;

const bodySchema = z.object({
  audioBase64: z.string().min(1, "audioBase64 is required"),
  mimeType: z.string().min(1).default("audio/webm"),
});

export async function POST(req: Request) {
  // --- Auth guard (same pattern as other prescription routes) ---
  const supabase = await createClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // --- API key check ---
  const apiKey = process.env.ASSEMBLYAI_API_KEY;
  if (!apiKey) {
    console.error("ASSEMBLYAI_API_KEY is not set");
    return NextResponse.json(
      { error: "Voice transcription is not configured on this server." },
      { status: 500 },
    );
  }

  // --- Parse + validate body ---
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation error", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const { audioBase64 } = parsed.data;

  // --- Decode base64 to Buffer ---
  let audioBuffer: Buffer;
  try {
    // Strip optional data URI prefix like "data:audio/webm;base64,"
    const stripped = audioBase64.replace(/^data:[^;]+;base64,/, "");
    audioBuffer = Buffer.from(stripped, "base64");
  } catch {
    return NextResponse.json({ error: "Invalid audio encoding" }, { status: 400 });
  }

  if (audioBuffer.length === 0) {
    return NextResponse.json({ error: "Empty audio payload" }, { status: 400 });
  }

  // Soft size cap: ~10 MB (roughly 5 min of Opus audio)
  const MAX_BYTES = 10 * 1024 * 1024;
  if (audioBuffer.length > MAX_BYTES) {
    return NextResponse.json(
      { error: "Audio file too large. Please keep recordings under 5 minutes." },
      { status: 413 },
    );
  }

  // --- Transcribe via AssemblyAI ---
  const client = new AssemblyAI({ apiKey });

  try {
    const transcript = await client.transcripts.transcribe({
      audio: audioBuffer,
      speech_models: ["universal-2"],
      entity_detection: true,
      punctuate: true,
      format_text: true,
    });

    if (transcript.status === "error") {
      console.error("AssemblyAI error:", transcript.error);
      return NextResponse.json(
        { error: "Transcription failed. Please try again." },
        { status: 502 },
      );
    }

    const text = transcript.text ?? "";
    const entities: AssemblyAIEntity[] = (transcript.entities ?? []).map((e) => ({
      entity_type: String(e.entity_type ?? ""),
      text: String(e.text ?? ""),
      start: typeof e.start === "number" ? e.start : undefined,
      end: typeof e.end === "number" ? e.end : undefined,
    }));

    const extracted = extractFields(text, entities);

    return NextResponse.json({
      transcript: text,
      ...extracted,
    });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Transcription failed";
    console.error("AssemblyAI transcribe error:", e);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
