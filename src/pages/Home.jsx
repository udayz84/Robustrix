import { useEffect } from 'react';
import Hero from '../components/Hero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Solutions from '../components/Solutions.jsx';
import News from '../components/News.jsx';
import MainProducts from '../components/MainProducts.jsx';

export default function Home() {
  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      document.documentElement.classList.add('app-mounted');
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  return (
    <>
      <main className="home-theme">
        <Hero />
        <section className="container section-spacing section-solutions">
          <SectionHeading
            overline="Solutions"
            title=""
            subtitle="Explore platforms by solution category."
          />
          <Solutions />
        </section>

        <MainProducts />

        <section className="container section-spacing">
          <div className="about-top">
            <div className="about-copy">
              <p className="stars" aria-label="5 Star Rating">
                ★★★★★
              </p>
              <p className="overline">More About US</p>
              <h2 className="h2">Why Choose Robustrix IT Solutions?</h2>
              <p className="subtle">
                At Robustrix IT Solutions, we redefine industrial computing by integrating AI-ready, fanless embedded PCs that power next-generation automation, robotics, and machine vision.
              </p>
              <ul className="why">
                <li>
                  <b>Uncompromising Durability</b> — Military-grade toughness for extreme industrial conditions.
                </li>
                <li>
                  <b>AI-Powered Performance</b> — High-speed processing for robotics, smart factories, and ML applications.
                </li>
                <li>
                  <b>Silence & Efficiency</b> — Fanless cooling systems for dust-proof, noise-free operation.
                </li>
                <li>
                  <b>Seamless Integration</b> — Easy deployment without complex modifications.
                </li>
                <li>
                  <b>Industry 4.0 Ready</b> — Built for the evolving needs of industrial automation.
                </li>
              </ul>
            </div>
            <div className="about-visual">
              <img src="/pictures/home1.png" alt="Industrial AI computing" loading="lazy" decoding="async" />
            </div>
          </div>

          <div className="who">
            <h3 className="h2">Who We Are</h3>
            <p className="subtle">
              We are global pioneers in AI-driven industrial computing. Our Fanless Embedded PCs are transforming industries with machine vision, robotics, and AI automation—setting new standards in high-performance, resilient computing.
              Our mission is to empower India’s industries with AI-ready solutions that turn factories into intelligent hubs and machines into collaborative assets.
            </p>
          </div>

          <div className="apps">
            <h3 className="h2">Applications of Our AI-Driven Solutions</h3>
            <div className="app-grid">
              <article className="card app-card">
                <h4>AI Vision Systems</h4>
                <ul>
                  <li>Advanced defect detection and automated quality control.</li>
                  <li>AI-driven neural networks to enhance line efficiency.</li>
                  <li>High-speed image processing for real-time analysis.</li>
                  <li>Integration with smart cameras for automation.</li>
                </ul>
                <a className="link" href="#">Learn More</a>
              </article>
              <article className="card app-card">
                <h4>Autonomous Robotics</h4>
                <ul>
                  <li>Self-navigating AGVs for warehouse automation.</li>
                  <li>High-precision robotic welding solutions.</li>
                  <li>AI-powered drones for logistics and inspection.</li>
                  <li>Robotic arms for handling and assembly.</li>
                </ul>
                <a className="link" href="#">Learn More</a>
              </article>
              <article className="card app-card">
                <h4>Smart Infrastructure</h4>
                <ul>
                  <li>AI-driven traffic management and urban planning.</li>
                  <li>Robotic waste sorting for greener cities.</li>
                  <li>Intelligent solar farm management.</li>
                  <li>AI-driven HVAC and smart grid solutions.</li>
                </ul>
                <a className="link" href="#">Learn More</a>
              </article>
              <article className="card app-card">
                <h4>Healthcare 4.0</h4>
                <ul>
                  <li>Surgical robotics for precision care.</li>
                  <li>AI-powered diagnostics for early detection.</li>
                  <li>Automated drug dispensing systems.</li>
                  <li>AI-based patient monitoring.</li>
                </ul>
                <a className="link" href="#">Learn More</a>
              </article>
            </div>
          </div>

          <div className="bharat">
            <h3 className="h2">Our Commitment to Bharat</h3>
            <ul className="why">
              <li><b>Skill India</b> — Training engineers in edge computing, AI, and robotics.</li>
              <li><b>Sustainable Innovation</b> — Energy-efficient solutions supporting green initiatives.</li>
              <li><b>Make in India</b> — Local assembly hubs to strengthen India’s tech independence.</li>
              <li><b>Industry Collaboration</b> — Partnerships with manufacturers and researchers.</li>
              <li><b>AI Research & Development</b> — Continuous innovation for state-of-the-art solutions.</li>
            </ul>
          </div>

          <style>{`
            .about-top {
              display: grid; gap: 24px; grid-template-columns: 1fr;
              align-items: center;
              margin-bottom: 64px; /* add more space before "Who We Are" */
            }
            @media (min-width: 1024px) {
              .about-top { grid-template-columns: 1.1fr 0.9fr; }
            }
            .about-visual img {
              width: 100%; height: auto; border-radius: 12px; box-shadow: var(--shadow-md);
            }
            .stars { color: #f8b400; font-size: 22px; letter-spacing: 2px; margin-bottom: 6px; }
            .why { margin-top: 12px; display: grid; gap: 8px; }
            .who {
              margin-top: 64px; /* add more vertical separation */
              margin-bottom: 64px; /* consistent gap below */
              background: var(--color-brand-primary-dark); /* primary dark background */
              color: var(--home-text-white, #FFFFFF);
              padding: 24px;
              border-radius: 14px;
              box-shadow: var(--shadow-md);
            }
            .who .subtle { color: var(--home-text-white, #FFFFFF); }
            .apps { margin-top: 64px; margin-bottom: 64px; }
            .app-grid { display: grid; gap: 24px; grid-template-columns: repeat(1, 1fr); }
            @media (min-width: 1024px) {
              .app-grid { grid-template-columns: repeat(4, 1fr); }
            }
            .app-card { padding: 16px; display: grid; gap: 10px; }
            .app-card h4 { font-weight: 900; }
            .app-card ul { display: grid; gap: 6px; color: var(--home-text-white, #FFFFFF); }
            .bharat { margin-top: 64px; margin-bottom: 64px; }
          `}</style>
        </section>

        <section className="container section-spacing">
          <SectionHeading
            overline="Latest"
            title="Latest Blog & Articles"
            subtitle="Insights on industrial AI, fanless computing, and edge systems from Robustrix."
          />
          <News />
        </section>

        <section className="container section-spacing">
          <SectionHeading
            overline="Contact"
            title="Let's Connect"
            subtitle="+91 9090020245 • info@therobustrix.com • Dwarka Sector-12, New Delhi"
          />
          <div className="home-contact-grid">
            <div className="home-contact-card">
              <p><b>Phone:</b> <a className="link" href="tel:+919090020245">+91 9090020245</a></p>
              <p><b>Email:</b> <a className="link" href="mailto:info@therobustrix.com">info@therobustrix.com</a></p>
              <p><b>Address:</b><br />212, City Centre Mall, Dwarka Sector-12, New Delhi</p>
            </div>
            <div className="home-map-wrap">
              <iframe
                title="Robustrix IT Solutions - Map (Home)"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=212%2C%20City%20Centre%20Mall%2C%20Dwarka%20Sector-12%2C%20New%20Delhi&output=embed"
              />
            </div>
          </div>
          <style>{`
            .home-contact-grid { display: grid; gap: 16px; grid-template-columns: 1fr; }
            @media (min-width: 1024px) { .home-contact-grid { grid-template-columns: 1fr 1.6fr; } }
            .home-contact-card {
              background: #fff; border-radius: 12px; box-shadow: var(--shadow-sm);
              padding: 16px; display: grid; gap: 8px;
            }
            .home-map-wrap iframe { width: 100%; height: 360px; border: 0; border-radius: 12px; box-shadow: var(--shadow-sm); }
          `}</style>
        </section>

        <style>{`
          /* Home page theme variables from requested palette */
          .home-theme {
            --home-primary: #02C4F9;
            --home-primary-dark: #0099C4;
            --home-accent-blue: #15E3FF;
            --home-bg-dark: #022C36;
            --home-bg-black: #000000;
            --home-section-dark: #031F27;
            --home-text-white: #FFFFFF;
            --home-text-gray: #B5BABB;
            --home-highlight-cyan: #29D5FF;
            --home-button-blue: #00C9FF;
            --home-button-blue-hover: #00A3D6;
            --home-contact-purple: #8A3FFC;
            background: var(--home-bg-dark);
            color: var(--home-text-white);
          }

          /* Typography */
          .home-theme .overline { color: var(--home-accent-blue); }
          .home-theme .h2 { color: var(--home-text-white); }
          .home-theme .subtle { color: var(--home-text-gray); }
          .home-theme .link { color: var(--home-highlight-cyan); }

          /* Buttons */
          .home-theme .btn-primary {
            background: var(--home-button-blue);
            border-color: transparent;
            color: var(--home-text-white);
          }
          .home-theme .btn-primary:hover { background: var(--home-button-blue-hover); }
          .home-theme .btn-outline {
            background: transparent;
            border-color: var(--home-accent-blue);
            color: var(--home-accent-blue);
          }
          .home-theme .btn-outline:hover {
            border-color: var(--home-highlight-cyan);
            color: var(--home-highlight-cyan);
          }

          /* Cards and surfaces */
          .home-theme .card,
          .home-theme .home-contact-card,
          .home-theme .app-card {
            background: var(--home-section-dark);
            color: var(--home-text-white);
            box-shadow: 0 10px 30px rgba(0,0,0,.25);
            border: 1px solid rgba(255,255,255,0.06);
          }

          /* Solutions tiles */
          .home-theme .solutions .thumb { background: var(--home-section-dark); }
          .home-theme .solutions .label { color: var(--home-text-white); }

          /* News */
          .home-theme .news-card .date { color: var(--home-text-gray); }

          /* Contact card & map */
          .home-theme .home-map-wrap iframe { box-shadow: 0 10px 30px rgba(0,0,0,.35); }
        `}</style>
      </main>
    </>
  );
}



