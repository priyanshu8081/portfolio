import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import '../styles/Contact.css';

const initialForm = {
  name: '',
  email: '',
  message: '',
};

const validate = (form) => {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = 'Please enter your name.';
  }

  if (!form.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!form.message.trim()) {
    errors.message = 'Please enter a message.';
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.';
  }

  return errors;
};

const Contact = () => {
  const containerRef = useScrollReveal();

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(form);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // Your WhatsApp number
    const whatsappNumber = '918081323513';

    // WhatsApp message
    const whatsappMessage = `Hello Priyanshu,

Name: ${form.name}
Email: ${form.email}

Message:
${form.message}`;

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Reset form
    setForm(initialForm);

    // Show success message
    setStatus('success');

    setTimeout(() => {
      setStatus('idle');
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="section contact"
      ref={containerRef}
    >
      <div className="container contact-grid">

        {/* Contact Information */}
        <div className="contact-info" data-reveal>
          <p className="section-eyebrow">Contact</p>

          <h2 className="section-title">
            Let's build something together
          </h2>

          <p className="section-subtitle contact-subtitle">
            Have a role, project, or opportunity in mind? I'd love to hear
            from you — reach out directly or drop a message.
          </p>

          <div className="contact-methods">

            {/* Email */}
            <a
              href="mailto:pc0749711189@gmail.com"
              className="contact-method"
            >
              <span className="contact-method-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect
                    x="2"
                    y="4"
                    width="20"
                    height="16"
                    rx="2"
                  />
                  <path d="M2 7l10 6 10-6" />
                </svg>
              </span>

              <span>
                <span className="contact-method-label">
                  Email
                </span>

                <span className="contact-method-value">
                  pc0749711189@gmail.com
                </span>
              </span>
            </a>

            {/* Phone */}
            <a
              href="tel:+918081323513"
              className="contact-method"
            >
              <span className="contact-method-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </span>

              <span>
                <span className="contact-method-label">
                  Phone
                </span>

                <span className="contact-method-value">
                  +91 8081323513
                </span>
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/priyanshu-chauhan"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-method"
            >
              <span className="contact-method-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                </svg>
              </span>

              <span>
                <span className="contact-method-label">
                  LinkedIn
                </span>

                <span className="contact-method-value">
                  linkedin.com/in/priyanshu-chauhan
                </span>
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/priyanshu8081"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-method"
            >
              <span className="contact-method-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.02 1.76 2.68 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 015.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.18 1.83 1.18 3.09 0 4.43-2.69 5.41-5.26 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.52 10.52 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
                </svg>
              </span>

              <span>
                <span className="contact-method-label">
                  GitHub
                </span>

                <span className="contact-method-value">
                  github.com/priyanshu8081
                </span>
              </span>
            </a>

          </div>
        </div>

        {/* Contact Form */}
        <form
          className="contact-form"
          data-reveal
          data-reveal-delay="1"
          onSubmit={handleSubmit}
          noValidate
        >

          {/* Name */}
          <div className="form-group">
            <label htmlFor="name">
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              aria-invalid={!!errors.name}
              aria-describedby={
                errors.name ? 'name-error' : undefined
              }
            />

            {errors.name && (
              <p
                className="form-error"
                id="name-error"
              >
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              aria-invalid={!!errors.email}
              aria-describedby={
                errors.email ? 'email-error' : undefined
              }
            />

            {errors.email && (
              <p
                className="form-error"
                id="email-error"
              >
                {errors.email}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="form-group">
            <label htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about the opportunity or project..."
              aria-invalid={!!errors.message}
              aria-describedby={
                errors.message ? 'message-error' : undefined
              }
            />

            {errors.message && (
              <p
                className="form-error"
                id="message-error"
              >
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn btn-primary contact-submit"
          >
            Send Message
          </button>

          {/* Success */}
          {status === 'success' && (
            <p
              className="form-success"
              role="status"
            >
              WhatsApp opened successfully. Please press Send in
              WhatsApp to complete your message.
            </p>
          )}

        </form>
      </div>
    </section>
  );
};

export default Contact;