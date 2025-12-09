// Server-side fetch function that doesn't use defineLive to avoid createContext issues
import { client } from './client'

export async function sanityFetch<T>({
  query,
  params = {},
}: {
  query: string;
  params?: Record<string, unknown>;
}): Promise<T> {
  return await client.fetch<T>(query, params);
}
