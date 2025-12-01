import { useEffect, useRef } from 'react';

export default function useInView(options = {}) {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          node.classList.add('is-inview');
        } else {
          node.classList.remove('is-inview');
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: options.threshold ?? 0.1 });
    obs.observe(node);
    return () => obs.disconnect();
  }, [options.threshold]);
  return ref;
}


