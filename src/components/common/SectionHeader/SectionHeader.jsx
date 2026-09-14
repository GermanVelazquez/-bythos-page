// Centered section heading block shared by Features / HowItWorks / Export.
export function SectionHeader({ label, title, description }) {
  return (
    <div className="section-header reveal">
      <div className="section-label">{label}</div>
      <h2 className="section-title">{title}</h2>
      <p className="section-desc">{description}</p>
    </div>
  );
}
