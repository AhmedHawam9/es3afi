import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)


function loadLocaleMessages() {
    const locales = require.context('../locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
    const messages = {}
    locales.keys().forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i)
        if (matched && matched.length > 1) {
            const locale = matched[1]
            messages[locale] = locales(key)
        }
    })
    return messages
}
let lang = "ar";
if( localStorage.getItem('lang')){
    lang = localStorage.getItem('lang');
}

const i18n = new VueI18n({
    locale: lang, // set locale
    fallbackLocale: lang, // set fallback locale
    messages: loadLocaleMessages() // set locale messages
});

export default i18n