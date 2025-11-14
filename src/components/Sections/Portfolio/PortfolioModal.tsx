import Image from 'next/image';
import {cloneElement, FC, memo, useCallback, useEffect, useMemo, useRef, useState} from 'react';

import {PortfolioItem} from 'data';

interface PortfolioModalProps {
  item: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const PortfolioModal: FC<PortfolioModalProps> = memo(({item, isOpen, onClose}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const imageModalRef = useRef<HTMLDivElement>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === modalRef.current) {
        onClose();
      }
    },
    [onClose],
  );

  const handleImageModalBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === imageModalRef.current) {
      setSelectedImageIndex(null);
    }
  }, []);

  const handleThumbnailClick = useCallback((index: number) => {
    setSelectedImageIndex(index);
  }, []);

  const handleFullImageClick = useCallback(() => {
    if (!item || !item.images.length) return;

    if (item.images.length === 1) {
      // If only one image, close the modal
      setSelectedImageIndex(null);
    } else {
      // Cycle to next image
      setSelectedImageIndex(prevIndex => {
        if (prevIndex === null) return 0;
        return (prevIndex + 1) % item.images.length;
      });
    }
  }, [item]);

  const imageStyle = useMemo(() => ({objectFit: 'contain' as const}), []);
  const modalImageStyle = useMemo(() => ({maxWidth: '90vw', maxHeight: '90vh', width: 'auto', height: 'auto'}), []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Store the original body overflow style
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;

      // Calculate scrollbar width to prevent layout shift
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      // Add padding right to compensate for scrollbar disappearance
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      // Prevent scrolling on the main body
      document.body.style.overflow = 'hidden';

      // Cleanup function to restore original styles
      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
      };
    }
    return;
  }, [isOpen]);

  // Close image modal when main modal closes
  useEffect(() => {
    if (!isOpen) {
      setSelectedImageIndex(null);
    }
  }, [isOpen]);

  if (!isOpen || !item) return null;

  const selectedImage = selectedImageIndex !== null ? item.images[selectedImageIndex] : null;
  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        onClick={handleBackdropClick}
        ref={modalRef}>
        <div className="window max-w-screen-lg w-11/12 max-h-[85vh]">
          <div className="title-bar">
            <div className="title-bar-text p-1 lg:p-2 text-base sm:text-xl">
              <label className="text-xl font-bold">{item.title}</label>
            </div>
            <div className="title-bar-controls p-2">
              <button className="h-7 w-7 text-center font-bold p-1 text-xl" onClick={onClose}>
                x
              </button>
            </div>
          </div>
          {/* Make only the window-body scrollable */}
          <div className="window-body h-[calc(85vh-38px)]">
            <ul
              className="tree-view h-[96%] overflow-scroll scrollbar-thin gap-4"
              data-scrollable
              style={{overflowY: 'scroll'}}>
              <div className="flex flex-col sm:flex-none sm:grid sm:grid-cols-3">
                <div className="field-row-stacked p-2">
                  <p className="mb-2 font-bold text-2xl">
                    {item.clientOrBrand} • {item.timePeriod}
                  </p>
                  <p className="mb-4 text-xl">{item.description}</p>
                  <p className="mb-4 text-xl font-bold">Key Deliverables:</p>
                  <p className="mb-4 text-xl">{item.keyDeliverables}</p>
                  {item.whatIDid}
                  {item.results && (
                    <>
                      <p className="mb-4 text-xl font-bold">Results:</p>
                      <p className="mb-4 text-xl">{item.results}</p>
                    </>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <div className="items-center justify-center flex flex-col gap-4">
                    {item.images.map((image, index) => (
                      <div
                        className="relative max-w-[300px] cursor-pointer"
                        key={index}
                        onClick={() => handleThumbnailClick(index)}>
                        <Image
                          alt={`${image.src}`}
                          height={image.imageHeight}
                          src={image.src}
                          style={imageStyle}
                          width={image.imageWidth}
                        />
                      </div>
                    ))}
                    {item.videoEmbeds.map((video, index) => (
                      <div className="max-w-[300px] sm:max-w-[450px]" key={`video-${index}`}>
                        <div className="video-responsive relative">
                          {/* Apply style directly to child iframe/video element */}
                          {cloneElement(video as React.ReactElement, {
                            className: 'max-w-full',
                            style: {objectFit: 'contain'},
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80"
          onClick={handleImageModalBackdropClick}
          ref={imageModalRef}>
          <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center">
            <Image
              alt={`${selectedImage.src}`}
              className="cursor-pointer object-contain"
              height={selectedImage.imageHeight}
              onClick={handleFullImageClick}
              src={selectedImage.src}
              style={modalImageStyle}
              width={selectedImage.imageWidth}
            />
            {item.images.length > 1 && (
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded">
                {selectedImageIndex! + 1} / {item.images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
});

PortfolioModal.displayName = 'PortfolioModal';
export default PortfolioModal;
