import React, { useState, useEffect } from 'react';
import { Search, Bell, ChevronDown, Play, Info, User } from 'lucide-react';

// --- Mock Data ---

// Mock image placeholders (In a real app, these would be URLs)
const getImageUrl = (id) => `https://picsum.photos/300/450?random=${id}`;
const getHeroImageUrl = (id) => `https://picsum.photos/1920/1080?random=${id}`;

const mockData = {
    hero: {
        title: "The Silent Watcher",
        description: "A seasoned detective faces his darkest case yet when a series of seemingly random disappearances leads him to an ancient, hidden conspiracy operating right under the city's surface.",
        genre: "Thriller, Mystery, Drama",
        year: 2023,
        rating: 4.8,
        imageUrl: getHeroImageUrl(99),
    },
    rows: [
        {
            title: "Trending Now",
            items: Array.from({ length: 15 }, (_, i) => ({ id: `t${i}`, title: `Trending Movie ${i + 1}`, imageUrl: getImageUrl(`t${i}`) })),
        },
        {
            title: "New Releases",
            items: Array.from({ length: 15 }, (_, i) => ({ id: `n${i}`, title: `New Release ${i + 1}`, imageUrl: getImageUrl(`n${i}`) })),
        },
        {
            title: "Action Thrillers",
            items: Array.from({ length: 15 }, (_, i) => ({ id: `a${i}`, title: `Action Film ${i + 1}`, imageUrl: getImageUrl(`a${i}`) })),
        },
        {
            title: "Critically Acclaimed",
            items: Array.from({ length: 15 }, (_, i) => ({ id: `c${i}`, title: `Acclaimed Show ${i + 1}`, imageUrl: getImageUrl(`c${i}`) })),
        },
    ]
};

// --- Components ---

/**
 * Header Component (Navigation)
 */
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ["Home", "TV Shows", "Movies", "New & Popular", "My List"];

    return (
        <header className={`fixed top-0 z-50 w-full transition-colors duration-300 ${isScrolled ? 'bg-black/90' : 'bg-transparent'}`}>
            <div className="flex items-center justify-between px-6 md:px-12 py-3">
                
                {/* Left Section: Logo and Primary Nav */}
                <div className="flex items-center space-x-8">
                    {/* Netflix Logo Placeholder (Text for simplicity) */}
                    <div className="text-red-600 text-3xl font-bold tracking-tighter cursor-pointer">
                        NETFLIX
                    </div>
                    
                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex space-x-6 text-sm">
                        {navItems.map((item, index) => (
                            <a 
                                key={item} 
                                href="#" 
                                className={`text-white transition-colors duration-200 ${index === 0 ? 'font-bold' : 'text-gray-300 hover:text-gray-100'}`}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile/Tablet Dropdown */}
                    <div className="lg:hidden text-white flex items-center cursor-pointer">
                        Browse
                        <ChevronDown className="w-4 h-4 ml-1" />
                    </div>
                </div>

                {/* Right Section: Icons and Profile */}
                <div className="flex items-center space-x-4 text-white">
                    <Search className="w-6 h-6 cursor-pointer hover:text-gray-300" />
                    <Bell className="w-6 h-6 cursor-pointer hover:text-gray-300" />
                    
                    <div className="relative group">
                        <div className="w-8 h-8 rounded bg-gray-600 flex items-center justify-center cursor-pointer">
                            <User className="w-5 h-5" />
                        </div>
                        <ChevronDown className="w-4 h-4 hidden md:block cursor-pointer absolute right-[-15px] top-1/2 transform -translate-y-1/2 group-hover:rotate-180 transition-transform" />
                    </div>
                </div>
            </div>
        </header>
    );
};

/**
 * Featured Hero Section
 */
const Hero = ({ data }) => {
    return (
        <div 
            className="relative h-[85vh] md:h-[95vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${data.imageUrl})` }}
        >
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>
            
            {/* Content Container */}
            <div className="absolute bottom-0 left-0 p-6 md:p-16 lg:p-24 text-white w-full md:w-3/5 lg:w-2/5">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 drop-shadow-lg">
                    {data.title}
                </h1>
                
                <p className="text-sm md:text-lg mb-6 leading-relaxed drop-shadow-md line-clamp-3">
                    {data.description}
                </p>

                {/* Info Bar */}
                <div className="flex items-center space-x-3 mb-8 text-sm">
                    <span className="text-green-400 font-bold">98% Match</span>
                    <span className="border border-white/50 px-1 py-0.5 text-xs">{data.year}</span>
                    <span className="text-gray-300">{data.genre}</span>
                </div>

                {/* Buttons */}
                <div className="flex space-x-4">
                    <button className="flex items-center px-6 py-2 bg-white text-black text-lg font-bold rounded hover:bg-opacity-80 transition-colors">
                        <Play className="w-6 h-6 mr-2 fill-black" />
                        Play
                    </button>
                    <button className="flex items-center px-6 py-2 bg-gray-500/70 text-white text-lg font-bold rounded hover:bg-gray-500/50 transition-colors">
                        <Info className="w-6 h-6 mr-2" />
                        More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

/**
 * Movie Card (Individual Item in a row)
 */
const MovieCard = ({ movie }) => {
    return (
        <div className="relative w-40 md:w-56 flex-shrink-0 cursor-pointer transition duration-300 transform hover:scale-[1.08] hover:z-20 group">
            <img 
                src={movie.imageUrl} 
                alt={movie.title} 
                className="w-full h-full object-cover rounded-md shadow-lg"
            />
            
            {/* Hidden Overlay on Hover (More complex interaction needed for real Netflix) */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300 rounded-md flex items-end p-2 opacity-0 group-hover:opacity-100">
                <p className="text-white text-xs font-semibold">{movie.title}</p>
            </div>
        </div>
    );
};

/**
 * Horizontal Movie Row
 */
const MovieRow = ({ title, items }) => {
    return (
        <div className="px-6 md:px-12 mb-10">
            <h2 className="text-white text-xl md:text-2xl font-semibold mb-4 hover:text-gray-300 cursor-default transition-colors">
                {title}
            </h2>
            
            {/* Horizontal Scroll Container */}
            <div className="flex space-x-3 md:space-x-4 overflow-x-scroll scrollbar-hide pb-4">
                {items.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

/**
 * Main Application Component
 */
function App() {
    return (
        <div className="min-h-screen bg-black font-sans">
            <Header />
            
            <main>
                <Hero data={mockData.hero} />
                
                {/* Content Rows */}
                <div className="relative -mt-24 md:-mt-32 lg:-mt-48 pb-10 space-y-12">
                    {mockData.rows.map((row, index) => (
                        <MovieRow 
                            key={index} 
                            title={row.title} 
                            items={row.items} 
                        />
                    ))}
                </div>
            </main>

            {/* Simple Footer Placeholder */}
            <footer className="py-10 text-center text-gray-400 text-sm">
                <p>&copy; {new Date().getFullYear()} Netflix Clone by Senior Dev.</p>
                <p>Tailwind CSS | React | Vite</p>
            </footer>

            {/* Custom scrollbar hiding utility (Tailwind trick) */}
            <style jsx global>{`
                /* Hide scrollbar for Chrome, Safari and Opera */
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                /* Hide scrollbar for IE, Edge and Firefox */
                .scrollbar-hide {
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }
            `}</style>
        </div>
    );
}

export default App;