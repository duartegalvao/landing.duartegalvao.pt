i18next
.use(i18nextHttpBackend)
.use(i18nextBrowserLanguageDetector)
.init({
    fallbackLng: 'en',         // default to English
    supportedLngs: ['en', 'pt'],
    debug: false,
    backend: {
        loadPath: '/locales/{{lng}}/translation.json'
    },
    saveMissing: false,
    interpolation: {
        escapeValue: false
    },
}, function(err) {
    if (err) return console.error(err);
    updateContent();
});

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translated = i18next.t(key);
        if (translated && translated !== key) {
            el.innerHTML = translated;
        }
    });
}