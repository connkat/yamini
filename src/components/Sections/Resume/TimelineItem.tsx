interface TimelineItem {
  title: string;
  duration: string;
  company: string;
}

const TimelineItem = ({ item }: { item: TimelineItem; left?: boolean }) => {
  const { title, duration, company } = item;
  return (
    <div className="flex gap-x-3 pb-4 last:pb-0">
      {/* pixelated bullet + line */}
      <div className="flex flex-col items-center pt-1">
        <div className="h-3 w-3 shrink-0 bg-indigo-600" style={{ imageRendering: 'pixelated' }} />
        <div className="mt-1 w-px flex-1 border-l-2 border-dashed border-indigo-300" />
      </div>

      {/* 98.css inset card */}
      <div className="field-row-stacked mb-2 w-full" style={{ border: '2px inset', padding: '6px 8px' }}>
        <h2 className="text-base font-bold sm:text-lg">{title}</h2>
        <div className="flex items-center gap-2 pt-1">
          <button className="text-xs sm:text-sm" style={{ cursor: 'default' }}>{company}</button>
          <span className="text-xs text-gray-500 sm:text-sm">{'// '}{duration}</span>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
