import classNames from 'classnames';
import { useState } from 'react';

import { Section } from 'src/components';
import { SectionId } from 'src/data';
import { useInterval } from 'src/hooks';

interface Testimonial {
  name: string;
  text: string;
}

interface TestimonialsProps {
  testimonialsData: Testimonial[] | null;
}

const Testimonials = ({ testimonialsData }: TestimonialsProps) => {
  const testimonials = testimonialsData || [];
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex(current => (current + 1 === testimonials.length ? 0 : current + 1));
  };

  useInterval(next, 10000);

  if (!testimonials.length) {
    return null;
  }

  const activeTestimonial = testimonials[activeIndex];

  return (
    <Section noPadding sectionId={SectionId.Testimonials}>
      <div className="relative flex min-h-screen sm:max-h-screen items-center justify-center p-8 lg:px-0">
          <div className="window y2k-window z-10 h-auto min-h-fit max-w-[90vw] sm:max-h-[90vh] mb-12 sm:max-w-3xl sm:px-0">
            <div className="title-bar">
              <div className="title-bar-text p-1 lg:p-2 text-base sm:text-2xl">Testimonials</div>
            </div>
            <div className="flex flex-col justify-between p-4 lg:p-6 text-left">
              <TestimonialItem isActive key={`${activeTestimonial?.name}`} testimonial={activeTestimonial} />

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
    </Section>
  );
};

const TestimonialItem = ({
  testimonial: { text, name },
  isActive,
}: {
  testimonial: Testimonial;
  isActive: boolean;
}) => (
  <ul
    className={classNames(
      'tree-view min-h-max flex h-[80%] snap-start snap-always flex-col items-start gap-y-4 p-4 transition-opacity duration-1000 sm:flex-row sm:gap-x-6',
      isActive ? 'opacity-100' : 'opacity-0',
    )}>
    <div className="flex flex-col p-6 gap-y-4">
      <p className="prose prose-sm font-medium italic text-black sm:prose-xl">{text}</p>
      <p className="text-xs italic text-black sm:text-sm md:text-base lg:text-xl">-- {name}</p>
    </div>
  </ul>
);

export default Testimonials;
