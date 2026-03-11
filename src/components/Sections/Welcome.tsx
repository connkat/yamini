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
    <Section className="px-4" noPadding sectionId={SectionId.Welcome}>
      <div className="scanlines relative flex min-h-screen items-center justify-center p-8 sm:max-h-screen lg:px-0">
        <div className="window y2k-window z-10 mb-12 h-min sm:max-h-[90vh] sm:max-w-5xl sm:px-0">
          <div className="title-bar">
            <div className="title-bar-text p-1 lg:p-2 text-base sm:text-2xl">Welcome</div>
          </div>
          <div className="flex flex-col items-center gap-y-4 p-4 text-center sm:gap-y-6 lg:p-6">
            <div className="flex flex-row items-center gap-4">
              <div className="flex flex-col items-center gap-y-4 text-center sm:gap-y-6">
                <h1 className="metallic-text text-5xl font-bold sm:text-6xl">
                  {welcomeData?.title}
                  <span aria-hidden="true" className="blink-cursor ml-1">_</span>
                </h1>
                <h2 className="hidden text-3xl font-bold text-black sm:text-2xl md:block md:text-4xl">
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

            <h2 className="text-base font-bold text-black sm:text-xl md:hidden">{welcomeData?.subtitle}</h2>
            <p className="prose text-black sm:prose-lg md:prose-2xl">{welcomeData?.summary}</p>

            <div className="flex w-full justify-center gap-x-4">
              <a
                className="y2k-button flex gap-x-2 border-2 px-4 py-2 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-offset-2"
                href={resumeLink}
                rel="noopener noreferrer"
                target="_blank">
                Resume
                <ArrowDownTrayIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                className="y2k-button flex gap-x-2 border-2 px-4 py-2 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-offset-2"
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
