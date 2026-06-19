export async function POST() {
  try {
    // Get business data from your API
    const res = await fetch("https://myservicelineai.com/api/business");
    const business = await res.json();

    const name = business?.name || "our business";
    const greeting =
      business?.greeting ||
      "Hello, how can I help you today?";

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
    Sorry, there was an error connecting your call.
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