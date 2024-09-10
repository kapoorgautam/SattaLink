// src/components/LanguageSwitcher.js

import React from 'react';
import { useLanguage } from './LanguageContext';

const LanguageSwitcher = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
        style={{
            backgroundColor: '#d47328',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            border: 'black solid 1px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease', // Smooth transition for the background color
        }}
        onClick={toggleLanguage}
        onMouseOver={(e) => {
            e.target.style.backgroundColor = '#b85e22'; // Darker shade on hover
        }}
        onMouseOut={(e) => {
            e.target.style.backgroundColor = '#d47328'; // Original color when not hovering
        }}
    >
        {language === 'en' ? 'हिन्दी' : 'English'}
    </button>
    
    );
};

export default LanguageSwitcher;
