import React from 'react';

const FooterScreen = () => {
    return (
        <footer className="w-full bg-slate-900 text-white py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

            {/* Subtle Theme Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 relative z-10">

                    {/* Left Column */}
                    <div className="lg:col-span-5 flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.2] mb-12 tracking-tight">
                                Plan Your Dream Vacation –<br /> One Click At A Time.
                            </h2>

                            <div className="flex flex-col gap-6">
                                <h4 className="text-[14px] tracking-[0.2em] text-slate-400 uppercase font-semibold">Contact Information</h4>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-sky-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                        </svg>
                                    </div>
                                    <a href="#" className="text-xl font-medium hover:text-sky-400 transition-colors">
                                        hello@example.com
                                    </a>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-sky-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <a href="#" className="text-xl font-medium hover:text-sky-400 transition-colors">
                                        +1 (234) 567-8900
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-7 flex flex-col justify-between">

                        {/* Newsletter Subscribe */}
                        <div className="mb-16">
                            <h4 className="text-xl font-semibold mb-5">Get In Touch!</h4>
                            <div className="relative max-w-md">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-transparent border border-slate-700 rounded-full py-4 pl-6 pr-32 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 transition-colors"
                                />
                                <button
                                    type="button"
                                    className="absolute right-1.5 top-1.5 bottom-1.5 bg-sky-500 hover:bg-sky-600 text-white rounded-full px-6 text-sm font-medium transition-all shadow-md hover:shadow-lg"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        {/* Navigation Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
                            {/* COMPANY */}
                            <div>
                                <h4 className="text-[14px] tracking-[0.2em] text-slate-400 uppercase font-semibold mb-6">Company</h4>
                                <ul className="space-y-4 text-xl font-medium">
                                    <li><a href="#home" className="hover:text-sky-400 transition-colors">&gt;&gt; Home</a></li>
                                    <li><a href="#features" className="hover:text-sky-400 transition-colors">&gt;&gt; Features</a></li>
                                    <li><a href="#work" className="hover:text-sky-400 transition-colors">&gt;&gt; Process</a></li>
                                    <li><a href="#reviews" className="hover:text-sky-400 transition-colors">&gt;&gt; Reviews</a></li>
                                    <li><a href="#destinations" className="hover:text-sky-400 transition-colors">&gt;&gt; Destinations</a></li>
                                    <li><a href="#pricing" className="hover:text-sky-400 transition-colors">&gt;&gt; Pricing</a></li>
                                </ul>
                            </div>

                            {/* HELP */}
                            <div>
                                <h4 className="text-[14px] tracking-[0.2em] text-slate-400 uppercase font-semibold mb-6">Help</h4>
                                <ul className="space-y-4 text-xl font-medium">
                                    <li><a href="#" className="hover:text-sky-400 transition-colors">&gt;&gt; FAQ</a></li>
                                    <li><a href="#" className="hover:text-sky-400 transition-colors">&gt;&gt; Help Center</a></li>
                                    <li><a href="#" className="hover:text-sky-400 transition-colors">&gt;&gt; Support</a></li>
                                </ul>
                            </div>

                            {/* FOLLOW US */}
                            <div className="col-span-2 sm:col-span-1">
                                <h4 className="text-[14px] tracking-[0.2em] text-slate-400 uppercase font-semibold mb-6">Follow Us</h4>
                                <div className="flex gap-4">
                                    <a href="#" className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all shadow-sm">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V7.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all shadow-sm">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all shadow-sm">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 00-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 002.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Footer Bottom Line */}
                <div className="mt-16 pt-8 border-t border-slate-700/80 flex justify-center">
                    <p className="text-sm md:text-base text-center text-slate-400">
                        &copy; 2026 Src-Dest. All Rights Reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default FooterScreen;
