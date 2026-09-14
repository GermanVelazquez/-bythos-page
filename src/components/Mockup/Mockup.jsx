import { Logo } from '../common/Logo/Logo';
import {
  appAddLabel,
  appCards,
  appFilters,
  appNavGroups,
  appPage,
  appProgress,
  appSearchPlaceholder,
  appTitlebar,
} from '../../data/content';

const iconCommon = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

function AppNavIcon({ name }) {
  switch (name) {
    case 'book':
      return (
        <svg {...iconCommon}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      );
    case 'folder':
      return (
        <svg {...iconCommon}>
          <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>
      );
    case 'clock':
      return (
        <svg {...iconCommon}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
    case 'check-circle':
      return (
        <svg {...iconCommon}>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      );
    case 'download':
      return (
        <svg {...iconCommon}>
          <path d="M12 3v12" />
          <path d="M7 10l5 5 5-5" />
          <path d="M5 21h14" />
        </svg>
      );
    case 'gear':
      return (
        <svg {...iconCommon}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    default:
      return null;
  }
}

function BadgeIcon({ name }) {
  if (name === 'play') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M8 5v14l11-7z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

export function Mockup() {
  return (
    <div className="app-preview">
      <div className="app-window">
        <div className="app-titlebar">
          <div className="app-titlebar-dots">
            <span className="app-dot"></span>
            <span className="app-dot"></span>
            <span className="app-dot"></span>
          </div>
          <span className="app-titlebar-title">{appTitlebar}</span>
        </div>

        <div className="app-body">
          <aside className="app-sidebar">
            <div className="app-sidebar-logo">
              <Logo variant="mini" />
              <span>BYTHOS</span>
            </div>

            {appNavGroups.map((group) => (
              <div className="app-nav-group" key={group.label}>
                <div className="app-nav-label">{group.label}</div>
                {group.items.map((item) => (
                  <div className={item.active ? 'app-nav-item active' : 'app-nav-item'} key={item.label}>
                    <AppNavIcon name={item.icon} />
                    {item.label}
                    {typeof item.count === 'number' && (
                      <span className="app-nav-count">{item.count}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </aside>

          <main className="app-main">
            <div className="app-topbar">
              <div className="app-search">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
                {appSearchPlaceholder}
              </div>
              <div className="app-topbar-actions">
                <div className="app-btn-primary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                  {appAddLabel}
                </div>
                <div className="app-icon-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="app-content">
              <div className="app-page-header">
                <div>
                  <div className="app-page-title">{appPage.title}</div>
                  <div className="app-page-sub">{appPage.sub}</div>
                </div>
                <div className="app-filters">
                  {appFilters.map((filter) => (
                    <div className={filter.active ? 'app-filter active' : 'app-filter'} key={filter.label}>
                      {filter.label}
                    </div>
                  ))}
                </div>
              </div>

              <div className="app-progress-overview">
                {appProgress.map((entry) => (
                  <div className="app-progress-card" key={entry.label}>
                    <div className="app-progress-card-label">
                      <span className={`app-progress-dot ${entry.status}`}></span>
                      {entry.label}
                    </div>
                    <div className="app-progress-card-num">{entry.value}</div>
                    <div className="app-progress-bar">
                      <div className={`app-progress-bar-fill ${entry.status}`}></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="app-grid">
                {appCards.map((card) => (
                  <div className="app-card" key={card.title}>
                    <div className={`app-card-thumb ${card.thumb}`}>
                      <div className="app-card-badge">
                        <BadgeIcon name={card.badgeIcon} />
                        {card.badge}
                      </div>
                    </div>
                    <div className="app-card-body">
                      <div className="app-card-title">{card.title}</div>
                      <div className="app-card-meta">
                        {card.meta} <span className="app-card-meta-sep">·</span> {card.category}
                      </div>
                      <div className="app-card-progress-row">
                        <div className="app-card-progress">
                          <div className={`app-card-progress-fill ${card.status}`}></div>
                        </div>
                        <span className={`app-card-status ${card.status}`}>{card.statusLabel}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
