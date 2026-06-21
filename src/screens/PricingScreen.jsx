import React from 'react';
import TypewriterHeading from '../components/TypewriterHeading';

const PricingScreen = () => {
    const plans = [
        {
            name: 'Starter',
            price: 'Free',
            description: 'Perfect for exploring essential tools and creating your first intelligent itineraries',
            features: [
                '1 AI Trip Plan per Month',
                'Basic Recommendations',
                'Destination Suggestions',
                'Community Support'
            ],
            cta: 'Get Started',
            isPopular: false
        },
        {
            name: 'Pro',
            price: '$9',
            period: '/month',
            description: 'For frequent jetsetters who need unrestricted layout mapping and predictive analytics.',
            features: [
                'Unlimited Trip Plans',
                'Premium Hotels',
                'Budget Analytics',
                'Interactive Maps',
                'Priority Email Support'
            ],
            cta: 'Start Pro Trial',
            isPopular: true
        },
        {
            name: 'Enterprise',
            price: '$29',
            period: '/month',
            description: 'Engineered for travel agencies, group workspaces, and advanced API platform integration.',
            features: [
                'Team Travel Planning',
                'Advanced Analytics',
                'Priority Support',
                'Shared Workspaces',
                'API Access'
            ],
            cta: 'Contact Sales',
            isPopular: false
        }
    ];

    return (
        <section className="w-full pt-8 pb-20 md:pt-12 md:pb-32 px-4 sm:px-6 lg:px-8 bg-sky-50">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center max-w-5xl mx-auto mb-16 md:mb-24">
                    <TypewriterHeading
                        text="Flexible Plans for Every Traveler"
                        className="uppercase text-3xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight block"
                    />
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                        Choose the plan that fits your travel needs.
                    </p>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto items-center">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`flex flex-col bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${plan.isPopular ? 'scale-100 md:scale-110 z-10 border-2 border-sky-500' : 'scale-100 z-0'
                                }`}
                        >
                            {/* Card Header with Wave */}
                            <div className={`relative pt-12 pb-24 text-center ${plan.isPopular ? 'bg-sky-500' : 'bg-sky-400'
                                }`}>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-wide">{plan.name}</h3>
                                <div className="flex items-center justify-center text-white">
                                    <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
                                    {plan.period && <span className="text-sky-100 ml-1 font-medium mt-3">{plan.period}</span>}
                                </div>

                                {/* Popular Badge */}
                                {plan.isPopular && (
                                    <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                        Most Popular
                                    </div>
                                )}

                                {/* SVG Wave Layer */}
                                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-[80px] md:h-[100px] block" preserveAspectRatio="none">
                                        <path fill="#ffffff" fillOpacity="0.3" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,122.7C672,96,768,96,864,117.3C960,139,1056,181,1152,192C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                                        <path fill="#ffffff" fillOpacity="0.5" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                                        <path fill="#ffffff" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                                    </svg>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="px-8 pb-10 flex-grow flex flex-col bg-white">
                                <p className="text-base text-slate-600 mb-8 text-center px-4 leading-relaxed">
                                    {plan.description}
                                </p>

                                <ul className="space-y-4 flex-grow mb-10">
                                    {plan.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-center text-slate-700 text-sm font-medium">
                                            <span className="w-2 h-2 rounded-full bg-sky-500 mr-4 shrink-0 shadow-sm"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`w-full py-3.5 rounded-lg font-bold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg ${plan.isPopular
                                        ? 'bg-sky-500 text-white hover:bg-sky-600 hover:-translate-y-0.5'
                                        : 'bg-white text-sky-500 border-2 border-sky-100 hover:border-sky-500 hover:bg-sky-50 hover:-translate-y-0.5'
                                        }`}
                                >
                                    {plan.cta}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingScreen;
