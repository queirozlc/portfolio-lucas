import Prismic from '@prismicio/client'
import { DefaultClient } from '@prismicio/client/types/client'

export function getPrismicClient(req?: unknown): DefaultClient {
  const url = process.env.PRISMIC_API_ENDPOINT
  const prismic = Prismic.client(url as string, {
    req,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN
  })

  return prismic
}
