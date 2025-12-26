import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';

import Page from 'components/Layout/Page';
import About from 'components/Sections/About';
import Contact from 'components/Sections/Contact';
import Portfolio from 'components/Sections/Portfolio/Portfolio';
import Resume from 'components/Sections/Resume';
import Testimonials from 'components/Sections/Testimonials';
import Welcome from 'components/Sections/Welcome';
import { homePageMeta } from 'data/data';

import { client } from '../sanity/lib/client';
import { ABOUT_ME_QUERY, WELCOME_QUERY, WORK_QUERY } from '../sanity/lib/queries';

const Footer = dynamic(() => import('../components/Sections/Footer'), { ssr: false });

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
}

const Home = ({ welcomeData, aboutMeData, workData }: HomeProps) => {
  const { title, description } = homePageMeta;

  return (
    <Page description={description} title={title}>
      <section className="min-h-screen" id="Welcome">
        <Welcome welcomeData={welcomeData} />
      </section>
      <section className="min-h-screen" id="About">
        <About aboutMeData={aboutMeData} />
      </section>
      <section className="min-h-screen" id="Resume">
        <Resume workData={workData} />
      </section>
      <section className="min-h-screen" id="Portfolio">
        <Portfolio />
      </section>
      <section className="min-h-screen" id="Testimonials">
        <Testimonials />
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

  return {
    props: {
      welcomeData,
      aboutMeData,
      workData,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
};

export default Home;
