// Dictionary with translations
const translations = {
    en: {
        navProfile: "Profile",
        navSource: "Source Code",
        projectName: "Breeding Pools Calc",
        inputDescriptionName: "Breeding Pathfinder",
        inputDescription: "Enter two plants to calculate a step-by-step chain using their shared breeding pools.",
        plant1: "Start Plant",
        plant1Placeholder: "e.g. Coppon",
        plant2: "Final Plant",
        plant2Placeholder: "e.g. Cacao",

        calc_btn: "Calculate",
        clear_btn: "Clear",

        resultTitle: "Result",
        errBothPlants: "Please enter the names of both plants.",
        errNotFound: "Plant \"{plant}\" not found in the database.",
        errSamePlant: "This is the same plant.",
        errorImpossiblePath: 'Cannot get "{target}" from "{start}" via pools.',
        pathsFound: "Paths found {paths}",
        variant: "Way {var}",
        anyOtherPool: "Any other from the pool",
        stepCounter: "Step {step}",
        breedingRecipe: 'Take <span class="chip">{plantName}</span> and breed with any plant from the pool <span class="chip pool">{poolName}</span>:',
        toGetPlant: 'To get <span class="chip out">{plantName}</span>',
        andSimilarWays: "...and {ways} more ways of the same length.",
    },
    ru: {
        navProfile: "Профиль",
        navSource: "Исходный код",
        projectName: "Калькулятор Групп Селекции",
        inputDescriptionName: "Поиск пути скрещивания",
        inputDescription: "Введите два растения, чтобы получить пошаговую цепочку скрещиваний через их общие пулы селекции.",
        plant1: "Начальное растение",
        plant1Placeholder: "напр. Медный хлопок",
        plant2: "Итоговое растение",
        plant2Placeholder: "напр. Какао",

        calc_btn: "Расчитать",
        clear_btn: "Очистить",

        resultTitle: "Результат",
        errBothPlants: "Пожалуйста, введите названия обоих растений.",
        errNotFound: "Растение «{plant}» не найдено в базе.",
        errSamePlant: "Это одно и то же растение.",
        errorImpossiblePath: 'Невозможно получить «{target}» из «{start}» через пулы селекции.',
        pathsFound: "Найдено путей: {paths}",
        variant: "Способ {var}",
        anyOtherPool: "Любое другое из пула селекции",
        stepCounter: "Шаг {step}",
        breedingRecipe: 'Возьмите <span class="chip">{plantName}</span> и скрестите с любым растением из пула селекции <span class="chip pool">{poolName}</span>:',
        toGetPlant: 'Чтобы получить <span class="chip out">{plantName}</span>',
        andSimilarWays: "...и еще {ways} путей такой же длины.",
    }
};

// Function for substituting the current language into variables.
export function t(key, params = {}) {
    const currentLang = localStorage.getItem('site_language') || 'en';
    
    let text = translations[currentLang][key] || key;

    Object.keys(params).forEach(param => {
        text = text.replaceAll(`{${param}}`, params[param]);
    });

    return text;
}

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

    document.querySelectorAll('[data-i18n-html]').forEach(element => {
        const key = element.getAttribute('data-i18n-html');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
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