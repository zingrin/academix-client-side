const Features = () => {
  const features = [
    {
      icon: "🎓",
      title: "Expert Instructors",
      description: "Learn from industry professionals with real-world experience.",
    },
    {
      icon: "📚",
      title: "Comprehensive Courses",
      description: "Wide range of courses covering beginner to advanced topics.",
    },
    {
      icon: "💻",
      title: "Hands-On Projects",
      description: "Build real applications to showcase your skills.",
    },
    {
      icon: "🌐",
      title: "Flexible Learning",
      description: "Access courses anytime, anywhere, on any device.",
    },
  ];

  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-500">
          Why Choose Academix?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-500">
                {feature.title}
              </h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
