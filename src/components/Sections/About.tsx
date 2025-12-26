import Image from 'next/image';

import { urlFor } from 'sanity/lib/image';
import { Section } from 'src/components';
import { SectionId } from 'src/data';
import { hills } from 'src/images';

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
  const hillsUrl = (hills as any).src || hills;

  return (
    <Section noPadding sectionId={SectionId.About}>
      <div className="bg-cover bg-center" style={{ backgroundImage: `url(${hillsUrl})` }}>
        <div className="relative flex min-h-screen sm:max-h-screen  items-center justify-center p-8 lg:px-0">
          <div className="window z-10 w-full max-w-[95vw] sm:max-w-screen-lg lg:max-w-screen-xl sm:px-0">
            <div className="title-bar bg-gray-800/60">
              <div className="title-bar-text p-1 lg:p-2 text-base sm:text-2xl">About me</div>
            </div>
            <div className="flex flex-col sm:flex-row items-center">
              <div className="position-relative">
                <Image
                  alt="about-me-image"
                  className="rounded-xl p-2 sm:p-4 max-h-[38vh]"
                  height={2048}
                  src={imageUrl || '/default-profile.png'}
                  style={{ objectFit: 'contain' }}
                  width={1536}
                />
              </div>
              <div className="p-2 sm:p-4 text-lg sm:text-xl md:text-2xl">{mainContent}</div>
            </div>
            <div className="p-2 sm:p-4 text-lg sm:text-xl md:text-2xl">{secondaryContentText}</div>
          </div>
        </div>
      </div>
    </Section>
  );
};

About.displayName = 'About';
export default About;
