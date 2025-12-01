import { useSearchParams } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading.jsx';
import Solutions from '../components/Solutions.jsx';
import MainProducts from '../components/MainProducts.jsx';
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
        <>
          <section className="container section-spacing">
            <SectionHeading
              overline="Solutions"
              title=""
              subtitle="Explore platforms by solution category."
            />
            <Solutions />
          </section>
          <MainProducts />
        </>
      )}
    </main>
  );
}



