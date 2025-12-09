// src/app/api/draft/route.ts
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const to = searchParams.get("to");

  if (!to) {
    return new Response("Missing 'to' parameter", { status: 400 });
  }

  (await draftMode()).enable();
  redirect(to);
}
