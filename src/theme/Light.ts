import { Components, PaletteOptions, ThemeOptions } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import { TypographyOptions } from '@mui/material/styles/createTypography';

const LightPalette = (): PaletteOptions => ({
  primary: {
    main: blue[700],
    light: blue[50],
    dark: blue[900],
  },
  secondary: {
    main: blue[500],
    light: blue[200],
    dark: blue[300],
  },
});

const LightTypo = (): TypographyOptions => ({
  fontFamily: 'fantasy',
});

const LightComponents = (): Components => ({
  MuiButton: {
    styleOverrides: {
      root: {
        color: 'red',
      },
    },
  },
});

export const LightTheme = (): ThemeOptions => ({
  palette: LightPalette(),
  typography: LightTypo(),
  components: LightComponents(),
});
