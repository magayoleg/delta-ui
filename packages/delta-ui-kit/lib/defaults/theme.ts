export const theme = {
  colorScheme: 'dark',
  fontFamily: 'Montserrat, sans-serif',
  colors: {
    primary: '#1db954',
    secondary: '#ffffff',
    info: '#1d75e0',
    warning: '#ffa42b',
    success: '#1cb454',
    error: '#cc2222',
    background: '#121212',
    surface: '#191919',
    exterior: '#0a0a0a',
    contrast: '#fafafa',
    outline: '#313030',
    border: 'rgba(255, 255, 255, 0.1)',

    accentPrimary: '#1daa4e',
    accentSecondary: '#e5e5e5',
    accentInfo: '#1c6ac9',
    accentWarning: '#e39022',
    accentSuccess: '#149b45',
    accentError: '#e32a2a',
    accentBackground: '#202020',
    accentSurface: '#2a2a2a',
    accentExterior: '#1c1c1c',
    accentContrast: '#e1e0e0',
    accentOutline: '#282727',

    monkaS: '#3e3e3e',

    onPrimary: '#ffffff',
    onSecondary: '#2c2c2c',
    onInfo: '#ffffff',
    onSuccess: '#ffffff',
    onWarning: '#000000',
    onError: '#ffffff',
    onBackground: '#bebebe',
    onSurface: '#d3d1d1',
    onExterior: '#c7c7c7',
    onContrast: '#282828',
    onOutline: '#ffffff',

    accentOnPrimary: '#ffffff',
    accentOnSecondary: '#000000',
    accentOnInfo: '#ffffff',
    accentOnSuccess: '#ffffff',
    accentOnWarning: '#ffffff',
    accentOnError: '#ffffff',
    accentOnBackground: '#e6e6e6',
    accentOnSurface: '#f5f3f3',
    accentOnExterior: '#efefef',
    accentOnContrast: '#282828',
    accentOnOutline: '#ffffff',
  },
  letterSpacings: [0, 1, 1.5],
  sizes: [0, 20, 32, 40, 64, 80],
  ticks: [0, 100, 200, 300, 500, 1000, 1200, 1800],
  space: [0, 4, 8, 16, 24, 32, 42, 64, 128, 256, 512],
  fontSizes: [10, 12, 14, 16, 20, 26, 42, 48, 56],
  radii: [0, 1, 2, 4, 5, 8],
  shadows: [
    'none',
    '0px 5px 15px 0px rgba(0,0,0,0.3)',
    '0 16px 24px rgb(0 0 0 / 30%), 0 6px 8px rgb(0 0 0 / 20%)',
  ],
};

export type Theme = typeof theme;
