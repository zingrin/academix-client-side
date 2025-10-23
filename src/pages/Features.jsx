import React from "react";

const Features = () => {
  const features = [
    {
      icon: "🎓",
      title: "Learn from Experts",
      description:
        "Courses taught by professionals who bring real-world experience to the classroom.",
    },
    {
      icon: "📚",
      title: "Wide Range of Topics",
      description:
        "Explore tech, business, design, marketing, and personal development — all in one place.",
    },
    {
      icon: "💻",
      title: "Practical Learning",
      description:
        "Build hands-on projects to apply what you learn and boost your portfolio.",
    },
    {
      icon: "🌐",
      title: "Flexible & Accessible",
      description:
        "Learn at your own pace, anytime, anywhere, on desktop or mobile.",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-base-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Why Learn with <span className="text-violet-600">Academix</span>?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-base-200 border border-gray-200 dark:border-gray-700 rounded-xl p-8 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
