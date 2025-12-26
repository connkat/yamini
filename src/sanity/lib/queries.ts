import { defineQuery } from 'next-sanity';

export const WELCOME_QUERY = defineQuery(`*[_type == "welcome"][0]{
  title,
  subtitle,
  summary,
  resumeLink,
  image
}`);

export const ABOUT_ME_QUERY = defineQuery(`*[_type == "aboutMe"][0]{
  image,
  mainContent,
  secondaryContent
}`);

export const WORK_QUERY = defineQuery(`*[_type == "work"] | order(order asc){
  title,
  company,
  duration,
  order
}`);

export const SKILLS_QUERY = defineQuery(`*[_type == "skillGroup"] | order(order asc){
  name,
  icon,
  skills[]{
    name
  }
}`);

export const CLIENTS_QUERY = defineQuery(`*[_type == "clients"] | order(order asc){
  name,
  image,
  url
}`);

export const EDUCATION_QUERY = defineQuery(`*[_type == "education"] | order(order asc){
  title,
  school,
  date,
  major,
  image
}`);
