import { Link } from 'react-router-dom';

const tiles = [
  { id: 'boards', title: 'UP Boards', to: '/up/boards', img: '/products/upboards.png' },
  { id: 'systems', title: 'UP Systems', to: '/up/systems', img: '/products/upboards.png' },
  { id: 'kit', title: 'UP Edge Computing Kit', to: '/up/edge-computing-kit', img: '/products/upboards.png' },
  { id: 'toolkit', title: 'UP Edge AI Toolkit', to: '/up/edge-ai-toolkit', img: '/products/upboards.png' },
];

export default function UpOverview() {
  function onImgError(e) { e.currentTarget.src = '/products/upboards.png'; }
  return (
    <main>
      <section className="ai-hero">
        <div className="container">
          <h1 className="ai-title">UP Boards and UP Systems</h1>
        </div>
      </section>
      <section className="container section-spacing">
        <div className="eb-grid">
          {tiles.map(t => (
            <Link className="card eb-card" key={t.id} to={t.to}>
              <div className="eb-thumb"><img src={t.img} alt={t.title} onError={onImgError} loading="lazy" decoding="async" /></div>
              <h3 className="eb-title">{t.title}</h3>
            </Link>
          ))}
        </div>
      </section>
      <style>{`
        .ai-hero { background: linear-gradient(180deg, #f4f7ff, #fff); border-bottom: 1px solid var(--color-ink-100); padding-block: clamp(28px, 6vw, 48px); }
        .ai-title { font-size: clamp(28px,5vw,42px); font-weight: 900; }
        .eb-grid { display: grid; gap: 16px; grid-template-columns: repeat(2,1fr); }
        @media (min-width: 1024px) { .eb-grid { grid-template-columns: repeat(4,1fr); } }
        .eb-card { display: grid; justify-items: center; gap: 12px; padding: 14px 8px 18px; border-radius: var(--radius-sm); transition: transform var(--transition), box-shadow var(--transition), background var(--transition); color: inherit; text-decoration: none; }
        .eb-card:hover { transform: translateY(-2px); background: #fff; box-shadow: var(--shadow-sm); }
        .eb-thumb { display: grid; place-items: center; width: 100%; height: 120px; background: #fff; border-radius: 10px; box-shadow: 0 1px 0 rgba(0,0,0,.04), 0 8px 20px rgba(18,28,45,.06); overflow: hidden; }
        .eb-thumb img { max-width: 160px; max-height: 110px; object-fit: contain; }
        .eb-title { font-weight: 800; color: var(--color-ink-700); text-align: center; }
      `}</style>
    </main>
  );
}






