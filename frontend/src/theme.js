import { createTheme } from "@mui/material";


const theme = createTheme({
  palette: {
    primary: { main: '#F45990' },
    secondary: { main: '#C5C7BC' },
    background: { default: '#F0C89B', paper: '#f0efeaff' },
    // customGradient used by components for a background effect
    customGradient: 'linear-gradient(to bottom right, #F45990, #F0C89B)',
  },
});

// Apply CssBaseline override so document body uses background.paper color.
theme.components = {
  ...theme.components,
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        background: theme.palette.background.paper,
      },
    },
  },
};

export default theme;
