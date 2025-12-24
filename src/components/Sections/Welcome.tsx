import Image from 'next/image';
import { useMemo } from 'react';

import { heroData, SectionId } from '../../data/data';
import Section from '../Layout/Section';

interface HeroProps {
  welcomeData: {
    title: string;
    subtitle: string;
    summary: string;
    resumeLink: string;
  } | null;
}

const Welcome = ({ welcomeData }: HeroProps) => {
  const { actions, avatar } = heroData;

  // Use Sanity data if available, otherwise fall back to static data
  const name = welcomeData?.title || heroData.name;
  const subtitle = welcomeData?.subtitle || heroData.subtitle;
  const description = welcomeData?.summary ? (
    <p className="text-black-200 prose sm:prose-lg md:prose-2xl">{welcomeData.summary}</p>
  ) : (
    heroData.description
  );
  const resolveSrc = useMemo(() => {
    if (!avatar) return undefined;
    return typeof avatar === 'string' ? avatar : avatar.src;
  }, [avatar]);
  const style = useMemo<React.CSSProperties>(() => ({ objectFit: 'contain' }), []);

  return (
    <Section className="gradient-bg-pastel px-4" noPadding sectionId={SectionId.Hero}>
      <div className="relative flex min-h-screen sm:max-h-screen items-center justify-center p-8 lg:px-0">
        <div className="window z-10 h-min sm:max-h-[90vh] mb-[3rem] sm:max-w-screen-lg sm:px-0">
          <div className="title-bar">
            <div className="title-bar-text p-1 lg:p-2 text-base sm:text-2xl">Welcome</div>
          </div>
          <div className="flex flex-col items-center gap-y-4 sm:gap-y-6 p-4 lg:p-6 text-center">
            <div className="flex items-center flex-row">
              <div className="flex flex-col items-center gap-y-4 sm:gap-y-6 p-4 lg:p-6 text-center">
                <h1 className="text-5xl font-bold text-black sm:text-6xl">{name}</h1>
                <h2 className="hidden md:block text-3xl font-bold text-black sm:text-2xl md:text-4xl">{subtitle}</h2>
              </div>
              <ul className="tree-view max-h-[40vh]">
                <Image
                  alt="avatar"
                  className="max-h-[30vh]"
                  height={1100}
                  src={resolveSrc || '/default-profile.png'}
                  style={style}
                  width={400}
                />
              </ul>
            </div>

            <h2 className="md:hidden text-base font-bold text-black sm:text-xl">{subtitle}</h2>

            {description}
            <div className="flex w-full justify-center gap-x-4">
              {actions.map(({ href, text, Icon }) => {
                // Use resumeLink from Sanity if it's a resume button
                const link = text === 'Resume' && welcomeData?.resumeLink ? welcomeData.resumeLink : href;
                return (
                  <button key={text}>
                    <a
                      className="flex gap-x-2 bg-none px-4 py-2 text-lg font-medium text-black hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2"
                      href={link}
                      target="_blank">
                      {text}
                      {Icon && <Icon className="h-5 w-5 text-black sm:h-6 sm:w-6" />}
                    </a>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

Welcome.displayName = 'Welcome';
export default Welcome;
