import React, { useRef } from "react";
import { useSelector } from "react-redux";

const SpecialOffers = () => {
  const offers = useSelector((state) => state.offers.list); 
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="max-w-7xl mx-auto p-4 relative">
      <div className="flex flex-col lg:flex-row gap-8">

        {/* Left Side: Banner */}
        <div
          className="w-full lg:w-1/2 h-96 lg:h-[calc(100vh-2rem)] rounded-xl overflow-hidden relative bg-cover bg-center"
          style={{ backgroundImage: "url('https://i.ibb.co/TDKQdYdF/Cassandra-Training-Unlock-the-Potential-of-No-SQL-Database-Management.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          <div className="absolute bottom-6 left-6 lg:bottom-12 lg:left-12 text-white">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              SEE OUR <span className="text-orange-500">SPECIAL</span> OFFERS
            </h2>
            <p className="text-gray-200 max-w-xs">
              Get the best deals on our courses and projects. Don’t miss out!
            </p>
          </div>
        </div>

        {/* Right Side: 6-card block horizontal scroll */}
        <div className="w-full lg:w-1/2 relative">
          {/* Arrow buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-base-200 p-2 rounded-full shadow hover:bg-orange-500 hover:text-white transition"
          >
            &lt;
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-base-200 p-2 rounded-full shadow hover:bg-orange-500 hover:text-white transition"
          >
            &gt;
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth py-4 px-2"
          >
            {/* Slice into 6-card blocks */}
            {Array.from({ length: Math.ceil(offers.length / 6) }).map((_, blockIdx) => (
              <div key={blockIdx} className="flex-shrink-0 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {offers.slice(blockIdx * 6, blockIdx * 6 + 6).map((offer) => (
                    <div key={offer.id} className="bg-base-200 rounded-xl shadow p-4">
                      <img
                        src={offer.img}
                        alt={offer.title}
                        className="rounded-xl mb-4 w-full h-32 object-cover"
                      />
                      <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs mb-2 inline-block">
                        {offer.badge}
                      </span>
                      <h3 className="text-lg font-bold mb-1">{offer.title}</h3>
                      <p className="text-gray-600 mb-2 text-sm">{offer.subtitle}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-orange-500 font-extrabold">{offer.price}</span>
                        {offer.oldPrice && (
                          <span className="line-through text-gray-400 text-sm">{offer.oldPrice}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default SpecialOffers;
