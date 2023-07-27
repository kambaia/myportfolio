import React, { useContext } from 'react';
import { useEffect } from 'react';
import { Translator, Translate } from 'react-auto-translate';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { GlobalStyle } from './styles/global';
import 'react-toastify/dist/ReactToastify.css';
import cacheProvider from './utils/cacheProvider';
import { LanguageContext } from './context/context';
function App() {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <Translator
        cacheProvider={cacheProvider}
        from={'pt'}
        to={language}
        googleApiKey='AIzaSyAfoW3-nAGT22_alscL8co5KnuBowWiSps'
      >
        <GlobalStyle />
        <Header />
        <Main />
        <Footer />
      </Translator>
    </>
  );
}

export default App;
