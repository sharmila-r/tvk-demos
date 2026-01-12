import Link from "next/link";

const features = [
  {
    title: "Booth Management",
    description: "Manage multiple polling booths with real-time status updates and volunteer assignments.",
    icon: "📍",
  },
  {
    title: "Volunteer Coordination",
    description: "Assign, track, and communicate with volunteers across all locations.",
    icon: "👥",
  },
  {
    title: "Voter Outreach",
    description: "Track voter contact and engagement with detailed analytics.",
    icon: "📊",
  },
  {
    title: "Real-time Updates",
    description: "Get instant notifications and updates from the field.",
    icon: "🔔",
  },
];

export default function BoothConnectDemo() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-blue-100 hover:text-white text-sm mb-2 inline-block">
            ← Back to Home
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-5xl">🗳️</span>
            <div>
              <h1 className="text-3xl font-bold">Booth Connect</h1>
              <p className="text-blue-100">Election Booth Operations Management</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About Booth Connect</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Booth Connect is a comprehensive platform designed to streamline election booth operations.
              From volunteer coordination to real-time field updates, manage every aspect of your
              ground operations with ease and efficiency.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                Mobile App Available
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                Offline Support
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                Real-time Sync
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

          {/* Demo Preview */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-blue-100 mb-6">
              Contact us to schedule a demo and see how Booth Connect can transform your
              election operations.
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Request Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} TVK - Booth Connect
          </p>
        </div>
      </footer>
    </main>
  );
}
