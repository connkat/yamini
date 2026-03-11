import Image from 'next/image';

import { urlFor } from 'sanity/lib/image';

interface Clients {
  name: string;
  image: any;
  url?: string;
}

export const Clients = ({ client }: { client: Clients }) => {
  const { name, image, url } = client;

  const imageUrl = image ? urlFor(image).fit('max').width(400).url() : null;

  if (!imageUrl) return null;

  const imageElement = (
    <div className="field-row-stacked" style={{ border: '2px inset', padding: '4px' }}>
      <div className="relative w-full aspect-square flex items-center justify-center p-4">
        <div className="relative w-full h-full">
          <Image
            alt={name}
            className="object-contain"
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
            src={imageUrl}
          />
        </div>
      </div>
      <div className="text-center text-xs sm:text-sm px-1 pb-1" style={{ borderTop: '1px solid #888' }}>{name}</div>
    </div>
  );

  return url ? (
    <a href={url} rel="noopener noreferrer" style={{ cursor: 'default' }} target="_blank">
      {imageElement}
    </a>
  ) : (
    imageElement
  );
};

Clients.displayName = 'Clients';
