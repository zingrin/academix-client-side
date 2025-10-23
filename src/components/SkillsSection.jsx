import React, { useState } from "react";
import { Users } from "lucide-react";

const skills = [
  { id: 1, title: "Generative AI", learners: "1M+", img: "https://cdn-icons-png.flaticon.com/512/1049/1049379.png" },
  { id: 2, title: "IT Certifications", learners: "14.4M+", img: "https://cdn-icons-png.flaticon.com/512/3208/3208707.png" },
  { id: 3, title: "Data Science", learners: "8M+", img: "https://cdn-icons-png.flaticon.com/512/2421/2421133.png" },
  { id: 4, title: "Web Development", learners: "12M+", img: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png" },
  { id: 5, title: "Cyber Security", learners: "9M+", img: "https://cdn-icons-png.flaticon.com/512/1019/1019607.png" },
  { id: 6, title: "Digital Marketing", learners: "6M+", img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
  { id: 7, title: "Machine Learning", learners: "7.5M+", img: "https://cdn-icons-png.flaticon.com/512/3132/3132693.png" },
  { id: 8, title: "Graphic Design", learners: "5.8M+", img: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png" },
  { id: 9, title: "Blockchain", learners: "3.2M+", img: "https://cdn-icons-png.flaticon.com/512/4326/4326714.png" },
];

export default function SkillsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(skills.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentSkills = skills.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="md:flex items-center gap-10 mb-10">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Learn essential career and life skills
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Build in-demand skills fast and advance your career in a changing
              job market with expert-led courses and certifications.
            </p>
          </div>

          {/* Card Grid */}
          <div className="md:w-2/3">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 md:mt-0">
              {currentSkills.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                      <Users size={16} className="mr-1" /> {item.learners}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <button className="mt-4 inline-block text-violet-600 hover:text-violet-800 font-medium">
                      Explore →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Buttons */}
            <div className="flex justify-center items-center mt-8 gap-4">
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className={`px-5 py-2 rounded-lg font-medium border ${
                  currentPage === 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-violet-600 text-white hover:bg-violet-700"
                }`}
              >
                ← Previous
              </button>
              <span className="text-gray-700 font-semibold">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`px-5 py-2 rounded-lg font-medium border ${
                  currentPage === totalPages
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-violet-600 text-white hover:bg-violet-700"
                }`}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
