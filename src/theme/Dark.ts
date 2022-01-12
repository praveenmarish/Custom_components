import { Components, PaletteOptions, ThemeOptions } from '@mui/material/styles';
import { grey, green } from '@mui/material/colors';
import { TypographyOptions } from '@mui/material/styles/createTypography';

const DarkPalette = (): PaletteOptions => ({
  primary: {
    main: grey[500],
    light: grey[50],
    dark: grey[900],
  },
  secondary: {
    main: grey[500],
    light: grey[600],
    dark: green[200],
  },
});

const DarkTypo = (): TypographyOptions => ({
  fontFamily: 'sans-serif',
});

const DarkComponents = (): Components => ({
  MuiButton: {
    styleOverrides: {
      root: {
        color: 'red',
      },
    },
  },
});

export const DarkTheme = (): ThemeOptions => ({
  palette: DarkPalette(),
  typography: DarkTypo(),
  components: DarkComponents(),
});
