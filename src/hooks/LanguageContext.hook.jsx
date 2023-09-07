import { createContext, useContext, useState, useEffect } from 'react';
import data from "../languages/languages.json";

const LanguageContext = createContext();

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(localStorage.getItem('lang') || 'en');
  useEffect(() => {
    const storedLanguage = localStorage.getItem('lang');
    if (storedLanguage && storedLanguage !== language) {
      setLanguage(storedLanguage);
    }
  }, [language]);
  const changeLanguage = (newLang) => {
    setLanguage(newLang);
    localStorage.setItem('lang', newLang);
  };
  return (
    <LanguageContext.Provider value={{ language, changeLanguage, data }}>
      {children}
    </LanguageContext.Provider>
  );
}
