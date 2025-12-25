import { useMemo } from 'react';
import useInView from '../hooks/useInView.js';

const rawItems = [
  { title: 'AI@Edge Board with NVIDIA® Jetson T5000™', model: 'BOXER-8741AI' },
  { title: 'AI@Edge Compact Fanless Embedded AI System', model: 'BOXER-8651AI-PLUS' },
  { title: 'AI@Edge Fanless Embedded AI System with NVIDIA®', model: 'BOXER-8642AI' },
  { title: 'AI@Edge Fanless PoE Embedded AI System with NVIDIA® Jetson Orin™ NX', model: 'BOXER-8658AI' },
  { title: 'AI@Edge Fanless Embedded AI System with NVIDIA® Jetson AGX Orin™', model: 'BOXER-8645AI' },
  { title: 'AI@Edge Fanless PoE Embedded AI System with NVIDIA® Jetson AGX Orin™', model: 'BOXER-8646AI' },
  { title: 'AI@Edge Compact Fanless Embedded BOX PC with NVIDIA AGX Orin', model: 'BOXER-8641AI' },
  { title: 'AI@Edge Fanless Embedded Box PC with NVIDIA Jetson AGX Orin 32GB', model: 'BOXER-8640AI' },
  { title: 'AI@Edge Compact Fanless Embedded AI System with NVIDIA Orin NX', model: 'BOXER-8653AI' },
  { title: 'AI@Edge Compact Fanless Embedded AI System with NVIDIA® Jetson Orin™ NX', model: 'BOXER-8652AI' },
  { title: 'AI@Edge Compact Fanless Embedded AI System with NVIDIA® Jetson Orin NX', model: 'BOXER-8651AI' },
  { title: 'AI@Edge Compact Fanless Embedded AI System with NVIDIA® Jetson Orin Nano™', model: 'BOXER-8623AI' },
  { title: 'AI@Edge Compact Fanless Embedded AI System with NVIDIA® Jetson Orin Nano™ with Super Mode', model: 'BOXER-8622AI' },
  { title: 'AI@Edge Compact Fanless Embedded AI System with NVIDIA® Jetson Orin Nano™ with Super Mode', model: 'BOXER-8621AI' },
  { title: 'Embedded Box PC with Nvidia Jetson AGX Xavier', model: 'BOXER-8240AI' },
  { title: 'AI@Edge Fanless Embedded AI System with NVIDIA Jetson Xavier NX, HDMI Input x4', model: 'BOXER-8256AI' },
  { title: 'AI@Edge Compact Fanless Embedded BOX PC with NVIDIA® Jetson Xavier™ NX', model: 'BOXER-8253AI' },
  { title: 'Embedded Box PC with NVIDIA Xavier NX', model: 'BOXER-8251AI' },
  { title: 'AI@Edge Embedded System with NVIDIA® Jetson Nano™', model: 'BOXER-8224AI' },
  { title: 'AI@Edge Compact Fanless Embedded BOX PC', model: 'BOXER-8221AI' },
  { title: 'AI@Edge Compact Fanless Embedded AI System with NVIDIA® Jetson Nano™', model: 'BOXER-8223AI' },
  { title: 'AI@Edge Fanless Embedded AI System with NVIDIA® Jetson Orin NX', model: 'BOXER-8655AI' },
  { title: 'AI System with NVIDIA® Jetson AGX Orin™', model: 'BOXER-8641AI-PLUS' },
  { title: 'AI@Edge Embedded board with NVIDIA® Jetson Orin™ NX', model: 'BOXER-8654AI-KIT' },
  { title: 'AI@Edge Compact Fanless Embedded AI System with NVIDIA® Jetson Orin™ NX', model: 'BOXER-8653AI-PLUS' },
];

// Available product images (excluding robodog.jpeg, airobot.png, and robot.jpeg)
const availableImages = [
  '/products/21.5 Digital LCD Monitor.png',
  '/products/aisolutions.png',
  '/products/computingsystem.png',
  '/products/embeddedboards.png',
  '/products/iotsystems.png',
  '/products/networksolutions.png',
  '/products/panelpc.png',
  '/products/ROBO AI INDUSTRIAL PRO.png',
  '/products/ROBO_AI_30000.png',
  '/products/upboards.png',
];

// Function to get a random image from available images
function getRandomImage(index) {
  return availableImages[index % availableImages.length];
}

export default function AISolutions() {
  const heroRef = useInView({ threshold: 0.1 });
  const gridRef = useInView({ threshold: 0.1 });
  
  const items = useMemo(() => {
    // Shuffle available images for randomness
    const shuffledImages = [...availableImages].sort(() => Math.random() - 0.5);
    
    return rawItems.map((it, idx) => ({
      ...it,
      modelView: it.model.replace(/^BOXER/gi, 'ROBO'),
      image: shuffledImages[idx % shuffledImages.length],
    }));
  }, []);
  function onImgError(e) {
    e.currentTarget.src = '/pictures/aiplatforms.jpg';
  }

  return (
    <main>
      <section ref={heroRef} className="ai-hero fade-in-up">
        <div className="container">
          <h1 className="ai-title">NVIDIA® AI Solutions</h1>
          <p className="ai-sub">
            As an industrial AI hardware pioneer, Robustrix continually works to bring its customers the most advanced AI edge computing platforms featuring the NVIDIA Jetson™ line of SoCs. Robustrix’s embedded AI systems range utilizes the full spectrum of NVIDIA SoMs, from the cost‑efficient NVIDIA Jetson Nano™ all the way to the exceptionally powerful NVIDIA® Jetson Thor™.
          </p>
        </div>
      </section>

      <section className="container section-spacing">
        <div ref={gridRef} className="ai-grid fade-in-up-stagger">
          {items.map((it) => (
            <article key={it.model} className="card ai-card">
              <div className="ai-thumb">
                <img
                  src={it.image}
                  alt={it.modelView}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={onImgError}
                />
              </div>
              <div className="ai-card-body">
                <h3 className="ai-card-title">{it.title}</h3>
                <p className="ai-card-model">{it.modelView}</p>
              </div>
              <div className="ai-card-actions">
                <a href="#" className="btn btn-primary">Details</a>
                <a href="https://drive.google.com/file/d/1V2lWp_aqRs0okhO3mNIL0uzBgqL3GxUZ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Datasheet</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <style>{`
        .ai-hero {
          background: linear-gradient(180deg, #f4f7ff 0%, #ffffff 100%);
          border-bottom: 1px solid var(--color-ink-100);
          padding-block: clamp(28px, 6vw, 48px);
        }
        .ai-title {
          font-size: clamp(28px, 5vw, 42px);
          font-weight: 900;
          line-height: 1.1;
        }
        .ai-sub {
          margin-top: 10px;
          color: var(--color-ink-600, #3d4656);
          max-width: 900px;
        }
        .ai-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 1023px) {
          .ai-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 719px) {
          .ai-grid { grid-template-columns: 1fr; }
        }
        .ai-card {
          display: grid;
          gap: 10px;
          padding: 16px;
        }
        .ai-thumb {
          width: 100%;
          height: 160px;
          display: grid;
          place-items: center;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 1px 0 rgba(0,0,0,0.04), 0 8px 20px rgba(18,28,45,0.06);
          overflow: hidden;
        }
        .ai-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .ai-card-title {
          font-size: 1.02rem;
          font-weight: 800;
          line-height: 1.3;
        }
        .ai-card-model {
          color: var(--color-brand-primary);
          font-weight: 900;
          letter-spacing: .02em;
        }
        .ai-card-actions {
          display: flex;
          gap: 8px;
          margin-top: 6px;
        }
      `}</style>
    </main>
  );
}


