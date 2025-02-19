const translations = {
    "en": { "title": "Welcome", "heading": "This is a simple webpage." },
    "it": { "title": "Benvenuto", "heading": "Questa è una pagina semplice." }
};



availableLangs = Object.keys(translations);
var userLang = navigator.language || navigator.userLanguage; 
let currentLang = availableLangs.includes(userLang) ? userLang : "en";






function updateLanguage(lang) {
    // set correct flag
    document.querySelectorAll("[id^=lang-switch-]").forEach(el => {
        el.style.display = el.id === `lang-switch-${lang}` ? "inline" : "none";
    });
    document.querySelectorAll("[data-key]").forEach(el => {
        let key = el.dataset.key;
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}


// Toggle between languages when button is clicked
document.querySelectorAll(".lang-switch").forEach(btn => btn.addEventListener("click", function () {
    currentLang = currentLang === "en" ? "it" : "en";
    updateLanguage(currentLang);
}));

// Load language when the page loads
updateLanguage(currentLang);
