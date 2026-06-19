export async function GET() {
  return new Response("Incoming call route is alive", {
    status: 200,
  });
}

export async function POST() {
  try {
    const res = await fetch("https://myservicelineai.com/api/business");
    const business = await res.json();

    const name = business?.name || "our business";
    const greeting =
      business?.greeting || "Hello, how can I help you today?";

    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="alice">
    Hi, you have reached ${name}. ${greeting}
  </Say>
</Response>`,
      {
        headers: {
          "Content-Type": "text/xml",
        },
      }
    );
  } catch (err) {
    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say>
    Sorry, we could not load business information.
  </Say>
</Response>`,
      {
        headers: {
          "Content-Type": "text/xml",
        },
      }
    );
  }
}