import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

import { urlFor } from 'sanity/lib/image';
import { Section } from 'src/components';
import { SectionId } from 'src/data';

interface WelcomeProps {
  welcomeData: {
    title: string;
    subtitle: string;
    summary: string;
    resumeLink: string;
    image: any;
  } | null;
}

const Welcome = ({ welcomeData }: WelcomeProps) => {
  const imageUrl = welcomeData?.image ? urlFor(welcomeData.image).height(1100).url() : null;
  const resumeLink = welcomeData?.resumeLink || '/Yamini_Coen_Resume.pdf';

  return (
    <Section className="gradient-bg-pastel px-4" noPadding sectionId={SectionId.Welcome}>
      <div className="relative flex min-h-screen sm:max-h-screen items-center justify-center p-8 lg:px-0">
        <div className="window z-10 h-min sm:max-h-[90vh] mb-[3rem] sm:max-w-screen-lg sm:px-0">
          <div className="title-bar">
            <div className="title-bar-text p-1 lg:p-2 text-base sm:text-2xl">Welcome</div>
          </div>
          <div className="flex flex-col items-center gap-y-4 sm:gap-y-6 p-4 lg:p-6 text-center">
            <div className="flex items-center flex-row gap-4">
              <div className="flex flex-col items-center gap-y-4 sm:gap-y-6 text-center">
                <h1 className="text-5xl font-bold text-black sm:text-6xl">{welcomeData?.title}</h1>
                <h2 className="hidden md:block text-3xl font-bold text-black sm:text-2xl md:text-4xl">
                  {welcomeData?.subtitle}
                </h2>
              </div>
              {imageUrl && (
                <Image
                  alt="avatar"
                  className="max-h-[30vh]"
                  height={1100}
                  src={imageUrl}
                  style={{ objectFit: 'contain' }}
                  width={400}
                />
              )}
            </div>

            <h2 className="md:hidden text-base font-bold text-black sm:text-xl">{welcomeData?.subtitle}</h2>
            <p className="text-black-200 prose sm:prose-lg md:prose-2xl">{welcomeData?.summary}</p>

            <div className="flex w-full justify-center gap-x-4">
              <a
                className="flex gap-x-2 border-2 border-black px-4 py-2 text-lg font-medium text-black hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2"
                href={resumeLink}
                rel="noopener noreferrer"
                target="_blank">
                Resume
                <ArrowDownTrayIcon className="h-5 w-5 text-black sm:h-6 sm:w-6" />
              </a>
              <a
                className="flex gap-x-2 border-2 border-black px-4 py-2 text-lg font-medium text-black hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2"
                href={`#${SectionId.Contact}`}>
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

Welcome.displayName = 'Welcome';
export default Welcome;
