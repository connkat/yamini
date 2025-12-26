import type { TimelineItem } from 'data/dataDef';

const TimelineItem = ({ item }: { item: TimelineItem; left?: boolean }) => {
  const { title, duration, company, order } = item;
  return (
    <div className="flex flex-col text-left last:pb-0">
      <div className="flex flex-col sm:max-w-[250px]">
        <h2 className="text-base sm:text-xl font-bold">{title}</h2>
        <div className="flex-1 text-sm sm:text-lg font-medium italic sm:flex-none">{company}</div>
        <div className="flex-1 text-md sm:text-lg sm:flex-none">{duration}</div>
      </div>
    </div>
  );
};

export default TimelineItem;
