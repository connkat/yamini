import { useState } from 'react';

import { Clients, EducationItem, Section, SkillGroup, TimelineItem } from 'src/components';
import { SectionId } from 'src/data';

interface ResumeProps {
  workData:
    | {
        title: string;
        company: string;
        duration: string;
        order: number;
      }[]
    | null;
  skillsData:
    | {
        name: string;
        icon: any;
        skills: { name: string }[];
      }[]
    | null;
  clientsData:
    | {
        name: string;
        image: any;
        url?: string;
      }[]
    | null;
  educationData:
    | {
        title: string;
        school: string;
        date: string;
        major?: string;
        image: any;
      }[]
    | null;
}

const ResumeSection = ({ workData, skillsData, clientsData, educationData }: ResumeProps) => {
  const [activeTab, setActiveTab] = useState<'Work' | 'Skills' | 'Clients' | 'Education'>('Work');

  const workItems = workData || [];

  return (
    <Section className="gradient-bg-pastel p-0 md:py-8" sectionId={SectionId.Resume}>
      <div className="relative flex min-h-screen sm:max-h-screen items-center justify-center">
        <div className="window z-10 overflow-scroll mb-[3rem] w-[95%] max-w-screen-md h-[700px] sm:px-0">
          <div className="title-bar">
            <div className="title-bar-text p-1 lg:p-2 text-base sm:text-2xl">Resume</div>
          </div>
          <div className="p-2">
            <menu aria-label="Resume Sections" className="tabs" role="tablist">
              {['Work', 'Skills', 'Clients', 'Education'].map(tab => (
                <li
                  aria-controls={`${tab.toLowerCase()}-panel`}
                  aria-selected={activeTab === tab}
                  className={`first-line:tab ${activeTab === tab ? 'active' : ''}`}
                  id={`${tab.toLowerCase()}-tab`}
                  key={tab}
                  onClick={() => setActiveTab(tab as 'Work' | 'Skills' | 'Clients' | 'Education')}
                  role="tab">
                  <h2 className="p-2 sm:px-4 text-lg sm:text-3xl">{tab}</h2>
                </li>
              ))}
            </menu>
            <div aria-labelledby={`${activeTab.toLowerCase()}-tab`} className="window h-full" role="tabpanel">
              {activeTab === 'Work' && (
                <div aria-labelledby="work-tab" className="gap-y-4 p-2" id="work-panel" role="tabpanel">
                  <ul
                    className="tree-view h-[550px] overflow-scroll col-span-1 flex flex-col md:col-span-3"
                    data-scrollable>
                    <div className="grid grid-cols-1 gap-6 p-6 text-left">
                      {workItems.map((item, index) => (
                        <TimelineItem item={item} key={`${item.title}-${index}`} />
                      ))}
                    </div>
                  </ul>
                </div>
              )}
              {activeTab === 'Skills' && (
                <div aria-labelledby="skills-tab" className="gap-y-4 p-2" id="skills-panel" role="tabpanel">
                  <ul
                    className="tree-view h-[550px] overflow-scroll col-span-1 flex flex-col md:col-span-3"
                    data-scrollable>
                    <div className="pl-4">
                      {skillsData?.map((skillgroup, index) => (
                        <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
                      ))}
                    </div>
                  </ul>
                </div>
              )}
              {activeTab === 'Clients' && (
                <div aria-labelledby="clients-tab" className="gap-y-4 p-2" id="clients-panel" role="tabpanel">
                  <ul
                    className="tree-view h-[550px] overflow-scroll col-span-1 flex flex-col md:col-span-3"
                    data-scrollable>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                      {clientsData?.map((client, index) => <Clients client={client} key={`${client.name}-${index}`} />)}
                    </div>
                  </ul>
                </div>
              )}
              {activeTab === 'Education' && (
                <div aria-labelledby="education-tab" className="gap-y-4 p-2" id="education-panel" role="tabpanel">
                  <ul
                    className="tree-view h-[550px] overflow-scroll col-span-1 flex flex-col md:col-span-3"
                    data-scrollable>
                    <div className="flex flex-col py-12 h-full items-center justify-around">
                      {educationData?.map((item, index) => (
                        <EducationItem item={item} key={`${item.title}-${index}`} />
                      ))}
                    </div>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

ResumeSection.displayName = 'ResumeSection';
export default ResumeSection;
