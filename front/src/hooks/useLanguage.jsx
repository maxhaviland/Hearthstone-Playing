import { useState, useEffect } from 'react';
import { english } from '../i18n';

const useLanguage = () => {
  const [ language, setLanguage ] = useState(english);

  const getLanguageLocalStorage = () => {
    const localStorageLanguage = JSON.parse(window.localStorage.getItem('@language')) || {};
    return localStorageLanguage;
  }
  const setLanguageLocalStorage = () => {
    const languageToBeStorage = JSON.stringify(language);
    window.localStorage.setItem('@language', languageToBeStorage)
  }

  useEffect(() => {
    const selectedLanguage = getLanguageLocalStorage() || english;
    setLanguage(selectedLanguage);
  }, []);

  useEffect(() => {
    setLanguageLocalStorage(language)
  }, [language]);

  return { language, setLanguage };
};

export default useLanguage;