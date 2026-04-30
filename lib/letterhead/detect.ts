import "server-only";

import OpenAI from "openai";
import { DetectedCoordsSchema, type DetectedCoords } from "./types";

const SYSTEM_PROMPT = `You analyse clinic letterhead images and locate where a doctor would
WRITE patient details NEXT TO each printed label.

Return ONLY a JSON object — no markdown, no commentary — matching this exact shape:

{
  "name":      { "xFrac": number, "yFrac": number } | null,
  "age":       { "xFrac": number, "yFrac": number } | null,
  "weight":    { "xFrac": number, "yFrac": number } | null,
  "bp":        { "xFrac": number, "yFrac": number } | null,
  "date":      { "xFrac": number, "yFrac": number } | null,
  "mobile":    { "xFrac": number, "yFrac": number } | null,
  "bodyStart": { "xFrac": number, "yFrac": number } | null
}

Coordinates are FRACTIONS of the image (0 = top-left, 1 = bottom-right):
  xFrac = horizontal fraction (left edge = 0, right edge = 1)
  yFrac = vertical   fraction (top  edge = 0, bottom edge = 1)

For each label, place the point JUST TO THE RIGHT of the printed label/colon —
this is where the value should be written. If a label is not visible on the
letterhead, return null for it. Be conservative: prefer null over guessing.

bodyStart = the point where the doctor would start writing the body of the
prescription (typically just below the patient-info row, near the left margin
where Rx / Investigations / Complaints content starts).`;

function getClient(): OpenAI | null {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) return null;
  return new OpenAI({
    apiKey,
    baseURL: "https://openrouter.ai/api/v1",
    defaultHeaders: {
      "HTTP-Referer": "https://totalsurgicare.app",
      "X-Title": "TotalSurgicare Letterhead Detection",
    },
  });
}

export async function detectLetterheadFields(
  imageBytes: Buffer,
  mimeType: "image/png" | "image/jpeg",
): Promise<DetectedCoords | null> {
  const client = getClient();
  if (!client) {
    console.warn("[letterhead] OPENROUTER_API_KEY is not set; skipping detection");
    return null;
  }

  const dataUrl = `data:${mimeType};base64,${imageBytes.toString("base64")}`;

  let raw: string;
  try {
    const completion = await client.chat.completions.create(
      {
        model: "google/gemini-2.5-flash",
        temperature: 0,
        max_tokens: 600,
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          {
            role: "user",
            content: [
              { type: "image_url", image_url: { url: dataUrl } },
              {
                type: "text",
                text: "Analyse this letterhead and return the JSON object described above.",
              },
            ],
          },
        ],
      },
      { timeout: 25_000 },
    );
    raw = completion.choices[0]?.message?.content ?? "";
  } catch (err) {
    console.warn("[letterhead] OpenRouter call failed:", err);
    return null;
  }

  const cleaned = raw
    .trim()
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```$/i, "")
    .trim();

  let parsed: unknown;
  try {
    parsed = JSON.parse(cleaned);
  } catch {
    console.warn(
      "[letterhead] JSON parse failed for response:",
      cleaned.slice(0, 200),
    );
    return null;
  }

  const result = DetectedCoordsSchema.safeParse(parsed);
  if (!result.success) {
    console.warn(
      "[letterhead] Zod validation failed:",
      JSON.stringify(result.error.flatten()),
    );
    return null;
  }
  return result.data;
}
