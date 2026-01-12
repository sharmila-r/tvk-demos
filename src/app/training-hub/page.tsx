import Link from "next/link";

const features = [
  {
    title: "Course Library",
    description: "Access a comprehensive library of training courses covering various topics.",
    icon: "📚",
  },
  {
    title: "Video Lessons",
    description: "Learn through engaging video content with multi-language support.",
    icon: "🎬",
  },
  {
    title: "Assessments",
    description: "Test your knowledge with quizzes and assessments after each module.",
    icon: "✍️",
  },
  {
    title: "Certifications",
    description: "Earn certificates upon successful completion of training programs.",
    icon: "🏆",
  },
];

const courses = [
  {
    title: "Introduction to Grassroots Campaigning",
    duration: "2 hours",
    modules: 8,
    level: "Beginner",
  },
  {
    title: "Effective Communication Skills",
    duration: "1.5 hours",
    modules: 6,
    level: "Beginner",
  },
  {
    title: "Booth Management Essentials",
    duration: "3 hours",
    modules: 12,
    level: "Intermediate",
  },
  {
    title: "Community Leadership",
    duration: "4 hours",
    modules: 15,
    level: "Advanced",
  },
];

export default function TrainingHubDemo() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-orange-700 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-orange-100 hover:text-white text-sm mb-2 inline-block">
            ← Back to Home
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-5xl">🎓</span>
            <div>
              <h1 className="text-3xl font-bold">Training Hub</h1>
              <p className="text-orange-100">Learn, Grow, and Lead</p>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Stats */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 max-w-4xl mx-auto">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Platform Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">50+</div>
              <div className="text-gray-500 text-sm">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">10,000+</div>
              <div className="text-gray-500 text-sm">Learners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">5,000+</div>
              <div className="text-gray-500 text-sm">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">4.8</div>
              <div className="text-gray-500 text-sm">Avg. Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About Training Hub</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Training Hub is a comprehensive learning platform designed to empower volunteers
              and party workers with essential skills and knowledge. From grassroots campaigning
              to leadership development, access quality training content anytime, anywhere.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                Tamil & English
              </span>
              <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                Offline Access
              </span>
              <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                Progress Tracking
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

          {/* Sample Courses */}
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Popular Courses</h3>
          <div className="space-y-4 mb-12">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow flex items-center justify-between"
              >
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">
                    {course.title}
                  </h4>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>⏱️ {course.duration}</span>
                    <span>📖 {course.modules} modules</span>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    course.level === "Beginner"
                      ? "bg-green-100 text-green-700"
                      : course.level === "Intermediate"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {course.level}
                </span>
              </div>
            ))}
          </div>

          {/* Learning Path */}
          <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-bold text-gray-800 mb-4">📈 Learning Path</h3>
            <div className="flex items-center justify-between relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-orange-200 -translate-y-1/2 z-0"></div>
              {["Beginner", "Intermediate", "Advanced", "Expert"].map((level, index) => (
                <div key={level} className="relative z-10 flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                      index === 0
                        ? "bg-orange-500"
                        : "bg-gray-300"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span className="text-sm mt-2 text-gray-600">{level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Start Learning Today</h3>
            <p className="text-orange-100 mb-6">
              Join thousands of learners and enhance your skills with our comprehensive
              training programs.
            </p>
            <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
              Browse Courses
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} TVK - Training Hub
          </p>
        </div>
      </footer>
    </main>
  );
}
