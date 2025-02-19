const translations = {
    "en": {'nav_about_us ': 'About Us',
'nav_services': 'Services',
'nav_gallery': 'Gallery',
'nav_contacts': 'Contacts',
'book_now_btn': 'Book Now',
'about_us_title': 'ABOUT US',
'about_us_p': 'The Villa Rucellai is an ancient Tuscan Villa located in Prato, a few kilometers from Florence. The structure is immersed in the green of the Tuscan countryside and offers its guests a unique and unforgettable experience.',
'about_us_history_title': 'OUR HISTORY',
'about_us_history_p': 'This is the history of Villa Rucellai.',
'services_title': 'OUR SERVICES',
'services_breakfast_title': 'Breakfast',
'services_breakfast_description': 'Breakfast is included in the price of the room and is served in the dining room.',
'services_garden_title': 'Garden',
'services_garden_description': 'The Villa Rucellai has a typical Italian garden where guests can relax and enjoy the beautiful Tuscan countryside.',
'services_parking_title': 'Parking',
'services_parking_description': 'Free parking is available for guests of the Villa Rucellai.',
'services_pool_title': 'Swimming Pool',
'services_pool_description': 'A swimming pool is available for guests to enjoy during the summer months.',
'services_cleaning_title': 'Cleaning Service',
'services_cleaning_description': 'Daily cleaning service.',
'services_wifi_title': 'Wifi',
'services_wifi_description': 'Free wifi is available throughout the Villa Rucellai.',
'gallery_title': 'GALLERY',
'contacts_title': 'CONTACT US' },
    'it':{'nav_about_us ': 'Chi Siamo',
'nav_services': 'Servizi',
'nav_gallery': 'Galleria',
'nav_contacts': 'Contatti',
'book_now_btn': 'Prenota Ora',
'about_us_title': 'CHI SIAMO',
'about_us_p': 'La Villa Rucellai è un antico casale toscano situato a Prato, a pochi chilometri da Firenze. La struttura è immersa nel verde della campagna toscana e offre ai suoi ospiti un\'esperienza unica e indimenticabile.',
'about_us_history_title': 'LA NOSTRA STORIA',
'about_us_history_p': 'Questa è la storia della Villa Rucellai.',
'services_title': 'I NOSTRI SERVIZI',
'services_breakfast_title': 'Prima Colazione',
'services_breakfast_description': 'La prima colazione è inclusa nel prezzo della camera e viene servita nella sala da pranzo.',
'services_garden_title': 'Giardino',
'services_garden_description': 'La Villa Rucellai dispone di un tipico giardino all\'italiana dove gli ospiti possono rilassarsi e godersi la campagna toscana.',
'services_parking_title': 'Parcheggio',
'services_parking_description': 'Parcheggio gratuito disponibile per gli ospiti.',
'services_pool_title': 'Piscina',
'services_pool_description': 'La Villa Rucellai dispone di una piscina esterna aperta durante i mesi estivi.',
'services_cleaning_title': 'Pulizie giornaliere',
'services_cleaning_description': 'Servizio di pulizia giornaliero.',
'services_wifi_title': 'Wifi',
'services_wifi_description': 'Wifi gratuito disponibile.',
'gallery_title': 'GALLERIA',
'contacts_title': 'CONTATTACI'}
};



availableLangs = Object.keys(translations);
var userLang = navigator.language || navigator.userLanguage; 
let currentLang = availableLangs.includes(userLang) ? userLang : "en";



function updateLanguage(lang) {
    // set correct flag
    document.querySelectorAll("[id^=lang-switch-]").forEach(el => {
        el.style.display = el.id === `lang-switch-${lang}` ? "none" : "inline";
    });
    document.querySelectorAll("[data-key]").forEach(el => {
        let key = el.dataset.key;
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    let navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
        new bootstrap.Collapse(navbarCollapse).hide();
    }
}


// Toggle between languages when button is clicked
document.querySelectorAll(".lang-switch").forEach(btn => btn.addEventListener("click", function () {
    currentLang = currentLang === "en" ? "it" : "en";
    updateLanguage(currentLang);
}));

// Load language when the page loads
updateLanguage(currentLang);