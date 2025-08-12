import { useEffect, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Link } from "react-router"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  pauseOnHover: true,
  arrows: false,
};

const BannerSlider = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch("/slider.json")
      .then((res) => res.json())
      .then((data) => setSlides(data))
      .catch((err) => console.error("Failed to load slides:", err));
  }, []);

  if (slides.length === 0) {
    return <div className="text-center py-20 text-gray-700">Loading...</div>;
  }

  return (
    <div className="w-full h-[90vh] md:h-screen relative overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-[90vh] md:h-screen">
            {/* Background Image */}
            <img
              src={slide.image}
              alt="Slide background"
              className="absolute inset-0 w-full h-full object-cover brightness-75"
            />
            {/* Dark overlay for contrast */}
            <div className="absolute inset-0  bg-opacity-60 z-10"></div>

            {/* Content */}
            <motion.div
              className="relative z-20 flex flex-col items-center justify-center text-center px-6 md:px-12 h-full max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg mb-6">
                {slide.title}
              </h2>
              <p className="text-gray-200 max-w-xl text-lg md:text-xl mb-8 drop-shadow-md">
                {slide.description}
              </p>
              {/* Use React Router Link if you want navigation */}
              <Link
                to={slide.link || "/"}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition"
              >
                {slide.button || "Learn More"}
              </Link>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
