import Image from 'next/image';
import React, {FC, memo, useMemo, useState} from 'react';

import {resumeData, SectionId} from '../../../data/data';
import Section from '../../Layout/Section';

import EducationItem from './EducationItem';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  const [activeTab, setActiveTab] = useState<'Work' | 'Skills' | 'Clients' | 'Education'>('Work');
  const {education, experience, skills, clients, timelineImageSrc} = resumeData;

  const resolveSrc = useMemo(() => {
    if (!timelineImageSrc) return undefined;
    return typeof timelineImageSrc === 'string' ? timelineImageSrc : timelineImageSrc.src;
  }, [timelineImageSrc]);
  return (
    <Section
      className="bg-background p-0 bg-gradient-to-br from-green via-10% via-gradient1 via-30% via-gradient2 via-50% via-gradient3 via-70% via-gradient4 to-90% to-gradient5 md:py-8"
      sectionId={SectionId.Resume}>
      <div className="relative flex min-h-screen sm:max-h-screen items-center justify-center">
        <div className="window z-10 overflow-scroll mb-[3rem] w-[95%] max-w-screen-md h-[700px] sm:px-0">
          <div className="title-bar">
            <div className="title-bar-text p-1 lg:p-2 text-base sm:text-2xl">Resume</div>
          </div>
          <div className="p-2">
            {/* Tab Navigation */}
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
            {/* Tab Content */}
            <div aria-labelledby={`${activeTab.toLowerCase()}-tab`} className="window h-full" role="tabpanel">
              {activeTab === 'Work' && (
                <div aria-labelledby="work-tab" id="work-panel" role="tabpanel">
                  <ResumeSection title="Work">
                    <div className="flex flex-row p-6 gap-y-2 justify-center items-stretch">
                      <div className="hidden sm:flex flex-col items-center space-y-20">
                        {experience.map(
                          (item, index) =>
                            index % 2 === 0 && <TimelineItem item={item} key={`${item.title}-${index}`} />,
                        )}
                      </div>
                      <Image
                        alt="work-image"
                        className="relative object-cover"
                        height={400}
                        src={resolveSrc || '/default-image-path.jpg'}
                        width={56}
                      />
                      <div className="flex flex-col sm:hidden gap-y-4">
                        {experience.map((item, index) => (
                          <TimelineItem item={item} key={`${item.title}-${index}`} />
                        ))}
                      </div>
                      <div className="hidden sm:flex flex-col items-center mt-20 space-y-20">
                        {experience.map(
                          (item, index) =>
                            index % 2 === 1 && <TimelineItem item={item} key={`${item.title}-${index}`} />,
                        )}
                      </div>
                    </div>
                  </ResumeSection>
                </div>
              )}
              {activeTab === 'Skills' && (
                <div aria-labelledby="skills-tab" id="skills-panel" role="tabpanel">
                  <ResumeSection title="Skills">
                    <div className="pl-4">
                      {skills.map((skillgroup, index) => (
                        <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
                      ))}
                    </div>
                  </ResumeSection>
                </div>
              )}
              {activeTab === 'Clients' && (
                <div aria-labelledby="clients-tab" id="clients-panel" role="tabpanel">
                  <ResumeSection title="Clients">
                    <div className="flex flex-row flex-wrap items-center justify-around p-6">
                      {clients.map(({title, image, imageHeight, imageWidth}) => (
                        <div className="position-relative max-w-[100px] sm:max-w-[175px]" key={title}>
                          <Image alt={title} height={imageHeight} src={image} width={imageWidth} />
                        </div>
                      ))}
                    </div>
                  </ResumeSection>
                </div>
              )}
              {activeTab === 'Education' && (
                <div aria-labelledby="education-tab" id="education-panel" role="tabpanel">
                  <ResumeSection title="Education">
                    <div className="flex flex-col py-12 h-full items-center justify-around">
                      {education.map((item, index) => (
                        <EducationItem item={item} key={`${item.title}-${index}`} />
                      ))}
                    </div>
                  </ResumeSection>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
