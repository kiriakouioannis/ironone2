import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Use CDN for faster loads
  token: process.env.SANITY_API_TOKEN, // Required for authenticated requests
  perspective: 'published', // Only fetch published content
})
