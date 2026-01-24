import Link from "next/link";

const features = [
  {
    title: "User Management",
    description: "Manage users, roles, and permissions across all TVK applications from a single dashboard.",
    icon: "👥",
  },
  {
    title: "Analytics Dashboard",
    description: "Comprehensive analytics and insights across Janakural, Kaavalan, Booth Connect, and more.",
    icon: "📊",
  },
  {
    title: "Application Control",
    description: "Configure and control settings for all TVK applications in one unified portal.",
    icon: "⚙️",
  },
  {
    title: "Real-time Monitoring",
    description: "Monitor system health, user activity, and application performance in real-time.",
    icon: "🔔",
  },
];

export default function TVKAdminDemo() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-600 to-gray-800 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-2">
            <Link href="/" className="text-gray-300 hover:text-white text-sm">
              ← Back to Home
            </Link>
            <a
              href="https://tvkadmin.theforwardalpha.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-700 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors"
            >
              Open Admin Portal →
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-5xl">⚙️</span>
            <div>
              <h1 className="text-3xl font-bold">TVK Admin Portal</h1>
              <p className="text-gray-300">Unified Administration Dashboard</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About TVK Admin Portal</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              TVK Admin Portal is the central hub for managing all TVK applications. It provides
              a unified interface for user management, analytics, system configuration, and monitoring
              across Janakural, Kaavalan, Booth Connect, and Learning Hub.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                Role-based Access
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                Multi-App Management
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                Secure Login
              </span>
            </div>
          </div>

          {/* Features Grid */}
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <span className="text-3xl mb-3 block">{feature.icon}</span>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-gray-600 to-gray-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Access the Admin Portal</h3>
            <p className="text-gray-300 mb-6">
              Log in to the TVK Admin Portal to manage users, view analytics, and configure
              application settings.
            </p>
            <a
              href="https://tvkadmin.theforwardalpha.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Go to Admin Portal →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} TVK - Admin Portal
          </p>
        </div>
      </footer>
    </main>
  );
}
