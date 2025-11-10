import { createTheme } from '@mui/material/styles';

const getTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: {
      main: '#1976D2',
      dark: '#0A1929',
      light: '#42A5F5',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#00BCD4',
      dark: '#009688',
      light: '#90CAF9',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#4CAF50',
      light: '#81C784',
      dark: '#388E3C',
    },
    warning: {
      main: '#FF9800',
      light: '#FFB74D',
      dark: '#F57C00',
    },
    error: {
      main: '#F44336',
      light: '#E57373',
      dark: '#D32F2F',
    },
    info: {
      main: '#2196F3',
      light: '#64B5F6',
      dark: '#1976D2',
    },
    background: {
      default: mode === 'light' ? '#F5F7FA' : '#0A1929',
      paper: mode === 'light' ? '#FFFFFF' : '#1A2027',
    },
    text: {
      primary: mode === 'light' ? '#263238' : '#E3F2FD',
      secondary: mode === 'light' ? '#90A4AE' : '#B0BEC5',
      disabled: mode === 'light' ? '#B0BEC5' : '#78909C',
    },
    divider: mode === 'light' ? '#E0E0E0' : '#37474F',
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 900,
      fontSize: '3.5rem',
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 800,
      fontSize: '2.75rem',
      letterSpacing: '-0.01em',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 700,
      fontSize: '2.25rem',
      letterSpacing: '-0.01em',
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.75rem',
      letterSpacing: '0em',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem',
      letterSpacing: '0em',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.25rem',
      letterSpacing: '0.01em',
      lineHeight: 1.5,
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: '1rem',
      letterSpacing: '0.01em',
      lineHeight: 1.75,
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: '0.875rem',
      letterSpacing: '0.01em',
      lineHeight: 1.57,
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
      letterSpacing: '0.01em',
      lineHeight: 1.5,
    },
    body2: {
      fontWeight: 400,
      fontSize: '0.875rem',
      letterSpacing: '0.01em',
      lineHeight: 1.43,
    },
    button: {
      fontWeight: 600,
      fontSize: '0.875rem',
      letterSpacing: '0.05em',
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: mode === 'light' ? [
    'none',
    '0px 2px 4px rgba(0, 0, 0, 0.05)',
    '0px 4px 8px rgba(0, 0, 0, 0.08)',
    '0px 8px 16px rgba(0, 0, 0, 0.1)',
    '0px 12px 24px rgba(0, 0, 0, 0.12)',
    '0px 16px 32px rgba(0, 0, 0, 0.14)',
    '0px 20px 40px rgba(0, 0, 0, 0.16)',
    '0px 24px 48px rgba(0, 0, 0, 0.18)',
    '0px 2px 4px rgba(25, 118, 210, 0.1)',
    '0px 4px 8px rgba(25, 118, 210, 0.15)',
    '0px 8px 16px rgba(25, 118, 210, 0.2)',
    '0px 12px 24px rgba(25, 118, 210, 0.25)',
    '0px 16px 32px rgba(25, 118, 210, 0.3)',
    '0px 20px 40px rgba(25, 118, 210, 0.35)',
    '0px 24px 48px rgba(25, 118, 210, 0.4)',
    '0px 28px 56px rgba(25, 118, 210, 0.45)',
    '0px 32px 64px rgba(25, 118, 210, 0.5)',
    '0px 36px 72px rgba(25, 118, 210, 0.55)',
    '0px 40px 80px rgba(25, 118, 210, 0.6)',
    '0px 44px 88px rgba(25, 118, 210, 0.65)',
    '0px 48px 96px rgba(25, 118, 210, 0.7)',
    '0px 52px 104px rgba(25, 118, 210, 0.75)',
    '0px 56px 112px rgba(25, 118, 210, 0.8)',
    '0px 60px 120px rgba(25, 118, 210, 0.85)',
    '0px 64px 128px rgba(25, 118, 210, 0.9)',
  ] : [
    'none',
    '0px 2px 4px rgba(0, 0, 0, 0.3)',
    '0px 4px 8px rgba(0, 0, 0, 0.35)',
    '0px 8px 16px rgba(0, 0, 0, 0.4)',
    '0px 12px 24px rgba(0, 0, 0, 0.45)',
    '0px 16px 32px rgba(0, 0, 0, 0.5)',
    '0px 20px 40px rgba(0, 0, 0, 0.55)',
    '0px 24px 48px rgba(0, 0, 0, 0.6)',
    '0px 2px 4px rgba(25, 118, 210, 0.3)',
    '0px 4px 8px rgba(25, 118, 210, 0.35)',
    '0px 8px 16px rgba(25, 118, 210, 0.4)',
    '0px 12px 24px rgba(25, 118, 210, 0.45)',
    '0px 16px 32px rgba(25, 118, 210, 0.5)',
    '0px 20px 40px rgba(25, 118, 210, 0.55)',
    '0px 24px 48px rgba(25, 118, 210, 0.6)',
    '0px 28px 56px rgba(25, 118, 210, 0.65)',
    '0px 32px 64px rgba(25, 118, 210, 0.7)',
    '0px 36px 72px rgba(25, 118, 210, 0.75)',
    '0px 40px 80px rgba(25, 118, 210, 0.8)',
    '0px 44px 88px rgba(25, 118, 210, 0.85)',
    '0px 48px 96px rgba(25, 118, 210, 0.9)',
    '0px 52px 104px rgba(25, 118, 210, 0.95)',
    '0px 56px 112px rgba(25, 118, 210, 1)',
    '0px 60px 120px rgba(25, 118, 210, 1)',
    '0px 64px 128px rgba(25, 118, 210, 1)',
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@import': 'url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap")',
        body: {
          scrollBehavior: 'smooth',
          transition: 'background-color 0.3s ease, color 0.3s ease',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: mode === 'light' 
            ? '0px 2px 8px rgba(10, 25, 41, 0.08)' 
            : '0px 2px 8px rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(8px)',
          backgroundColor: mode === 'light' 
            ? 'rgba(25, 118, 210, 0.95)' 
            : 'rgba(10, 25, 41, 0.95)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: mode === 'light'
              ? '0px 8px 16px rgba(25, 118, 210, 0.3)'
              : '0px 8px 16px rgba(25, 118, 210, 0.5)',
          },
        },
        contained: {
          boxShadow: mode === 'light'
            ? '0px 4px 12px rgba(25, 118, 210, 0.2)'
            : '0px 4px 12px rgba(25, 118, 210, 0.4)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: mode === 'light'
            ? '0px 4px 16px rgba(0, 0, 0, 0.06)'
            : '0px 4px 16px rgba(0, 0, 0, 0.4)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: mode === 'light'
              ? '0px 12px 32px rgba(0, 0, 0, 0.12)'
              : '0px 12px 32px rgba(0, 0, 0, 0.6)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#42A5F5',
              },
            },
            '&.Mui-focused': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderWidth: 2,
                boxShadow: mode === 'light'
                  ? '0px 0px 0px 4px rgba(25, 118, 210, 0.1)'
                  : '0px 0px 0px 4px rgba(25, 118, 210, 0.2)',
              },
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: 'none',
          boxShadow: mode === 'light'
            ? '4px 0px 16px rgba(0, 0, 0, 0.08)'
            : '4px 0px 16px rgba(0, 0, 0, 0.5)',
        },
      },
    },
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
});

export default getTheme;