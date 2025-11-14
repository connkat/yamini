import dynamic from 'next/dynamic';
import {FC, memo, useEffect, useRef} from 'react';

import Page from 'components/Layout/Page';
import About from 'components/Sections/About';
import Contact from 'components/Sections/Contact';
import Hero from 'components/Sections/Hero';
// import Portfolio from 'components/Sections/Portfolio/Portfolio';
import Resume from 'components/Sections/Resume';
import Testimonials from 'components/Sections/Testimonials';
import {homePageMeta} from 'data/data';

import '98.css';

// eslint-disable-next-line react-memo/require-memo
const Footer = dynamic(() => import('../components/Sections/Footer'), {ssr: false});

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;

  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const handleScroll = (event: WheelEvent | KeyboardEvent) => {
      // Check if the event target is the window or a scrollable element
      const isScrollableElement = (event.target as HTMLElement)?.closest('[data-scrollable]');

      if (isScrollableElement) {
        // Allow default scrolling for scrollable elements
        return;
      }

      const currentSectionIndex = sectionsRef.current.findIndex(section => section.getBoundingClientRect().top >= 0);

      if (event instanceof WheelEvent) {
        if (event.deltaY > 0 && currentSectionIndex < sectionsRef.current.length - 1) {
          // Scroll down
          sectionsRef.current[currentSectionIndex + 1].scrollIntoView({behavior: 'smooth'});
        } else if (event.deltaY < 0 && currentSectionIndex > 0) {
          // Scroll up
          sectionsRef.current[currentSectionIndex - 1].scrollIntoView({behavior: 'smooth'});
        }
      } else if (event instanceof KeyboardEvent) {
        if (event.key === 'ArrowDown' && currentSectionIndex < sectionsRef.current.length - 1) {
          // Scroll down
          sectionsRef.current[currentSectionIndex + 1].scrollIntoView({behavior: 'smooth'});
        } else if (event.key === 'ArrowUp' && currentSectionIndex > 0) {
          // Scroll up
          sectionsRef.current[currentSectionIndex - 1].scrollIntoView({behavior: 'smooth'});
        }
      }
    };

    // Add event listeners
    window.addEventListener('wheel', handleScroll, {passive: false});
    window.addEventListener('keydown', handleScroll);

    return () => {
      // Cleanup event listeners
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleScroll);
    };
  }, []);

  return (
    <Page description={description} title={title}>
      <section
        className="h-[calc(100%-3.5rem)]"
        id="welcome"
        ref={el => {
          if (el) sectionsRef.current.push(el);
        }}>
        <Hero />
      </section>
      <section
        className="h-[calc(100%-3.5rem)]"
        id="about"
        ref={el => {
          if (el) sectionsRef.current.push(el);
        }}>
        <About />
      </section>
      <section
        className="h-[calc(100%-3.5rem)]"
        id="resume"
        ref={el => {
          if (el) sectionsRef.current.push(el);
        }}>
        <Resume />
      </section>
      <section
        className="h-[calc(100%-3.5rem)]"
        id="portfolio"
        ref={el => {
          if (el) sectionsRef.current.push(el);
        }}>
        {/* <Portfolio /> */}
      </section>
      <section
        className="h-[calc(100%-3.5rem)]"
        id="testimonials"
        ref={el => {
          if (el) sectionsRef.current.push(el);
        }}>
        <Testimonials />
      </section>
      <section
        className="h-[calc(100%-3.5rem)]"
        id="contact"
        ref={el => {
          if (el) sectionsRef.current.push(el);
        }}>
        <Contact />
      </section>
      <Footer />
    </Page>
  );
});

export default Home;
