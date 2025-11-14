import Image from 'next/image';
import {FC, memo, useMemo} from 'react';

import type {EducationItem} from '../../../data/dataDef';

const EducationItem: FC<{item: EducationItem}> = memo(({item}) => {
  const {title, date, location, content, image} = item;
  const {src: imageSrc, imageWidth, imageHeight} = image || {};
  const resolveSrc = useMemo(() => {
    if (!imageSrc) return undefined;
    return typeof imageSrc === 'string' ? imageSrc : imageSrc.src;
  }, [imageSrc]);

  return (
    <div className="flex flex-col last:pb-0 text-center justify-start items-start p-2 sm:p-4">
      <div className="flex flex-row items-center justify-center gap-x-2 sm:gap-x-4">
        {resolveSrc && (
          <div className="relative h-8 w-8 md:h-10 md:w-10">
            <Image alt={title} className="" height={imageHeight} src={resolveSrc} width={imageWidth} />
          </div>
        )}
        <div className="flex flex-col items-center sm:max-w-[300px]">
          <h2 className="text-base sm:text-xl font-bold">{title}</h2>
          <div className="flex-1 text-md sm:text-lg font-medium italic ">{location}</div>
          <div className="flex-1 text-md sm:text-lg ">{date}</div>
          {content && content}
        </div>
        {resolveSrc && (
          <div className="relative h-8 w-8 md:h-10 md:w-10">
            <Image alt={title} className="" height={imageHeight} src={resolveSrc} width={imageWidth} />
          </div>
        )}
      </div>
    </div>
  );
});

EducationItem.displayName = 'EducationItem';
export default EducationItem;
