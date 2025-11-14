import {FC, memo, PropsWithChildren} from 'react';

const ResumeSection: FC<PropsWithChildren<{title: string}>> = memo(({children}) => {
  return (
    <div className="gap-y-4 p-2">
      <ul className="tree-view h-[550px] overflow-scroll col-span-1 flex flex-col md:col-span-3" data-scrollable>
        {children}
      </ul>
    </div>
  );
});

ResumeSection.displayName = 'ResumeSection';
export default ResumeSection;
