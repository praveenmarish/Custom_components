import { createTheme } from '@mui/material';
import { blue, green, grey } from '@mui/material/colors';

const theme = () => {
  const themes = createTheme({
    palette: {
      primary: {
        main: blue[700],
        light: blue[50],
        dark: blue[900],
      },
      secondary: {
        main: blue[500],
        light: blue[200],
      },
    },
  });
  return themes;
};

export default theme;
