import dynamic from 'next/dynamic';
import {FC, memo} from 'react';

import Page from 'components/Layout/Page';
import About from 'components/Sections/About';
import Contact from 'components/Sections/Contact';
import Hero from 'components/Sections/Hero';
import Portfolio from 'components/Sections/Portfolio/Portfolio';
import Resume from 'components/Sections/Resume';
import Testimonials from 'components/Sections/Testimonials';
import {homePageMeta} from 'data/data';

// eslint-disable-next-line react-memo/require-memo
const Footer = dynamic(() => import('../components/Sections/Footer'), {ssr: false});

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;

  return (
    <Page description={description} title={title}>
      <section className="min-h-screen" id="welcome">
        <Hero />
      </section>
      <section className="min-h-screen" id="about">
        <About />
      </section>
      <section className="min-h-screen" id="resume">
        <Resume />
      </section>
      <section className="min-h-screen" id="portfolio">
        <Portfolio />
      </section>
      <section className="min-h-screen" id="testimonials">
        <Testimonials />
      </section>
      <section className="min-h-screen" id="contact">
        <Contact />
      </section>
      <Footer />
    </Page>
  );
});

export default Home;
