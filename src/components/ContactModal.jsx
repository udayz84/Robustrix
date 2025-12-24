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
    
    // Prepare email content
    const email = 'info@therobustrix.com';
    const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Phone Number: ${formData.phone}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Create mailto link
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Thank you for contacting us! Your email client will open with the message pre-filled.');
    
    // Reset form
    setFormData({ name: '', phone: '', email: '', message: '' });
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="contact-modal-overlay" onClick={handleBackdropClick}>
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        <button className="contact-modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className="contact-modal-content">
          <h2 className="contact-modal-title">Contact Us</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Message"
              />
            </div>
            <button type="submit" className="btn btn-primary contact-submit">
              Submit
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .contact-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: grid;
          place-items: center;
          padding: 20px;
          backdrop-filter: blur(8px);
          background: rgba(0, 0, 0, 0.5);
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .contact-modal {
          position: relative;
          background: var(--color-bg, #ffffff);
          border-radius: var(--radius-md, 16px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          max-width: 500px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          animation: slideUp 0.3s ease;
        }
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .contact-modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 36px;
          height: 36px;
          border-radius: 999px;
          border: 0;
          background: var(--color-ink-100, #f0f0f0);
          color: var(--color-ink-700, #3d4656);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          display: grid;
          place-items: center;
          transition: background var(--transition), transform var(--transition);
          z-index: 1;
        }
        .contact-modal-close:hover {
          background: var(--color-ink-200, #e0e0e0);
          transform: scale(1.1);
        }
        .contact-modal-content {
          padding: 40px 32px 32px;
        }
        .contact-modal-title {
          font-size: clamp(24px, 4vw, 32px);
          font-weight: 900;
          margin-bottom: 24px;
          color: var(--color-ink-900, #1a1a1a);
          font-family: 'Orbitron', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial;
        }
        .contact-form {
          display: grid;
          gap: 20px;
        }
        .form-group {
          display: grid;
          gap: 8px;
        }
        .form-group label {
          font-weight: 700;
          color: var(--color-ink-700, #3d4656);
          font-size: 0.9rem;
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid var(--color-ink-200, #e0e0e0);
          border-radius: var(--radius-sm, 8px);
          font-size: 1rem;
          font-family: inherit;
          transition: border-color var(--transition);
          background: var(--color-bg, #ffffff);
          color: var(--color-ink-900, #1a1a1a);
        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--color-brand-primary, #e41e2b);
        }
        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }
        .contact-submit {
          width: 100%;
          margin-top: 8px;
          padding: 14px 24px;
          font-size: 1rem;
          font-weight: 800;
        }
        @media (max-width: 640px) {
          .contact-modal {
            max-width: 100%;
            margin: 0;
            border-radius: 16px 16px 0 0;
          }
          .contact-modal-content {
            padding: 32px 24px 24px;
          }
        }
      `}</style>
    </div>
  );
}

