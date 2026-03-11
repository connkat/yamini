import { useEffect, useRef, useState } from 'react';

import { urlFor } from 'sanity/lib/image';
import { SanityPortfolioItem } from 'src/data';

interface PortfolioModalProps {
  item: SanityPortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const PortfolioModal = ({ item, isOpen, onClose }: PortfolioModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const imageModalRef = useRef<HTMLDivElement>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };

  const handleImageModalBackdropClick = (e: React.MouseEvent) => {
    if (e.target === imageModalRef.current) {
      setSelectedImageIndex(null);
    }
  };

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleFullImageClick = () => {
    if (!item?.screenshotImages?.length) return;
    if (item.screenshotImages.length === 1) {
      setSelectedImageIndex(null);
    } else {
      setSelectedImageIndex(prevIndex => {
        if (prevIndex === null) return 0;
        return (prevIndex + 1) % item.screenshotImages!.length;
      });
    }
  };

  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
      };
    }
    return;
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setSelectedImageIndex(null);
    }
  }, [isOpen]);

  if (!isOpen || !item) return null;

  const screenshots = item.screenshotImages ?? [];
  const selectedImage = selectedImageIndex !== null ? screenshots[selectedImageIndex] : null;
  const selectedImageUrl = selectedImage ? urlFor(selectedImage).url() : null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        onClick={handleBackdropClick}
        ref={modalRef}>
        <div className="window max-w-5xl w-11/12 max-h-[85vh]">
          <div className="title-bar">
            <div className="title-bar-text p-1 lg:p-2 text-base sm:text-xl">
              <label className="text-xl font-bold">{item.pageTitle}</label>
            </div>
            <div className="title-bar-controls p-2">
              <button className="h-7 w-7 text-center font-bold p-1 text-xl" onClick={onClose}>
                x
              </button>
            </div>
          </div>
          <div className="window-body h-[calc(85vh-38px)]">
            <ul
              className="tree-view h-[96%] overflow-scroll scrollbar-thin gap-4"
              data-scrollable
              style={{ overflowY: 'scroll' }}>
              <div className="flex flex-col sm:flex-none sm:grid sm:grid-cols-3">
                <div className="field-row-stacked p-2">
                  {item.logo && (
                    <img
                      alt={item.pageTitle}
                      className="mb-4 max-h-16 object-contain"
                      src={urlFor(item.logo).height(64).url()}
                    />
                  )}
                  <p className="mb-2 text-2xl font-bold">{item.pageTitle}</p>
                  <p className="mb-4 text-xl">{item.description}</p>
                  <p className="mb-2 text-xl font-bold">{item.deliverablesTitle}</p>
                  <ul className="list-disc mb-4">
                    {item.deliverables.map((d, i) => (
                      <li className="text-lg -mt-3 mb-3" key={i}>
                        {d}
                      </li>
                    ))}
                  </ul>
                  {item.results && (
                    <>
                      <p className="mb-2 text-xl font-bold">Results</p>
                      <p className="mb-4 text-xl">{item.results}</p>
                    </>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <div className="items-center justify-center flex flex-col gap-4">
                    {screenshots.map((image, index) => {
                      const imgUrl = urlFor(image).width(300).url();
                      return (
                        <div
                          className="relative max-w-xs cursor-pointer"
                          key={index}
                          onClick={() => handleThumbnailClick(index)}>
                          <img alt={`screenshot-${index}`} className="w-full h-auto object-contain" src={imgUrl} />
                        </div>
                      );
                    })}
                    {(item.youtubeEmbeds ?? []).map((embedCode, index) => (
                      <div
                        className="max-w-75 sm:max-w-112.5 [&_iframe]:max-w-full"
                        dangerouslySetInnerHTML={{ __html: embedCode }}
                        key={`video-${index}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>

      {selectedImageUrl && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/80"
          onClick={handleImageModalBackdropClick}
          ref={imageModalRef}>
          <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center">
            <img
              alt="screenshot-fullsize"
              className="cursor-pointer object-contain max-w-[90vw] max-h-[90vh]"
              onClick={handleFullImageClick}
              src={selectedImageUrl}
            />
            {screenshots.length > 1 && (
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded">
                {selectedImageIndex! + 1} / {screenshots.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default PortfolioModal;
