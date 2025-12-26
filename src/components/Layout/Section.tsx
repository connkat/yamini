import classNames from 'classnames';
import { PropsWithChildren } from 'react';

import { SectionId } from 'src/data';

const Section = ({
  children,
  sectionId,
  noPadding = false,
  className,
}: PropsWithChildren<{ sectionId: SectionId; sectionTitle?: string; noPadding?: boolean; className?: string }>) => {
  return (
    <section className={classNames(className, { 'px-4 py-16 md:py-24 lg:px-8': !noPadding })} id={sectionId}>
      <div className={classNames({ 'mx-auto max-w-screen-lg': !noPadding })}>{children}</div>
    </section>
  );
};

export default Section;
