import { useScrolled } from '../../hooks/useScrolled';
import { Logo } from '../common/Logo/Logo';

import { GitHubIcon } from '../common/Button/Button';

// Creator profile URL (shared with footer author block).
const LINKEDIN_URL = 'https://www.linkedin.com/in/german-velazquez-7a176037b/';

// LinkedIn brand mark (inline SVG, no new dependencies; mirrors footer icon).
function LinkedInIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

export function Navbar() {
  const scrolled = useScrolled(20);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="container nav-inner">
        <a href="#" className="nav-logo">
          <Logo variant="nav" />
          <span className="nav-logo-text">BYTHOS</span>
        </a>
        <div className="nav-links">
          <a href="#features">Características</a>
          <a href="#how">Cómo funciona</a>
          <a href="#privacy">Privacidad</a>
          {/* Creator micro-credit: plain text plus linked LinkedIn icon, kept left of the CTA. */}
          <span className="nav-credit">
            <span className="nav-credit-stack">
              <span className="nav-credit-name">German Velazquez</span>
              <span className="nav-credit-by">creado por</span>
            </span>
            <a href={LINKEDIN_URL} className="nav-linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de German Velazquez">
              <LinkedInIcon size={14} />
            </a>
          </span>
          <a href="https://github.com/GermanVelazquez/Bythos" className="nav-cta" target="_blank" rel="noopener noreferrer"><GitHubIcon size={14} />Repositorio</a>
        </div>
      </div>
    </nav>
  );
}
