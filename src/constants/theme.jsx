export const theme = Object.freeze({
  colors: {
    white: '#fff',
    black: '#000',
    text: '#2a2a2a',
    lightText: '#686868',
    background: '#c1c1c1',
    backgroundLight: '#e3e3e3',
    primary: '#07c',
    secondary: '#add8e6',
    accent: '#ff6347',
    muted: '#f6f6f6',
    border: '#c1c1c1',
  },
  spacing: value => `${4 * value}px`,
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    xs: '14px',
    sm: '16px',
    md: '24px',
    lg: '32px',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
    table: 1.75,
  },
  borders: {
    none: 'none',
    normal: '1px solid',
  },
  radii: {
    none: '0',
    normal: '4px',
    md: '10px',
    round: '50%',
  },
  transitions: {
    normal: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  shadows: {
    normal: `1px 4px 6px 0 rgba(0, 0, 0, 0.16), 0 4px 4px 0 rgba(0, 0, 0, 0.06),
    0 1px 1px 0 rgba(0, 0, 0, 0.12)`,
  },
});
