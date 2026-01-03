import React from 'react';
import { Search, Bell, Menu, ChevronDown } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'TV Shows', path: '/tv' },
  { name: 'Movies', path: '/movies' },
  { name: 'New & Popular', path: '/latest' },
  { name: 'My List', path: '/list' },
];

const Header = () => {
  // In a real application, you would use a state (e.g., `isScrolled`) 
  // and useEffect to change the background class based on scroll position.
  
  return (
    <header className="fixed top-0 z-50 w-full bg-black/90 md:bg-black/80 backdrop-blur-sm transition duration-300">
      <div className="flex items-center justify-between px-4 md:px-10 py-3">
        
        {/* Left Section: Logo and Primary Navigation */}
        <div className="flex items-center space-x-7">
          
          {/* Logo */}
          <a href="/" className="text-4xl font-extrabold tracking-tight text-[#e50914] cursor-pointer selection:bg-none">
            NETFLIX
          </a>

          {/* Primary Navigation (Desktop) */}
          <nav className="hidden lg:flex space-x-5">
            {navItems.map((item) => (
              // Using <a> tags here, would be <Link> from react-router-dom normally
              <a 
                key={item.name} 
                href={item.path} 
                // Placeholder for active link styling:
                // className={item.name === 'Home' ? 'text-white font-bold' : 'text-gray-300 hover:text-gray-100'}
                className="text-gray-300 text-sm font-medium hover:text-gray-100 transition duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile/Tablet Nav Dropdown (shows 'Browse' dropdown) */}
          <div className="relative lg:hidden">
            <button className="flex items-center space-x-1 text-white text-sm font-medium hover:text-gray-300">
              <span>Browse</span>
              <ChevronDown className="w-4 h-4 transition duration-200 group-hover:rotate-180" />
            </button>
            {/* Note: Dropdown menu implementation omitted for brevity */}
          </div>
        </div>

        {/* Right Section: Icons and Profile */}
        <div className="flex items-center space-x-4 md:space-x-6 text-white">
          
          {/* Search Icon */}
          <button title="Search" className="text-white hover:text-gray-300 transition">
            <Search className="h-5 w-5 md:h-6 md:w-6" />
          </button>

          {/* Kids Link */}
          <span className="text-sm cursor-pointer hidden sm:block hover:text-gray-300">
            Kids
          </span>

          {/* Notifications */}
          <button title="Notifications" className="text-white hover:text-gray-300 transition relative">
            <Bell className="h-5 w-5 md:h-6 md:w-6" />
            {/* Optional: Add notification badge */}
            {/* <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-[#e50914] rounded-full">3</span> */}
          </button>

          {/* Profile Avatar & Dropdown */}
          <div className="relative group cursor-pointer">
            <div className="flex items-center space-x-1">
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&h=60&auto=format&fit=crop" 
                alt="Profile Avatar"
                className="w-8 h-8 rounded object-cover ring-2 ring-transparent transition duration-200"
              />
              <ChevronDown className="w-4 h-4 text-white hidden md:block transition duration-200 group-hover:rotate-180" />
            </div>
            
            {/* Optional: Profile dropdown menu placeholder */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;