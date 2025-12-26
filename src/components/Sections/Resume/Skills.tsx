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
    <>
      <div className="flex flex-row items-center gap-x-2 sm:gap-x-4 p-2">
        {imageUrl && <Image alt={name} className="mt-[-2px]" height={30} src={imageUrl} width={30} />}
        <div className="text-xl sm:text-2xl font-bold">{name}</div>
      </div>
      <div className="flex flex-col">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </>
  );
};

SkillGroup.displayName = 'SkillGroup';

export const Skill = ({ skill }: { skill: Skill }) => {
  const { name } = skill;

  return (
    <ul className="flex flex-col">
      <li className="flex flex-row items-start m-1 p-x-2">
        <p className="text-sm sm:text-base">{name}</p>
      </li>
    </ul>
  );
};

Skill.displayName = 'Skill';
