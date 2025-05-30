import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, gender, specialty, reason } = body;

  const token = process.env.CALENDLY_API_KEY;
  if (!token) {
    return NextResponse.json(
      { error: "Missing Calendly API token" },
      { status: 500 }
    );
  }

  // Step 1: Get current user info
  const userRes = await fetch("https://api.calendly.com/users/me", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  const userJson = await userRes.json();
  const userUri = userJson.resource?.uri;
  if (!userUri) {
    return NextResponse.json(
      { error: "User not found from token" },
      { status: 500 }
    );
  }

  // Step 2: Get Event Types
  const eventRes = await fetch(
    `https://api.calendly.com/event_types?user=${userUri}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const eventJson = await eventRes.json();
  const eventType = eventJson.collection?.find((et: any) =>
    et.scheduling_url.includes("rahatsayyed/error-resolve")
  );

  if (!eventType) {
    return NextResponse.json(
      { error: "Matching event type not found" },
      { status: 404 }
    );
  }

  // Step 3: Get available times for next 7 days
  const now = new Date();
  now.setMinutes(now.getMinutes() + 5); // add 5 minutes
  const oneWeekLater = new Date(now);
  oneWeekLater.setDate(now.getDate() + 3);

  const startTime = now.toISOString();
  const endTime = oneWeekLater.toISOString();
  const availableRes = await fetch(
    `https://api.calendly.com/event_type_available_times?event_type=${eventType.uri}&start_time=${startTime}&end_time=${endTime}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const availableJson = await availableRes.json();
  const earliestSlot = availableJson.collection?.find(
    (slot: any) => slot.status === "available"
  );

  if (!earliestSlot) {
    return NextResponse.json(
      { error: "No available time slots found" },
      { status: 404 }
    );
  }

  // Step 4: Auto-book the earliest available slot
  const bookingRes = await fetch(
    `https://api.calendly.com/scheduled_events`, // extract UUID from URI
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        name,
        start_time: earliestSlot.start_time,
        questions_and_answers: [
          { question: "Phone", answer: phone },
          { question: "Gender", answer: gender },
          { question: "Specialty", answer: specialty },
          { question: "Reason", answer: reason },
        ],
      }),
    }
  );

  const bookingJson = await bookingRes.json();
  console.log("booking res", bookingJson);
  if (!bookingRes.ok) {
    return NextResponse.json({ error: bookingJson }, { status: 500 });
  }

  return NextResponse.json({
    success: true,
    event: bookingJson,
    message: "Booked at the earliest possible time.",
    scheduled_url: earliestSlot.scheduling_url,
  });
}
