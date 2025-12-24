import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const SLIDES = [
  {
    id: 's1',
    title: 'AI Platforms',
    subtitle: 'Powering vision, inference, and analytics at the edge',
    ctaPrimary: 'Explore AI Platforms',
    ctaSecondary: 'View All Products',
    image: '/pictures/roboi.jpeg',
    variant: 'full'
  },
  /* s2 removed on request */
  {
    id: 's3',
    title: 'Intel Processor',
    subtitle: 'Performance and reliability for modern industrial computing',
    ctaPrimary: 'Explore Intel',
    ctaSecondary: 'View Specs',
    image: '/pictures/INTEL.png',
    variant: 'full'
  },
  {
    id: 's4',
    title: 'Fanless CPU Systems',
    subtitle: 'Silent, rugged, and thermally-optimized for harsh environments',
    ctaPrimary: 'Explore Fanless',
    ctaSecondary: 'Contact Sales',
    image: '/pictures/cpu.png',
    variant: 'full'
  },
  {
    id: 's5',
    title: 'AI Robo Dog',
    subtitle: 'Next-generation AI-powered robotic companion with autonomous intelligence',
    ctaSecondary: 'Coming Soon',
    image: '/products/robodog.jpeg',
    variant: 'full',
    bgPosition: 'center center'
  },
  {
    id: 's6',
    title: 'AI HUMANOID Robot',
    
    ctaSecondary: 'Coming Soon',
    image: '/products/airobot.png',
    variant: 'full',
    bgPosition: 'center center'
  }
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const hoverRef = useRef(false);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, []);

  function startAuto() {
    stopAuto();
    timerRef.current = setInterval(() => {
      if (!hoverRef.current) {
        setIndex(i => (i + 1) % SLIDES.length);
      }
    }, 5000);
  }
  function stopAuto() {
    if (timerRef.current) clearInterval(timerRef.current);
  }

  function onMouseEnter() { hoverRef.current = true; }
  function onMouseLeave() { hoverRef.current = false; }

  function goTo(i) { setIndex((i + SLIDES.length) % SLIDES.length); }
  function next() { goTo(index + 1); }
  function prev() { goTo(index - 1); }

  function onTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  }
  function onTouchMove(e) {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  }
  function onTouchEnd() {
    const dx = touchDeltaX.current;
    if (Math.abs(dx) > 40) {
      if (dx < 0) next();
      else prev();
    }
  }

  function onImageError(e, i) {
    const fallback = '/pictures/fanlesscpu.png';
    e.currentTarget.src = fallback;
  }

  return (
    <section className="hero" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div
        className="slider"
        style={{ transform: `translateX(-${index * 100}%)` }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        role="region"
        aria-label="Featured"
      >
        {SLIDES.map((s, i) => (
          <article className={`slide ${s.variant === 'full' ? 'full-bleed' : ''}`} key={s.id} data-slide-id={s.id} aria-hidden={i !== index}>
            {s.variant === 'full' ? (
              <>
                <div className="bg-full" style={{ backgroundImage: `url(${s.image})`, backgroundPosition: s.bgPosition || 'center 70%' }} />
                <div className="overlay-full" />
                <div className="container slide-inner full-inner">
                  <div className="copy">
                    <h2 className="h2">{s.title}</h2>
                    <p className="subtle">{s.subtitle}</p>
                    <div className="cta-row">
                      {s.ctaPrimary && (
                        <Link to="/products" className="btn btn-primary">{s.ctaPrimary}</Link>
                      )}
                      {s.ctaSecondary && (
                        s.ctaSecondary.includes('Contact') ? (
                          <a href="https://wa.me/919090020245" target="_blank" rel="noopener noreferrer" className="btn btn-outline">{s.ctaSecondary}</a>
                        ) : (
                          <Link to="/products" className="btn btn-outline">{s.ctaSecondary}</Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="container slide-inner">
                <div className="copy">
                  <h2 className="h2">{s.title}</h2>
                  <p className="subtle">{s.subtitle}</p>
                  <div className="cta-row">
                    <Link to="/products" className="btn btn-primary">{s.ctaPrimary}</Link>
                    {s.ctaSecondary.includes('Contact') ? (
                      <a href="https://wa.me/919090020245" target="_blank" rel="noopener noreferrer" className="btn btn-outline">{s.ctaSecondary}</a>
                    ) : (
                      <Link to="/products" className="btn btn-outline">{s.ctaSecondary}</Link>
                    )}
                  </div>
                </div>
                <div className="visual">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading={i === index ? 'eager' : 'lazy'}
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={(ev) => onImageError(ev, i)}
                  />
                </div>
              </div>
            )}
          </article>
        ))}
      </div>

      <div className="container controls">
        <div className="dots" role="tablist" aria-label="Slides">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              className={`dot ${i === index ? 'is-active' : ''}`}
              aria-label={`Go to slide ${i + 1}`}
              aria-selected={i === index}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <div className="arrows">
          <button className="arrow" aria-label="Previous" onClick={prev}>
            <span>‹</span>
          </button>
          <button className="arrow" aria-label="Next" onClick={next}>
            <span>›</span>
          </button>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(1200px 480px at 80% 100%, rgba(228, 30, 43, 0.08), transparent 60%),
            linear-gradient(180deg, #f7f9ff 0%, #ffffff 100%);
        }
        .slider {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: 100%;
          transition: transform var(--transition-slow);
        }
        .slide {
          display: grid;
          place-items: center;
          min-height: clamp(420px, 60vw, 640px);
          position: relative;
        }
        .slide::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(600px 200px at 20% 0%, rgba(30, 74, 168, 0.10), transparent 60%);
        }
        /* Full-bleed fanless slide */
        .slide.full-bleed {
          min-height: clamp(560px, 72vw, 820px);
        }
        .bg-full {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center center;
          transform: none;
        }
        .slide[data-slide-id="s5"] .bg-full,
        .slide[data-slide-id="s6"] .bg-full {
          background-position: center center;
          background-size: cover;
        }
        .slide[aria-hidden="false"].full-bleed .bg-full { transform: none; }
        .overlay-full {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.3);
        }
        .full-inner {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: flex-end;
          min-height: 100%;
          padding-top: 24px;
          padding-bottom: clamp(70px, 12vw, 160px);
        }
        .copy {
          max-width: min(720px, 92vw);
          color: #ffffff;
          text-shadow: 0 2px 8px rgba(0,0,0,0.6);
        }
        .copy .h2 { 
          color: #ffffff; 
          font-size: clamp(34px, 5.6vw, 64px); 
          line-height: 1.1; 
          font-weight: 800;
        }
        .copy .subtle { 
          color: #ffffff; 
          font-size: clamp(16px, 2.8vw, 22px); 
          margin-top: 12px;
        }
        .slide-inner {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: clamp(20px, 4vw, 40px);
          align-items: center;
          width: 100%;
          padding-block: clamp(40px, 8vw, 80px);
        }
        .copy .cta-row {
          display: flex;
          gap: 12px;
          margin-top: 18px;
          flex-wrap: wrap;
        }
        .visual img {
          width: 100%;
          height: auto;
          filter: drop-shadow(0 20px 40px rgba(18, 28, 45, 0.18));
          transform: translateZ(0);
          transition: transform var(--transition);
        }
        .slide[aria-hidden="false"] .visual img {
          transform: translateY(0);
        }

        .controls {
          position: absolute;
          inset-inline: 0;
          bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .dots {
          display: flex;
          gap: 10px;
        }
        .dot {
          width: 10px; height: 10px;
          border-radius: 999px;
          border: 2px solid var(--color-ink-300);
          background: white;
          cursor: pointer;
          transition: border-color var(--transition), background var(--transition), transform var(--transition);
        }
        .dot.is-active {
          background: var(--color-brand-primary);
          border-color: var(--color-brand-primary);
          transform: scale(1.1);
        }
        .arrows { display: flex; gap: 8px; }
        .arrow {
          width: 40px; height: 40px;
          border-radius: 999px;
          border: 1px solid var(--color-ink-200);
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: saturate(160%) blur(6px);
          cursor: pointer;
          transition: transform var(--transition), border-color var(--transition), background var(--transition);
        }
        .arrow:hover { transform: translateY(-1px); border-color: var(--color-brand-primary-dark); }
        .arrow span { display: grid; place-items: center; font-size: 22px; color: var(--color-ink-700); }

        @media (max-width: 1023px) {
          .slide-inner { grid-template-columns: 1fr; }
          .controls { position: static; padding-block: 16px; }
          .arrows { margin-left: auto; }
        }
      `}</style>
    </section>
  );
}
