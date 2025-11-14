import Image from 'next/image';

import {Skill as SkillType, SkillGroup as SkillGroupType} from 'data/dataDef';

export const SkillGroup = ({skillGroup}: {skillGroup: SkillGroupType}) => {
  const {name, skills} = skillGroup;
  return (
    <>
      <div className="text-base font-bold p-2">{name}</div>
      <div className="flex flex-col">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </>
  );
};

SkillGroup.displayName = 'SkillGroup';

export const Skill = ({skill}: {skill: SkillType}) => {
  const {name, icon} = skill;
  const resolveSrc = !icon ? undefined : typeof icon === 'string' ? icon : icon.src;

  return (
    <ul className="flex flex-col">
      <li className="flex flex-row items-start m-1 p-x-2 gap-x-2 sm:gap-x-4">
        {resolveSrc && <Image alt={name} className="mt-[-2px]" height={30} src={resolveSrc} width={30} />}
        <h4 className="text-base sm:text-lg">{name}</h4>
      </li>
    </ul>
  );
};

Skill.displayName = 'Skill';
