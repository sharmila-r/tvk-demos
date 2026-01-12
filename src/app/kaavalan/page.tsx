import Link from "next/link";

const features = [
  {
    title: "Real-time Tracking",
    description: "Monitor field workers and volunteers with live location updates.",
    icon: "📍",
  },
  {
    title: "Emergency Alerts",
    description: "Send and receive instant alerts during emergencies or urgent situations.",
    icon: "🚨",
  },
  {
    title: "Check-in System",
    description: "Regular check-ins to ensure safety of all field personnel.",
    icon: "✅",
  },
  {
    title: "Incident Reporting",
    description: "Document and report incidents with photos, audio, and location data.",
    icon: "📋",
  },
];

export default function KaavalanDemo() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-500 to-purple-700 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-2">
            <Link href="/" className="text-purple-100 hover:text-white text-sm">
              ← Back to Home
            </Link>
            <a
              href="/demos/kaavalan.html"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-purple-50 transition-colors"
            >
              View Demo →
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-5xl">🛡️</span>
            <div>
              <h1 className="text-3xl font-bold">Kaavalan</h1>
              <p className="text-purple-100">Guardian - Safety & Monitoring Platform</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About Kaavalan</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Kaavalan (Guardian) is a comprehensive safety and monitoring platform designed to
              protect field workers, volunteers, and community members. With real-time tracking,
              emergency alerts, and incident reporting, ensure the safety of everyone on the ground.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                24/7 Monitoring
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                SOS Button
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                Geofencing
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

          {/* Dashboard Preview */}
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Preview</h3>
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-12">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-600">156</div>
                <div className="text-gray-500 text-sm">Active Users</div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-600">3</div>
                <div className="text-gray-500 text-sm">Pending Check-ins</div>
              </div>
              <div className="bg-red-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-red-600">0</div>
                <div className="text-gray-500 text-sm">Active Alerts</div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
              <span className="text-gray-400">Live Map View Placeholder</span>
            </div>
          </div>

          {/* Emergency Section */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mb-12">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🚨</span>
              <div>
                <h3 className="text-xl font-bold text-red-800 mb-2">Emergency Response</h3>
                <p className="text-red-700 mb-4">
                  In case of emergency, users can trigger an SOS alert with a single tap.
                  The system immediately notifies all designated contacts and shares the live location.
                </p>
                <ul className="text-red-600 text-sm space-y-1">
                  <li>• Instant notification to emergency contacts</li>
                  <li>• Live location sharing</li>
                  <li>• Audio recording capability</li>
                  <li>• Direct escalation to authorities</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Protect Your Team</h3>
            <p className="text-purple-100 mb-6">
              Ensure the safety of your field workers and volunteers with Kaavalan.
            </p>
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
              Request Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} TVK - Kaavalan
          </p>
        </div>
      </footer>
    </main>
  );
}
