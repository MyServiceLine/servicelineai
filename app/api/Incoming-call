export async function POST() {
  // 1. Get business info from your API
  const res = await fetch("https://myservicelineai.com/api/business");
  const business = await res.json();

  // 2. Fallback if nothing set yet
  const greeting =
    business?.greeting ||
    "Hello, how can I help you today?";

  const name = business?.name || "our company";

  // 3. Twilio voice response
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
}