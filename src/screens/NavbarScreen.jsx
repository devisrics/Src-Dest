import React, { useState } from 'react'

function NavbarScreen() {
  // State to manage mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar w-full">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center">
        {/* Logo */}
        <div className="h-8 w-8 rounded-full bg-black flex items-center justify-center mr-3 shrink-0">
          <span className="text-white text-xs font-bold tracking-wider">SD</span>
        </div>
        <div className="text-2xl">
          Src-Dest
        </div>

        {/* Menu - Hidden on mobile, original styles on desktop */}
        <div className="hidden md:flex flex-1 justify-center gap-8">
          <a href="#home" className="hover:text-sky-100 transition-colors cursor-pointer">Home</a>
          <a href="#features" className="hover:text-sky-100 transition-colors cursor-pointer">Features</a>
          <a href="#work" className="hover:text-sky-100 transition-colors cursor-pointer">Process</a>
          <a href="#destinations" className="hover:text-sky-100 transition-colors cursor-pointer">Destinations</a>
          <a href="#pricing" className="hover:text-sky-100 transition-colors cursor-pointer">Pricing</a>
          <a href="#contact" className="hover:text-sky-100 transition-colors cursor-pointer">Contact</a>
        </div>

        {/* Hamburger Menu - Only visible on mobile */}
        <div className="md:hidden ml-auto flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                // "X" Close Icon
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.83-4.828 4.83a1 1 0 0 1-1.414-1.414l4.829-4.83-4.83-4.828a1 1 0 0 1 1.414-1.414l4.83 4.829 4.828-4.83a1 1 0 1 1 1.414 1.414l-4.83 4.83 4.83 4.828z" />
              ) : (
                // Hamburger Menu Icon
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu - Only renders when hamburger is open */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4">
          <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-sky-100 transition-colors cursor-pointer block">Home</a>
          <a href="#features" onClick={() => setIsOpen(false)} className="hover:text-sky-100 transition-colors cursor-pointer block">Features</a>
          <a href="#destinations" onClick={() => setIsOpen(false)} className="hover:text-sky-100 transition-colors cursor-pointer block">Destinations</a>
          <a href="#pricing" onClick={() => setIsOpen(false)} className="hover:text-sky-100 transition-colors cursor-pointer block">Pricing</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-sky-100 transition-colors cursor-pointer block">Contact</a>
        </div>
      )}
    </nav>
  )
}

export default NavbarScreen;