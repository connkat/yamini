import dynamic from 'next/dynamic';

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

const Home = () => {
  const {title, description} = homePageMeta;

  return (
    <Page description={description} title={title}>
      <section className="min-h-screen" id="Welcome">
        <Hero />
      </section>
      <section className="min-h-screen" id="About">
        <About />
      </section>
      <section className="min-h-screen" id="Resume">
        <Resume />
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

export default Home;
