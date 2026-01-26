import { useState, useEffect } from 'react';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = 'info@therobustrix.com';
    const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Phone Number: ${formData.phone}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );

    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    alert('Thank you for contacting us! Your email client will open with the message pre-filled.');
    setFormData({ name: '', phone: '', email: '', message: '' });
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="contact-modal-overlay" onClick={handleBackdropClick}>
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        <div className="contact-modal-accent" aria-hidden="true" />
        <button
          className="contact-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          <span className="contact-modal-close-icon">×</span>
        </button>

        <div className="contact-modal-content">
          <div className="contact-modal-header">
            <span className="contact-modal-overline">Get in touch</span>
            <h2 className="contact-modal-title">Contact Us</h2>
            <p className="contact-modal-tagline">
              Edge AI · Embedded · Industrial compute
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-phone">Phone</label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 …"
                  autoComplete="tel"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Email</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@company.com"
                autoComplete="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Tell us about your project or inquiry…"
              />
            </div>
            <button type="submit" className="contact-submit">
              <span className="contact-submit-text">Send message</span>
              <span className="contact-submit-arrow">→</span>
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .contact-modal-overlay {
          --contact-cyan: #02C4F9;
          --contact-cyan-dim: rgba(2, 196, 249, 0.4);
          --contact-purple: #8A3FFC;
          --contact-bg: rgba(3, 31, 39, 0.25);
          --contact-border: rgba(2, 196, 249, 0.2);
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: grid;
          place-items: center;
          padding: 20px;
          background: rgba(2, 44, 54, 0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          animation: contactOverlayIn 0.35s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        @keyframes contactOverlayIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .contact-modal {
          position: relative;
          width: 100%;
          max-width: 520px;
          max-height: 90vh;
          overflow: hidden;
          background: var(--contact-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--contact-border);
          border-radius: 20px;
          box-shadow:
            0 0 0 1px rgba(2, 196, 249, 0.08),
            0 24px 64px rgba(0, 0, 0, 0.5),
            0 0 80px rgba(2, 196, 249, 0.08);
          animation: contactModalIn 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        @keyframes contactModalIn {
          from {
            opacity: 0;
            transform: scale(0.96) translateY(16px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .contact-modal-accent {
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(
            180deg,
            var(--contact-cyan) 0%,
            var(--contact-purple) 100%
          );
          box-shadow: 0 0 20px var(--contact-cyan-dim);
        }

        .contact-modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 44px;
          height: 44px;
          border: 1px solid var(--contact-border);
          border-radius: 50%;
          background: rgba(2, 44, 54, 0.25);
          color: var(--color-ink-700, #B5BABB);
          cursor: pointer;
          display: grid;
          place-items: center;
          transition: color 0.2s, border-color 0.2s, box-shadow 0.2s, transform 0.2s;
          z-index: 2;
        }
        .contact-modal-close:hover {
          color: var(--contact-cyan);
          border-color: var(--contact-cyan);
          box-shadow: 0 0 20px var(--contact-cyan-dim);
          transform: scale(1.05);
        }
        .contact-modal-close-icon {
          font-size: 22px;
          line-height: 1;
          font-weight: 300;
        }

        .contact-modal-content {
          position: relative;
          padding: 40px 36px 36px 40px;
          overflow-y: auto;
          max-height: calc(90vh - 0px);
        }

        .contact-modal-header {
          margin-bottom: 28px;
        }
        .contact-modal-overline {
          display: block;
          color: var(--contact-cyan);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-family: 'Orbitron', ui-sans-serif, system-ui, sans-serif;
          margin-bottom: 8px;
        }
        .contact-modal-title {
          font-size: clamp(26px, 4vw, 32px);
          font-weight: 800;
          color: #fff;
          font-family: 'Orbitron', ui-sans-serif, system-ui, sans-serif;
          margin: 0 0 6px 0;
          letter-spacing: -0.02em;
        }
        .contact-modal-tagline {
          font-size: 0.9rem;
          color: var(--color-ink-500, #9BA2A3);
          margin: 0;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-group label {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-ink-700, #B5BABB);
          font-family: 'Orbitron', ui-sans-serif, system-ui, sans-serif;
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid rgba(2, 196, 249, 0.15);
          border-radius: 10px;
          font-size: 1rem;
          font-family: inherit;
          background: rgba(2, 44, 54, 0.2);
          color: #fff;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: var(--color-ink-300, #7E888A);
        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--contact-cyan);
          box-shadow: 0 0 0 3px rgba(2, 196, 249, 0.15);
        }
        .form-group textarea {
          resize: vertical;
          min-height: 110px;
        }

        .contact-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          margin-top: 8px;
          padding: 16px 24px;
          font-size: 1rem;
          font-weight: 700;
          font-family: 'Orbitron', ui-sans-serif, system-ui, sans-serif;
          color: #022C36;
          background: linear-gradient(135deg, var(--contact-cyan) 0%, #15E3FF 100%);
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
        }
        .contact-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(2, 196, 249, 0.4);
        }
        .contact-submit:active {
          transform: translateY(0);
        }
        .contact-submit-arrow {
          font-size: 1.1em;
          transition: transform 0.2s;
        }
        .contact-submit:hover .contact-submit-arrow {
          transform: translateX(4px);
        }

        @media (max-width: 640px) {
          .contact-modal {
            max-width: 100%;
            border-radius: 20px 20px 0 0;
          }
          .contact-modal-content {
            padding: 32px 24px 28px 28px;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
          .contact-modal-close {
            top: 16px;
            right: 16px;
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </div>
  );
}
