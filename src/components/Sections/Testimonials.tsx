import classNames from 'classnames';
import {FC, memo, useCallback, useEffect, useMemo, useState} from 'react';

import {SectionId, testimonial} from '../../data/data';
import {Testimonial as TestimonialDef} from '../../data/dataDef';
import useInterval from '../../hooks/useInterval';
import Section from '../Layout/Section';

const Testimonials: FC = memo(() => {
  const {imageSrc, testimonials} = testimonial;
  const resolveSrc = useMemo(() => {
    if (!imageSrc) return undefined;
    return typeof imageSrc === 'string' ? imageSrc : imageSrc.src;
  }, [imageSrc]);

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeTestimonial, setActiveTestimonial] = useState<TestimonialDef | null>(testimonials[0]);
  useEffect(() => {
    setActiveTestimonial(testimonials[activeIndex]);
  }, [activeIndex, testimonials]);

  const next = useCallback(() => {
    if (activeIndex + 1 === testimonials.length) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  }, [activeIndex, testimonials.length]);

  useInterval(next, 10000);

  // If no testimonials, don't render the section
  if (!testimonials.length) {
    return null;
  }

  return (
    <Section className="bg-clouds" noPadding sectionId={SectionId.Testimonials}>
      <div className="bg-cover bg-center" style={imageSrc ? {backgroundImage: `url(${resolveSrc})`} : undefined}>
        <div className="relative flex min-h-screen sm:max-h-screen items-center justify-center p-8 lg:px-0">
          <div className="window z-10 h-[400px] max-w-[90vw] sm:max-h-[90vh] mb-[3rem] sm:max-w-screen-md  sm:px-0">
            <div className="title-bar">
              <div className="title-bar-text p-1 lg:p-2 text-base sm:text-2xl">Testimonials</div>
            </div>
            <div className="flex flex-col h-[90%] justify-between p-4 lg:p-6 text-left">
              {activeTestimonial && (
                <Testimonial isActive key={`${activeTestimonial.name}`} testimonial={activeTestimonial} />
              )}

              <div className="flex flex-row justify-around items-center p-2 sm:p-4">
                {[...Array(testimonials.length)].map((_, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <button
                      className={classNames(
                        'h-1 w-2 rounded-full bg-gray-300 transition-all duration-500 sm:h-2 sm:w-2',
                        isActive ? 'scale-75 opacity-100' : 'scale-50 opacity-60',
                      )}
                      disabled={isActive}
                      key={`select-button-${index}`}
                      onClick={() => setActiveIndex(index)}>
                      *
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

const Testimonial: FC<{testimonial: TestimonialDef; isActive: boolean}> = memo(
  ({testimonial: {text, name}, isActive}) => (
    <ul
      className={classNames(
        'tree-view min-h-max flex h-[80%] snap-start snap-always flex-col items-start gap-y-4 p-4 transition-opacity duration-1000 sm:flex-row sm:gap-x-6',
        isActive ? 'opacity-100' : 'opacity-0',
      )}>
      <div className="flex flex-col p-2 gap-y-4">
        <p className="prose prose-sm font-medium italic text-black sm:prose-xl">{text}</p>
        <p className="text-xs italic text-black sm:text-sm md:text-base lg:text-xl">-- {name}</p>
      </div>
    </ul>
  ),
);

export default Testimonials;
