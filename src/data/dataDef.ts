import {StaticImageData} from 'next/image';
import {FC, ForwardRefExoticComponent, SVGProps} from 'react';

import {IconProps} from '../components/Icons/Icon';

export interface HomepageMeta {
  title: string;
  description: string;
  ogImageUrl?: string;
  twitterCardType?: 'summary' | 'summary_large';
  twitterTitle?: string;
  twitterSite?: string;
  twitterCreator?: string;
  twitterDomain?: string;
  twitterUrl?: string;
  twitterDescription?: string;
  twitterImageUrl?: string;
}

export interface ImageData {
  src: string | StaticImageData;
  imageHeight?: number;
  imageWidth?: number;
}
/**
 * Hero section
 */
export interface Hero {
  name: string;
  subtitle?: string;
  description: JSX.Element;
  actions: HeroActionItem[];
  avatar?: string | StaticImageData;
}

interface HeroActionItem {
  href: string;
  text: string;
  primary?: boolean;
  Icon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
}

/**
 * About section
 */
export interface About {
  backgroundImageSrc?: string | StaticImageData;
  profileImageSrc?: string;
  description: JSX.Element;
  secondParagraph?: JSX.Element;
  aboutItems: AboutItem[];
}

export interface AboutItem {
  label: string;
  text: string;
  Icon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
}

/**
 * Stat section
 */
export interface Stat {
  title: string;
  value: number;
  Icon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
}

/**
 * Skills section
 */

export interface Skill {
  name: string;
  icon?: string | StaticImageData;
}

export interface SkillGroup {
  name: string;
  skills: Skill[];
}

/**
 * Portfolio section
 */
export interface Client {
  title: string;
  image: string | StaticImageData;
  imageHeight?: number;
  imageWidth?: number;
}

/**
 * Resume section
 */
export interface TimelineItem {
  date: string;
  location: string;
  title: string;
  content?: JSX.Element;
  image?: string | StaticImageData;
}

export interface EducationItem {
  date: string;
  location: string;
  title: string;
  content?: JSX.Element;
  image?: ImageData;
}

export interface Resume {
  timelineImageSrc?: string | StaticImageData;
  skills: SkillGroup[];
  education: EducationItem[];
  experience: TimelineItem[];
  clients: Client[];
}

/**
 * Testimonial section
 */
export interface TestimonialSection {
  imageSrc?: string | StaticImageData;
  testimonials: Testimonial[];
}

export interface Testimonial {
  image?: string;
  name: string;
  text: string;
}

/**
 * Contact section
 */
export interface ContactSection {
  headerText?: string;
  description: string;
  items: ContactItem[];
}

export const ContactType = {
  Email: 'Email',
  Phone: 'Phone',
  Location: 'Location',
  LinkedIn: 'LinkedIn',
  RescueDogLove: 'Rescue Dog Love',
} as const;

export type ContactType = (typeof ContactType)[keyof typeof ContactType];

export interface ContactItem {
  type: ContactType;
  text: string;
  href?: string;
}

export interface ContactValue {
  Icon: FC<IconProps> | ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
  srLabel: string;
}

/**
 * Social items
 */
export interface Social {
  label: string;
  Icon: FC<IconProps>;
  href: string;
}

export interface PortfolioItem {
  title: string;
  clientOrBrand: string;
  timePeriod: string;
  description: string | JSX.Element;
  keyDeliverables: string;
  whatIDid: JSX.Element;
  results?: string;
  images: ImageData[];
  videoEmbeds: JSX.Element[];
  heroImage: ImageData;
}

export interface PortfolioSection {
  title: string;
  footnote?: string;
  clientOrBrandTitle?: string;
  keyDeliverablesTitle?: string;
  whatIDidTitle?: string;
  folderImage: ImageData;
  backgroundImageSrc?: string | StaticImageData;
  windowBackgroundImage: ImageData;
}
