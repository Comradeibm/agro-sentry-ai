import React, { createContext, useContext, useState, useCallback } from 'react';

export type Language = 'en' | 'ha' | 'yo' | 'ig' | 'pcm';

export const languageNames: Record<Language, string> = {
  en: 'English',
  ha: 'Hausa',
  yo: 'Yoruba',
  ig: 'Igbo',
  pcm: 'Pidgin',
};

type TranslationKeys = {
  nav_home: string;
  nav_about: string;
  nav_pricing: string;
  nav_contact: string;
  nav_login: string;
  nav_register: string;
  nav_dashboard: string;
  nav_logout: string;
  hero_badge: string;
  hero_title_1: string;
  hero_title_2: string;
  hero_desc: string;
  hero_cta: string;
  hero_learn: string;
  features_title: string;
  features_desc: string;
  testimonials_title: string;
  contact_title: string;
  contact_desc: string;
  contact_btn: string;
};

const translations: Record<Language, TranslationKeys> = {
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    nav_pricing: 'Pricing',
    nav_contact: 'Contact',
    nav_login: 'Login',
    nav_register: 'Register',
    nav_dashboard: 'Dashboard',
    nav_logout: 'Logout',
    hero_badge: 'Empowering African Agriculture',
    hero_title_1: 'AI-Powered Farming for',
    hero_title_2: 'Better Harvests',
    hero_desc: 'Detect diseases early, get real-time weather alerts, and access expert advice\u2014all in your local language. Join thousands of Nigerian farmers growing smarter.',
    hero_cta: 'Get Started Free',
    hero_learn: 'Learn More',
    features_title: 'Powerful Features for Your Farm',
    features_desc: 'Everything you need to improve your yield and secure your livelihood.',
    testimonials_title: 'What Nigerian Farmers Are Saying',
    contact_title: 'Have Questions?',
    contact_desc: 'Our team and agricultural experts are ready to help you grow.',
    contact_btn: 'Contact Support',
  },
  ha: {
    nav_home: 'Gida',
    nav_about: 'Game da mu',
    nav_pricing: 'Farashi',
    nav_contact: 'Tuntu\u0263i mu',
    nav_login: 'Shiga',
    nav_register: 'Yin rijista',
    nav_dashboard: 'Dashboard',
    nav_logout: 'Fita',
    hero_badge: '\u{1F331} \u0198arfafa Aikin Gona na Afirka',
    hero_title_1: 'Noma da AI don',
    hero_title_2: 'Lamba Mai Kyau',
    hero_desc: 'Gano cututtuka da wuri, samu fa\u0257akarwar yanayi, da shawarar \u0199wararru\u2014duka cikin harshenku.',
    hero_cta: 'Fara Kyauta',
    hero_learn: 'Kara Sani',
    features_title: 'Abubuwan da ke taimaka maka',
    features_desc: 'Duk abin da kake bu\u0199ata don inganta amfanin gonarka.',
    testimonials_title: 'Abin da Manoman Najeriya suke cewa',
    contact_title: 'Kana da Tambayoyi?',
    contact_desc: '\u0198ungiyarmu da \u0199wararrun noma suna shirye su taimake ka.',
    contact_btn: 'Tuntu\u0263i Tallafi',
  },
  yo: {
    nav_home: 'Il\u00e9',
    nav_about: 'N\u00edpa Wa',
    nav_pricing: 'Iye Ow\u00f3',
    nav_contact: 'K\u00e0n s\u00ed Wa',
    nav_login: 'W\u00f2l\u00e9',
    nav_register: 'For\u00fak\u00f3s\u00edl\u00e8',
    nav_dashboard: 'Dashboard',
    nav_logout: 'J\u00e1de',
    hero_badge: '\u{1F331} \u00ccm\u00falera I\u1e63\u1eb9 \u00c0gb\u1eb9 \u00c1f\u00edr\u00eck\u00e0',
    hero_title_1: 'I\u1e63\u1eb9 \u00c0gb\u00e9 p\u1eb9\u0300l\u00f9 AI f\u00fan',
    hero_title_2: '\u00c8r\u00e8 T\u00f3 D\u00e1ra J\u00f9',
    hero_desc: '\u1e62\u00e0w\u00e1r\u00ec \u00e0r\u00f9n n\u00ed k\u00e9t\u00e9, gba \u00eck\u00ecl\u00e0\u00f2 oju-\u0254j\u0254, \u00e0ti \u00edm\u00f2r\u00e0n \u00e0w\u0254n on\u00edm\u0254\u0300\u2014gbogbo r\u00e8 n\u00ed \u00e8d\u00e8 r\u00e8.',
    hero_cta: 'B\u1eb9\u0300r\u00e8 L\u00f3f\u1eb9\u0300',
    hero_learn: 'K\u1eb9\u0300k\u0254\u0300\u00f2 S\u00ed i',
    features_title: '\u00c0w\u0254n \u1eb8\u0300ya T\u00f3 L\u00e1gb\u00e1ra f\u00fan Ogba R\u00e8',
    features_desc: 'Ohun gbogbo t\u00ed o n\u00edl\u00f2 l\u00e1ti m\u00fa \u00ecr\u00e8s\u00ec r\u00e8 p\u1ecd\u0300 s\u00ed i.',
    testimonials_title: 'Ohun t\u00ed \u00c0w\u0254n \u00c0gb\u1eb9 N\u00e0\u00ecj\u00edr\u00ec\u00e0 \u0144 S\u1ecd',
    contact_title: '\u1e62\u00e9 \u00d3 N\u00ed \u00ccb\u00e8\u00e8r\u00e8?',
    contact_desc: '\u1eb8\u0300gb\u00e9 wa \u00e0ti \u00e0w\u0254n on\u00edm\u0254\u0300 i\u1e63\u1eb9 \u00e0gb\u1eb9 \u1e63et\u00e1n l\u00e1ti r\u00e0n \u00e9 l\u00f3w\u00f3.',
    contact_btn: 'K\u00e0n s\u00ed Atil\u1eb9\u0300y\u00ecn',
  },
  ig: {
    nav_home: '\u1ee4l\u1ecd',
    nav_about: 'Banyere Any\u1ecb',
    nav_pricing: '\u1eccn\u1ee5 Ah\u1ecba',
    nav_contact: 'Kp\u1ecd\u1ecdt\u1ee5 Any\u1ecb',
    nav_login: 'Banye',
    nav_register: 'Debanye aha',
    nav_dashboard: 'Dashboard',
    nav_logout: 'P\u1ee5',
    hero_badge: '\u{1F331} \u1ecckwado \u1eccr\u1ee5 Ugwu Afr\u1ecbka',
    hero_title_1: '\u1eccr\u1ee5 Ugwu na AI maka',
    hero_title_2: 'Ihe Owuwe T\u1ecd\u1ecd',
    hero_desc: 'Ch\u1ecd\u0301p\u1ee5ta \u1ecd\u0300r\u1ecb\u0301a ngwa ngwa, nweta ozi ihu igwe, na nd\u1ee5m\u1ecd\u0300d\u1ee5 nd\u1ecb \u1ecd\u0300kachamara.',
    hero_cta: 'Malite N\u2019efu',
    hero_learn: 'M\u1ee5ta \u1eccz\u1ecd',
    features_title: 'At\u1ee5mat\u1ee5 D\u1ecb Ike maka Ugwu G\u1ecb',
    features_desc: 'Ihe niile \u1ecb ch\u1ecd\u0300r\u1ecd iji melite ihe owuwe g\u1ecb.',
    testimonials_title: 'Ihe Nd\u1ecb \u1eccr\u1ee5 Ugwu Na\u1ecbj\u1ecbr\u1ecba Na-ekwu',
    contact_title: '\u1eca Nwere Aj\u1ee5j\u1ee5?',
    contact_desc: 'Nd\u1ecb otu any\u1ecb na nd\u1ecb \u1ecd\u0300kachamara \u1ecd\u0300r\u1ee5 ugwu d\u1ecb njikere inyere g\u1ecb aka.',
    contact_btn: 'Kp\u1ecd\u1ecdt\u1ee5 Nkwado',
  },
  pcm: {
    nav_home: 'House',
    nav_about: 'About Us',
    nav_pricing: 'Price',
    nav_contact: 'Call We',
    nav_login: 'Enter',
    nav_register: 'Register',
    nav_dashboard: 'Dashboard',
    nav_logout: 'Comot',
    hero_badge: '\u{1F331} We Dey Support Africa Farm',
    hero_title_1: 'Farm with AI for',
    hero_title_2: 'Better Harvest',
    hero_desc: 'Find disease quick, get weather wahala notice, and talk to expert people\u2014all for your language.',
    hero_cta: 'Start Free',
    hero_learn: 'Learn More',
    features_title: 'Powerful Thing for Your Farm',
    features_desc: 'Everything wey you need to make your farm produce more.',
    testimonials_title: 'Wetin Nigerian Farmer Dey Talk',
    contact_title: 'You Get Question?',
    contact_desc: 'Our team and farm expert people dey ready to help you.',
    contact_btn: 'Talk to Support',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof TranslationKeys) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('agroguard_lang');
    return (saved as Language) || 'en';
  });

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('agroguard_lang', lang);
  }, []);

  const t = useCallback((key: keyof TranslationKeys): string => {
    return translations[language][key] || translations.en[key];
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
