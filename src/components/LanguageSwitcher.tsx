import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded ${
          language === 'en'
            ? 'bg-primary-500 text-white'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('tr')}
        className={`px-2 py-1 rounded ${
          language === 'tr'
            ? 'bg-primary-500 text-white'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        TR
      </button>
    </div>
  );
};

export default LanguageSwitcher;