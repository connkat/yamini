import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

import { LinkedInIcon, PawIcon } from 'src/components';
import {
  Client,
  ContactSection,
  ContactType,
  EducationItem,
  PortfolioItem,
  PortfolioSection,
  Resume,
  Social,
  TestimonialSection,
  TimelineItem,
} from 'src/data';
import {
  airmiles,
  book,
  certificate,
  clouds as cloudsImage,
  folder,
  gi1,
  gi2,
  goodinvesting,
  gsk,
  gsk1,
  gsk2,
  gsk3,
  gsk4,
  hills as hillsImage,
  hut8,
  media2,
  network,
  paint,
  people,
  pfizer,
  Siggis,
  TDM,
  THA,
  timeline,
  videocamera,
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
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'Testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: EducationItem[] = [
  {
    date: '2017',
    location: 'Humber College',
    title: 'Public Relations Diploma',
    image: {
      src: certificate,
      imageHeight: 32,
      imageWidth: 32,
    },
  },
  {
    date: '2013',
    location: 'University of Toronto',
    title: 'Master of Arts',
    content: <p className="text-center font-bold sm:text-base">Comparative Literature</p>,
    image: {
      src: book,
      imageHeight: 48,
      imageWidth: 48,
    },
  },
  {
    date: '2013',
    location: "University of King's College",
    title: 'Bachelor of Arts with Honours',
    content: <p className="text-center font-bold sm:text-base">English Literature & Philosophy</p>,
    image: {
      src: paint,
      imageHeight: 48,
      imageWidth: 48,
    },
  },
];

export const experience: TimelineItem[] = [
  {
    duration: '2023 - Present',
    company: 'YCPR',
    title: 'Founder',
    order: 1,
  },
];

export const resumeData: Resume = {
  timelineImageSrc: timeline,
  education: education,
  experience: experience,
};
/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: cloudsImage,
  testimonials: [
    {
      name: 'Tim Nash, Good Investing',
      text: "Yamini has been an integral part of growing my business, using her knowledge across the board on client communications, organizing long-term partnerships and growing our brand new Classroom platform. They've also begun producing my podcast and YouTube series, helping make content creation efficient while delivering results.",
    },
    {
      name: 'Christina Antoniou, Pfizer Canada',
      text: 'As a client, I appreciate her responsiveness, organized approach and the great service level she provides. She is a great communicator, and know the social media landscape very well.',
    },
    {
      name: 'Eric Tang, Porter Novelli Canada',
      text: "When you work with Yamini, her positive energy is so powerful that you can't help but want to bring your best game to the table.",
    },
    {
      name: 'Arnold Lee, Hut 8 Mining',
      text: 'Her passion for her work was evident in every project she undertook, consistently going above and beyond to ensure the best outcome. Her communication skills were exceptional, always articulating her ideas clearly and effectively, which greatly contributed to our team’s success.',
    },
  ],
};

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
      href: 'https://www.google.ca/maps/place/Toronto,+ON',
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

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Content Creation: Video',
    clientOrBrand: 'Epipen',
    timePeriod: '(2017 - 2021)',
    description:
      'Support EpiPen brand by collaborating with non-profit Food Allergy Canada in educating folks about allergy management, including the importance of carrying an EpiPen at all times.',
    keyDeliverables:
      'Final produced videos with accompanying social media strategy and posts, including a paid media strategy.',
    whatIDid: (
      <ul className="list-disc">
        <li className="text-lg mt-[-12px] mb-3">
          Created key messages and initial script with Pfizer Canada & non profit partner Food Allergy Canada
        </li>
        <li className="text-lg mt-[-12px] mb-3">
          Sourced and partnered with videographer partner to storyboard and direct the shoot
        </li>
        <li className="text-lg mt-[-12px] mb-3">Project managed whole project between clients and partners</li>
        <li className="text-lg mt-[-12px] mb-3">Worked with videographer on final edits for post-production</li>
        <li className="text-lg mt-[-12px] mb-3">Created social media posts to accompany videos</li>
        <li className="text-lg mt-[-12px] mb-3">Worked with paid media agency on paid media strategy</li>
      </ul>
    ),
    results: '',
    images: [
      {
        src: pfizer,
        imageHeight: 660,
        imageWidth: 880,
      },
    ],
    videoEmbeds: [
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        height="315"
        referrerPolicy="strict-origin-when-cross-origin"
        src="https://www.youtube.com/embed/OEj9GGtnRAE?si=IaaDiREIIlKxJBgO"
        title="YouTube video player"
        width="560"></iframe>,
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        height="315"
        referrerPolicy="strict-origin-when-cross-origin"
        src="https://www.youtube.com/embed/h6vr1CSGftY?si=RdF6u1YKBZRzp8pi"
        title="YouTube video player"
        width="560"></iframe>,
    ],
    heroImage: {
      src: videocamera,
      imageHeight: 48,
      imageWidth: 48,
    },
  },
  {
    title: 'Influencer Marketing',
    clientOrBrand: 'GSK Vaccines',
    timePeriod: '(2017 - 2021)',
    description: 'Support GSK’s vaccine brands by collaborating with relevant influencers in target demographic.',
    keyDeliverables: 'Influencer Instagram posts and stories with paid media boost for further reach',
    whatIDid: (
      <ul className="list-disc">
        <li className="text-lg mt-[-12px] mb-3">Research and influencer selection</li>
        <li className="text-lg mt-[-12px] mb-3">Key message document and contract negotiations</li>
        <li className="text-lg mt-[-12px] mb-3">Coordinating content creation and edits</li>
        <li className="text-lg mt-[-12px] mb-3">Monitoring comments and reporting</li>
        <li className="text-lg mt-[-12px] mb-3">Adhering to GSK and Health Canada regulations</li>
      </ul>
    ),
    results:
      'Popular Canadian parenting influencers spoke about the meningitis B vaccine at the height of COVID-19, when negative conversations about vaccines were prominent in parenting circles.',
    images: [
      {
        src: gsk1,
        imageHeight: 660,
        imageWidth: 880,
      },
      {
        src: gsk2,
        imageHeight: 660,
        imageWidth: 880,
      },
      {
        src: gsk3,
        imageHeight: 660,
        imageWidth: 880,
      },
      {
        src: gsk4,
        imageHeight: 660,
        imageWidth: 880,
      },
    ],
    videoEmbeds: [],
    heroImage: {
      src: media2,
      imageHeight: 48,
      imageWidth: 48,
    },
  },
  {
    title: 'Creating Community',
    clientOrBrand: 'Good Investing',
    timePeriod: '(2024-2025)',
    description: (
      <>
        <p>Support Good Investing business growth by creating a Classroom.</p>
        <br />
        <p>
          Good Investing, led by Tim Nash, focuses on providing sustainable investment advice and helping folks align
          their finances with their values.
          <a className="font-medium text-blue-700 hover:underline" href="https://www.giclassroom.com/" target="blank">
            You can join the Good Investing Classroom here!
          </a>
        </p>
      </>
    ),
    keyDeliverables:
      'A community page that encompasses the Good Investing brand while inviting both new and legacy members to engage in learning about sustainable finance.',
    whatIDid: (
      <ul className="list-disc">
        <li className="text-lg mt-[-12px] mb-3">Developing strategy and key messaging</li>
        <li className="text-lg mt-[-12px] mb-3">
          Project management top to bottom in coordinating lesson plans, calendar, schedule etc
        </li>
        <li className="text-lg mt-[-12px] mb-3">Creation of classroom including graphic design and written text</li>
        <li className="text-lg mt-[-12px] mb-3">
          Ongoing promotions and partnerships, including both free video content and gated content
        </li>
        <li className="text-lg mt-[-12px] mb-3">Monitoring and responses </li>
      </ul>
    ),
    images: [
      {
        src: gi1,
        imageHeight: 660,
        imageWidth: 1200,
      },
      {
        src: gi2,
        imageHeight: 660,
        imageWidth: 1200,
      },
    ],
    videoEmbeds: [],
    heroImage: {
      src: people,
      imageHeight: 48,
      imageWidth: 48,
    },
  },
];
export const portfolioSection: PortfolioSection = {
  title: 'Portfolio',
  footnote: 'For more details on these case studies, send me a note!',
  clientOrBrandTitle: 'Client or brand',
  keyDeliverablesTitle: 'Key deliverables',
  whatIDidTitle: 'What I handled',
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
