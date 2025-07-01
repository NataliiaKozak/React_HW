import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import styles from './TextDisplay.module.css';

const TextDisplay = () => {
  const { language } = useContext(LanguageContext);

  const text = {
    en: 'Welcome!',
    ru: 'Добро пожаловать!',
  };

  return <p className={styles.text}>{text[language]}</p>;
};

export default TextDisplay;