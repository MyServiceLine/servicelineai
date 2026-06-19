let activeBusiness = null;

// Save intake form data
export async function POST(req) {
  try {
    const data = await req.json();

    activeBusiness = {
      name: data.name || "Unknown Business",
      greeting:
        data.greeting ||
        "Hello, how can I help you today?",
      services: data.services || "",
      phone: data.phone || "",
      createdAt: new Date().toISOString(),
    };

    console.log("Business saved:", activeBusiness);

    return Response.json({
      success: true,
      message: "Business intake saved",
      activeBusiness,
    });
  } catch (err) {
    return Response.json(
      { success: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }
}

// Read business data (used by Twilio later)
export async function GET() {
  return Response.json(activeBusiness || null);
}