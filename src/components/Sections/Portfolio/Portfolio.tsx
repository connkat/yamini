import Image from 'next/image';
import { useMemo, useState } from 'react';

import { urlFor } from 'sanity/lib/image';
import { PortfolioModal, Section } from 'src/components';
import { portfolioSection, SanityPortfolioItem, SectionId } from 'src/data';

interface PortfolioProps {
  portfolioData: SanityPortfolioItem[] | null;
}

const Portfolio = ({ portfolioData }: PortfolioProps) => {
  const { backgroundImageSrc, windowBackgroundImage, folderImage } = portfolioSection;
  const [selectedItem, setSelectedItem] = useState<SanityPortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (item: SanityPortfolioItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const resolveSrc = useMemo(() => {
    if (!backgroundImageSrc) return undefined;
    return typeof backgroundImageSrc === 'string' ? backgroundImageSrc : backgroundImageSrc.src;
  }, [backgroundImageSrc]);

  const windowStyle: React.CSSProperties = { objectFit: 'cover' };

  return (
    <Section className="" data-scrollable noPadding sectionId={SectionId.Portfolio}>
      <div
        className="bg-cover bg-center"
        style={backgroundImageSrc ? { backgroundImage: `url(${resolveSrc}` } : undefined}>
        <div className="relative flex min-h-screen items-center justify-center p-4 lg:px-0">
          <div className="window z-10 min-h-[50vh] max-h-[80vh] sm:min-w-150 sm:max-w-5xl sm:px-0">
            <div className="title-bar">
              <div className="title-bar-text p-1 lg:p-2 text-base sm:text-2xl">Portfolio</div>
            </div>
            <div className="window-body h-max relative items-center">
              <Image
                alt="folder-image"
                blurDataURL={
                  typeof windowBackgroundImage.src === 'string'
                    ? windowBackgroundImage.src
                    : windowBackgroundImage.src.src
                }
                className="absolute inset-y-8 opacity-20"
                height={windowBackgroundImage.imageHeight}
                placeholder="blur"
                src={windowBackgroundImage.src}
                style={windowStyle}
              />
              <ul className="flex flex-col h-fit gap-y-4 tree-view">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-scroll grid-rows-2" data-scrollable>
                  {(portfolioData ?? []).map((item, index) => {
                    const { title, folderImage: itemFolderImage } = item;
                    const overlayUrl = itemFolderImage ? urlFor(itemFolderImage).width(96).height(96).url() : null;
                    const staticFolderSrc = typeof folderImage.src === 'string' ? folderImage.src : folderImage.src.src;
                    const style: React.CSSProperties = { objectFit: 'contain' };
                    return (
                      <div
                        className="flex flex-col p-2 items-center justify-center cursor-pointer"
                        key={`${title}-${index}`}
                        onClick={() => handleOpenModal(item)}>
                        <div className="relative h-56 w-48">
                          <div className="absolute inset-0">
                            <Image
                              alt={title}
                              blurDataURL={staticFolderSrc}
                              className="w-full h-full"
                              height={folderImage.imageHeight}
                              placeholder="blur"
                              src={folderImage.src}
                              style={style}
                              width={folderImage.imageWidth}
                            />
                          </div>
                          {overlayUrl && (
                            <div className="absolute inset-0 flex items-center justify-center mt-4">
                              <img alt={title} className="w-24 h-24 object-contain" src={overlayUrl} />
                            </div>
                          )}
                        </div>
                        <p className="text-2xl mt-2 text-center">{title}</p>
                      </div>
                    );
                  })}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <PortfolioModal isOpen={isModalOpen} item={selectedItem} onClose={handleCloseModal} />
    </Section>
  );
};
export default Portfolio;
