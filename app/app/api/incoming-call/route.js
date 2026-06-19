export async function POST() {
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="alice">
    Hello. Your AI receptionist test is working.
  </Say>
</Response>`,
    {
      headers: {
        "Content-Type": "text/xml",
      },
    }
  );
}