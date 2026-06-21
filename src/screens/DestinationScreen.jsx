import React from 'react';
import TypewriterHeading from '../components/TypewriterHeading';

const DestinationScreen = () => {
  const destinations = [
    {
      id: 1,
      country: 'Agra, India',
      flag: '🇮🇳',
      image: '/Destination/India.jpg',
      description:
        'Experience India’s rich heritage through iconic landmarks, vibrant traditions, and diverse landscapes. Discover breathtaking architecture, colorful culture, and unforgettable journeys across every region.'
    },
    {
      id: 2,
      country: 'Paris, France',
      flag: '🇫🇷',
      image: '/Destination/France.jpg',
      description:
        'Explore charming streets, world-famous landmarks, and exceptional cuisine in the heart of France. Enjoy timeless elegance, artistic treasures, and memorable experiences around every corner.'
    },
    {
      id: 3,
      country: 'Tokyo, Japan',
      flag: '🇯🇵',
      image: '/Destination/Japan.jpg',
      description:
        'Discover a vibrant city where modern innovation blends seamlessly with ancient traditions. Experience stunning attractions, unique culture, and remarkable adventures throughout Tokyo.'
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-sky-400/4">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-600 px-4 py-2 rounded-full font-semibold mb-6 border border-sky-100">
            <span className="text-lg">🌍</span>
            <span>Trending Destinations</span>
          </div>

          <TypewriterHeading
            text="Explore the World's Most Loved Places"
            className="uppercase text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight block"
          />

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover top-rated destinations recommended by travelers and AI insights. From cultural landmarks to breathtaking natural wonders, find your next unforgettable adventure.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.country}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-80" />

                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 p-6 flex items-center gap-3">
                  <span className="text-3xl filter drop-shadow-md">{destination.flag}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                    {destination.country}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <p className="text-base text-slate-600 leading-relaxed mb-6 flex-grow">
                  {destination.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DestinationScreen;
