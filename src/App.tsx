import { CountriesContent } from './components/CountriesContent';
import { Header } from './components/Header';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalStyle';
import { useState } from 'react';

import light from './styles/themes/light'
import dark  from './styles/themes/dark'

function App() {
  const [theme, setTheme] = useState(light);

  const toggledTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
    console.log(theme);    
  };

  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Header toggledTheme={toggledTheme}/>
        <CountriesContent/>
      </ThemeProvider>
  );
}

export default App;
