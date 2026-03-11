import { StaticImageData } from 'next/image';
import { FC, ForwardRefExoticComponent, ReactElement, SVGProps } from 'react';

import { IconProps } from '../components/Icons/Icon';

export interface ImageData {
  src: string | StaticImageData;
  imageHeight?: number;
  imageWidth?: number;
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
  description: string | ReactElement;
  keyDeliverables: string;
  whatIDid: ReactElement;
  results?: string;
  images: ImageData[];
  videoEmbeds: ReactElement[];
  heroImage: ImageData;
}

export interface SanityPortfolioItem {
  title: string;
  folderImage: any;
  logo?: any;
  pageTitle: string;
  description: string;
  deliverablesTitle: string;
  deliverables: string[];
  results?: string;
  youtubeEmbeds?: string[];
  screenshotImages?: any[];
}

export interface PortfolioSection {
  folderImage: ImageData;
  backgroundImageSrc?: string | StaticImageData;
  windowBackgroundImage: ImageData;
}
