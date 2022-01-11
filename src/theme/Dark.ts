import { createTheme } from '@mui/material/styles';
import { grey, green } from '@mui/material/colors';

const theme = () => {
  const themes = createTheme({
    palette: {
      primary: {
        main: grey[900],
        light: grey[50],
        dark: grey[900],
      },
      secondary: {
        main: grey[500],
        light: green[200],
      },
    },
  });
  return themes;
};

export default theme;
