import { OpenAI } from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `You are a helpful hospital assistant. Your role is to:
- Provide information about hospital services and specializations
- Help with general appointment booking inquiries
- Offer basic symptom guidance (non-diagnostic)
- Always maintain a polite, caring, and professional tone
- Never provide medical diagnosis or treatment advice
- Always recommend consulting a doctor for serious symptoms
- Keep responses concise and direct`;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-nano",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: message },
      ],
      max_tokens: 5,
      temperature: 0.7,
    });

    return NextResponse.json({
      message: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("Error in chat route:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
