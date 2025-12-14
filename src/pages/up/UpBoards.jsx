export default function UpBoards() {
  function onImgError(e) { e.currentTarget.src = '/products/upboards.png'; }
  const tiles = [
    { id: 'dev', title: 'UP Developer Boards', img: '/products/upboards.png' },
    { id: 'exp', title: 'UP Expansion Modules', img: '/products/upboards.png' },
    { id: 'ai', title: 'UP AI Modules', img: '/products/upboards.png' },
  ];
  return (
    <main>
      <section className="ai-hero">
        <div className="container">
          <h1 className="ai-title">UP Boards</h1>
          <p className="ai-sub">
            Designed to provide a nimble and nifty experience for the user, the architecture of our UP line is built for quick assimilation with existing systems, and supports all current OS – Linux, Android, and Windows 10 operating systems.
          </p>
          <p className="ai-sub">
            It is ideal for uses in robotics, drones, machine vision, smart homes, e-education, digital signage, intelligent vehicles, and the Internet of Things, and is built to address space restraints that are usually a key concern for clients who need to plan every square inch.
          </p>
          <p className="ai-sub"><b>Free Edge AI Toolkit</b> — streamline object detection, benchmarking, and AI model conversion to accelerate your AI projects on UP platforms.</p>
        </div>
      </section>
      <section className="container section-spacing">
        <div className="eb-grid">
          {tiles.map(t => (
            <article className="card eb-card" key={t.id}>
              <div className="eb-thumb"><img src={t.img} alt={t.title} onError={onImgError} loading="lazy" decoding="async" /></div>
              <h3 className="eb-title">{t.title}</h3>
            </article>
          ))}
        </div>
      </section>
      <style>{`
        .ai-hero { background: linear-gradient(180deg,#f4f7ff,#fff); border-bottom: 1px solid var(--color-ink-100); padding-block: clamp(28px,6vw,48px); }
        .ai-title { font-size: clamp(28px,5vw,42px); font-weight: 900; }
        .ai-sub { margin-top: 10px; color: var(--color-ink-600, #3d4656); max-width: 920px; }
        .eb-grid { display: grid; gap: 16px; grid-template-columns: repeat(3,1fr); }
        @media (max-width: 1023px) { .eb-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 719px) { .eb-grid { grid-template-columns: 1fr; } }
        .eb-card { display: grid; justify-items: center; gap: 12px; padding: 14px 8px 18px; border-radius: var(--radius-sm); transition: transform var(--transition), box-shadow var(--transition), background var(--transition); }
        .eb-card:hover { transform: translateY(-2px); background: #fff; box-shadow: var(--shadow-sm); }
        .eb-thumb { display: grid; place-items: center; width: 100%; height: 120px; background: #fff; border-radius: 10px; box-shadow: 0 1px 0 rgba(0,0,0,.04), 0 8px 20px rgba(18,28,45,.06); overflow: hidden; }
        .eb-thumb img { max-width: 160px; max-height: 110px; object-fit: contain; }
        .eb-title { font-weight: 800; color: var(--color-ink-700); text-align: center; }
      `}</style>
    </main>
  );
}





