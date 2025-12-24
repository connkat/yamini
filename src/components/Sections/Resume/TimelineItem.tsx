import type { TimelineItem } from 'data/dataDef';

const TimelineItem = ({ item }: { item: TimelineItem; left?: boolean }) => {
  const { title, date, location, content } = item;
  return (
    <div className="flex flex-col text-left last:pb-0">
      <div className="flex flex-col sm:max-w-[250px]">
        <h2 className="text-base sm:text-xl font-bold">{title}</h2>
        <div className="flex-1 text-sm sm:text-lg font-medium italic sm:flex-none">{location}</div>
        <div className="flex-1 text-md sm:text-lg sm:flex-none">{date}</div>
      </div>
      {content && content}
    </div>
  );
};

export default TimelineItem;
