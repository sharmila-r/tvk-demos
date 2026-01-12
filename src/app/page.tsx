import Link from "next/link";

const apps = [
  {
    name: "Booth Connect",
    slug: "booth-connect",
    description: "Connect and manage election booth operations efficiently. Streamline volunteer coordination and voter outreach.",
    icon: "🗳️",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Janakural",
    slug: "janakural",
    description: "Voice of the people - A platform for citizens to report issues and track resolutions in their community.",
    icon: "📢",
    color: "from-green-500 to-green-700",
  },
  {
    name: "Kaavalan",
    slug: "kaavalan",
    description: "Guardian of the community - Monitor and ensure safety with real-time tracking and alerts.",
    icon: "🛡️",
    color: "from-purple-500 to-purple-700",
  },
  {
    name: "Training Hub",
    slug: "training-hub",
    description: "Comprehensive training platform for volunteers and party workers with courses, assessments, and certifications.",
    icon: "🎓",
    color: "from-orange-500 to-orange-700",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-tvk-red text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">TVK Apps</h1>
          <p className="text-center mt-2 text-red-100">
            Digital Solutions for Community Empowerment
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Applications
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our suite of applications designed to empower communities,
            streamline operations, and drive positive change.
          </p>
        </div>

        {/* App Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {apps.map((app) => (
            <Link
              key={app.slug}
              href={`/${app.slug}`}
              className="group block"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 transform hover:-translate-y-1">
                <div className={`bg-gradient-to-r ${app.color} p-6 text-white`}>
                  <span className="text-4xl">{app.icon}</span>
                  <h3 className="text-2xl font-bold mt-3">{app.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    {app.description}
                  </p>
                  <div className="mt-4 flex items-center text-tvk-red font-semibold group-hover:gap-2 transition-all">
                    <span>View Demo</span>
                    <svg
                      className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-tvk-black text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} TVK. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
