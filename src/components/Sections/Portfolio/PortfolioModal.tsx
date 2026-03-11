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
    if (e.target === modalRef.current) onClose();
  };

  const handleImageModalBackdropClick = (e: React.MouseEvent) => {
    if (e.target === imageModalRef.current) setSelectedImageIndex(null);
  };

  const handleNext = () => {
    if (!item?.screenshotImages?.length) return;
    setSelectedImageIndex(i => ((i ?? 0) + 1) % item.screenshotImages!.length);
  };

  const handlePrev = () => {
    if (!item?.screenshotImages?.length) return;
    setSelectedImageIndex(i => ((i ?? 0) - 1 + item.screenshotImages!.length) % item.screenshotImages!.length);
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
    if (!isOpen) setSelectedImageIndex(null);
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (selectedImageIndex !== null) setSelectedImageIndex(null);
      else onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, onClose]);

  if (!isOpen || !item) return null;

  const screenshots = item.screenshotImages ?? [];
  const selectedImage = selectedImageIndex !== null ? screenshots[selectedImageIndex] : null;
  const selectedImageUrl = selectedImage ? urlFor(selectedImage).url() : null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
        onClick={handleBackdropClick}
        ref={modalRef}>
        <div className="window y2k-window w-11/12 max-w-5xl max-h-[75vh] flex flex-col">
          {/* Title bar */}
          <div className="title-bar shrink-0">
            <div className="title-bar-text px-2 py-1 text-base sm:text-lg">{item.pageTitle}</div>
            <div className="title-bar-controls">
              <button aria-label="Close" onClick={onClose} />
            </div>
          </div>

          {/* Body */}
          <div className="window-body flex flex-col sm:flex-row gap-0 overflow-hidden h-[calc(75vh-32px)]">

            {/* Left: project info */}
            <div className="sm:w-2/5 shrink-0 flex flex-col gap-2 p-3 overflow-y-auto border-r-2 border-[#808080]" data-scrollable>
              {item.logo && (
                <div className="field-row-stacked" style={{ border: '2px inset', padding: '6px' }}>
                  <img
                    alt={item.pageTitle}
                    className="max-h-14 object-contain self-start"
                    src={urlFor(item.logo).height(56).url()}
                  />
                </div>
              )}

              <div className="field-row-stacked" style={{ border: '2px inset', padding: '6px' }}>
                <label className="text-xs font-bold uppercase tracking-wide text-gray-600">About</label>
                <p className="text-sm mt-1">{item.description}</p>
              </div>

              <div className="field-row-stacked" style={{ border: '2px inset', padding: '6px' }}>
                <label className="text-xs font-bold uppercase tracking-wide text-gray-600">{item.deliverablesTitle}</label>
                <ul className="mt-1 space-y-1">
                  {item.deliverables.map((d, i) => (
                    <li className="flex items-start gap-1 text-sm" key={i}>
                      <span className="text-indigo-600 shrink-0">▸</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              {item.results && (
                <div className="field-row-stacked" style={{ border: '2px inset', padding: '6px' }}>
                  <label className="text-xs font-bold uppercase tracking-wide text-gray-600">Results</label>
                  <p className="text-sm mt-1">{item.results}</p>
                </div>
              )}
            </div>

            {/* Right: media */}
            <div className="flex-1 overflow-y-auto p-3" data-scrollable>
              {screenshots.length > 0 && (
                <div className="flex flex-col gap-3 mb-4">
                  {screenshots.map((image, index) => (
                    <button
                      className="field-row-stacked p-0 cursor-pointer hover:opacity-80 transition-opacity text-left w-full"
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      style={{ border: '2px inset' }}>
                      <img
                        alt={`screenshot-${index + 1}`}
                        className="w-full h-auto object-contain"
                        src={urlFor(image).width(800).url()}
                      />
                    </button>
                  ))}
                </div>
              )}

              {(item.youtubeEmbeds ?? []).map((embedCode, index) => (
                <div
                  className="field-row-stacked mb-3 [&_iframe]:w-full [&_iframe]:aspect-video"
                  dangerouslySetInnerHTML={{ __html: embedCode }}
                  key={`video-${index}`}
                  style={{ border: '2px inset', padding: '4px' }}
                />
              ))}
            </div>
          </div>

          {/* Status bar */}
          {screenshots.length > 0 && (
            <div className="shrink-0 border-t border-[#808080] px-2 py-1 text-xs text-gray-500">
              {screenshots.length} screenshot{screenshots.length !== 1 ? 's' : ''}
              {(item.youtubeEmbeds?.length ?? 0) > 0 && ` · ${item.youtubeEmbeds!.length} video${item.youtubeEmbeds!.length !== 1 ? 's' : ''}`}
            </div>
          )}
        </div>
      </div>

      {/* Fullsize image viewer */}
      {selectedImageUrl && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/85"
          onClick={handleImageModalBackdropClick}
          ref={imageModalRef}>
          <div className="window y2k-window max-w-[90vw]">
            <div className="title-bar">
              <div className="title-bar-text px-2 py-1 text-sm">
                {item.pageTitle} — {selectedImageIndex! + 1} / {screenshots.length}
              </div>
              <div className="title-bar-controls">
                <button aria-label="Close" onClick={() => setSelectedImageIndex(null)} />
              </div>
            </div>
            <div className="window-body p-2 flex flex-col items-center gap-2">
              <img
                alt="screenshot-fullsize"
                className="max-w-[85vw] max-h-[75vh] object-contain"
                src={selectedImageUrl}
              />
              {screenshots.length > 1 && (
                <div className="flex gap-2">
                  <button className="px-4" onClick={handlePrev}>‹ Prev</button>
                  <button className="px-4" onClick={handleNext}>Next ›</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default PortfolioModal;
