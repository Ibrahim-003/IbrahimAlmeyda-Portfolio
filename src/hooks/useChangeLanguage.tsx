import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const useChangeLanguage = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const storeLang = localStorage.getItem("language");

    if (storeLang) {
      i18n.changeLanguage(storeLang);
    } else {
      const browserLang = navigator.languages[0] === "en" ? "en" : "es";
      i18n.changeLanguage(browserLang);
      localStorage.setItem("language", browserLang);
    }
  }, [i18n]);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  return { t, toggleLanguage };
};
