import React from 'react'
import TypewriterHeading from '../components/TypewriterHeading'

function HeroScreen() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex flex-col lg:flex-row items-center gap-12">

        {/* Left Content */}
        <div className="flex-1">
          <div className="flex flex-col gap-8">

            {/* Badge */}
            <div className="inline-flex w-fit bg-sky-100 text-sky-600 px-4 py-2 rounded-full font-semibold">
              <span>AI-Powered Travel Planning</span>
            </div>

            {/* Heading & Description */}
            <div>
              <TypewriterHeading
                as="h1"
                text="Plan Your Perfect Trip with AI"
                className="uppercase text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-xl"
              />

              <p className="pt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg">
                Generate personalized travel itineraries, estimate budgets,
                discover hotels, and explore destinations effortlessly with
                AI-powered trip planning.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="bg-sky-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-600 transition">
                <a href="#pricing">Start Planning</a>
              </button>
            </div>

            {/* Statistics */}
            <div className="flex gap-10 pt-4">
              <div>
                <h2 className="font-bold text-3xl text-[#FFD700]">
                  50K+
                </h2>
                <p className="text-gray-600">
                  Trips Planned
                </p>
              </div>

              <div>
                <h2 className="font-bold text-3xl text-[#FFD700]">
                  120+
                </h2>
                <p className="text-gray-600">
                  Countries Covered
                </p>
              </div>

              <div>
                <h2 className="font-bold text-3xl text-[#FFD700]">
                  98%
                </h2>
                <p className="text-gray-600">
                  Customer Satisfaction
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="/Hero.jpg"
            alt="Travel Dashboard"
            className="w-full max-w-lg mx-auto rounded-2xl shadow-xl"
          />
        </div>

      </div>
    </section>
  )
}

export default HeroScreen