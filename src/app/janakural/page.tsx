import Link from "next/link";

const features = [
  {
    title: "Issue Reporting",
    description: "Report civic issues with photos, location, and detailed descriptions.",
    icon: "📝",
  },
  {
    title: "Status Tracking",
    description: "Track the progress of your reported issues from submission to resolution.",
    icon: "📍",
  },
  {
    title: "Community Feed",
    description: "View and support issues reported by others in your community.",
    icon: "🏘️",
  },
  {
    title: "Government Response",
    description: "Receive official responses and updates from concerned departments.",
    icon: "🏛️",
  },
];

const stats = [
  { value: "10,000+", label: "Issues Reported" },
  { value: "8,500+", label: "Issues Resolved" },
  { value: "50+", label: "Districts Covered" },
  { value: "85%", label: "Resolution Rate" },
];

export default function JanakuralDemo() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-500 to-green-700 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-green-100 hover:text-white text-sm mb-2 inline-block">
            ← Back to Home
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-5xl">📢</span>
            <div>
              <h1 className="text-3xl font-bold">Janakural</h1>
              <p className="text-green-100">Voice of the People - Civic Issue Platform</p>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-green-600">{stat.value}</div>
              <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About Janakural</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Janakural (Voice of the People) is a citizen engagement platform that bridges the gap
              between communities and governance. Report civic issues, track their resolution, and
              contribute to building better communities together.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                Multi-language Support
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                Photo & Location
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                Anonymous Reporting
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

          {/* Sample Issue Card */}
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Sample Issue</h3>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div className="bg-gray-200 h-48 flex items-center justify-center">
              <span className="text-gray-400 text-lg">Issue Photo Placeholder</span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                  In Progress
                </span>
                <span className="text-gray-400 text-sm">Reported 3 days ago</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Road Pothole Near Main Market
              </h4>
              <p className="text-gray-600 mb-4">
                Large pothole causing accidents near the main market area. Multiple vehicles damaged.
              </p>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <span>📍 Chennai, Tamil Nadu</span>
                <span>•</span>
                <span>👍 24 supporters</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-green-500 to-green-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Make Your Voice Heard</h3>
            <p className="text-green-100 mb-6">
              Join thousands of citizens who are actively contributing to community improvement.
            </p>
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              Download App
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} TVK - Janakural
          </p>
        </div>
      </footer>
    </main>
  );
}
