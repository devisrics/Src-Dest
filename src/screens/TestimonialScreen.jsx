import React from 'react';
import TypewriterHeading from '../components/TypewriterHeading';

const TestimonialScreen = () => {
    const testimonials = [
        {
            id: 1,
            review: "Src-Destcompletely changed how I plan my trips. The automated itinerary generated for my Tokyo vacation was flawless and saved me hours of manual research.",
            author: "Sarah Jenkins",
            role: "Frequent Solo Traveler"
        },
        {
            id: 2,
            review: "The user interface is exceptionally clean, fluid, and intuitive. Navigating budgets, maps, and flight timings feels seamless and highly optimized.",
            author: "Marcus Chen",
            role: "Product Designer"
        },
        {
            id: 3,
            review: "An absolute lifesaver for group trips! We managed our entire European family retreat route without a single spreadsheet headache. Highly recommended.",
            author: "Elena Rostova",
            role: "Family Trip Organizer"
        }
    ];

    return (
        <section id="reviews" className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Column - Content Hook */}
                <div className="flex flex-col items-start text-left relative z-10">
                    {/* Decorative Vector Accents */}
                    <svg width="120" height="100" viewBox="0 0 120 100" className="absolute -top-24 left-1/4 hidden md:block opacity-70 pointer-events-none animate-pulse">
                        {/* The Blue Squiggly Ribbon */}
                        <path d="M10,80 C25,20 45,90 65,40 C75,15 85,45 100,25" stroke="#0ea5e9" strokeWidth="3" fill="none" strokeLinecap="round" />
                        <polygon points="95,15 105,25 90,30" fill="#38BDF8" />

                        {/* Perfect Alignment: Single Golden Star sitting right at the peak tip of the ribbon path */}
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            className="text-amber-400 fill-current"
                            transform="scale(1.3) translate(70, -2)"
                        />
                    </svg>

                    <TypewriterHeading
                        text="What Our Customers Say"
                        className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6 max-w-[15ch]"
                    />

                    <p className="text-base md:text-lg text-slate-600 max-w-md leading-relaxed mb-8">
                        Thousands of global travelers rely on Src-Dest to simplify their mapping logic. Discover how we've streamlined custom dream vacations.
                    </p>

                    <button className="bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white px-8 py-4 rounded-full text-sm font-bold shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 transition-all duration-300 transform active:scale-95">
                        Read All Reviews
                    </button>
                </div>

                {/* Right Column - Ordered Alternating Cards */}
                <div className="relative flex flex-col gap-8 w-full max-w-xl mx-auto lg:ml-auto">
                    {testimonials.map((testimonial, index) => {
                        // Pattern: Right aligned -> Left aligned -> Right aligned
                        const isLeftAligned = index === 1;

                        const alignClass = isLeftAligned
                            ? "self-start md:-translate-x-4"
                            : "self-end md:translate-x-4";

                        // Added explicit, uniform sky-blue borders here ('border border-sky-400' and 'border-2 border-sky-500')
                        const borderClass = isLeftAligned
                            ? "border-2 border-sky-500 shadow-2xl shadow-sky-500/10"
                            : "border border-sky-400 shadow-xl shadow-slate-200/50";

                        return (
                            <div
                                key={testimonial.id}
                                className={`w-[92%] md:w-[88%] bg-white rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-1 ${alignClass} ${borderClass} relative pt-9`}
                            >
                                {/* Floating 5-Star Rating Row above the ribbon zone */}
                                <div className="absolute -top-3 left-6 flex items-center gap-1 bg-white border border-sky-200 px-3 py-1 rounded-full shadow-sm select-none">
                                    {[...Array(5)].map((_, starIdx) => (
                                        <svg key={starIdx} className="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                <div className="flex gap-4 items-start">
                                    {/* Profile Initials Component */}
                                    <div className={`w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-xs font-bold select-none ${isLeftAligned ? 'bg-sky-50 text-sky-600' : 'bg-slate-100 text-slate-600'
                                        }`}>
                                        {testimonial.author.split(' ').map(name => name[0]).join('')}
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-center mb-1">
                                            <div>
                                                <h4 className="font-bold text-slate-900 text-base md:text-lg truncate">
                                                    {testimonial.author}
                                                </h4>
                                                <p className="text-xs text-slate-400 font-medium tracking-wide">{testimonial.role}</p>
                                            </div>

                                            {/* Decorative Quote Vector Ornament */}
                                            <svg className="w-8 h-8 text-sky-100 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-4.765 2.627-4.765 5.386 0 .83.577 1.488 1.41 1.488 1.012 0 1.98.739 1.98 1.98 0 1.344-1.123 2.417-2.471 2.417-2.864 0-5.043-2.844-5.043-6.515 0-5.373 4.431-8.947 9.472-10.017v2.122c-3.3 1-6.001 3.556-6.001 7.424 0 .887.316 1.542.923 1.928.613.393 1.385.505 2.222.505 1.701 0 3.356 1.384 3.356 3.617 0 2.647-2.353 4.254-4.664 4.254-3.133 0-5.522-2.767-5.522-6.123 0-5.137 4.167-8.861 9.248-9.728v2.113c-3.041.873-5.243 3.177-5.243 6.611 0 .831.291 1.487.802 1.875.517.39 1.21.52 1.94.52 1.41 0 2.765 1.104 2.765 3.121 0 2.434-2.027 3.796-4.054 3.796z" />
                                            </svg>
                                        </div>

                                        <p className="text-sm md:text-base text-slate-600 leading-relaxed mt-3 italic">
                                            "{testimonial.review}"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default TestimonialScreen;