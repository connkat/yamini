import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

import { LinkedInIcon, PawIcon } from 'src/components';
import { ContactSection, ContactType, PortfolioSection, Social } from 'src/data';
import {
  folder,
  hills as hillsImage,
  YCPR,
} from 'src/images';

/**
 * Section definition
 */
export const SectionId = {
  Welcome: 'Welcome',
  About: 'About',
  Contact: 'Contact',
  Portfolio: 'Portfolio',
  Resume: 'Resume',
  Skills: 'Skills',
  Testimonials: 'Testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: "I'm taking new clients! Reach out here.",
  items: [
    {
      type: ContactType.Email,
      text: 'hello@yaminicoen.com',
      href: 'mailto:hello@yaminicoen.com',
    },
    {
      type: ContactType.Location,
      text: 'Toronto ON, Canada',
    },
    {
      type: ContactType.LinkedIn,
      text: 'yaminicoen',
      href: 'https://www.linkedin.com/in/yaminicoen',
    },
    {
      type: ContactType.RescueDogLove,
      text: 'Yamini is also a practicing dog professional, find out more here!',
      href: 'https://www.rescuedoglove.com',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/yaminicoen/' },
  { label: 'Resume', Icon: ArrowDownTrayIcon, href: '/Yamini_Coen_Resume.pdf' },
  { label: 'Rescue Dog Love', Icon: PawIcon, href: 'https://www.rescuedoglove.com' },
];

export const portfolioSection: PortfolioSection = {
  folderImage: {
    src: folder,
    imageHeight: 48,
    imageWidth: 48,
  },
  backgroundImageSrc: hillsImage,
  windowBackgroundImage: {
    src: YCPR,
    imageHeight: 500,
    imageWidth: 813,
  },
};
