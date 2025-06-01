import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, gender, specialty, reason } = body;

  // Validate input
  if (!name || !email || !phone || !specialty || !reason) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const calendarId = process.env.GOOGLE_CALENDAR_ID; // Must be set to the calendarId of the "SurgicareAppointment" calendar
  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!calendarId || !serviceAccountEmail || !privateKey) {
    return NextResponse.json(
      { error: "Missing Google Calendar configuration" },
      { status: 500 }
    );
  }

  try {
    // Authenticate with Service Account
    const auth = new google.auth.JWT({
      email: serviceAccountEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/calendar"],
    });

    const calendar = google.calendar({ version: "v3", auth });

    // Schedule event at current time in IST
    const now = new Date();
    const startTime = new Date(
      now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
    );
    const endTime = new Date(startTime.getTime() + 30 * 60 * 1000); // 30-minute appointment

    // Create event
    const event = await calendar.events.insert({
      calendarId,
      requestBody: {
        summary: `TOTAL SURGICARE ${specialty} Consultation`,
        description: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nGender: ${gender}\nReason: ${reason}`,
        start: { dateTime: startTime.toISOString(), timeZone: "Asia/Kolkata" },
        end: { dateTime: endTime.toISOString(), timeZone: "Asia/Kolkata" },
        reminders: {
          useDefault: false,
          overrides: [{ method: "email", minutes: 24 * 60 }],
        },
      },
    });

    return NextResponse.json({
      success: true,
      message: "Appointment booked successfully.",
      event_id: event.data.id,
    });
  } catch (error: any) {
    console.error("Booking error:", error);

    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
}
