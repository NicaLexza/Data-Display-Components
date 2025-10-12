import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: '#F45990' },
    secondary: { main: '#C5C7BC' },
    background: { default: '#F0C89B', paper: '#f0efeaff' },
    customGradient: 'linear-gradient(to bottom right, #F45990, #F0C89B)',
  },
});

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
