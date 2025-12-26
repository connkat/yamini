import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';

import { client } from 'sanity/lib/client';
import {
  ABOUT_ME_QUERY,
  CLIENTS_QUERY,
  EDUCATION_QUERY,
  SKILLS_QUERY,
  TESTIMONIALS_QUERY,
  WELCOME_QUERY,
  WORK_QUERY,
} from 'sanity/lib/queries';
import { About, Contact, Page, Portfolio, ResumeSection, Testimonials, Welcome } from 'src/components';

const Footer = dynamic(() => import('src/components/Sections/Footer'), { ssr: false });

interface HomeProps {
  welcomeData: {
    title: string;
    subtitle: string;
    summary: string;
    resumeLink: string;
    image: any;
  } | null;
  aboutMeData: {
    image: any;
    mainContent: string;
    secondaryContent: string;
  } | null;
  workData:
    | {
        title: string;
        company: string;
        duration: string;
        order: number;
      }[]
    | null;
  skillsData:
    | {
        name: string;
        icon: any;
        skills: { name: string }[];
      }[]
    | null;
  clientsData:
    | {
        name: string;
        image: any;
        url?: string;
      }[]
    | null;
  educationData:
    | {
        title: string;
        school: string;
        date: string;
        major?: string;
        image: any;
      }[]
    | null;
  testimonialsData:
    | {
        name: string;
        text: string;
      }[]
    | null;
}

const Home = ({
  welcomeData,
  aboutMeData,
  workData,
  skillsData,
  clientsData,
  educationData,
  testimonialsData,
}: HomeProps) => {
  return (
    <Page>
      <section className="min-h-screen" id="Welcome">
        <Welcome welcomeData={welcomeData} />
      </section>
      <section className="min-h-screen" id="About">
        <About aboutMeData={aboutMeData} />
      </section>
      <section className="min-h-screen" id="Resume">
        <ResumeSection
          clientsData={clientsData}
          educationData={educationData}
          skillsData={skillsData}
          workData={workData}
        />
      </section>
      <section className="min-h-screen" id="Portfolio">
        <Portfolio />
      </section>
      <section className="min-h-screen" id="Testimonials">
        <Testimonials testimonialsData={testimonialsData} />
      </section>
      <section className="min-h-screen" id="Contact">
        <Contact />
      </section>
      <Footer />
    </Page>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const welcomeData = await client.fetch(WELCOME_QUERY);
  const aboutMeData = await client.fetch(ABOUT_ME_QUERY);
  const workData = await client.fetch(WORK_QUERY);
  const skillsData = await client.fetch(SKILLS_QUERY);
  const clientsData = await client.fetch(CLIENTS_QUERY);
  const educationData = await client.fetch(EDUCATION_QUERY);
  const testimonialsData = await client.fetch(TESTIMONIALS_QUERY);

  return {
    props: {
      welcomeData,
      aboutMeData,
      workData,
      skillsData,
      clientsData,
      educationData,
      testimonialsData,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
};

export default Home;
