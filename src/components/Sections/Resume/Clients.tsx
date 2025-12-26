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
    <div className="relative w-full aspect-square flex items-center justify-center p-6">
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
  );

  return url ? (
    <a className="block hover:opacity-75 transition-opacity" href={url} rel="noopener noreferrer" target="_blank">
      {imageElement}
    </a>
  ) : (
    imageElement
  );
};

Clients.displayName = 'Clients';
