import { useState } from 'react';

export default function About() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  function onChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }
  function onSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert('Please fill name, email, and message.');
      return;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', phone: '', email: '', message: '' });
  }
  function imgFallback(e) {
    e.currentTarget.src = '/pictures/aiplatforms.jpg';
  }
  const gallery = Array.from({ length: 12 }).map((_, i) =>
    `https://source.unsplash.com/800x600/?industrial,ai,robotics,factory,automation&sig=${i + 1}`
  );
  return (
    <main>
      <section className="ai-hero about-hero">
        <div className="container">
          <h1 className="ai-title">About Us</h1>
          <h2 className="ai-kicker">Engineering the Future of Industrial AI Computing</h2>
          <p className="ai-sub">
            At Robustrix IT Solutions, we are redefining the landscape of industrial computing with cutting-edge Fanless AI Embedded PCs. Our mission is simple yet ambitious: to build resilient, AI-powered solutions that empower industries to embrace the future of automation, robotics, and machine vision. Designed for India’s harshest industrial environments, our technology thrives where others fail, ensuring unparalleled durability, efficiency, and performance.
          </p>
          <p className="ai-sub">
            With a vision to make industrial computing smarter, stronger, and more sustainable, Robustrix IT Solutions is at the forefront of Industry 4.0, delivering AI-driven solutions that transform machines into intelligent collaborators and factories into innovation hubs.
          </p>
        </div>
      </section>

      <section className="container section-spacing">
        <h3 className="h2">Our Story</h3>
        <p className="ai-sub">
          Born from the need for high-performance, industrial-grade computing, Robustrix IT Solutions was founded to bridge the gap between AI-driven innovation and industrial reliability. We recognized that traditional computing systems were ill-equipped to handle the rigorous demands of manufacturing, automation, and edge AI applications. So, we set out to engineer something different—technology that’s not just powerful, but also silent, fanless, and built to last.
        </p>
        <p className="ai-sub">
          As we launch our cutting-edge solutions across India’s industrial sector, our goal is clear: to revolutionize the way businesses integrate AI into their operations. From smart manufacturing to autonomous robotics, we are shaping the future of industrial technology, one fanless AI PC at a time.
        </p>
      </section>

      <section className="container section-spacing">
        <h3 className="h2">What Makes Us Different?</h3>
        <div className="about-grid">
          <article className="about-card">
            <img src="https://source.unsplash.com/800x450/?industrial,ai,computer,edge" alt="AI-Driven Industrial Computing" onError={imgFallback} loading="lazy" decoding="async" />
            <h4>AI-Driven Industrial Computing</h4>
            <p>We design and manufacture AI-ready, fanless embedded PCs that power a wide range of industrial applications, including machine vision, smart automation, and autonomous robotics.</p>
          </article>
          <article className="about-card">
            <img src="https://source.unsplash.com/800x450/?fanless,heatsink,embedded,pc" alt="Silent, Fanless, and Maintenance-Free" onError={imgFallback} loading="lazy" decoding="async" />
            <h4>Silent, Fanless, and Maintenance-Free</h4>
            <p>By eliminating fans and moving parts, we deliver ultra-durable, noiseless computing solutions that require minimal maintenance while delivering maximum efficiency.</p>
          </article>
          <article className="about-card">
            <img src="https://source.unsplash.com/800x450/?factory,dust,heat,industrial" alt="Built for the Harshest Conditions" onError={imgFallback} loading="lazy" decoding="async" />
            <h4>Built for the Harshest Conditions</h4>
            <p>Our fanless industrial PCs are engineered to function flawlessly in dusty, high-temperature, and vibration-heavy environments, ensuring maximum reliability in extreme conditions.</p>
          </article>
          <article className="about-card">
            <img src="https://source.unsplash.com/800x450/?green,energy,efficiency,industrial" alt="Energy-Efficient & Sustainable" onError={imgFallback} loading="lazy" decoding="async" />
            <h4>Energy-Efficient & Sustainable</h4>
            <p>We believe in sustainable innovation. Our low-power AI computing solutions help industries reduce energy consumption and move towards a greener future.</p>
          </article>
          <article className="about-card">
            <img src="https://source.unsplash.com/800x450/?industry4,automation,robotics" alt="Industry 4.0-Ready Solutions" onError={imgFallback} loading="lazy" decoding="async" />
            <h4>Industry 4.0-Ready Solutions</h4>
            <p>We help businesses adopt smart automation, predictive maintenance, and real-time analytics to optimize performance and reduce downtime.</p>
          </article>
          <article className="about-card">
            <img src="https://source.unsplash.com/800x450/?india,manufacturing,technology" alt="Committed to Make in India" onError={imgFallback} loading="lazy" decoding="async" />
            <h4>Committed to 'Make in India'</h4>
            <p>We are setting up local assembly hubs and collaborating with Indian engineers to drive domestic manufacturing and strengthen India's technological independence.</p>
          </article>
        </div>
      </section>

      <section className="container section-spacing">
        <h3 className="h2">Industrial AI in Pictures</h3>
        <div className="gallery">
          {gallery.map((src, i) => (
            <img key={i} src={src} alt="Industrial AI" loading="lazy" decoding="async" onError={imgFallback} />
          ))}
        </div>
      </section>

      <section className="container section-spacing">
        <h3 className="h2">Our Core Values</h3>
        <ul className="list">
          <li><b>Innovation</b> – We push the boundaries of AI-driven industrial computing.</li>
          <li><b>Reliability</b> – Built to withstand the toughest conditions.</li>
          <li><b>Sustainability</b> – Energy-efficient designs for greener automation.</li>
          <li><b>Collaboration</b> – Partnering with businesses and researchers.</li>
        </ul>
      </section>

      <section className="container section-spacing">
        <h3 className="h2">Where Our Technology is Making an Impact</h3>
        <div className="impact-grid">
          <article>
            <h4>AI Vision Systems</h4>
            <ul>
              <li>Automating defect detection in manufacturing and quality control.</li>
              <li>AI-powered real-time image processing for enhanced production efficiency.</li>
              <li>Machine learning algorithms for predictive maintenance and inspection.</li>
            </ul>
          </article>
          <article>
            <h4>Autonomous Robotics</h4>
            <ul>
              <li>AI-driven AGVs and warehouse drones for logistics automation.</li>
              <li>Precision welding robots to ensure flawless manufacturing.</li>
              <li>Smart robotic arms that streamline assembly-line operations.</li>
            </ul>
          </article>
          <article>
            <h4>Smart Infrastructure</h4>
            <ul>
              <li>AI-driven AGVs and warehouse drones for logistics automation.</li>
              <li>Precision welding robots to ensure flawless manufacturing.</li>
              <li>Smart robotic arms that streamline assembly-line operations.</li>
            </ul>
          </article>
          <article>
            <h4>Healthcare 4.0</h4>
            <ul>
              <li>Surgical robotics enhancing precision in medical procedures.</li>
              <li>AI-powered medical diagnostics ensuring quicker, precise evaluations.</li>
              <li>Automated drug dispensing to reduce human errors.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="container section-spacing">
        <h3 className="h2">Our Commitment to Bharat</h3>
        <ul className="list">
          <li><b>Skill India</b> – Training programs in edge computing and AI automation.</li>
          <li><b>Make in India</b> – Domestic production and assembly hubs.</li>
          <li><b>Sustainable Growth</b> – Energy-efficient solutions minimizing carbon footprints.</li>
          <li><b>Industrial Innovation</b> – Partnerships for next-gen AI-powered solutions.</li>
        </ul>
      </section>

      <section className="ai-cta">
        <div className="container">
          <h3 className="h2">Join the Silent, Smart Revolution</h3>
          <p className="ai-sub">We invite you to be a part of this transformation. Whether you are an industrial manufacturer, automation expert, or AI researcher, Robustrix IT Solutions is your trusted partner.</p>
        </div>
      </section>

      <section className="container section-spacing">
        <h3 className="h2">Contact Us</h3>
        <form className="contact" onSubmit={onSubmit}>
          <div className="row">
            <label>Name</label>
            <input name="name" value={form.name} onChange={onChange} placeholder="Name" />
          </div>
          <div className="row">
            <label>Phone Number</label>
            <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone Number" />
          </div>
          <div className="row">
            <label>Email</label>
            <input name="email" type="email" value={form.email} onChange={onChange} placeholder="Email" />
          </div>
          <div className="row">
            <label>Message</label>
            <textarea name="message" rows="4" value={form.message} onChange={onChange} placeholder="Message" />
          </div>
          <button className="btn btn-primary" type="submit">Submit</button>
          {submitted && <p className="ok">Thanks! We’ll reach out shortly.</p>}
        </form>
      </section>

      <section className="container section-spacing">
        <h3 className="h2">Find Us</h3>
        <div className="contact-grid">
          <div className="contact-card">
            <p><b>Phone:</b> <a className="link" href="tel:+919090020245">+91 9090020245</a></p>
            <p><b>Email:</b> <a className="link" href="mailto:info@therobustrix.com">info@therobustrix.com</a></p>
            <p><b>Address:</b><br />212, City Centre Mall, Dwarka Sector-12, New Delhi</p>
          </div>
          <div className="map-wrap">
            <iframe
              title="Robustrix IT Solutions - Map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=212%2C%20City%20Centre%20Mall%2C%20Dwarka%20Sector-12%2C%20New%20Delhi&output=embed"
            />
          </div>
        </div>
      </section>

      <style>{`
        .ai-hero {
          background: linear-gradient(180deg, #f4f7ff 0%, #ffffff 100%);
          border-bottom: 1px solid var(--color-ink-100);
          padding-block: clamp(28px, 6vw, 48px);
        }
        .about-hero {
          background:
            linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.15)),
            url('https://source.unsplash.com/1600x600/?industrial,robotics,factory') center/cover no-repeat;
          color: #fff;
        }
        .about-hero .ai-kicker, .about-hero .ai-sub, .about-hero .ai-title { color: #fff; text-shadow: 0 2px 10px rgba(0,0,0,.35); }
        .ai-title { font-size: clamp(28px, 5vw, 42px); font-weight: 900; line-height: 1.1; }
        .ai-kicker { color: var(--color-brand-primary); margin-top: 8px; }
        .ai-sub { margin-top: 10px; color: var(--color-ink-600, #3d4656); max-width: 920px; }
        /* Ensure the About hero text stays white, overriding later generic rules */
        .about-hero .ai-title, .about-hero .ai-kicker, .about-hero .ai-sub { color: #fff !important; }
        .about-grid {
          display: grid; gap: 16px;
          grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width: 1024px) {
          .about-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .about-card {
          background: #fff; border-radius: 12px; box-shadow: var(--shadow-sm);
          padding: 14px; display: grid; gap: 8px;
        }
        .about-card img { width: 100%; height: 160px; object-fit: cover; border-radius: 8px; }
        .impact-grid { display: grid; gap: 16px; grid-template-columns: repeat(1, 1fr); }
        @media (min-width: 1024px) { .impact-grid { grid-template-columns: repeat(2, 1fr); } }
        .list { margin-top: 10px; display: grid; gap: 6px; }
        .ai-cta { background: linear-gradient(90deg, #f5f8ff, #ffffff); border-top: 1px solid var(--color-ink-100); border-bottom: 1px solid var(--color-ink-100); padding-block: 24px; }
        .contact { display: grid; gap: 12px; max-width: 640px; }
        .row { display: grid; gap: 6px; }
        input, textarea {
          border: 1px solid var(--color-ink-200); border-radius: 10px; padding: 10px;
          outline: none; transition: border-color var(--transition), box-shadow var(--transition);
        }
        input:focus, textarea:focus { border-color: var(--color-brand-primary); box-shadow: 0 0 0 3px rgba(30, 74, 168, .12); }
        .ok { color: var(--color-brand-primary); margin-top: 8px; font-weight: 700; }
        .contact-grid { display: grid; gap: 16px; grid-template-columns: 1fr; }
        @media (min-width: 1024px) { .contact-grid { grid-template-columns: 1fr 1.6fr; } }
        .contact-card {
          background: #fff; border-radius: 12px; box-shadow: var(--shadow-sm);
          padding: 16px; display: grid; gap: 8px;
        }
        .map-wrap iframe {
          width: 100%; height: 360px; border: 0; border-radius: 12px; box-shadow: var(--shadow-sm);
        }
        .gallery {
          display: grid; gap: 12px; grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width: 1024px) { .gallery { grid-template-columns: repeat(4, 1fr); } }
        .gallery img {
          width: 100%; height: 180px; object-fit: cover; border-radius: 10px; box-shadow: var(--shadow-sm);
          transition: transform var(--transition);
        }
        .gallery img:hover { transform: scale(1.02); }
      `}</style>
    </main>
  );
}


