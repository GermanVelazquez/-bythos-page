// Single source of truth for repeatable landing content.
// Spanish UI copy preserved verbatim from the reference HTML.

export const appTitlebar = 'BYTHOS';

export const appSearchPlaceholder = 'Buscar recursos...';

export const appAddLabel = 'Añadir link';

export const appPage = {
  title: 'Todos los recursos',
  sub: '142 elementos · 96 completados · 18 en curso',
};

export const appNavGroups = [
  {
    label: 'Biblioteca',
    items: [
      { icon: 'book', label: 'Todos', count: 142, active: true },
      { icon: 'folder', label: 'Carpetas', count: 12, active: false },
      { icon: 'clock', label: 'En curso', count: 18, active: false },
      { icon: 'check-circle', label: 'Completados', count: 96, active: false },
    ],
  },
  {
    label: 'Acciones',
    items: [
      { icon: 'download', label: 'Exportar', active: false },
      { icon: 'gear', label: 'Ajustes', active: false },
    ],
  },
];

export const appFilters = [
  { label: 'Todos', active: true },
  { label: 'YouTube', active: false },
  { label: 'Artículos', active: false },
];

export const appProgress = [
  { status: 'done', label: 'Completados', value: 96 },
  { status: 'progress', label: 'En curso', value: 18 },
  { status: 'pending', label: 'Pendientes', value: 28 },
];

export const appCards = [
  {
    badge: 'YOUTUBE',
    badgeIcon: 'play',
    title: 'Introducción a Go: goroutines y canales',
    meta: '42 min',
    category: 'Programación',
    thumb: 'v1',
    status: 'done',
    statusLabel: 'Completado',
  },
  {
    badge: 'ARTÍCULO',
    badgeIcon: 'file',
    title: 'Diseño de APIs REST: buenas prácticas',
    meta: '12 min',
    category: 'Backend',
    thumb: 'v2',
    status: 'progress',
    statusLabel: 'En curso',
  },
  {
    badge: 'YOUTUBE',
    badgeIcon: 'play',
    title: 'SQLite en producción: mitos y realidades',
    meta: '1h 12min',
    category: 'Base de datos',
    thumb: 'v3',
    status: 'pending',
    statusLabel: 'Pendiente',
  },
  {
    badge: 'ARTÍCULO',
    badgeIcon: 'file',
    title: 'Arquitectura de componentes en React moderno',
    meta: '18 min',
    category: 'Frontend',
    thumb: 'v4',
    status: 'done',
    statusLabel: 'Completado',
  },
  {
    badge: 'YOUTUBE',
    badgeIcon: 'play',
    title: 'Patrones de concurrencia en Go aplicados',
    meta: '56 min',
    category: 'Programación',
    thumb: 'v5',
    status: 'progress',
    statusLabel: 'En curso',
  },
  {
    badge: 'ARTÍCULO',
    badgeIcon: 'file',
    title: 'Optimización de queries y uso de índices',
    meta: '22 min',
    category: 'Base de datos',
    thumb: 'v6',
    status: 'pending',
    statusLabel: 'Pendiente',
  },
];

export const features = [
  {
    icon: 'plus',
    title: 'Guarda con un clic',
    description: 'Extensión de Chrome que captura cualquier pestaña abierta sin interrumpir tu flujo.',
  },
  {
    icon: 'search',
    title: 'Detección automática',
    description: 'El backend en Go extrae título, imagen y tipo de cada link sin que tengas que escribir nada.',
  },
  {
    icon: 'folder',
    title: 'Organización por tema',
    description: 'Carpetas y etiquetas para agrupar recursos según tu propio sistema mental.',
  },
  {
    icon: 'check-square',
    title: 'Progreso visible',
    description: 'Marca cada recurso como pendiente, en curso o completado. Barras claras, cero ambigüedad.',
  },
  {
    icon: 'download-tray',
    title: 'Exporta a donde quieras',
    description: 'Markdown, Gemini, NotebookLM o Google Drive. Tu conocimiento, portable y sin ataduras.',
  },
  {
    icon: 'shield',
    title: '100% local. 100% tuyo.',
    description: 'Base SQLite en tu PC. Sin cuentas, sin nube, sin tracking. Un solo .exe y listo.',
  },
];

export const steps = [
  {
    num: '01',
    title: 'Guarda cualquier link',
    text: 'Con la extensión de Chrome o pegando la URL directamente. Bythos detecta el resto automáticamente.',
  },
  {
    num: '02',
    title: 'Organízalo en carpetas',
    text: 'Agrupa por tema, proyecto o cualquier criterio tuyo. Encuentra todo en segundos.',
  },
  {
    num: '03',
    title: 'Marca tu avance y exporta',
    text: 'Actualiza el estado, revisa tu progreso y exporta a Markdown o tus herramientas favoritas.',
  },
];

export const privacyPoints = [
  'Base SQLite local en tu disco',
  'Sin cuentas, sin registro, sin email',
  'Sin analytics ni telemetría',
  'Un solo .exe, portable y discreto',
];

export const exportItems = [
  { icon: 'file', label: 'Markdown' },
  { icon: 'spark', label: 'Gemini' },
  { icon: 'book', label: 'NotebookLM' },
  { icon: 'drive', label: 'Google Drive' },
];
