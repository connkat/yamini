import Image from 'next/image';
import {FC, memo, useCallback, useMemo, useState} from 'react';

import Section from 'components/Layout/Section';
import {PortfolioModal} from 'components/Sections/Portfolio';
import {PortfolioItem, portfolioItems, portfolioSection, SectionId} from 'data';

const Portfolio: FC = memo(() => {
  const {folderImage, backgroundImageSrc, windowBackgroundImage} = portfolioSection;
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = useCallback((item: PortfolioItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const resolveSrc = useMemo(() => {
    if (!backgroundImageSrc) return undefined;
    return typeof backgroundImageSrc === 'string' ? backgroundImageSrc : backgroundImageSrc.src;
  }, [backgroundImageSrc]);
  const style = useMemo<React.CSSProperties>(() => ({objectFit: 'contain'}), []);
  const windowStyle = useMemo<React.CSSProperties>(() => ({objectFit: 'cover'}), []);
  return (
    <Section className="" data-scrollable noPadding sectionId={SectionId.Portfolio}>
      <div
        className="bg-cover bg-center"
        style={backgroundImageSrc ? {backgroundImage: `url(${resolveSrc}`} : undefined}>
        <div className="relative flex min-h-screen items-center justify-center p-4 lg:px-0">
          <div className="window z-10 min-h-[50vh] max-h-[80vh] sm:min-w-[600px] sm:max-w-screen-lg sm:px-0">
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
                  {portfolioItems.map((item, index) => {
                    const {title, heroImage} = item;
                    return (
                      <div
                        className="flex p-2 items-center justify-center cursor-pointer"
                        key={`${title}-${index}`}
                        onClick={() => handleOpenModal(item)}>
                        <div className="field-row-stacked mb-2">
                          <div className="relative h-40 w-full overflow-hidden">
                            {heroImage && (
                              <div className="flex justify-center">
                                <div className="absolute inset-0">
                                  <Image
                                    alt={title}
                                    blurDataURL={
                                      typeof folderImage.src === 'string' ? folderImage.src : folderImage.src.src
                                    }
                                    className="w-full h-full"
                                    height={folderImage.imageHeight}
                                    placeholder="blur"
                                    src={folderImage.src}
                                    style={style}
                                    width={folderImage.imageWidth}
                                  />
                                </div>
                                <div className="relative inset-y-10">
                                  <Image
                                    alt={title}
                                    blurDataURL={typeof heroImage.src === 'string' ? heroImage.src : heroImage.src.src}
                                    className="z-100 w-16 h-16"
                                    height={heroImage.imageHeight}
                                    placeholder="blur"
                                    src={heroImage.src}
                                    style={style}
                                    width={heroImage.imageWidth}
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                          <label className="text-xl">{title}</label>
                        </div>
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
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;
