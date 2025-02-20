const translations = {
    "en": {'nav_about_us': 'About Us',
'nav_services': 'Services',
'nav_info': 'Info',
'nav_gallery': 'Gallery',
'nav_contacts': 'Contacts',
'book_now_btn': 'Book Now',
'about_us_title': 'ABOUT US',
'about_us_p': `Villa Rucellai is a charming bed and breakfast located in Prato, nestled in the tranquility of the Tuscan countryside, just 4 km from the city center. This historic villa, still owned and inhabited by the Rucellai-Piqué family for more than two centuries, offers a cozy and familiar atmosphere, ideal for a relaxing break or as a starting point for exploring Tuscany. 
The property has several rooms, each unique in size and decor, all with private bathrooms. 
Guests can enjoy an outdoor swimming pool for seasonal use, ideal for relaxing moments surrounded by greenery. The villa is surrounded by olive groves and vineyards and offers a serene and evocative environment.`,
'activities_title': 'EXPLORE & DISCOVER', 
'activities_p':'Located in the Val di Bisenzio, Villa Rucellai is a strategic starting point to visit the main tourist attractions of Tuscany: Florence is about 20 km away as well as Pistoia (about 20 km), Lucca about 60 km, Pisa about 75 km, Siena and Arezzo about 90 km, all historically and artistically important centers easily reachable by car or public transport, from train stations in Prato. Furthermore, it is about 30 km from the Montecatini spa and about 85 km from the renowned beaches of Versilia (Viareggio, Forte dei Marmi, Torre del Lago Puccini, etc).',
'history_title': 'OUR HISTORY',
'history_p':`The Rucellai family was one of the most prestigious in Florence, playing a key role in politics, economics and culture between the Middle Ages and the Renaissance. Originating as a powerful merchant dynasty, the family reached its maximum prestige in the 15th century thanks to Giovanni di Paolo Rucellai and his son Bernardo, who consolidated relations with the Medici by marrying in 1466 Nannina de' Medici, sister of Lorenzo the Magnificent. In addition to their political and commercial influence, the Rucellai distinguished themselves for their patronage, supporting prominent intellectuals and artists such as Niccolò Machiavelli, Gabriele D'Annunzio, and, above all, Leon Battista Alberti. They commissioned important architectural works from the latter, including the facade of the Church of San Pancrazio and that of Santa Maria Novella, where the family's coats of arms can still be seen today, testifying to their contribution to Florentine culture. Another important legacy of the family is the Villa Rucellai in Prato, designed on a pre-existing medieval structure. Built later in the 15th century and subsequently modified in the following centuries as well, it represents one of the most significant examples of a Renaissance aristocratic residence in Tuscany. The villa's architecture blends medieval elements with Renaissance innovations, evident in its elegant loggias and decorations inspired by the principles of harmony and symmetry proper to the period. The villa is surrounded by a magnificent Italian garden, where nature combines with art to create an atmosphere of peace and beauty. Geometric flowerbeds, fountains and ancient trees enrich the park, giving it a timeless charm. Although less well known than other Tuscan villas, the Villa Rucellai is a true hidden gem that deserves to be discovered for its history, architecture, and deep connection to Tuscany's cultural heritage. To visit the villa is to immerse oneself in an era that left an indelible mark on European civilization, rediscovering the charm of a family that helped shape Renaissance Florence.
The history of the owners of Villa Rucellai di Canneto begins in 1427, when it belonged to the Vinaccesi family. In 1458, the villa was sold to the powerful Florentine citizen Diotisalvi Neroni, adviser to Piero de' Medici. However, in 1466, Neroni was involved in a conspiracy against the Medici, which failed, and his property, including Canneto, was confiscated. Later, the property was sold to Lorenzo Davanzati, whose daughter Titta brought it as dowry to Francesco Del Tovaglia.
The Del Tovaglia family owned the villa for nearly three centuries, from the second half of the 15th century until the mid-18th century, with a brief interruption in the late 16th century when the villa passed to the Cavalcanti family. Francesco Del Tovaglia made extensive changes before 1480, transforming it into a “lord's house with a tower in the manner of a palagio.” It was probably his son Tommaso, owner in 1534, who undertook the largest renovations, which gave the villa its Renaissance appearance. The coat of arms of the Del Tovaglia family can still be seen above the doorway of the south facade.
In 1740, the property passed to Girolamo de Pazzi, and upon his death in 1759, the villa was transferred to the Rucellai family, when his daughter Teresa Benvenuta brought it as dowry to Giuseppe Rucellai. Giuseppe and Teresa's son Giovan Pietro became heir to it in 1766, and it has remained in the Rucellai family ever since, until the current owners, the children of Giovanna Rucellai and Paolo Piqué: Giovanni, Lorenzo, Francesca and Alessandro.`,
// 'history_p': `The Rucellai family was one of the most prestigious in Florence, playing a key role in politics, economics and culture between the Middle Ages and the Renaissance. Originating as a powerful merchant dynasty, the family reached its maximum prestige in the 15th century thanks to Giovanni di Paolo Rucellai and his son Bernardo, who consolidated relations with the Medici by marrying Nannina de' Medici in 1466. In addition to their political and commercial influence, the Rucellai distinguished themselves for their patronage, supporting prominent intellectuals and artists such as Leonardo da Vinci, Pico della Mirandola, and, above all, Leon Battista Alberti. They commissioned important architectural works from the latter, including the facade of the Church of San Pancrazio and that of Santa Maria Novella, where the family's coats of arms can still be seen today, testifying to their contribution to Florentine culture.  
// Another important legacy of the family is the Villa Rucellai in Prato, designed by Alberti on a pre-existing medieval structure. Built in the 15th century, it represents one of the most significant examples of an aristocratic Renaissance residence in Tuscany. The villa's architecture blends medieval elements with Renaissance innovations, evident in its elegant loggias and decorations inspired by the principles of harmony and symmetry proper to the period.  
// The villa is surrounded by a magnificent Italian garden, where nature combines with art to create an atmosphere of peace and beauty. Geometric flowerbeds, fountains and ancient trees enrich the park, giving it a timeless charm. Although less well known than other Tuscan villas, the Villa Rucellai is a true hidden gem that deserves to be discovered for its history, architecture, and deep connection to Tuscany's cultural heritage.  
// To visit the villa is to immerse oneself in an era that left an indelible mark on European civilization, rediscovering the charm of a family that helped shape Renaissance Florence.`,
// 'history_p': `The Rucellai family is one of Florence's most illustrious families, whose history has its roots in the Middle Ages and extends into the Renaissance, deeply marking the city's cultural, economic and political life. The Rucellai were protagonists in many aspects of Florentine life, from banking and commerce to politics and art and culture.
// In the 13th century, they became one of Florence's leading merchant families, and their prestige grew to such an extent that they began to compete with the other great Florentine families, such as the Medici and the Pazzi.
// In the 15th century, the Rucellai family reached the height of its influence under the leadership of Giovanni di Paolo Rucellai and his son Bernardo Rucellai, who, in turn, married Nannina De' Medici on June 8, 1466. 
// The family was distinguished for its involvement in holding prominent political positions and in public institutions in the City of Florence but never lacked a connection with humanist thought and the intellectuals who flourished in Florence at that time. Many members of the Rucellai family were in contact with Leonardo da Vinci, Pico della Mirandola, and other great thinkers, and promoted the spread of classical culture.
// The connection on the part of the family, but especially Bernardo, with art is particularly evident in the design of the Villa Rucellai, as well as in the influence the latter had on artists and architects of his time.  It is well known that he was a patron of Leon Battista Alberti, one of the most important architects of the time, and that Alberti designed, among other things, the façade of the Church of San Pancrazio in Florence, commissioned by the Rucellai family. Another impressive project was then the façade of the Church of Santa Maria Novella, on which there are the family's coats of arms that testify precisely to their importance and contribution to culture.
// Also to the noted architect Leon Battista Alberti and commissioned by the family was the design of the Villa Rucellai in Prato, which is one of the most significant examples of a Renaissance aristocratic residence in Tuscany, a place where history, art and nature intertwine in perfect balance. 
// Built in the 15th century on a pre-existing medieval tower, the villa is a fascinating testament to an architectural design that combines elements of medieval tradition with innovative Renaissance elements. The villa has an imposing facade, characterized by elegant loggias and decorations that recall the symmetry and geometric perfection typical of the philosophy of the period.
// Not only architecture, but also gardens. The villa is surrounded by a lush park that is an authentic corner of tranquility and natural beauty. Among the flowerbeds and century-old trees, the garden is inspired by the tradition of Italian gardens, with perfect geometric shapes and fountains that create an atmosphere of serenity and harmony. Although less well known than other Tuscan villas, it represents a true hidden masterpiece that deserves to be discovered for its beauty, history, and connection to Tuscany's cultural heritage.
// A trip to the Villa Rucellai is an immersion in the history, culture, and nature of Tuscany, an experience that allows you to rediscover the charm of an era that profoundly marked European civilization (more little tidbits on Instagram).`,
'history_read_more_btn': 'Read More',
'history_read_less_btn': 'Close',
'services_title': 'OUR SERVICES',
'services_breakfast_title': 'Breakfast',
'services_breakfast_p': 'Breakfast is included in the price of the room and is served in the dining room.',
'services_garden_title': 'Garden',
'services_garden_p': 'The Villa Rucellai has a typical Italian garden where guests can relax and enjoy the beautiful Tuscan countryside.',
'services_parking_title': 'Parking',
'services_parking_p': 'Free parking is available for guests of the Villa Rucellai.',
'services_pool_title': 'Swimming Pool',
'services_pool_p': 'A swimming pool is available for guests to enjoy during the summer months.',
'services_cleaning_title': 'Cleaning Service',
'services_cleaning_p': 'Daily cleaning service.',
'services_wifi_title': 'Wifi',
'services_wifi_p': 'Free wifi is available throughout the Villa Rucellai.',
'info_title':'INFORMATION',
'info_breakfast_title':'Breakfast',
'info_breakfast_p':'Breakfast, in intercontinental style, is served in the common room or in the loggia, to enjoy the tranquility of the Tuscan landscape, from 7:30 am to 9:30 am.',
'info_checkin_title':'Check-in',
'info_checkin_p':'Our bed and breakfast is family-run and the reception is not 24h so we kindly ask our guests to inform us of the arrival time, so that we can organize the welcome. In any case, the rooms are available from 3:00 pm.',
'info_checkout_title':'Check-out',
'info_checkout_p':'Check-out of the rooms is by 10:00 am in order to allow the cleaning of the rooms, with the possibility of depositing luggage in reception until departure.',
'info_tax_title':'City Tax',
'info_tax_p':'The tourist tax is €0.50 per person per night.',
'info_events_title':'Events',
'info_events_p': `Villa Rucellai is an extraordinary place, where history, beauty and sophistication come together to create the ideal atmosphere for unforgettable moments. Immersed in the heart of Tuscany, this historic villa offers not only a charming natural setting, but also an architecture that tells centuries of tradition, elegance and culture.  
Whether it is a dream wedding, a special anniversary or a private celebration, Villa Rucellai is the perfect place to experience a unique event. With its large and refined indoor and outdoor spaces, the villa is able to accommodate any type of celebration, making every special occasion even more memorable.
Because every celebration deserves to be experienced in a unique place, and we are ready to offer you an experience that you will never forget.`,
'gallery_title': 'GALLERY',
'contacts_title': 'CONTACT US',
'contacts_first_website':'Online since 2002! Visit our first website.',
},
    
'it':{'nav_about_us': 'Chi Siamo',
'nav_services': 'Servizi',
'nav_info': 'Info',
'nav_gallery': 'Galleria',
'nav_contacts': 'Contatti',
'book_now_btn': 'Prenota Ora',
'about_us_title': 'CHI SIAMO',
'about_us_p': `Villa Rucellai è un affascinante bed and breakfast situato a Prato, immerso nella tranquillità della campagna toscana, a soli 4 km dal centro città. Questa storica villa, tutt\'ora di proprietà e abitata dalla famiglia Rucellai-Piqué da oltre due secoli, offre un\'atmosfera accogliente e familiare, ideale per una sosta rilassante o come punto di partenza per esplorare la Toscana. 
La struttura dispone di varie camere, ognuna unica per dimensioni e arredamento, tutte dotate di bagno privato. 
Gli ospiti possono usufruire di una piscina all\'aperto ad uso stagionale, ideale per momenti di relax immersi nel verde circostante. La villa è circondata da oliveti e vigneti e offre un ambiente sereno e suggestivo.`,
'activities_title': 'NEI DINTORNI',
'activities_p':'Situata nella Val di Bisenzio, Villa Rucellai è un punto di partenza strategico per visitare le principali attrazioni turistiche della Toscana: Firenze dista circa 20 km come anche Pistoia (circa 20 km), Lucca circa 60 km, Pisa circa 75 km, Siena e Arezzo circa 90 km, tutti centri storico-artistici di rilievo facilmente raggiungibili in auto o con i mezzi pubblici con partenza dalle stazioni ferroviarie della città. Inoltre, dista circa 30 km dalla stazione termale di Montecatini e circa 85 km dalle rinomate spiagge della Versilia (Viareggio, Forte dei Marmi, Torre del Lago Puccini, etc).',
'history_title': 'LA NOSTRA STORIA',
'history_p': `La famiglia Rucellai è stata una delle più prestigiose di Firenze, con un ruolo chiave nella politica, nell'economia e nella cultura tra il Medioevo e il Rinascimento. Originatasi come potente dinastia mercantile, la famiglia raggiunse il massimo prestigio nel XV secolo grazie a Giovanni di Paolo Rucellai e al figlio Bernardo, il quale consolidò i rapporti con i Medici sposando nel 1466 Nannina de' Medici, sorella di Lorenzo il Magnifico. Oltre all'influenza politica e commerciale, i Rucellai si distinsero per il loro mecenatismo, sostenendo intellettuali e artisti di spicco come Niccolò Machiavelli, Gabriele D’Annunzio e, soprattutto, Leon Battista Alberti. A quest'ultimo commissionarono importanti opere architettoniche, tra cui la facciata della Chiesa di San Pancrazio e quella di Santa Maria Novella, dove ancora oggi sono visibili gli stemmi della famiglia a testimonianza del loro contributo alla cultura fiorentina. Un altro importante lascito della famiglia è la Villa Rucellai di Prato, progettata su una struttura medievale preesistente. Edificata poi nel XV secolo e modificata successivamente anche nei secoli seguenti, rappresenta uno degli esempi più significativi di residenza nobiliare rinascimentale in Toscana. L'architettura della villa fonde elementi medievali con le innovazioni del Rinascimento, evidenti nelle sue eleganti logge e nelle decorazioni ispirate ai principi di armonia e simmetria propri dell'epoca. La villa è circondata da un magnifico giardino all'italiana, dove la natura si combina con l'arte per creare un'atmosfera di pace e bellezza. Aiuole geometriche, fontane e alberi secolari arricchiscono il parco, conferendogli un fascino senza tempo. Sebbene meno conosciuta rispetto ad altre ville toscane, la Villa Rucellai è un autentico gioiello nascosto, che merita di essere scoperto per la sua storia, la sua architettura e il profondo legame con il patrimonio culturale della Toscana. Visitare la villa significa immergersi in un'epoca che ha lasciato un segno indelebile nella civiltà europea, riscoprendo il fascino di una famiglia che ha contribuito a plasmare la Firenze rinascimentale.
La storia dei proprietari della Villa Rucellai di Canneto inizia nel 1427, quando apparteneva alla famiglia Vinaccesi. Nel 1458, la villa fu venduta al potente cittadino fiorentino Diotisalvi Neroni, consigliere di Piero de' Medici. Tuttavia, nel 1466, Neroni fu coinvolto in una congiura contro i Medici, che fallì, e i suoi beni, tra cui Canneto, furono confiscati. Successivamente, la proprietà fu venduta a Lorenzo Davanzati, la cui figlia Titta la portò in dote a Francesco Del Tovaglia.
La famiglia Del Tovaglia divenne proprietaria della villa per quasi tre secoli, dalla seconda metà del Quattrocento fino alla metà del Settecento, con una breve interruzione alla fine del Cinquecento quando la villa passò ai Cavalcanti. Francesco Del Tovaglia apportò ampie modifiche prima del 1480, trasformandola in una "casa da signore con torre a modo di palagio". Probabilmente fu suo figlio Tommaso, proprietario nel 1534, a intraprendere i più grandi lavori di ristrutturazione, che conferirono alla villa l'aspetto rinascimentale. Lo stemma della famiglia Del Tovaglia è ancora visibile sopra il portone della facciata sud.
Nel 1740, la proprietà passò a Girolamo de Pazzi, e alla sua morte, nel 1759, la villa venne trasferita alla famiglia Rucellai, quando la figlia Teresa Benvenuta la portò in dote a Giuseppe Rucellai. Giovan Pietro, figlio di Giuseppe e Teresa, ne divenne erede nel 1766, e da allora è rimasta nella famiglia Rucellai, fino agli attuali proprietari, i figli di Giovanna Rucellai e Paolo Piqué: Giovanni, Lorenzo, Francesca e Alessandro.`,
// 'history_p': `La famiglia Rucellai è una delle famiglie più illustri di Firenze, la cui storia affonda le radici nel Medioevo e si estende fino al Rinascimento, segnando profondamente la vita culturale, economica e politica della città. I Rucellai furono protagonisti di numerosi aspetti della vita fiorentina, dalla banca e commercio alla politica, passando per l'arte e la cultura.
// Nel XIII secolo, divenne una delle principali famiglie mercantili di Firenze, e il loro prestigio crebbe a tal punto che cominciarono a competere con le altre grandi famiglie fiorentine, come i Medici e i Pazzi.
// Nel Quattrocento, la famiglia Rucellai raggiunse il culmine della sua influenza sotto la guida di Giovanni di Paolo Rucellai e del figlio Bernardo Rucellai che, a sua volta, convolò a nozze con Nannina De\' Medici l\'8 giugno 1466. 
// La famiglia si distinse per il suo impegno nel ricoprire cariche politiche di rilievo e in istituzioni pubbliche nel Comune di Firenze ma non mancò mai un legame con il pensiero umanista e con gli intellettuali che fiorivano a Firenze in quel periodo. Molti membri della famiglia Rucellai erano in contatto con Leonardo da Vinci, Pico della Mirandola e altri grandi pensatori, e promossero la diffusione della cultura classica.
// Il legame da parte della famiglia, ma soprattutto di Bernardo, con l'arte è particolarmente evidente nel progetto della Villa Rucellai, così come nell'influenza che quest\'ultimo ebbe su artisti e architetti del suo tempo. È noto che fu mecenate di Leon Battista Alberti, uno dei più importanti architetti dell'epoca, e che Alberti progettò tra le altre cose, proprio su commissione della famiglia Rucellai, la facciata della Chiesa di San Pancrazio a Firenze. Un altro imponente progetto fu poi la facciata della Chiesa di Santa Maria Novella, su cui sono presenti gli stemmi della famiglia che ne testimoniano proprio l\'importanza e il contributo dato alla cultura.
// Sempre al noto architetto Leon Battista Alberti e su commissione della famiglia si deve il progetto della Villa Rucellai di Prato, che è uno degli esempi più significativi di residenza nobiliare rinascimentale in Toscana, un luogo dove la storia, l'arte e la natura si intrecciano in un perfetto equilibrio. 
// Costruita nel XV secolo su una torre medievale preesistente, la villa è l'affascinante testimonianza di un progetto architettonico che unisce elementi della tradizione medievale a quelli innovativi del Rinascimento. La villa si presenta con una facciata imponente, caratterizzata da eleganti logge e decorazioni che richiamano la simmetria e la perfezione geometrica tipiche della filosofia dell\'epoca.
// Non solo architettura, ma anche giardini. La villa è circondata da un parco rigoglioso che rappresenta un autentico angolo di tranquillità e bellezza naturale. Tra le aiuole e gli alberi secolari, il giardino si ispira alla tradizione dei giardini all'italiana, con forme geometriche perfette e fontane che creano un'atmosfera di serenità e armonia. Sebbene meno conosciuta rispetto ad altre ville toscane, rappresenta un vero e proprio capolavoro nascosto che merita di essere scoperto per la sua bellezza, la sua storia e il suo legame con il patrimonio culturale della Toscana.
// Un viaggio alla Villa Rucellai è un'immersione nella storia, nella cultura e nella natura della Toscana, un'esperienza che permette di riscoprire il fascino di un'epoca che ha segnato profondamente la civiltà europea (altre piccole curiosità su Instagram).`,
'history_read_more_btn': 'Leggi di più',
'history_read_less_btn': 'Chiudi',
'services_title': 'I NOSTRI SERVIZI',
'services_breakfast_title': 'Prima Colazione',
'services_breakfast_p': 'La prima colazione è inclusa nel prezzo della camera e viene servita nella sala da pranzo.',
'services_garden_title': 'Giardino',
'services_garden_p': 'La Villa Rucellai dispone di un tipico giardino all\'italiana dove gli ospiti possono rilassarsi e godersi la campagna toscana.',
'services_parking_title': 'Parcheggio',
'services_parking_p': 'Parcheggio gratuito disponibile per gli ospiti.',
'services_pool_title': 'Piscina',
'services_pool_p': 'La Villa Rucellai dispone di una piscina esterna aperta durante i mesi estivi.',
'services_cleaning_title': 'Pulizie giornaliere',
'services_cleaning_p': 'Servizio di pulizia giornaliero.',
'services_wifi_title': 'Wifi',
'services_wifi_p': 'Wifi gratuito disponibile.',
'info_title':'INFORMAZIONI',
'info_breakfast_title':'Colazione',
'info_breakfast_p':'La prima colazione, in stile intercontinentale, viene servita nella sala comune o in loggia, per godere della tranquillità del paesaggio toscano, dalle ore 7:30 fino alle ore 9:30.',
'info_checkin_title':'Check-in',
'info_checkin_p':'Il nostro bed and breakfast è a conduzione familiare e la reception non è 24h perciò chiediamo gentilmente ai nostri ospiti di comunicarci l\'orario di arrivo, così da poter organizzare al meglio l\'accoglienza. In ogni caso, le camere sono disponibili a partire dalle ore 15:00.',
'info_checkout_title':'Check-out',
'info_checkout_p':'Il check-out delle camere avviene entro le ore 10:00 in modo da permettere la pulizia degli ambienti, con la possibilità di depositare gratuitamente i bagagli in reception fino alla partenza.',
'info_tax_title':'Tassa di Soggiorno',
'info_tax_p':'La tassa di soggiorno è di €0,50 a persona a notte.',
'info_events_title':'Eventi',
'info_events_p': `La Villa Rucellai è un luogo straordinario, dove la storia, la bellezza e la raffinatezza si incontrano per creare l\'atmosfera ideale per momenti indimenticabili. Immersa nel cuore della Toscana, questa villa storica offre non solo un\'incantevole cornice naturale, ma anche un\'architettura che racconta secoli di tradizione, eleganza e cultura. 
Che si tratti di un matrimonio da sogno, un anniversario speciale o una celebrazione privata, la Villa Rucellai è il posto perfetto per vivere un evento unico. Con i suoi ampi e raffinati spazi, sia interni che esterni, la villa è in grado di accogliere ogni tipo di celebrazione, rendendo ogni occasione speciale ancora più memorabile. 
Perché ogni celebrazione merita di essere vissuta in un luogo unico, e noi siamo pronti ad offrirvi un\'esperienza che non dimenticherete mai.`,
'gallery_title': 'GALLERIA',
'contacts_title': 'CONTATTACI',
'contacts_first_website':'Online dal 2002! Visita il nostro primo sito web.',
}
};



document.querySelectorAll("[data-key]").forEach(el => {console.log(el.dataset.key);});


availableLangs = Object.keys(translations);
var userLang = navigator.language.split("-")[0] || navigator.userLanguage; 
let currentLang = availableLangs.includes(userLang) ? userLang : "en";
console.log(currentLang);



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





const paragraph = document.querySelector("[data-key='history_p']");
const readMoreBtn = document.querySelector(".read-more-btn");

// paragraph.textContent = text; // Insert full text

readMoreBtn.addEventListener("click", function () {
    if (paragraph.classList.contains("expanded")) {
        paragraph.classList.remove("expanded");
        paragraph.classList.add("compressed");
        readMoreBtn.textContent = translations[currentLang]['history_read_more_btn'];
    } else {
        paragraph.classList.add("expanded");
        paragraph.classList.remove("compressed");

        readMoreBtn.textContent = translations[currentLang]['history_read_less_btn'];
    }
});