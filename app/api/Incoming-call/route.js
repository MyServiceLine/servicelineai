export async function POST() {
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say>
    Incoming call route is working. This is a test.
  </Say>
</Response>`,
    {
      headers: {
        "Content-Type": "text/xml",
      },
    }
  );
}