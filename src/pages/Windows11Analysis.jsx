import useInView from '../hooks/useInView.js';
import SectionHeading from '../components/SectionHeading.jsx';

export default function Windows11Analysis() {
  // Animation refs
  const heroRef = useInView({ threshold: 0.1 });
  const whyRef = useInView({ threshold: 0.1 });
  const featuresGridRef = useInView({ threshold: 0.1 });
  const hardwareRef = useInView({ threshold: 0.1 });
  const hardwareGridRef = useInView({ threshold: 0.1 });
  const robustrixRef = useInView({ threshold: 0.1 });
  const robustrixGridRef = useInView({ threshold: 0.1 });
  const decisionRef = useInView({ threshold: 0.1 });
  const ctaRef = useInView({ threshold: 0.1 });

  return (
    <main>
      {/* Hero Section */}
      <section ref={heroRef} className="win11-hero fade-in-up">
        <div className="container">
          <div className="win11-hero-content">
            <h1 className="win11-title">Windows 11 Analysis</h1>
            <h2 className="win11-subtitle">The Future of Computing is Here</h2>
            <p className="win11-intro">
              Windows 11 represents a significant leap forward in operating system design, 
              engineered to leverage the full power of modern hardware. Discover why Windows 11 
              is the ideal choice for your business and how Robustrix hardware maximizes its potential.
            </p>
          </div>
          <div className="win11-badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12L9 2L15 12L9 22L3 12Z" fill="currentColor"/>
            </svg>
            <span>Optimized for Windows 11</span>
          </div>
        </div>
      </section>

      {/* Why Windows 11 Section */}
      <section className="container section-spacing">
        <div ref={whyRef} className="fade-in-up">
          <SectionHeading
            overline="Why Windows 11?"
            title="A Modern Operating System Built for Today's Hardware"
            subtitle="Windows 11 delivers enhanced performance, security, and productivity features that take full advantage of modern processors, graphics, and display technologies."
          />
        </div>

        <div ref={featuresGridRef} className="win11-features-grid fade-in-up-stagger">
          <article className="card feature-card">
            <div className="feature-icon">⚡</div>
            <h3 className="feature-title">Enhanced Performance</h3>
            <p className="feature-desc">
              Windows 11 is optimized for modern multi-core processors, delivering faster boot times, 
              improved multitasking, and better overall system responsiveness. DirectStorage and 
              Auto HDR leverage modern hardware for gaming and multimedia.
            </p>
          </article>

          <article className="card feature-card">
            <div className="feature-icon">🔒</div>
            <h3 className="feature-title">Advanced Security</h3>
            <p className="feature-desc">
              Built-in hardware-based security with TPM 2.0 support, Windows Hello biometric authentication, 
              and Microsoft Defender Antivirus. Secure Boot ensures your system starts with trusted software only.
            </p>
          </article>

          <article className="card feature-card">
            <div className="feature-icon">🎨</div>
            <h3 className="feature-title">Modern UI & UX</h3>
            <p className="feature-desc">
              Redesigned interface with rounded corners, simplified Start menu, and Snap Layouts for 
              improved productivity. Dark mode and improved accessibility features enhance user experience.
            </p>
          </article>

          <article className="card feature-card">
            <div className="feature-icon">🌐</div>
            <h3 className="feature-title">Microsoft Teams Integration</h3>
            <p className="feature-desc">
              Seamless communication with built-in Microsoft Teams, making collaboration effortless 
              for remote and hybrid work environments. Direct integration with Windows 11 interface.
            </p>
          </article>

          <article className="card feature-card">
            <div className="feature-icon">⚙️</div>
            <h3 className="feature-title">Better Resource Management</h3>
            <p className="feature-desc">
              Improved memory management and CPU scheduling optimize system resources, resulting in 
              better battery life for laptops and more efficient power consumption overall.
            </p>
          </article>

          <article className="card feature-card">
            <div className="feature-icon">🔄</div>
            <h3 className="feature-title">Future-Ready Platform</h3>
            <p className="feature-desc">
              Regular updates and new features keep your system current. Support for latest APIs, 
              frameworks, and emerging technologies ensures long-term compatibility.
            </p>
          </article>
        </div>
      </section>

      {/* How Windows 11 Uses Modern Hardware Better */}
      <section className="container section-spacing win11-hardware-section">
        <div ref={hardwareRef} className="fade-in-up">
          <SectionHeading
            overline="Hardware Optimization"
            title="How Windows 11 Leverages Modern Hardware"
            subtitle="Windows 11 is specifically designed to unlock the full potential of today's advanced hardware components, delivering superior performance and efficiency."
          />
        </div>

        <div ref={hardwareGridRef} className="win11-hardware-grid fade-in-up-stagger">
          <div className="hardware-item">
            <div className="hardware-header">
              <h3>Multi-Core Processors</h3>
              <span className="hardware-badge">CPU</span>
            </div>
            <p>
              Windows 11 features improved thread scheduling that efficiently distributes workloads 
              across all CPU cores. Support for Intel 12th Gen and newer processors with hybrid 
              architecture (Performance and Efficiency cores) ensures optimal performance for both 
              single-threaded and multi-threaded applications.
            </p>
            <ul>
              <li>Better utilization of high-core-count processors</li>
              <li>Optimized for Intel's Thread Director technology</li>
              <li>Enhanced performance for productivity and creative workloads</li>
            </ul>
          </div>

          <div className="hardware-item">
            <div className="hardware-header">
              <h3>Modern Graphics & Displays</h3>
              <span className="hardware-badge">GPU</span>
            </div>
            <p>
              DirectStorage API enables faster game loading by allowing GPUs to directly access 
              NVMe SSDs. Auto HDR automatically enhances SDR content for HDR displays, providing 
              richer colors and better contrast. Improved multi-monitor support with better scaling.
            </p>
            <ul>
              <li>DirectStorage for NVMe SSD acceleration</li>
              <li>Auto HDR for compatible displays</li>
              <li>Better support for high-resolution and multi-monitor setups</li>
            </ul>
          </div>

          <div className="hardware-item">
            <div className="hardware-header">
              <h3>Fast Storage Solutions</h3>
              <span className="hardware-badge">Storage</span>
            </div>
            <p>
              Optimized for NVMe SSDs with better I/O prioritization and reduced latency. 
              Windows 11 can boot faster and launch applications more quickly on modern SSD storage.
            </p>
            <ul>
              <li>Faster boot times with NVMe SSDs</li>
              <li>Improved application launch speeds</li>
              <li>Better file system performance</li>
            </ul>
          </div>

          <div className="hardware-item">
            <div className="hardware-header">
              <h3>Memory Management</h3>
              <span className="hardware-badge">RAM</span>
            </div>
            <p>
              Enhanced memory compression reduces RAM usage while maintaining performance. 
              Better page file management and improved memory allocation for applications.
            </p>
            <ul>
              <li>More efficient RAM utilization</li>
              <li>Better handling of large applications</li>
              <li>Improved multitasking capabilities</li>
            </ul>
          </div>

          <div className="hardware-item">
            <div className="hardware-header">
              <h3>Security Hardware</h3>
              <span className="hardware-badge">TPM 2.0</span>
            </div>
            <p>
              Hardware-based security with TPM 2.0 is required for Windows 11, providing 
              encryption keys, secure boot, and protection against firmware attacks. Windows Hello 
              uses dedicated hardware for biometric authentication.
            </p>
            <ul>
              <li>TPM 2.0 requirement ensures hardware-level security</li>
              <li>Secure Boot protection</li>
              <li>BitLocker encryption acceleration</li>
            </ul>
          </div>

          <div className="hardware-item">
            <div className="hardware-header">
              <h3>Connectivity & I/O</h3>
              <span className="hardware-badge">USB/Thunderbolt</span>
            </div>
            <p>
              Native support for USB 4 and Thunderbolt 4 with improved power delivery and 
              data transfer speeds. Better Wi-Fi 6/6E support for faster wireless connectivity.
            </p>
            <ul>
              <li>USB 4 and Thunderbolt 4 support</li>
              <li>Wi-Fi 6E for faster wireless networks</li>
              <li>Improved peripheral device management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Robustrix PCs & Monitors are Ideal */}
      <section className="container section-spacing">
        <div ref={robustrixRef} className="fade-in-up">
          <SectionHeading
            overline="Robustrix Hardware"
            title="Why Our PCs & Monitors are Perfect for Windows 11"
            subtitle="Robustrix industrial PCs and monitors are engineered to meet and exceed Windows 11 requirements, ensuring optimal performance and reliability."
          />
        </div>

        <div ref={robustrixGridRef} className="robustrix-advantages fade-in-up-stagger">
          <article className="advantage-card">
            <div className="advantage-icon">💻</div>
            <h3>Windows 11 Ready</h3>
            <p>
              All our modern PCs come with TPM 2.0 support, UEFI firmware, and compatible processors 
              that meet Windows 11 requirements. Pre-configured systems ensure seamless installation 
              and optimization.
            </p>
          </article>

          <article className="advantage-card">
            <div className="advantage-icon">🚀</div>
            <h3>Powerful Processors</h3>
            <p>
              Our systems feature Intel Core 12th/13th/14th Gen processors and Intel Processor N-Series, 
              perfectly matched with Windows 11's multi-core optimizations. Ideal for demanding 
              productivity and AI workloads.
            </p>
          </article>

          <article className="advantage-card">
            <div className="advantage-icon">💾</div>
            <h3>Fast NVMe Storage</h3>
            <p>
              Multiple M.2 NVMe SSD slots enable lightning-fast boot times and application launches. 
              DirectStorage support for gaming and content creation applications.
            </p>
          </article>

          <article className="advantage-card">
            <div className="advantage-icon">🖥️</div>
            <h3>High-Quality Displays</h3>
            <p>
              Our 21.5" Digital LCD Monitors feature Full HD resolution, excellent color accuracy, 
              and support for Windows 11's HDR features. Perfect for professional work and 
              multimedia applications.
            </p>
          </article>

          <article className="advantage-card">
            <div className="advantage-icon">🔐</div>
            <h3>Enterprise Security</h3>
            <p>
              TPM 2.0 standard across all models ensures hardware-level security for Windows 11. 
              Secure Boot support and encryption capabilities for sensitive business data.
            </p>
          </article>

          <article className="advantage-card">
            <div className="advantage-icon">⚡</div>
            <h3>Durability & Reliability</h3>
            <p>
              Fanless designs and industrial-grade components ensure long-term reliability. 
              Wide operating temperature ranges and shock/vibration resistance for demanding environments.
            </p>
          </article>

          <article className="advantage-card">
            <div className="advantage-icon">🔌</div>
            <h3>Modern Connectivity</h3>
            <p>
              Multiple USB 3.2 Gen2 ports, Thunderbolt support, and high-speed networking options. 
              Perfect for Windows 11's enhanced peripheral and connectivity features.
            </p>
          </article>

          <article className="advantage-card">
            <div className="advantage-icon">🛠️</div>
            <h3>Easy Deployment</h3>
            <p>
              Pre-installed Windows 11 or easy upgrade paths. Comprehensive documentation and 
              support for enterprise deployment scenarios.
            </p>
          </article>
        </div>
      </section>

      {/* Buying Decision Section */}
      <section className="container section-spacing">
        <div ref={decisionRef} className="win11-decision-section fade-in-up">
          <SectionHeading
            overline="Making the Right Choice"
            title="How This Helps Your Buying Decision"
            subtitle="Understanding Windows 11 compatibility and hardware requirements ensures you make an informed investment."
          />

          <div className="decision-grid">
            <div className="decision-card">
              <h3>✅ Future-Proof Investment</h3>
              <p>
                Windows 11 is Microsoft's latest operating system with long-term support until 2031. 
                Investing in Windows 11-compatible hardware ensures your systems remain current and 
                supported for years to come. Avoid costly upgrades and compatibility issues later.
              </p>
            </div>

            <div className="decision-card">
              <h3>⚙️ Performance Optimization</h3>
              <p>
                Windows 11 delivers better performance on modern hardware. Pairing it with Robustrix 
                PCs featuring latest processors and fast storage maximizes your productivity and 
                workflow efficiency. Get the most out of your hardware investment.
              </p>
            </div>

            <div className="decision-card">
              <h3>🔒 Enhanced Security Posture</h3>
              <p>
                Windows 11's security improvements, combined with Robustrix hardware featuring TPM 2.0 
                and secure boot capabilities, provide enterprise-grade protection. Essential for 
                businesses handling sensitive data and maintaining compliance standards.
              </p>
            </div>

            <div className="decision-card">
              <h3>💰 Cost Efficiency</h3>
              <p>
                Our industrial PCs offer exceptional value with Windows 11 compatibility built-in. 
                No need for separate upgrades or additional security hardware. Long-lasting fanless 
                designs reduce maintenance costs and extend system lifespans.
              </p>
            </div>

            <div className="decision-card">
              <h3>📈 Productivity Boost</h3>
              <p>
                Windows 11's improved UI, better multitasking, and modern features combined with 
                Robustrix hardware deliver a superior user experience. Faster boot times, smoother 
                application performance, and better resource management increase daily productivity.
              </p>
            </div>

            <div className="decision-card">
              <h3>🌐 Seamless Integration</h3>
              <p>
                Windows 11 integrates seamlessly with Microsoft 365, Teams, and Azure services. 
                Robustrix hardware ensures reliable connectivity and performance for cloud-based 
                workflows and remote collaboration tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="win11-cta-section fade-in-up">
        <div className="container">
          <div className="win11-cta-content">
            <h2 className="win11-cta-title">Ready to Upgrade to Windows 11?</h2>
            <p className="win11-cta-text">
              Explore our Windows 11-ready PCs and monitors designed for optimal performance, 
              security, and reliability. Contact our team to find the perfect solution for your needs.
            </p>
            <div className="win11-cta-buttons">
              <a href="/products" className="btn btn-primary">View Products</a>
              <a href="https://wa.me/919090020245" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Contact Sales</a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Hero Section */
        .win11-hero {
          background: linear-gradient(135deg, #0078d4 0%, #106ebe 50%, #005a9e 100%);
          color: #ffffff;
          padding-block: clamp(60px, 10vw, 120px);
          position: relative;
          overflow: hidden;
        }
        .win11-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          opacity: 0.3;
        }
        .win11-hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
        }
        .win11-title {
          font-size: clamp(42px, 6vw, 64px);
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 16px;
          text-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }
        .win11-subtitle {
          font-size: clamp(24px, 3.5vw, 36px);
          font-weight: 700;
          margin-bottom: 24px;
          opacity: 0.95;
        }
        .win11-intro {
          font-size: clamp(16px, 2vw, 20px);
          line-height: 1.6;
          opacity: 0.9;
          max-width: 800px;
        }
        .win11-badge {
          position: absolute;
          top: 40px;
          right: var(--container-pad);
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
          padding: 12px 20px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 700;
          border: 1px solid rgba(255,255,255,0.3);
        }
        .win11-badge svg {
          width: 20px;
          height: 20px;
        }

        /* Features Grid */
        .win11-features-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 24px;
          margin-top: 48px;
        }
        @media (min-width: 768px) {
          .win11-features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .win11-features-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .feature-card {
          padding: 32px;
          display: grid;
          gap: 16px;
          text-align: center;
        }
        .feature-icon {
          font-size: 48px;
          margin-bottom: 8px;
        }
        .feature-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--color-ink-900);
        }
        .feature-desc {
          color: var(--color-ink-700);
          line-height: 1.6;
        }

        /* Hardware Section */
        .win11-hardware-section {
          background: var(--color-bg-alt);
          margin: 0;
          padding-inline: var(--container-pad);
        }
        .win11-hardware-section .container {
          background: transparent;
        }
        .win11-hardware-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 24px;
          margin-top: 48px;
        }
        @media (min-width: 1024px) {
          .win11-hardware-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .hardware-item {
          background: var(--color-bg);
          padding: 32px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
        }
        .hardware-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .hardware-header h3 {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--color-ink-900);
        }
        .hardware-badge {
          background: var(--color-brand-primary);
          color: var(--color-ink-900);
          padding: 4px 12px;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .hardware-item p {
          color: var(--color-ink-700);
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .hardware-item ul {
          list-style: none;
          padding: 0;
          display: grid;
          gap: 8px;
        }
        .hardware-item ul li {
          color: var(--color-ink-700);
          padding-left: 24px;
          position: relative;
        }
        .hardware-item ul li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--color-brand-primary);
          font-weight: 800;
        }

        /* Robustrix Advantages */
        .robustrix-advantages {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 24px;
          margin-top: 48px;
        }
        @media (min-width: 768px) {
          .robustrix-advantages {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .robustrix-advantages {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .advantage-card {
          background: var(--color-bg-alt);
          padding: 28px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
          text-align: center;
          display: grid;
          gap: 12px;
          border: 2px solid transparent;
          transition: border-color var(--transition), transform var(--transition);
        }
        .advantage-card:hover {
          border-color: var(--color-brand-primary);
          transform: translateY(-4px);
        }
        .advantage-icon {
          font-size: 40px;
          margin-bottom: 8px;
        }
        .advantage-card h3 {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--color-ink-900);
        }
        .advantage-card p {
          color: var(--color-ink-700);
          line-height: 1.6;
          font-size: 0.95rem;
        }

        /* Decision Section */
        .win11-decision-section {
          background: linear-gradient(180deg, var(--color-bg) 0%, var(--color-bg-alt) 100%);
          padding: 48px 0;
          border-radius: var(--radius-lg);
        }
        .decision-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 24px;
          margin-top: 48px;
        }
        @media (min-width: 768px) {
          .decision-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .decision-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .decision-card {
          background: var(--color-bg);
          padding: 32px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
          border-left: 4px solid var(--color-brand-primary);
        }
        .decision-card h3 {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--color-ink-900);
          margin-bottom: 16px;
        }
        .decision-card p {
          color: var(--color-ink-700);
          line-height: 1.7;
        }

        /* CTA Section */
        .win11-cta-section {
          background: linear-gradient(135deg, var(--color-brand-primary-dark) 0%, var(--color-brand-primary) 100%);
          color: #ffffff;
          padding-block: clamp(60px, 8vw, 100px);
          margin-top: 48px;
        }
        .win11-cta-content {
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }
        .win11-cta-title {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 900;
          margin-bottom: 24px;
        }
        .win11-cta-text {
          font-size: clamp(16px, 2vw, 20px);
          line-height: 1.6;
          margin-bottom: 32px;
          opacity: 0.95;
        }
        .win11-cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .win11-cta-section .btn-outline {
          border-color: rgba(255,255,255,0.5);
          color: #ffffff;
        }
        .win11-cta-section .btn-outline:hover {
          border-color: #ffffff;
          background: rgba(255,255,255,0.1);
        }

        @media (max-width: 1023px) {
          .win11-badge {
            position: static;
            margin-top: 24px;
            display: inline-flex;
          }
        }
      `}</style>
    </main>
  );
}


