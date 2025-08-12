const Services = () => {
  const services = [
    {
      title: "Course Enrollment",
      description: "Easy enrollment process with secure payments and flexible schedules.",
      icon: "📝",
    },
    {
      title: "Certification",
      description: "Get recognized certificates to boost your career opportunities.",
      icon: "📜",
    },
    {
      title: "Mentorship",
      description: "Personalized guidance and support from experienced mentors.",
      icon: "🤝",
    },
    {
      title: "Community Access",
      description: "Join our learner community to network, share, and grow together.",
      icon: "👥",
    },
  ];

  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-500">
          Services We Provide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-base-100 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-500">
                {service.title}
              </h3>
              <p className="text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
