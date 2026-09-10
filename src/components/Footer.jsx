import { useState } from 'react';
import './Footer.css';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // null | 'error' | 'success'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <a href="#top" className="nav-logo footer-logo">
            <span className="nav-logo-mark" aria-hidden="true">N</span>
            NOVA
          </a>
          <p className="footer-tagline">Build better. Work smarter.</p>

          <form className="footer-form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="newsletter-email" className="visually-hidden">Email address</label>
            <div className="footer-form-row">
              <input
                id="newsletter-email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setStatus(null); }}
                aria-invalid={status === 'error'}
                aria-describedby="newsletter-feedback"
              />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </div>
            <p id="newsletter-feedback" className={`footer-form-feedback ${status ? `footer-form-${status}` : ''}`}>
              {status === 'error' && 'Enter a valid email address.'}
              {status === 'success' && "You're on the list — we'll be in touch."}
              {!status && 'Product updates, once or twice a month.'}
            </p>
          </form>
        </div>

        <div className="footer-cols">
          <div className="footer-col">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#product">Product</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#top">About</a>
            <a href="#top">Careers</a>
            <a href="#top">Blog</a>
            <a href="#top">Contact</a>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <a href="#top">Privacy</a>
            <a href="#top">Terms</a>
            <a href="#top">Security</a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} NOVA. All rights reserved.</p>
        <div className="footer-social">
          <a href="#top" aria-label="NOVA on Twitter">Twitter</a>
          <a href="#top" aria-label="NOVA on LinkedIn">LinkedIn</a>
          <a href="#top" aria-label="NOVA on GitHub">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
