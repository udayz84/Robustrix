import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = isMobileOpen ? 'hidden' : '';
  }, [isMobileOpen]);

  return (
    <header className={`site-header shadow-on-scroll ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-wrap">
        <Link className="brand" to="/" aria-label="Home">
          <img src="/pictures/headerlogo.png" alt="Robustrix logo" />
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          <div className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link" to="/products">Products</Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link" to="/solutions">AI Platforms</Link>
          </div>
          
          <div className="nav-item">
            <button className="nav-link">Support</button>
          </div>
          <div className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </div>
        </nav>

        <div className="nav-actions">
          <a className="btn btn-primary" href="https://wa.me/919090020245" target="_blank" rel="noopener noreferrer">Contact Sales</a>
          <button
            className={`hamburger ${isMobileOpen ? 'is-open' : ''}`}
            aria-label="Toggle Menu"
            onClick={() => setIsMobileOpen(v => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-drawer ${isMobileOpen ? 'is-open' : ''}`} aria-hidden={!isMobileOpen}>
        <nav className="mobile-nav">
          <Link to="/" className="mobile-link">Home</Link>
          <Link to="/products" className="mobile-link">Products</Link>
          <Link to="/solutions" className="mobile-link">AI Platforms</Link>
          
          <a href="#" className="mobile-link">Support</a>
          <Link to="/about" className="mobile-link">About</Link>
          <a href="https://wa.me/919090020245" target="_blank" rel="noopener noreferrer" className="mobile-link accent">Contact Sales</a>
        </nav>
      </div>

      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 50;
          /* Use a solid color matching the header logo background for better blend */
          background: #000000;
          color: var(--color-ink-900);
        }
        .nav-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 88px;
          gap: 16px;
        }
        .brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: inherit;
          font-weight: 900;
          letter-spacing: .02em;
        }
        .brand img { height: 56px; width: auto; display: block; }
        .brand-text {
          font-size: 1.1rem;
          color: var(--color-ink-900);
        }
        .nav-desktop {
          display: none;
          gap: 22px;
          align-items: center;
        }
        .nav-item { position: relative; }
        .nav-link {
          background: transparent;
          border: 0;
          cursor: pointer;
          font-weight: 700;
          color: var(--color-ink-700);
          padding: 8px 4px;
        }
        .nav-item:hover .mega {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
        .mega {
          position: absolute;
          left: 50%;
          transform: translate(-50%, 8px);
          top: calc(100% + 6px);
          background: var(--color-bg-alt);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          display: grid;
          grid-template-columns: repeat(3, minmax(180px, 1fr));
          gap: 16px 32px;
          padding: 20px 24px;
          opacity: 0;
          pointer-events: none;
          transition: opacity var(--transition), transform var(--transition);
        }
        .mega-col { min-width: 180px; }
        .mega-title {
          font-weight: 800;
          font-size: 0.86rem;
          color: var(--color-ink-500);
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: .08em;
        }
        .mega-link {
          display: block;
          color: var(--color-ink-700);
          text-decoration: none;
          padding: 6px 0;
        }
        .mega-link:hover { color: var(--color-brand-primary-dark); }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .icon-btn {
          display: inline-grid;
          place-items: center;
          width: 36px; height: 36px;
          border-radius: 999px;
          border: 1px solid var(--color-ink-200);
          background: var(--color-bg);
          cursor: pointer;
          transition: border-color var(--transition), transform var(--transition);
        }
        .icon-btn:hover { border-color: var(--color-brand-primary-dark); transform: translateY(-1px); }
        .hamburger {
          display: inline-flex;
          flex-direction: column;
          gap: 5px;
          background: transparent;
          border: 0;
          cursor: pointer;
          padding: 8px;
        }
        .hamburger span {
          width: 22px; height: 2px; background: var(--color-ink-900);
          transition: transform var(--transition), opacity var(--transition);
        }
        .hamburger.is-open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.is-open span:nth-child(2) { opacity: 0; }
        .hamburger.is-open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        .mobile-drawer {
          position: fixed;
          inset: 72px 0 0 0;
          background: var(--color-bg);
          transform: translateY(-6px);
          opacity: 0;
          pointer-events: none;
          transition: opacity var(--transition), transform var(--transition);
          padding: 16px;
        }
        .mobile-drawer.is-open {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
        .mobile-nav {
          display: grid;
          gap: 8px;
        }
        .mobile-link {
          display: block;
          padding: 12px 10px;
          border-radius: var(--radius-sm);
          text-decoration: none;
          color: var(--color-ink-900);
          border: 1px solid var(--color-ink-200);
        }
        .mobile-link:hover { border-color: var(--color-brand-primary-dark); color: var(--color-brand-primary-dark); }
        .mobile-link.accent {
          border-color: transparent;
          background: var(--color-brand-primary);
          color: var(--color-ink-900);
          text-align: center;
          font-weight: 800;
        }

        @media (min-width: 1024px) {
          .nav-desktop { display: flex; }
          .hamburger { display: none; }
          .mobile-drawer { display: none; }
        }
      `}</style>
    </header>
  );
}


