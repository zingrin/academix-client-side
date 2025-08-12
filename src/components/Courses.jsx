import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://academix-server-side-inky.vercel.app/api/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch courses:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Courses | Academix</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Explore Our Courses
        </h1>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course._id}
              className="card bg-base-100 shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.03] flex flex-col rounded-lg"
            >
              <figure className="h-48 overflow-hidden rounded-t-lg">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </figure>
              <div className="card-body flex flex-col flex-grow px-5 py-4">
                <h2 className="card-title text-xl font-semibold mb-2">
                  {course.title}
                </h2>
                <p className="text-gray-400 text-sm flex-grow">
                  {course.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mt-3 text-xs md:text-sm">
                  <span className="badge badge-info">{course.category}</span>
                  <span className="badge badge-outline">{course.level}</span>
                  <span className="badge badge-success">{course.duration}</span>
                </div>

                <div className="mt-3 text-gray-500 text-xs md:text-sm space-y-1">
                  <p>Instructor: {course.instructorName}</p>
                  <p>
                    Seats:{" "}
                    <span
                      className={
                        course.seats - course.enrolledCount === 0
                          ? "text-red-600 font-bold"
                          : ""
                      }
                    >
                      {course.seats - course.enrolledCount} available
                    </span>
                  </p>
                </div>

                <div className="card-actions justify-end mt-6">
                  <Link to={`/courses/${course._id}`}>
                    <button className="btn btn-sm w-full md:w-auto bg-orange-400 hover:bg-orange-500 text-white">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
