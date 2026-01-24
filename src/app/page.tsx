"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

const apps = [
  {
    slug: "booth-connect",
    icon: "🗳️",
    color: "from-blue-500 to-blue-700",
    demoUrl: "/demos/booth-connect.html",
  },
  {
    slug: "janakural",
    icon: "📢",
    color: "from-green-500 to-green-700",
    demoUrl: "https://janakural.vercel.app/home/",
  },
  {
    slug: "kaavalan",
    icon: "🛡️",
    color: "from-purple-500 to-purple-700",
    demoUrl: "/demos/kaavalan.html",
  },
  {
    slug: "training-hub",
    icon: "🎓",
    color: "from-orange-500 to-orange-700",
    demoUrl: "/demos/training-hub.html",
  },
  {
    slug: "tvk-admin",
    icon: "⚙️",
    color: "from-gray-600 to-gray-800",
    demoUrl: "https://tvkadmin.theforwardalpha.com/",
  },
];

function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-white/10 rounded-full p-1">
      <button
        onClick={() => setLanguage("ta")}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
          language === "ta"
            ? "bg-white text-red-700"
            : "text-white hover:bg-white/20"
        }`}
      >
        தமிழ்
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
          language === "en"
            ? "bg-white text-red-700"
            : "text-white hover:bg-white/20"
        }`}
      >
        English
      </button>
    </div>
  );
}

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a0a0a] to-[#0a0a0a]">
      {/* Header */}
      <header className="bg-tvk-red text-white py-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-end mb-2">
              <LanguageToggle />
            </div>
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-bold">{t("header.title")}</h1>
              <p className="text-red-100 text-sm md:text-base max-w-2xl mx-auto mt-2">
                {t("header.subtitle")}
                <span className="text-yellow-300 font-semibold">{t("header.ideas")}</span>
                {t("header.subtitle2")}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* 4 Pillars Demo Section */}
      <section className="w-full bg-black">
        <div className="max-w-5xl mx-auto">
          <iframe
            src="/demos/tvk_4pillars_demo.html"
            className="w-full h-[500px] md:h-[600px] border-0"
            title="TVK 4 Pillars Demo"
          />
        </div>
      </section>

      {/* Apps Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("apps.title")}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t("apps.subtitle")}
          </p>
        </div>

        {/* App Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {apps.map((app) => (
            <div
              key={app.slug}
              className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              <Link href={`/${app.slug}`} className="block">
                <div className={`bg-gradient-to-r ${app.color} p-6 text-white`}>
                  <span className="text-4xl">{app.icon}</span>
                  <h3 className="text-2xl font-bold mt-3">{t(`app.${app.slug}.name`)}</h3>
                </div>
              </Link>
              <div className="p-6">
                <p className="text-gray-400 leading-relaxed mb-4">
                  {t(`app.${app.slug}.description`)}
                </p>
                <div className="flex items-center gap-3">
                  <Link
                    href={`/${app.slug}`}
                    className="text-gray-300 hover:text-white font-medium text-sm transition-colors"
                  >
                    {t("action.learnMore")}
                  </Link>
                  <a
                    href={app.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-tvk-red hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors flex items-center gap-2"
                  >
                    <span>{t("action.viewDemo")}</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ideas Banner */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("ideas.title")}
            </h3>
            <p className="text-gray-800 text-lg">
              {t("ideas.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-tvk-red text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-red-100">
            {t("footer.copyright")}
          </p>
        </div>
      </footer>
    </main>
  );
}
