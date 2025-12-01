const SITES = [
  {
    id: 'brahamand',
    name: 'brahamand.ai',
    href: 'https://brahamand.ai',
    blurb: 'AI multi‑purpose chatbot with news, stocks, PDF summarization, and Kundli insights.',
  },
  {
    id: 'subvivah',
    name: 'subvivah.com',
    href: 'https://subvivah.com',
    blurb: 'AI‑based matrimony platform focused on compatibility and intelligent matching.',
  },
  {
    id: 'connectflow',
    name: 'connectflow.co.in',
    href: 'https://connectflow.co.in',
    blurb: 'A LinkedIn‑style professional network tailored for collaboration and hiring.',
  },
  {
    id: 'tutorbuddy',
    name: 'tutorbuddy.co',
    href: 'https://tutorbuddy.co',
    blurb: 'AI‑powered learning platform with personalized study plans and practice.',
  },
  {
    id: 'foodfly',
    name: 'foodfly.co',
    href: 'https://foodfly.co',
    blurb: 'Modern food delivery experience optimized for speed, ratings, and offers.',
  },
];

export default function SolutionShowcase() {
  return (
    <main>
      <section className="container section-spacing">
        <header>
          <p className="overline">Solutions</p>
          <h2 className="h2">Showcase</h2>
          <p className="subtle">Explore partner projects and platforms built with AI at the core.</p>
        </header>

        <div className="site-grid">
          {SITES.map((s) => (
            <a
              key={s.id}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card site-card"
            >
              <div className="site-card-body">
                <h3 className="site-title">{s.name}</h3>
                <p className="site-blurb">{s.blurb}</p>
                <span className="link">Visit</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <style>{`
        .site-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 16px;
          margin-top: 16px;
        }
        @media (min-width: 768px) {
          .site-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1200px) {
          .site-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .site-card {
          text-decoration: none;
        }
        .site-card-body {
          display: grid;
          gap: 10px;
          padding: 18px;
        }
        .site-title {
          font-weight: 900;
          font-size: 1.05rem;
        }
        .site-blurb {
          color: var(--color-ink-700);
        }
      `}</style>
    </main>
  );
}



