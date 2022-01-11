import { ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { selectTheme } from 'redux/slice';
import Dark from 'theme/Dark';
import Light from 'theme/Light'
import UiRoute from "Routes"

function App() {

  const themeSetter = useSelector(selectTheme)
  const dark = Dark()
  const light = Light()

  return (
    <BrowserRouter>
      <ThemeProvider theme={themeSetter === "light" ? light : dark}>
        <UiRoute />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
