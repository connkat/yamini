// import Image from 'next/image';
import Image from 'next/image';
import {FC, memo, useMemo} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Hero: FC = memo(() => {
  const {name, subtitle, description, actions, avatar} = heroData;
  const resolveSrc = useMemo(() => {
    if (!avatar) return undefined;
    return typeof avatar === 'string' ? avatar : avatar.src;
  }, [avatar]);
  const style = useMemo<React.CSSProperties>(() => ({objectFit: 'contain'}), []);

  return (
    <Section
      className="bg-background px-4 bg-gradient-to-br from-green via-10% via-gradient1 via-30% via-gradient2 via-50% via-gradient3 via-70% via-gradient4 to-90% to-gradient5"
      noPadding
      sectionId={SectionId.Hero}>
      <div className="relative flex min-h-screen sm:max-h-screen items-center justify-center p-8 lg:px-0">
        <div className="window z-10 h-min sm:max-h-[90vh] mb-[3rem] sm:max-w-screen-lg sm:px-0">
          <div className="title-bar">
            <div className="title-bar-text p-1 lg:p-2 text-base sm:text-2xl">Welcome</div>
          </div>
          <div className="flex flex-col items-center gap-y-4 sm:gap-y-6 p-4 lg:p-6 text-center">
            <div className="flex items-center flex-row">
              <div className="flex flex-col items-center gap-y-4 sm:gap-y-6 p-4 lg:p-6 text-center">
                <h1 className="text-5xl font-bold text-black sm:text-6xl">{name}</h1>
                <h2 className="hidden md:block text-base font-bold text-black sm:text-3xl">{subtitle}</h2>
              </div>
              <ul className="tree-view max-h-[40vh]">
                <Image
                  alt="avatar"
                  className="max-h-[30vh]"
                  height={1100}
                  src={resolveSrc || '/default-profile.png'}
                  style={style}
                  width={1000}
                />
              </ul>
            </div>

            <h2 className="md:hidden text-base font-bold text-black sm:text-4xl">{subtitle}</h2>

            {description}
            <div className="flex w-full justify-center gap-x-4">
              {actions.map(({href, text, Icon}) => (
                <button key={text}>
                  <a
                    className="flex gap-x-2 bg-none px-4 py-2 text-lg font-medium text-black hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2"
                    href={href}
                    target="_blank">
                    {text}
                    {Icon && <Icon className="h-5 w-5 text-black sm:h-6 sm:w-6" />}
                  </a>
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="absolute inset-x-0 bottom-14 flex justify-center">
          <a
            className=" p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.About}`}>
            <Image alt="double-down" height={40} src={resolveSrc ?? ""} width={40}/>
          </a>
        </div> */}
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
