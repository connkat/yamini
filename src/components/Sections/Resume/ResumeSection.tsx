import { ReactNode } from 'react';

const ResumeSection = ({ children }: { children: ReactNode }) => {
  return (
    <div className="gap-y-4 p-2">
      <ul className="tree-view h-[550px] overflow-scroll col-span-1 flex flex-col md:col-span-3" data-scrollable>
        {children}
      </ul>
    </div>
  );
};

ResumeSection.displayName = 'ResumeSection';
export default ResumeSection;
