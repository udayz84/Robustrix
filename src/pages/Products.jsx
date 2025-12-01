import { useSearchParams } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading.jsx';
import { MAIN_PRODUCTS } from '../data/mainProducts.js';

export default function Products() {
  const [params] = useSearchParams();
  const selectedId = params.get('product');
  const selected = MAIN_PRODUCTS.find(p => p.id === selectedId);

  return (
    <main>
      {selected ? (
        <section className="container section-spacing">
          <SectionHeading
            overline="Products"
            title={`Models & options — ${selected.name}`}
            subtitle={`${selected.brand}${selected.series ? ` · ${selected.series}` : ''}`}
          />
          <article className="card pd-card">
            <div className="pd-head">
              <p className="pd-tags">{selected.useCases?.join(' · ')}</p>
              <ul className="pd-highlights">
                {selected.highlights.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
            </div>
            {selected.models?.length ? (
              <div className="pd-models">
                <h3 className="pd-title">Models</h3>
                <ul>
                  {selected.models.map((m, i) => (
                    <li key={i}><b>{m.model}</b>{m.note ? ` — ${m.note}` : ''}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </article>
        </section>
      ) : (
        <section className="container section-spacing">
          <SectionHeading
            overline="Products"
            title="Models & Options"
            subtitle="Choose a product to view detailed highlights and model configurations."
          />
          <div className="pd-grid">
            {MAIN_PRODUCTS.map(p => (
              <a key={p.id} className="card pd-card" href={`/?${Date.now()}#/products?product=${p.id}`}>
                <div className="pd-head">
                  <h3 className="pd-name">{p.name}</h3>
                  <p className="pd-meta">{p.brand}{p.series ? ` · ${p.series}` : ''}</p>
                  <p className="pd-tags">{p.useCases?.join(' · ')}</p>
                </div>
                <ul className="pd-highlights">
                  {p.highlights.slice(0, 6).map((h, i) => <li key={i}>{h}</li>)}
                </ul>
              </a>
            ))}
          </div>
        </section>
      )}
      <style>{`
        .pd-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 16px;
        }
        @media (min-width: 1024px) { .pd-grid { grid-template-columns: repeat(3, 1fr); } }
        .pd-card { display: grid; gap: 10px; padding: 16px; text-decoration: none; color: inherit; }
        .pd-head { display: grid; gap: 4px; }
        .pd-name { font-weight: 900; font-size: 1.05rem; }
        .pd-meta { color: var(--color-ink-700); }
        .pd-tags { color: var(--color-brand-primary); font-weight: 700; }
        .pd-highlights { display: grid; gap: 6px; list-style: disc inside; }
        .pd-models ul { display: grid; gap: 6px; list-style: disc inside; }
      `}</style>
    </main>
  );
}



