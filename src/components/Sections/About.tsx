import Image from 'next/image';

import { urlFor } from 'sanity/lib/image';
import { Section } from 'src/components';
import { SectionId } from 'src/data';

interface AboutProps {
  aboutMeData: {
    image: any;
    mainContent: string;
    secondaryContent: string;
  } | null;
}

const About = ({ aboutMeData }: AboutProps) => {
  const imageUrl = aboutMeData?.image ? urlFor(aboutMeData.image).width(1536).height(2048).url() : null;
  const mainContent = aboutMeData?.mainContent;
  const secondaryContentText = aboutMeData?.secondaryContent;

  return (
    <Section noPadding sectionId={SectionId.About}>
      <div className="relative flex min-h-screen items-center justify-center p-8 sm:max-h-screen lg:px-0">
          <div className="window y2k-window z-10 w-full max-w-[95vw] sm:max-w-5xl sm:px-0 lg:max-w-7xl h-[80vh] sm:h-auto flex flex-col sm:block overflow-hidden sm:overflow-visible">
            <div className="title-bar shrink-0">
              <div className="title-bar-text p-1 lg:p-2 text-base sm:text-2xl">About me</div>
            </div>
            <div className="overflow-y-scroll sm:overflow-visible flex-1 sm:flex-none" data-scrollable>
              <div className="flex flex-col sm:flex-row items-center">
                <div className="position-relative order-2 sm:order-1">
                  <Image
                    alt="about-me-image"
                    className="rounded-xl p-2 sm:p-4 max-h-[20vh] sm:max-h-[38vh]"
                    height={2048}
                    src={imageUrl || '/default-profile.png'}
                    style={{ objectFit: 'contain' }}
                    width={1536}
                  />
                </div>
                <div className="p-4 sm:p-4 text-lg sm:text-xl md:text-2xl order-1 sm:order-2">{mainContent}</div>
              </div>
              <div className="p-4 sm:p-4 text-lg sm:text-xl md:text-2xl">{secondaryContentText}</div>
            </div>
          </div>
        </div>
    </Section>
  );
};

About.displayName = 'About';
export default About;
