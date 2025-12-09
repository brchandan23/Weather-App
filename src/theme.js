import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#667eea',
      light: '#8a9bef',
      dark: '#4c5fd5',
    },
    secondary: {
      main: '#764ba2',
      light: '#9c6fc4',
      dark: '#5a3980',
    },
    background: {
      default: '#f8faff',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a1a2e',
      secondary: '#6b7280',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", -apple-system, BlinkMacSystemFont, sans-serif',
    h5: {
      fontWeight: 700,
      fontFamily: '"Outfit", sans-serif',
    },
    h2: {
      fontWeight: 800,
      fontFamily: '"Outfit", sans-serif',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 20px 50px rgba(102, 126, 234, 0.12), 0 8px 20px rgba(0, 0, 0, 0.06)',
          borderRadius: 24,
          border: '1px solid rgba(102, 126, 234, 0.08)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '1.1rem',
          padding: '12px 32px',
          boxShadow: '0 8px 25px rgba(102, 126, 234, 0.35)',
          '&:hover': {
            boxShadow: '0 12px 35px rgba(102, 126, 234, 0.45)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #5a71e0 0%, #6a4292 100%)',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(102, 126, 234, 0.4)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#667eea',
            borderWidth: 2,
          },
        },
      },
    },
  },
});

export default theme;