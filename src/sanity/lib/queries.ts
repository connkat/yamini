import { defineQuery } from 'next-sanity'

export const WELCOME_QUERY = defineQuery(`*[_type == "welcome"][0]{
  title,
  subtitle,
  summary,
  resumeLink
}`)
