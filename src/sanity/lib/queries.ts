import { defineQuery } from 'next-sanity';

export const WELCOME_QUERY = defineQuery(`*[_type == "welcome"][0]{
  title,
  subtitle,
  summary,
  resumeLink
}`);

export const ABOUT_ME_QUERY = defineQuery(`*[_type == "aboutMe"][0]{
  image,
  mainContent,
  secondaryContent
}`);
