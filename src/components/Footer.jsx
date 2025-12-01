export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container grid">
        <div className="col">
          <a className="brand" href="/">
            <img src="/pictures/icon.png" width="28" height="28" alt="" />
          </a>
          <p className="copy">
            Industrial computing solutions for edge AI, embedded, and IoT applications.
          </p>
        </div>
        <nav className="col">
          <p className="col-title">Products</p>
          <a href="#">Boards</a>
          <a href="#">Systems</a>
          <a href="#">Networking</a>
          <a href="#">Accessories</a>
        </nav>
        <nav className="col">
          <p className="col-title">Solutions</p>
          <a href="#">Manufacturing</a>
          <a href="#">Retail</a>
          <a href="#">Transportation</a>
          <a href="#">Energy</a>
        </nav>
        <nav className="col">
          <p className="col-title">Company</p>
          <a href="#">About</a>
          <a href="#">News</a>
          <a href="#">Contact</a>
          <a href="#">Support</a>
        </nav>
      </div>
      <div className="container legal">
        <p>© {new Date().getFullYear()} Robustrix. All rights reserved. This is a non-affiliated demo.</p>
        <div className="links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>
      </div>

      <style>{`
        .site-footer {
          margin-top: 60px;
          background: var(--color-bg);
          color: var(--color-ink-900);
          border-top: 1px solid var(--color-ink-200);
        }
        .grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 20px;
          padding-block: 40px;
        }
        .brand {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 900;
          letter-spacing: .02em;
          color: inherit;
          text-decoration: none;
        }
        .copy { color: var(--color-ink-700); margin-top: 10px; }
        .col { display: grid; align-content: start; gap: 8px; }
        .col-title {
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .08em;
          color: var(--color-ink-700);
          margin-bottom: 8px;
        }
        .col a { color: var(--color-ink-700); text-decoration: none; }
        .col a:hover { color: var(--color-brand-primary); }
        .legal {
          padding-block: 16px;
          border-top: 1px solid var(--color-ink-200);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          color: var(--color-ink-700);
          font-size: 0.92rem;
        }
        .links { display: flex; gap: 14px; }
        .links a { color: var(--color-ink-700); text-decoration: none; }
        .links a:hover { color: var(--color-brand-primary-dark); }
        @media (max-width: 1023px) {
          .grid { grid-template-columns: 1fr 1fr; }
          .legal { flex-direction: column; align-items: start; }
        }
      `}</style>
    </footer>
  );
}


