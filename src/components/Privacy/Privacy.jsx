import { privacyPoints } from '../../data/content';

// Check glyph repeated for each privacy point, preserved exactly.
export function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const GRID_CELLS = [
  true, true, false, true, true, true,
  true, false, true, true, false, true,
  false, true, true, false, true, true,
  true, true, false, true, true, false,
  true, false, true, true, false, true,
  true, true, true, false, true, true,
];

export function Privacy() {
  return (
    <section id="privacy">
      <div className="container">
        <div className="privacy-inner">
          <div className="privacy-content reveal">
            <div className="section-label">Privacidad</div>
            <h2 className="section-title">Tus datos nunca salen de tu PC.</h2>
            <p className="section-desc">Bythos está construido sobre una premisa simple: tu conocimiento es tuyo, y solo tuyo.</p>
            <ul className="privacy-points">
              {privacyPoints.map((point) => (
                <li key={point}>
                  <CheckIcon />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="privacy-visual reveal">
            <div className="privacy-grid" aria-hidden="true">
              {GRID_CELLS.map((on, index) => (
                <span key={index} className={on ? '' : 'off'}></span>
              ))}
            </div>
            <div className="privacy-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <span>Local · Offline</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
