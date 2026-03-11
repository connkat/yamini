import { useEffect, useRef } from 'react';

/**
 * Re-triggers the `window-enter` CSS animation each time the element
 * enters the viewport — plays nicely with scroll-snap sections.
 */
export const useSlideIn = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove('window-enter');
          void el.offsetWidth; // force reflow to restart animation
          el.classList.add('window-enter');
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
};
