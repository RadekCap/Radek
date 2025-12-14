const translations = {
    en: {
        // Meta
        pageTitle: "Radek - Official Artist Page",
        metaDescription: "Radek - Original instrumental rock music. Rock Majesty out now, One Beautiful Day at Litomysl coming soon.",
        ogTitle: "Radek - Official Artist Page",
        ogDescription: "Original instrumental rock music. Rock Majesty out now, One Beautiful Day at Litomysl coming soon.",

        // Hero
        releaseInfo: "Out Now | Available on 23 platforms",
        ctaSpotify: "Spotify",
        ctaYTMusic: "YouTube Music",

        // Upcoming
        comingSoon: "Coming Soon",
        upcomingDesc: "New single arriving soon on all platforms",
        watchTeaser: "Watch the Teaser",

        // History
        theJourney: "The Journey",

        // Timeline - Light in the Darkness
        litdTitle: "Light in the Darkness",
        litdDesc: "The beginning of the musical journey. First steps on stage as a guitarist.",
        litdEvent1: "Terč - opening for Memory of Jesus",
        litdEvent2: "Golf club",
        litdNote: "Recordings coming soon",

        // Timeline - The Alfa Beat
        alfabeatTitle: "The Alfa Beat",
        alfabeatDesc: "Four years of rock performances across venues, sharing stages with Czech rock legends.",
        alfabeatEvent1: "Semilaso - opening for Nšo-či",
        alfabeatEvent2: "Musilka - with Mírový sbor",
        alfabeatEvent3: "Musilka - with Slepá kolej",
        alfabeatEvent4: "with Tichá dohoda, Kern, Pepa Nos",
        alfabeatEvent5: "Musilka - opening for Mňága a Žďorp",
        watchYouTube: "Watch on YouTube",

        // Timeline - The Quiet Years
        quietTitle: "The Quiet Years",
        quietDesc: "After nearly a decade of performances, the guitar fell silent for over two decades. Life took different turns, but the music never truly left.",

        // Timeline - Johny Band
        johnyTitle: "Johny Band",
        johnyDesc: "After 25 years away from the stage, the return. Picking up the guitar again and feeling the energy of live performance once more.",
        johnyEvent1: "EDEN - Drnovice",

        // Timeline - Meadow Street
        msTitle: "Meadow Street",
        msDesc: "Continuing the comeback with a new band and new energy. Thanks to insights from the book <a href=\"https://www.amazon.com/Effortless-Mastery-Liberating-Master-Musician/dp/156224003X\" target=\"_blank\" rel=\"noopener\">Effortless Mastery</a>, I experienced music on a new level and confirmed that quality of performance is non-negotiable.",
        msEvent1: "Drásovské kulturní léto",
        msEvent2: "Dačice",

        // Timeline - Solo
        soloTitle: "Solo Journey",
        soloDesc1: "Stepping away from band performances to focus on personal growth as a musician. Over a year dedicated to mastering songs by Extreme, one of the greatest influences. This journey of learning and rediscovery sparked the creation of original music.",
        soloDesc2: "The result: <strong>Rock Majesty</strong> and <strong>One Beautiful Day at Litomysl</strong> — the first original compositions, marking the beginning of a new chapter.",

        // Footer
        copyright: "© 2025 Radek. All rights reserved."
    },
    cs: {
        // Meta
        pageTitle: "Radek - Oficiální stránka umělce",
        metaDescription: "Radek - Originální instrumentální rocková hudba. Rock Majesty právě vyšlo, One Beautiful Day at Litomysl již brzy.",
        ogTitle: "Radek - Oficiální stránka umělce",
        ogDescription: "Originální instrumentální rocková hudba. Rock Majesty právě vyšlo, One Beautiful Day at Litomysl již brzy.",

        // Hero
        releaseInfo: "Právě vyšlo | K dispozici na 23 platformách",
        ctaSpotify: "Spotify",
        ctaYTMusic: "YouTube Music",

        // Upcoming
        comingSoon: "Již brzy",
        upcomingDesc: "Nový singl brzy na všech platformách",
        watchTeaser: "Sledovat ukázku",

        // History
        theJourney: "Příběh",

        // Timeline - Light in the Darkness
        litdTitle: "Světlo ve tmě",
        litdDesc: "Začátek hudební cesty. První kroky na pódiu jako kytarista.",
        litdEvent1: "Terč - předkapela Memory of Jesus",
        litdEvent2: "Golf club",
        litdNote: "Nahrávky již brzy",

        // Timeline - The Alfa Beat
        alfabeatTitle: "The Alfa Beat",
        alfabeatDesc: "Čtyři roky rockových vystoupení napříč kluby, společné koncerty s českými rockovými legendami.",
        alfabeatEvent1: "Semilaso - předkapela Nšo-či",
        alfabeatEvent2: "Musilka - s Mírovým sborem",
        alfabeatEvent3: "Musilka - se Slepou kolejí",
        alfabeatEvent4: "s Tichou dohodou, Kernem, Pepou Nosem",
        alfabeatEvent5: "Musilka - předkapela Mňágy a Žďorp",
        watchYouTube: "Sledovat na YouTube",

        // Timeline - The Quiet Years
        quietTitle: "Tiché roky",
        quietDesc: "Po téměř dekádě vystupování kytara utichla na více než dvě desetiletí. Život se ubíral jinými směry, ale hudba nikdy úplně neodešla.",

        // Timeline - Johny Band
        johnyTitle: "Johny Band",
        johnyDesc: "Po 25 letech mimo pódia návrat. Pocítil jsem touhu znovu vzít kytaru do ruky a pocítit energii živého vystoupení.",
        johnyEvent1: "EDEN - Drnovice",

        // Timeline - Meadow Street
        msTitle: "Meadow Street",
        msDesc: "Pokračování comebacku s novou kapelou, novou energií. Díky novým znalostem a zkušenostem z knihy <a href=\"https://www.amazon.com/Effortless-Mastery-Liberating-Master-Musician/dp/156224003X\" target=\"_blank\" rel=\"noopener\">Effortless Mastery</a> jsem si hudbu užil na nové úrovni a potvrdil si, že z kvality provedení se neslevuje.",
        msEvent1: "Drásovské kulturní léto",
        msEvent2: "Dačice",

        // Timeline - Solo
        soloTitle: "Sólová cesta",
        soloDesc1: "Odklon od kapelního hraní se zaměřením na osobní růst jako muzikant. Více než rok věnovaný zvládnutí skladeb od Extreme, jednoho z největších vlivů. Tato cesta učení a znovuobjevování podnítila tvorbu originální hudby.",
        soloDesc2: "Výsledek: <strong>Rock Majesty</strong> a <strong>One Beautiful Day at Litomysl</strong> — první originální skladby, které znamenají začátek nové kapitoly.",

        // Footer
        copyright: "© 2025 Radek. Všechna práva vyhrazena."
    }
};

// Initialize language from localStorage or default to English
let currentLang = localStorage.getItem('lang') || 'en';

// Apply translations to the page
function applyTranslations(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    // Update HTML lang attribute
    document.documentElement.lang = lang === 'cs' ? 'cs' : 'en';

    // Update page title
    document.title = translations[lang].pageTitle;

    // Update meta tags
    document.querySelector('meta[name="description"]').content = translations[lang].metaDescription;
    document.querySelector('meta[property="og:title"]').content = translations[lang].ogTitle;
    document.querySelector('meta[property="og:description"]').content = translations[lang].ogDescription;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (el.hasAttribute('data-i18n-html')) {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    // Update toggle button state
    updateToggleState(lang);
}

// Update toggle button visual state
function updateToggleState(lang) {
    const enBtn = document.getElementById('lang-en');
    const csBtn = document.getElementById('lang-cs');

    if (enBtn && csBtn) {
        enBtn.classList.toggle('active', lang === 'en');
        csBtn.classList.toggle('active', lang === 'cs');
    }
}

// Toggle language
function toggleLanguage(lang) {
    applyTranslations(lang);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations(currentLang);
});
