// Server-side fetch function with automatic time-based revalidation
// Content will refresh every 60 seconds automatically - no webhooks needed!
import { client } from './client'

export async function sanityFetch<T>({
  query,
  params = {},
  revalidate = 60, // Revalidate every 60 seconds by default
}: {
  query: string;
  params?: Record<string, unknown>;
  revalidate?: number; // Time in seconds
}): Promise<T> {
  return await client.fetch<T>(query, params, {
    next: {
      revalidate, // Next.js will automatically refresh data after this many seconds
    }
  });
}
