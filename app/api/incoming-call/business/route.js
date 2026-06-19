let activeBusiness = null;

export async function POST(req) {
  activeBusiness = await req.json();

  return Response.json({ success: true, activeBusiness });
}

export async function GET() {
  return Response.json(activeBusiness);
}