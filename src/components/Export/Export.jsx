import { exportItems } from '../../data/content';
import { SectionHeader } from '../common/SectionHeader/SectionHeader';

function ExportIcon({ name }) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };

  switch (name) {
    case 'file':
      return (
        <svg {...common}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      );
    case 'spark':
      return (
        <svg {...common}>
          <path d="M12 2l3 6 6 1-4.5 4.5 1 6L12 17l-5.5 2.5 1-6L3 9l6-1z" />
        </svg>
      );
    case 'book':
      return (
        <svg {...common}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      );
    case 'drive':
      return (
        <svg {...common}>
          <path d="M12 2L2 12l10 10 10-10z" />
        </svg>
      );
    default:
      return null;
  }
}

export function Export() {
  return (
    <section className="export">
      <div className="container">
        <SectionHeader
          label="Exportación"
          title="Tu conocimiento, donde lo necesites."
          description="Exporta tus recursos y notas a los formatos y herramientas que ya usas para repasar."
        />

        <div className="export-grid reveal">
          {exportItems.map((item) => (
            <div className="export-item" key={item.label}>
              <ExportIcon name={item.icon} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
