"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "ta" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  ta: {
    // Header
    "header.title": "தவெக டிஜிட்டல் தளம்",
    "header.subtitle": "AI + தரவு பகுப்பாய்வு + தொழில்நுட்பத்தின் மூலம் ",
    "header.ideas": "20+ புதுமையான யோசனைகளின்",
    "header.subtitle2": " அடிப்படையில் உருவாக்கப்பட்ட எங்கள் செயலிகள், மக்களின் உண்மை தேவைகள் மற்றும் குரலைப் புரிந்து அர்த்தமுள்ள மாற்றத்தை உருவாக்க வடிவமைக்கப்பட்டுள்ளன.",

    // Apps Section
    "apps.title": "எங்கள் செயலிகள்",
    "apps.subtitle": "சமூகங்களை வலுப்படுத்தவும், செயல்பாடுகளை எளிதாக்கவும், நேர்மறையான மாற்றத்தை ஏற்படுத்தவும் வடிவமைக்கப்பட்ட எங்கள் செயலிகளை ஆராயுங்கள்.",

    // App Names & Descriptions
    "app.booth-connect.name": "பூத் கனெக்ட்",
    "app.booth-connect.description": "தேர்தல் பூத் செயல்பாடுகளை திறமையாக இணைத்து நிர்வகிக்கவும். தொண்டர் ஒருங்கிணைப்பு மற்றும் வாக்காளர் தொடர்பை எளிதாக்கவும்.",

    "app.janakural.name": "ஜனகுரல்",
    "app.janakural.description": "மக்களின் குரல் - குடிமக்கள் தங்கள் சமூகத்தில் உள்ள பிரச்சினைகளை புகாரளிக்கவும் தீர்வுகளை கண்காணிக்கவும் ஒரு தளம்.",

    "app.kaavalan.name": "காவலன்",
    "app.kaavalan.description": "சமூகத்தின் பாதுகாவலன் - நிகழ்நேர கண்காணிப்பு மற்றும் எச்சரிக்கைகளுடன் பாதுகாப்பை உறுதிசெய்யவும்.",

    "app.training-hub.name": "பயிற்சி மையம்",
    "app.training-hub.description": "தொண்டர்கள் மற்றும் கட்சி தொழிலாளர்களுக்கான விரிவான பயிற்சி தளம் - படிப்புகள், மதிப்பீடுகள் மற்றும் சான்றிதழ்கள்.",

    // Actions
    "action.learnMore": "மேலும் அறிக →",
    "action.viewDemo": "டெமோ பார்க்க",

    // Ideas Banner
    "ideas.title": "20+ புதுமையான யோசனைகள்",
    "ideas.description": "அடிமட்ட பிரச்சார கருவிகள் முதல் சமூக பாதுகாப்பு தளங்கள் வரை, எங்கள் தீர்வுகளின் சூழல் உண்மையான சவால்களை எதிர்கொள்ளவும் நிலையான தாக்கத்தை உருவாக்கவும் வடிவமைக்கப்பட்டுள்ளது.",

    // Footer
    "footer.copyright": "© {year} Forward Alpha. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
  },
  en: {
    // Header
    "header.title": "TVK Digital Platform",
    "header.subtitle": "Empowering communities through AI, data analytics, and technology. Our suite of applications, built on ",
    "header.ideas": "20+ innovative ideas",
    "header.subtitle2": ", is designed to understand real needs and drive meaningful change.",

    // Apps Section
    "apps.title": "Our Applications",
    "apps.subtitle": "Explore our suite of applications designed to empower communities, streamline operations, and drive positive change.",

    // App Names & Descriptions
    "app.booth-connect.name": "Booth Connect",
    "app.booth-connect.description": "Connect and manage election booth operations efficiently. Streamline volunteer coordination and voter outreach.",

    "app.janakural.name": "Janakural",
    "app.janakural.description": "Voice of the people - A platform for citizens to report issues and track resolutions in their community.",

    "app.kaavalan.name": "Kaavalan",
    "app.kaavalan.description": "Guardian of the community - Monitor and ensure safety with real-time tracking and alerts.",

    "app.training-hub.name": "Training Hub",
    "app.training-hub.description": "Comprehensive training platform for volunteers and party workers with courses, assessments, and certifications.",

    // Actions
    "action.learnMore": "Learn More →",
    "action.viewDemo": "View Demo",

    // Ideas Banner
    "ideas.title": "20+ Innovative Ideas",
    "ideas.description": "From grassroots campaigning tools to community safety platforms, our ecosystem of solutions is designed to address real challenges and create lasting impact.",

    // Footer
    "footer.copyright": "© {year} Forward Alpha. All rights reserved.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ta"); // Default to Tamil

  const t = (key: string): string => {
    const value = translations[language][key];
    if (!value) return key;
    return value.replace("{year}", new Date().getFullYear().toString());
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
