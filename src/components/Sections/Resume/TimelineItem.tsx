import {FC, memo} from 'react';

import type {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem; left?: boolean}> = memo(({item}) => {
  const {title, date, location, content} = item;
  return (
    <div className="flex flex-col text-center last:pb-0 md:text-left">
      <div className="flex flex-col sm:max-w-[250px]">
        <h2 className="text-base sm:text-xl font-bold sm:text-center">{title}</h2>
        <div className="flex-1 text-sm sm:text-lg font-medium italic sm:flex-none sm:text-center">{location}</div>
        <div className="flex-1 text-md sm:text-lg sm:flex-none sm:text-center">{date}</div>
      </div>
      {content && content}
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
