import { useMemo } from 'react';

const intro1 = `Featuring a blend of both efficiency and power-focused processing options such as the Intel® Processor N-Series (formerly Alder Lake-N) and Intel® Core™ Processors (formerly Alder Lake-P) alongside extensive I/O support, Robustrix’s DIN Rail Box PC range is tailored for easy installation and convenient use, with vertical orientation making access to connectors immediate while DIN rail mounted.`;
const intro2 = `From factory automation to robot controller applications, Robustrix’s DIN Rail Box PCs represent the perfect blend of industrial features, interfaces, and deployment ease, making them an attractive choice for discreet installation in harsh settings.`;

const rawItems = [
  {
    title: 'DIN Rail Mount Embedded BOX PC with Intel Atom®',
    model: 'BOXER-6711-ADN',
    sub: 'Intel Atom® x7211E / Intel® Processor N-Series',
  },
  {
    title: 'DIN Rail Fanless Embedded BOX PC with 12th Generation Intel® Core™ Processors',
    model: 'BOXER-6751-ADP',
    sub: '12th Gen Intel® Core™',
  },
  {
    title: 'Din Rail Mount Embedded BOX PC with Intel® Atom™',
    model: 'BOXER-6710',
    sub: 'Intel® Atom™ Processor N4200 or N3350',
  },
];

export default function ComputingSystems() {
  const items = useMemo(() => {
    return rawItems.map((it, idx) => ({
      ...it,
      modelView: it.model.replace(/^BOXER/gi, 'ROBO'),
      image: `https://source.unsplash.com/640x360/?din,rail,industrial,pc,intel&sig=${idx}`,
    }));
  }, []);
  function onImgError(e) {
    e.currentTarget.src = '/products/computingsystem.png';
  }
  return (
    <main>
      <section className="ai-hero">
        <div className="container">
          <h1 className="ai-title">Computing Systems — DIN Rail Box PCs</h1>
          <p className="ai-sub">{intro1}</p>
          <p className="ai-sub">{intro2}</p>
        </div>
      </section>

      <section className="container section-spacing">
        <div className="ai-grid">
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
                <p className="ai-card-sub">{it.sub}</p>
                <p className="ai-card-model">{it.modelView}</p>
              </div>
              <div className="ai-card-actions">
                <a href="#" className="btn btn-primary">Details</a>
                <a href="#" className="btn btn-outline">Datasheet</a>
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
        .ai-card-sub { color: var(--color-ink-600, #3d4656); }
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



