import { createTheme, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { selectTheme } from 'redux/slice';
import { DarkTheme } from 'theme/Dark';
import { LightTheme } from 'theme/Light'
import UiRoute from "Routes"

function App() {

  const themeSetter = useSelector(selectTheme)
  const dark = createTheme(DarkTheme())
  const light = createTheme(LightTheme())

  return (
    <BrowserRouter>
      <ThemeProvider theme={themeSetter === "light" ? light : dark}>
        <UiRoute />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
