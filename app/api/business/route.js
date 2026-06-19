let activeBusiness = null;

export async function POST(req) {
  const data = await req.json();

  activeBusiness = {
    name: data.name || "Demo Business",
    greeting: data.greeting || "Hi, how can I help you?",
    services: data.services || "",
  };

  return Response.json({
    success: true,
    activeBusiness,
  });
}

export async function GET() {
  return Response.json(activeBusiness);
}