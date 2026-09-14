// Single Logo component reused by Navbar / Hero / Footer.
// Exact SVG paths preserved from the reference HTML per variant.
export function Logo({ variant = 'nav', className = '' }) {
  if (variant === 'hero') {
    return (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
        <path d="M50 12 C22 12 8 32 8 50 C8 68 22 88 50 88 C78 88 92 68 92 50 C92 32 78 12 50 12 Z" stroke="#8A8A8A" strokeWidth="2" fill="none" opacity="0.2" />
        <path d="M22 50 C22 36 34 24 50 24 C66 24 78 36 78 50" stroke="#C8C8C8" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M22 50 C22 64 34 76 50 76 C66 76 78 64 78 50" stroke="#C8C8C8" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M31 43 C39 37 61 37 69 43" stroke="#A0A0A0" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M31 57 C39 63 61 63 69 57" stroke="#A0A0A0" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </svg>
    );
  }

  if (variant === 'mini') {
    return (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
        <path d="M24 50 C24 36 36 26 50 26 C64 26 76 36 76 50" stroke="#C8C8C8" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M24 50 C24 64 36 74 50 74 C64 74 76 64 76 50" stroke="#C8C8C8" strokeWidth="5" fill="none" strokeLinecap="round" />
      </svg>
    );
  }

  if (variant === 'footer') {
    return (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
        <path d="M24 50 C24 36 36 26 50 26 C64 26 76 36 76 50" stroke="#8A8A8A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M24 50 C24 64 36 74 50 74 C64 74 76 64 76 50" stroke="#8A8A8A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M50 14 C24 14 10 32 10 50 C10 68 24 86 50 86 C76 86 90 68 90 50 C90 32 76 14 50 14 Z" stroke="#8A8A8A" strokeWidth="2.5" fill="none" opacity="0.25" />
      <path d="M24 50 C24 36 36 26 50 26 C64 26 76 36 76 50" stroke="#C8C8C8" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M24 50 C24 64 36 74 50 74 C64 74 76 64 76 50" stroke="#C8C8C8" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M33 43 C40 38 60 38 67 43" stroke="#A0A0A0" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M33 57 C40 62 60 62 67 57" stroke="#A0A0A0" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}
