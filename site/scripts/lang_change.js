// Dictionary with translations
const translations = {
    en: {
        navProfile: "Profile",
        navSource: "Source Code",
    },
    ru: {
        navProfile: "Профиль",
        navSource: "Исходный код",
    }
};

// Function for language application
function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    document.documentElement.lang = lang;

    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.textContent = lang.toUpperCase();
    }

    localStorage.setItem('site_language', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('site_language') || 'ru';
    setLanguage(savedLang);

    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const currentLang = localStorage.getItem('site_language') || 'ru';
            const newLang = currentLang === 'ru' ? 'en' : 'ru';
            setLanguage(newLang);
        });
    }
});