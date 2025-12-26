import Image from 'next/image';

import { urlFor } from 'sanity/lib/image';

interface EducationItem {
  title: string;
  school: string;
  date: string;
  major?: string;
  image: any;
}

const EducationItem = ({ item }: { item: EducationItem }) => {
  const { title, date, school, major, image } = item;
  const imageUrl = image ? urlFor(image).width(48).height(48).url() : null;

  return (
    <div className="flex flex-col last:pb-0 text-center justify-start items-start p-2 sm:p-4">
      <div className="flex flex-row items-center justify-center gap-x-2 sm:gap-x-4">
        {imageUrl && (
          <div className="relative h-8 w-8 md:h-10 md:w-10">
            <Image alt={title} className="" height={48} src={imageUrl} width={48} />
          </div>
        )}
        <div className="flex flex-col items-center sm:max-w-[300px]">
          <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
          {major && <p className="text-center font-bold sm:text-base">{major}</p>}
          <div className="flex-1 text-md sm:text-lg font-medium italic ">{school}</div>
          <div className="flex-1 text-md sm:text-lg ">{date}</div>
        </div>
        {imageUrl && (
          <div className="relative h-8 w-8 md:h-10 md:w-10">
            <Image alt={title} className="" height={48} src={imageUrl} width={48} />
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationItem;
