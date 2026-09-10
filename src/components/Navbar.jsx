import { useEffect, useState } from 'react';
import './Navbar.css';

const LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#product', label: 'Product' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
];

function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleLinkClick = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-row">
        <a href="#top" className="nav-logo">
          <span className="nav-logo-mark" aria-hidden="true">N</span>
          NOVA
        </a>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          <a href="#pricing" className="btn btn-ghost nav-cta-secondary">Sign in</a>
          <a href="#pricing" className="btn btn-primary nav-cta">Start free</a>
        </div>

        <button
          type="button"
          className={`nav-burger ${open ? 'nav-burger-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      <div id="mobile-menu" className={`nav-mobile ${open ? 'nav-mobile-open' : ''}`}>
        <nav aria-label="Mobile">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={handleLinkClick}>{link.label}</a>
          ))}
        </nav>
        <div className="nav-mobile-actions">
          <a href="#pricing" className="btn btn-ghost" onClick={handleLinkClick}>Sign in</a>
          <a href="#pricing" className="btn btn-primary" onClick={handleLinkClick}>Start free</a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
