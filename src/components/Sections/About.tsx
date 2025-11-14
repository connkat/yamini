import Image from 'next/image';
import {FC, memo, useMemo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {backgroundImageSrc, profileImageSrc, description, secondParagraph} = aboutData;
  const resolveSrc = useMemo(() => {
    if (!backgroundImageSrc) return undefined;
    return typeof backgroundImageSrc === 'string' ? backgroundImageSrc : backgroundImageSrc.src;
  }, [backgroundImageSrc]);
  const style = useMemo<React.CSSProperties>(() => ({objectFit: 'contain'}), []);
  return (
    <Section noPadding sectionId={SectionId.About}>
      <div
        className="bg-cover bg-center"
        style={backgroundImageSrc ? {backgroundImage: `url(${resolveSrc}`} : undefined}>
        <div className="relative flex min-h-screen sm:max-h-screen  items-center justify-center p-8 lg:px-0">
          <div className="window z-10 sm:max-w-screen-lg  sm:px-0">
            <div className="title-bar bg-gray-800/60">
              <div className="title-bar-text p-1 lg:p-2 text-base sm:text-2xl">About me</div>
            </div>
            <div className="flex flex-col sm:flex-row items-center">
              <div className="position-relative">
                <Image
                  alt="about-me-image"
                  className="rounded-xl p-2 sm:p-4 max-h-[38vh]"
                  height={2048}
                  src={profileImageSrc || '/default-profile.png'}
                  style={style}
                  width={1536}
                />
              </div>
              <div className="p-2 sm:p-4">{description}</div>
            </div>
            <div className="p-2 sm:p-4">{secondParagraph}</div>
          </div>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
