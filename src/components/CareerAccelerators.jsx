import React, { useState } from "react";

const careerData = [
  {
    title: "Web Development",
    description: "Learn HTML, CSS, JS, React and more.",
    image: "https://i.ibb.co/chMs080K/pexels-photo-7582775.jpg",
  },
  {
    title: "Data Science",
    description: "Work with Python, ML, AI, and real datasets.",
    image:
      "https://i.ibb.co/d4t54dQ4/cheerful-beautiful-young-asian-woman-feeling-happy-smiling-camera-while-traveling-street-downtown-ci.jpg",
  },
  {
    title: "Cloud Computing",
    description: "Master AWS, Azure, and cloud infrastructure.",
    image:
      "https://i.ibb.co/tpYxhSGG/smiling-young-financial-manager-showing-charts-graphs-white-board-1098-19846.jpg",
  },
  {
    title: "Cyber Security",
    description: "Protect systems and networks from threats.",
    image:
      "https://i.ibb.co/7tgkg3Ls/high-angle-man-artist-painting-canvas-23-2148422150.jpg",
  },
  {
    title: "Mobile App Development",
    description: "Build iOS and Android apps.",
    image: "https://i.ibb.co/F46tkKDH/pexels-photo-1121796.webp",
  },
  {
    title: "UI/UX Design",
    description: "Design intuitive user interfaces and experiences.",
    image:
      "https://i.ibb.co/W4Z2JHJS/picture-talented-professional-young-woman-designer-shirt-khaki-color-sitting-her-workshop-sketching.jpg",
  },
  {
    title: "Digital Marketing",
    description: "Learn SEO, Ads, and social media strategies.",
    image:
      "https://i.ibb.co/4RStGgww/woman-photographer-working-23-2148503530.jpg",
  },
  {
    title: "Project Management",
    description: "Manage projects efficiently and effectively.",
    image: "https://i.ibb.co/ZRxrf5YG/image5.webp",
  },
  {
    title: "AI & ML Engineering",
    description: "Implement machine learning solutions.",
    image: "https://i.ibb.co/YBtQBcHr/image1.jpg",
  },
];

const CareerAccelerators = () => {
  const [showAll, setShowAll] = useState(false);
  const cardsToShow = showAll ? careerData : careerData.slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-600">
        Ready to reimagine your career?
      </h2>
      <p className="text-center mb-10 text-gray-600">
        Get the skills and real-world experience employers want with Career
        Accelerators.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardsToShow.map((career, index) => (
          <div
            key={index}
            className="bg-base-200 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-transform hover:-translate-y-1"
          >
            <img
              src={career.image}
              alt={career.title}
              className="w-full h-44 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-500">
                {career.title}
              </h3>
              <p className="text-gray-600">
                {career.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {!showAll && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="bg-blue-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
          >
            See All Career Accelerators
          </button>
        </div>
      )}
    </div>
  );
};

export default CareerAccelerators;
