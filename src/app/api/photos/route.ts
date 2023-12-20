export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || 1;
  const limit = searchParams.get("limit") || 10;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`,
  );
  const photos = await res.json();

  return Response.json(photos);
}
