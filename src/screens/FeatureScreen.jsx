import React from 'react';
import TypewriterHeading from '../components/TypewriterHeading';

const features = [
  // ... (I need to keep the exact features array intact, so I should just replace the specific section)
  {
    Feature: 'Feature 1',
    title: 'AI Itinerary Generator',
    description:
      'Create personalized day-by-day travel plans based on your interests, budget, and duration.',
    image: '/Feature/AiItinerary.jpg',
    active: false,
  },
  {
    Feature: 'Feature 2',
    title: 'Smart Budget Estimation',
    description:
      'Calculate transportation, accommodation, food, and activity costs before your trip.',
    image: '/Feature/smartbudget.jpg',
    active: false,
  },
  {
    Feature: 'Feature 3',
    title: 'Hotel Preferences',
    description:
      'Find the best hotels based on location, ratings, and budget preferences.',
    image: '/Feature/HotelRecommendations.jpg',
    active: false,
  },
  {
    Feature: 'Feature 4',
    title: 'Interactive Travel Maps',
    description:
      'Explore attractions, routes, and nearby places directly on interactive maps.',
    image: '/Feature/InteractiveMap.jpg',
    active: false,
  },
  {
    Feature: 'Feature 5',
    title: 'Smart Travel Insights',
    description:
      'Get weather forecasts, local tips, and destination information instantly.',
    image: '/Feature/TravelInsight.jpg',
    active: false,
  },
  {
    Feature: 'Feature 6',
    title: 'Group Trip Planning',
    description:
      'Collaborate with friends and family to create the perfect travel experience.',
    image: '/Feature/Groupplanning.jpg',
    active: false,
  },
];

export default function FeatureScreen() {
  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-sky-400/4 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-24">
          <TypewriterHeading
            text="Powerful Features"
            className="uppercase text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight block"
          />
          <p className="text-lg md:text-xl mt-5 text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Src-Dest combines artificial intelligence, travel expertise, and real-time insights to create unforgettable travel experiences.
          </p>
        </div>

        <div className="relative mt-5 xl:mx-15">
          {/* Dotted line background - visible on xl screens to connect 6 columns */}
          <div className="hidden xl:block absolute top-[18px] left-[8%] right-[8%] border-t-[2px] border-dotted border-slate-200 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-x-8 gap-y-16">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col relative z-10 group cursor-pointer">
                <div className="mb-8">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-lg text-sm font-semibold bg-white text-slate-600 shadow-sm border border-slate-100 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:bg-sky-500 group-hover:text-white group-hover:border-sky-500 group-hover:shadow-sky-500/20">
                    {feature.Feature}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-900 transition-colors duration-300 group-hover:text-sky-600">
                  {feature.title}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed mb-8 flex-1 pr-2 transition-colors duration-300 group-hover:text-slate-700">
                  {feature.description}
                </p>

                {/* Illustration container using an image instead of SVG */}
                <div className="mt-auto rounded-2xl h-48 sm:h-56 xl:h-48 flex items-center justify-center border border-slate-100 transition-all duration-500 overflow-hidden relative shadow-sm group-hover:border-sky-200 group-hover:shadow-2xl group-hover:shadow-sky-500/10 group-hover:-translate-y-2">

                  {/* Gradient overlay that appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                  {/* Image instead of SVG */}
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}