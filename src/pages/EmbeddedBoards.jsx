export default function EmbeddedBoards() {
  const tiles = [
    { id: 'sbc', title: 'Embedded Single Board Computers', img: '/products/embeddedboards.png' },
    { id: 'com', title: 'Computer-on-Modules', img: '/products/embeddedboards.png' },
    { id: 'mb', title: 'Industrial Motherboards', img: '/products/embeddedboards.png' },
    { id: 'risc', title: 'RISC Single Board Computers', img: '/products/embeddedboards.png' },
  ];
  function onImgError(e) {
    e.currentTarget.src = '/products/embeddedboards.png';
  }
  return (
    <main>
      <section className="ai-hero">
        <div className="container">
          <h1 className="ai-title">Embedded Boards</h1>
          <p className="ai-sub">
            Robustrix is a leading manufacturer of embedded boards, providing top‑quality products for a variety of applications. Our embedded boards are designed to be compact, reliable, and highly customizable, making them the perfect solution for a range of environments.
          </p>
          <p className="ai-sub">
            One of the key advantages of Robustrix's embedded boards is their versatility. With a wide range of processor options and numerous connectivity options, our embedded boards can be tailored to meet the specific needs of your project. Whether you need a board for a simple application or a more complex system, Robustrix has an embedded board that can handle it.
          </p>
          <p className="ai-sub">
            In addition to their versatility, Robustrix's embedded boards are also known for their reliability. Our boards are built to withstand harsh environments, making them ideal for use in industrial settings or other challenging conditions. With a long lifespan and low failure rate, our embedded boards can help you reduce downtime and increase productivity.
          </p>
          <p className="ai-sub">
            Robustrix's embedded boards are also easy to use, with a range of development tools and resources available to help you get your project up and running quickly. Whether you're a seasoned developer or new to the world of embedded systems, Robustrix's embedded boards are a great choice.
          </p>
        </div>
      </section>

      <section className="container section-spacing">
        <div className="eb-grid">
          {tiles.map(t => (
            <article className="card eb-card" key={t.id}>
              <div className="eb-thumb">
                <img src={t.img} alt={t.title} loading="lazy" decoding="async" onError={onImgError} />
              </div>
              <h3 className="eb-title">{t.title}</h3>
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
        .eb-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        @media (min-width: 1024px) {
          .eb-grid { grid-template-columns: repeat(4, 1fr); }
        }
        .eb-card {
          text-decoration: none;
          color: inherit;
          display: grid;
          justify-items: center;
          gap: 12px;
          padding: 14px 8px 18px 8px;
          border-radius: var(--radius-sm);
          transition: transform var(--transition), box-shadow var(--transition), background var(--transition);
        }
        .eb-card:hover { transform: translateY(-2px); background: #fff; box-shadow: var(--shadow-sm); }
        .eb-thumb {
          display: grid;
          place-items: center;
          width: 100%;
          height: 120px;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 1px 0 rgba(0,0,0,0.04), 0 8px 20px rgba(18,28,45,0.06);
          overflow: hidden;
        }
        .eb-thumb img {
          max-width: 160px;
          max-height: 110px;
          width: auto;
          height: auto;
          object-fit: contain;
        }
        .eb-title {
          text-align: center;
          font-weight: 800;
          color: var(--color-ink-700);
        }
      `}</style>
    </main>
  );
}



