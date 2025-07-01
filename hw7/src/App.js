import React from 'react';
import { LanguageProvider } from './context/LanguageContext.js';
import LanguageSwitcher from './components/LanguageSwitcher.jsx';
import TextDisplay from './components/TextDisplay.jsx';
import styles from './App.module.css';

function App() {
  return (
    <LanguageProvider>
      <div className={styles.container}>
        <LanguageSwitcher />
        <TextDisplay />
      </div>
    </LanguageProvider>
  );
}

export default App;
