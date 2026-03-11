import Image from 'next/image';

import { urlFor } from 'sanity/lib/image';

interface Skill {
  name: string;
}

interface SkillGroup {
  name: string;
  icon?: any;
  skills: Skill[];
}

export const SkillGroup = ({ skillGroup }: { skillGroup: SkillGroup }) => {
  const { name, icon, skills } = skillGroup;
  const imageUrl = icon ? urlFor(icon).width(30).height(30).url() : null;

  return (
    <div className="field-row-stacked mb-3" style={{ border: '2px inset', padding: '6px 8px' }}>
      <div className="flex flex-row items-center gap-x-2 p-1 pb-2" style={{ borderBottom: '1px solid #888' }}>
        {imageUrl && <Image alt={name} className="-mt-0.5" height={24} src={imageUrl} width={24} />}
        <div className="text-base sm:text-lg font-bold">{name}</div>
      </div>
      <div className="flex flex-col pt-1">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
};

SkillGroup.displayName = 'SkillGroup';

export const Skill = ({ skill }: { skill: Skill }) => {
  const { name } = skill;

  return (
    <div className="flex items-center gap-x-2 py-0.5 px-1">
      <div className="h-2 w-2 shrink-0 bg-indigo-600" style={{ imageRendering: 'pixelated' }} />
      <span className="text-sm sm:text-base">{name}</span>
    </div>
  );
};

Skill.displayName = 'Skill';
