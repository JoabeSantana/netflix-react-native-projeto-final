import { Platform, NativeModules, I18nManager } from "react-native";
import I18n from 'i18n-js'
const normalizeTranslate = {
    en_US: 'en_US',
    pt_BR: 'pt_BR',
    en: 'en_US',
    pt_US: 'pt_BR',
};

I18n.translations = {
    en_US: require('./en-US'),
    pt_BR: require('./pt-BR'),
};

export const setLanguage = () => {
    const language = getLanguageByDevice();
    const translate = normalizeTranslate[language];
    const isExistentLanguage = I18n.translations.hasOwnProperty(translate);
    isExistentLanguage ? (I18n.locale = translate) : (I18n.defaultLocale = 'pt_BR');
};

export const getLanguageByDevice = () => {
    return NativeModules.I18nManager.localeIdentifier;
};

export const translate = (key) => I18n.t(key);