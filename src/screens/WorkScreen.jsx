import React from 'react';
import TypewriterHeading from '../components/TypewriterHeading';
import {
  FaMapMarkedAlt,
  FaMoneyBillWave,
  FaMagic,
  FaSuitcaseRolling
} from 'react-icons/fa';

const WorkScreen = () => {
  const steps = [
    {
      id: 1,
      step: 'Step 1',
      icon: FaMapMarkedAlt,
      title: 'Choose Destination',
      description:
        'Select your dream destination from thousands of cities and attractions worldwide.',
      align: 'left',
      theme: 'gray'
    },
    {
      id: 2,
      step: 'Step 2',
      icon: FaMoneyBillWave,
      title: 'Set Budget & Duration',
      description:
        'Define your travel budget and trip duration to receive tailored recommendations.',
      align: 'right',
      theme: 'primary'
    },
    {
      id: 3,
      step: 'Step 3',
      icon: FaMagic,
      title: 'Generate AI Travel Plan',
      description:
        'Our AI creates a complete personalized itinerary instantly.',
      align: 'left',
      theme: 'primary'
    },
    {
      id: 4,
      step: 'Step 4',
      icon: FaSuitcaseRolling,
      title: 'Book & Explore',
      description:
        'Book your trip and enjoy a stress-free travel experience.',
      align: 'right',
      theme: 'gray'
    }
  ];

  return (
    <div className="w-full py-10 md:py-24 px-4 sm:px-6 lg:px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Header Section */}
        <div className="mb-5 md:mb-5">
          <TypewriterHeading
            text="Plan Your Dream Vacation in Minutes"
            className="uppercase text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight text-center block"
          />
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto text-center">
            From destination selection to final itinerary, Src-Dest handles the hard work for you.
          </p>
        </div>

        <div className="inline-flex w-fit bg-sky-100 text-sky-600 px-4 py-2 rounded-full font-semibold mb-5">
          <span>Simple Process</span>
        </div>

        {/* Timeline Flow */}
        <div className="relative">
          {steps.map((item, index) => {
            const isLeft = item.align === 'left';
            const isPrimary = item.theme === 'primary';
            const hasNext = index < steps.length - 1;
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className={`flex w-full mb-4 md:mb-8 relative ${isLeft ? 'justify-start' : 'justify-end'
                  }`}
              >

                {/* Desktop Connecting Line (Left to Right) */}
                {hasNext && isLeft && (
                  <div className="hidden md:block absolute top-1/2 left-[45%] w-[10%] h-[calc(50%+3rem)] border-t-2 border-r-2 border-dashed border-slate-300 rounded-tr-[2rem] z-0">
                    <div className="absolute -bottom-1 -right-[5px] w-3 h-3 border-b-2 border-r-2 border-slate-300 transform rotate-45"></div>
                  </div>
                )}

                {/* Desktop Connecting Line (Right to Left) */}
                {hasNext && !isLeft && (
                  <div className="hidden md:block absolute top-1/2 right-[45%] w-[10%] h-[calc(50%+3rem)] border-t-2 border-l-2 border-dashed border-slate-300 rounded-tl-[2rem] z-0">
                    <div className="absolute -bottom-1 -left-[5px] w-3 h-3 border-b-2 border-r-2 border-slate-300 transform rotate-45"></div>
                  </div>
                )}

                {/* Card Container */}
                <div
                  className={`w-full md:w-[45%] relative z-10 rounded-[2rem] p-6 flex items-stretch gap-5 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100/50 ${isPrimary ? 'bg-[#38BDF8]/10' : 'bg-slate-50'}`}
                >

                  {/* Vertical Pill */}
                  <div
                    className={`w-12 rounded-full flex flex-col justify-center items-center py-6 shrink-0 shadow-sm ${isPrimary ? 'bg-[#38BDF8]' : 'bg-slate-800'
                      }`}
                  >
                    <span className="transform -rotate-90 text-white font-bold whitespace-nowrap tracking-[0.2em] text-xs uppercase">
                      {item.step}
                    </span>
                  </div>

                  {/* Content Area */}
                  <div className="flex flex-col justify-center py-2 pr-2">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon
                        className={`text-xl md:text-2xl ${isPrimary ? 'text-sky-500' : 'text-slate-700'
                          }`}
                      />
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-base text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default WorkScreen;