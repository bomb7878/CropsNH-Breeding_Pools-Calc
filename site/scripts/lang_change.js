// Dictionary with translations
const translations = {
    en: {
        navProfile: "Profile",
        navSource: "Source Code",
        projectName: "Breeding Pools Calc",
        inputDescriptionName: "Breeding Pathfinder",
        inputDescription: "Enter two plants to calculate a step-by-step chain using their shared breeding pools.",
        plant1: "Start Plant",
        plant2: "Final Plant",
        calc_btn: "Calculate",
        clear_btn: "Clear",
        resultTitle: "Result",
    },
    ru: {
        navProfile: "Профиль",
        navSource: "Исходный код",
        projectName: "Калькулятор Групп Селекции",
        inputDescriptionName: "Поиск пути скрещивания",
        inputDescription: "Введите два растения, чтобы получить пошаговую цепочку скрещиваний через их общие селекционные группы.",
        plant1: "Начальное растение",
        plant2: "Итоговое растение",
        calc_btn: "Расчитать",
        clear_btn: "Очистить",
        resultTitle: "Результат",
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