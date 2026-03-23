import { revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

const secret = process.env.SANITY_REVALIDATE_SECRET;

export async function POST(req: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody<{ _type: string }>(
      req,
      secret,
    )
    if (!isValidSignature) {
      const message = 'Invalid signature'
      return new Response(JSON.stringify({ message, isValidSignature, body }), { status: 401 })
    }
    if (!body?._type) {
      const message = 'Invalid _type'
      return new Response(JSON.stringify({ message, body }), { status: 400 });
    }

    // Next.js 16 mein revalidateTag(tag, 'max') chahiye
    revalidateTag(body._type, 'max')

    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
      tag: body._type,
    })
  } catch (err: any) {
    console.error(err)
    return new Response(err.message, { status: 500 })
  }
}
