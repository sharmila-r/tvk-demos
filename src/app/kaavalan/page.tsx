import Link from "next/link";

const features = [
  {
    title: "Zone Monitoring",
    description: "Live map with crowd density overlays. Track zone capacity in real-time.",
    icon: "🗺️",
  },
  {
    title: "Alert Management",
    description: "Instant alerts for overcrowding, medical emergencies, and security incidents.",
    icon: "🚨",
  },
  {
    title: "Team Coordination",
    description: "Manage volunteers by role - coordinators, zone captains, medical, security teams.",
    icon: "👥",
  },
  {
    title: "Broadcasts",
    description: "Send announcements to all volunteers or specific teams instantly.",
    icon: "📢",
  },
];

export default function KaavalanDemo() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-2">
            <Link href="/" className="text-teal-100 hover:text-white text-sm">
              ← Back to Home
            </Link>
            <a
              href="https://getkaavala.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-teal-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-teal-50 transition-colors"
            >
              Download App →
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-5xl">🛡️</span>
            <div>
              <h1 className="text-3xl font-bold">TVK Kaavala</h1>
              <p className="text-teal-100">Crowd Safety for Rallies & Events</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About TVK Kaavala</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              TVK Kaavala is a crowd safety and volunteer coordination feature within the Kaavala app,
              designed for TVK rallies, maanadu, and public gatherings. Real-time zone monitoring,
              emergency alerts, and team coordination ensure the safety of all attendees and volunteers.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                Zone Density Tracking
              </span>
              <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                Real-time Alerts
              </span>
              <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                Team Broadcasts
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Part of the <a href="https://getkaavala.com" className="text-teal-600 hover:underline">Kaavala Women&apos;s Safety App</a>
            </p>
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
                <div className="text-2xl font-bold text-green-600">12</div>
                <div className="text-gray-500 text-sm">Active Zones</div>
              </div>
              <div className="bg-teal-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-teal-600">156</div>
                <div className="text-gray-500 text-sm">Volunteers on Duty</div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-600">3</div>
                <div className="text-gray-500 text-sm">Active Alerts</div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
              <span className="text-gray-400">Live Zone Map with Crowd Density Overlays</span>
            </div>
          </div>

          {/* Alert Types Section */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 mb-12">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🚨</span>
              <div>
                <h3 className="text-xl font-bold text-amber-800 mb-2">Alert Types</h3>
                <p className="text-amber-700 mb-4">
                  TVK Kaavala tracks and manages various types of incidents during events.
                </p>
                <ul className="text-amber-600 text-sm space-y-1">
                  <li>• <strong>Overcrowding</strong> - Zone capacity exceeded</li>
                  <li>• <strong>Medical</strong> - Health emergencies requiring attention</li>
                  <li>• <strong>Security</strong> - Safety or disturbance issues</li>
                  <li>• <strong>Lost Person</strong> - Missing attendees or children</li>
                  <li>• <strong>Women Safety</strong> - SOS alerts from Kaavala users at the event</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-teal-600 to-teal-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Available in Kaavala App</h3>
            <p className="text-teal-100 mb-6">
              TVK Kaavala is part of the Kaavala women&apos;s safety app. Download now and get access to both personal safety features and event crowd management.
            </p>
            <a href="https://getkaavala.com" className="inline-block bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors">
              Download Kaavala
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} TVK Kaavala
          </p>
        </div>
      </footer>
    </main>
  );
}
