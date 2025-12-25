import { useEffect } from 'react';
import { useContact } from '../context/ContactContext.jsx';
import Hero from '../components/Hero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Solutions from '../components/Solutions.jsx';
import News from '../components/News.jsx';
import MainProducts from '../components/MainProducts.jsx';
import useInView from '../hooks/useInView.js';

export default function Home() {
  const { openModal } = useContact();
  
  // Animation refs
  const aboutTopRef = useInView({ threshold: 0.1 });
  const whoRef = useInView({ threshold: 0.1 });
  const appsRef = useInView({ threshold: 0.1 });
  const appGridRef = useInView({ threshold: 0.1 });
  const bharatRef = useInView({ threshold: 0.1 });
  const comingSoonRef = useInView({ threshold: 0.1 });
  const contactRef = useInView({ threshold: 0.1 });

  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      document.documentElement.classList.add('app-mounted');
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  useEffect(() => {
    // Auto-open contact modal after 8 seconds (only once per session)
    const hasShownContact = sessionStorage.getItem('robustrix-contact-shown');
    if (hasShownContact) {
      return; // Already shown, don't show again
    }

    const autoOpenTimer = setTimeout(() => {
      openModal();
      sessionStorage.setItem('robustrix-contact-shown', 'true');
    }, 8000);

    return () => clearTimeout(autoOpenTimer);
  }, [openModal]);

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
          <div ref={aboutTopRef} className="about-top fade-in-up">
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

          <div ref={whoRef} className="who fade-in-up">
            <h3 className="h2">Who We Are</h3>
            <p className="subtle">
              We are global pioneers in AI-driven industrial computing. Our Fanless Embedded PCs are transforming industries with machine vision, robotics, and AI automation—setting new standards in high-performance, resilient computing.
              Our mission is to empower India’s industries with AI-ready solutions that turn factories into intelligent hubs and machines into collaborative assets.
            </p>
          </div>

          <div ref={appsRef} className="apps fade-in-up">
            <h3 className="h2">Applications of Our AI-Driven Solutions</h3>
            <div ref={appGridRef} className="app-grid fade-in-up-stagger">
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

          <div ref={bharatRef} className="bharat fade-in-up">
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
          <div ref={comingSoonRef} className="coming-soon-section fade-in-up">
            <div className="coming-soon-content">
              <p className="overline">Coming Soon</p>
              <h2 className="h2">Robotic AI Dog</h2>
              <p className="subtle">
                Experience the future of autonomous robotics with our revolutionary AI-powered robotic dog. 
                Designed with cutting-edge artificial intelligence and precision engineering, this advanced 
                companion brings together the power of machine learning, computer vision, and autonomous navigation 
                to deliver unprecedented capabilities.
              </p>
              <div className="coming-soon-features">
                <div className="feature-item">
                  <h4>🤖 Advanced AI Intelligence</h4>
                  <p>Powered by next-generation AI algorithms for intelligent decision-making and adaptive behavior.</p>
                </div>
                <div className="feature-item">
                  <h4>👁️ Computer Vision</h4>
                  <p>State-of-the-art vision systems for object recognition, navigation, and real-time environment mapping.</p>
                </div>
                <div className="feature-item">
                  <h4>🚀 Autonomous Navigation</h4>
                  <p>Self-navigating capabilities with obstacle avoidance and path planning for seamless operation.</p>
                </div>
                <div className="feature-item">
                  <h4>🔋 Long-lasting Performance</h4>
                  <p>Optimized power management for extended operational hours with efficient battery technology.</p>
                </div>
              </div>
              <p className="coming-soon-note">
                Stay tuned for the official launch of our Robotic AI Dog. Be among the first to experience 
                the next generation of intelligent robotics solutions.
              </p>
            </div>
            <div className="coming-soon-visual">
              <img 
                src="/products/robodog.jpeg" 
                alt="Robotic AI Dog - Coming Soon" 
                loading="lazy" 
                decoding="async"
              />
              <div className="coming-soon-badge">Coming Soon</div>
            </div>
          </div>
          <style>{`
            .coming-soon-section {
              display: grid;
              gap: 32px;
              grid-template-columns: 1fr;
              align-items: center;
              margin-bottom: 48px;
              background: var(--home-section-dark);
              padding: 32px;
              border-radius: 16px;
              box-shadow: 0 10px 40px rgba(0,0,0,.3);
              border: 1px solid rgba(2, 196, 249, 0.1);
            }
            @media (min-width: 1024px) {
              .coming-soon-section {
                grid-template-columns: 1fr 1fr;
                gap: 48px;
                padding: 48px;
              }
            }
            .coming-soon-content {
              display: grid;
              gap: 16px;
            }
            .coming-soon-features {
              display: grid;
              gap: 16px;
              margin-top: 24px;
            }
            .feature-item {
              padding: 16px;
              background: rgba(2, 196, 249, 0.05);
              border-radius: 8px;
              border-left: 3px solid var(--home-accent-blue);
            }
            .feature-item h4 {
              font-size: 18px;
              font-weight: 700;
              color: var(--home-accent-blue);
              margin-bottom: 8px;
              font-family: 'Orbitron', ui-sans-serif, system-ui;
            }
            .feature-item p {
              color: var(--home-text-gray);
              font-size: 14px;
              line-height: 1.6;
            }
            .coming-soon-note {
              margin-top: 24px;
              padding: 16px;
              background: rgba(2, 196, 249, 0.1);
              border-radius: 8px;
              color: var(--home-text-white);
              font-style: italic;
              border: 1px solid rgba(2, 196, 249, 0.2);
            }
            .coming-soon-visual {
              position: relative;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 10px 30px rgba(0,0,0,.4);
            }
            .coming-soon-visual img {
              width: 100%;
              height: auto;
              display: block;
              border-radius: 12px;
            }
            .coming-soon-badge {
              position: absolute;
              top: 20px;
              right: 20px;
              background: var(--home-button-blue);
              color: var(--home-text-white);
              padding: 8px 16px;
              border-radius: 20px;
              font-weight: 700;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 1px;
              box-shadow: 0 4px 12px rgba(0, 201, 255, 0.4);
              animation: pulse 2s infinite;
            }
            @keyframes pulse {
              0%, 100% { opacity: 1; transform: scale(1); }
              50% { opacity: 0.9; transform: scale(1.05); }
            }
          `}</style>
        </section>

        <section className="container section-spacing">
          <SectionHeading
            overline="Contact"
            title="Let's Connect"
            subtitle="+91 9090020245 • info@therobustrix.com • Dwarka Sector-12, New Delhi"
          />
          <div ref={contactRef} className="home-contact-grid fade-in-up">
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



