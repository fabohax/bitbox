/* language.js */
import { useState } from 'react';
import translations from '../db/translations.json';

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    // Implement logic to handle language change
  };

  // Function to get translated text based on the selected language
  const getTranslatedText = (key) => {
    return translations[selectedLanguage][key] || key;
  };

  return (
    <div className="dropdown">
      <select className="dropdown-select" value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="pt">Português</option>
        <option value="tr">Türkçe</option>
        <option value="ru">Русский</option>
      </select>
    </div>
  );
};

export default LanguageDropdown;
