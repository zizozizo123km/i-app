import React from 'react';
import { ChevronRight, Globe } from 'lucide-react';

// --- Sub-Components (For clarity in a single file output) ---

/**
 * Renders the navigation bar common to the Netflix landing page.
 */
const Header = () => (
    <header className="absolute top-0 left-0 right-0 z-10 p-4 md:p-6 flex justify-between items-center max-w-6xl mx-auto">
        {/* Netflix Logo Placeholder */}
        <h1 className="text-red-600 text-3xl font-extrabold cursor-pointer">NETFLIX</h1>

        <div className="flex space-x-2 md:space-x-4">
            {/* Language Selector */}
            <div className="relative">
                <Globe className="absolute top-1/2 -translate-y-1/2 right-2 w-4 h-4 text-white pointer-events-none" />
                <select
                    className="bg-black/50 border border-white/50 text-white pl-8 pr-3 py-1.5 rounded text-sm focus:ring-red-600 focus:border-red-600 appearance-none transition duration-300"
                    dir="rtl" // Right-to-left context
                >
                    <option value="ar">العربية</option>
                    <option value="en">English</option>
                </select>
            </div>
            
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-1.5 rounded transition duration-300 shadow-md text-sm">
                تسجيل الدخول
            </button>
        </div>
    </header>
);

/**
 * Renders a standard Netflix feature block with alternating text/image layout.
 */
const FeatureSection = ({ title, description, image, isReversed }) => (
    <section className="py-12 md:py-24 border-b-8 border-gray-800 bg-black text-white">
        <div className={`max-w-6xl mx-auto px-4 md:px-8 flex flex-col items-center justify-between ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
            
            {/* Text Content */}
            <div className="md:w-1/2 text-center md:text-right mb-8 md:mb-0" dir="rtl">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-snug">
                    {title}
                </h2>
                <p className="text-lg md:text-2xl">
                    {description}
                </p>
            </div>
            
            {/* Image/Video Content (Placeholder) */}
            <div className="md:w-1/2 relative flex justify-center items-center p-4">
                <img 
                    src={image} 
                    alt={title} 
                    className="relative z-10 w-full max-w-lg" 
                    loading="lazy"
                />
            </div>
        </div>
    </section>
);


// --- Main Component ---

const HomePage = () => {

    const features = [
        {
            title: "استمتع بمشاهدة ما تحب على التلفزيون.",
            description: "شاهد على أجهزة التلفزيون الذكية وPlayStation وXbox وChromecast وApple TV ومشغلات Blu-ray وغيرها.",
            image: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
            isReversed: false,
        },
        {
            title: "حمّل عروضك لمشاهدتها دون اتصال.",
            description: "احفظ مفضلاتك بسهولة، وستجد دائماً شيئاً لتشاهده.",
            image: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
            isReversed: true,
        },
        {
            title: "شاهد في أي مكان.",
            description: "استمتع بمشاهدة الأفلام والبرامج التلفزيونية بلا حدود على هاتفك أو جهازك اللوحي أو حاسوبك المحمول أو التلفزيون.",
            image: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png",
            isReversed: false,
        },
        {
            title: "أنشئ ملفات شخصية للأطفال.",
            description: "أرسل الأطفال في مغامرات مع شخصياتهم المفضلة في مساحة مخصصة لهم ومجانية مع اشتراكك.",
            image: "https://occ-0-37-33.1.nflxso.net/dnm/api/v6/18NMywRvLMtY9IGatEp-HEREJBC/AAAABW-Lz-E0y8R0L7l6rY8Q1oX24xQ4c50rS_gJ8_tXzQ0-jS3N3B4q4X4g1v1_eJ2p2tQ3v5T3m5N9f4j5L5L4L4P.png?r=838",
            isReversed: true,
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white font-sans">

            <Header />

            {/* 1. Hero/Jumbotron Section */}
            <section
                className="relative h-[90vh] md:h-[95vh] flex items-center justify-center border-b-8 border-gray-800"
                style={{
                    backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40ff-8953-5d661845cc2e/1b6212e5-e6a8-4c91-a53d-2496839b23b4/AE-en-20230626-popsignuptwoweeks-perspective_alpha_website_large.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 backdrop-brightness-50"></div>

                <div className="relative z-10 text-center px-4 max-w-4xl" dir="rtl">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                        أفلام وعروض تلفزيونية وغير ذلك الكثير.
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 font-medium">
                        شاهد الآن. ألغِ في أي وقت.
                    </p>
                    <p className="text-lg md:text-xl mb-6">
                        هل أنت جاهز للمشاهدة؟ أدخل بريدك الإلكتروني لإنشاء عضويتك أو إعادة تشغيلها.
                    </p>

                    {/* Email Input CTA */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-2">
                        <input
                            type="email"
                            placeholder="عنوان البريد الإلكتروني"
                            className="w-full md:w-[450px] bg-black/70 border border-gray-500 text-white p-4 rounded focus:ring-2 focus:ring-white focus:outline-none placeholder-gray-400 text-right transition duration-300"
                            dir="rtl"
                        />
                        <button className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white text-xl font-bold py-3 px-6 rounded transition duration-300 w-fit min-w-[150px] md:min-w-[200px] whitespace-nowrap">
                            بدء المشاهدة
                            <ChevronRight className="w-7 h-7 mr-1" />
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. Feature Sections */}
            {features.map((feature, index) => (
                <FeatureSection
                    key={index}
                    title={feature.title}
                    description={feature.description}
                    image={feature.image}
                    isReversed={feature.isReversed}
                />
            ))}

            {/* 3. FAQ Section */}
            <section className="py-12 md:py-24 border-b-8 border-gray-800 bg-black text-white">
                <div className="max-w-4xl mx-auto px-4" dir="rtl">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-10">
                        الأسئلة الشائعة
                    </h2>

                    {/* FAQ Items (Simplified Accordion) */}
                    <div className="space-y-2">
                        {[
                            "ما هي نتفليكس؟",
                            "ما هي تكلفة نتفليكس؟",
                            "أين يمكنني المشاهدة؟",
                            "كيف ألغي اشتراكي؟",
                            "ماذا يمكنني أن أشاهد على نتفليكس؟"
                        ].map((question, index) => (
                            <div key={index} className="bg-gray-700 hover:bg-gray-600 cursor-pointer p-5 transition duration-200">
                                <div className="flex justify-between items-center text-xl md:text-2xl font-normal">
                                    {question}
                                    {/* Using a simple plus sign icon for accordion closed state */}
                                    <span className="text-white text-3xl font-light leading-none">+</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-lg md:text-xl text-center mt-12 mb-6">
                        هل أنت جاهز للمشاهدة؟ أدخل بريدك الإلكتروني لإنشاء عضويتك أو إعادة تشغيلها.
                    </p>

                    {/* Repeat CTA */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-2">
                        <input
                            type="email"
                            placeholder="عنوان البريد الإلكتروني"
                            className="w-full md:w-[450px] bg-black/70 border border-gray-500 text-white p-4 rounded focus:ring-2 focus:ring-white focus:outline-none placeholder-gray-400 text-right transition duration-300"
                            dir="rtl"
                        />
                        <button className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white text-xl font-bold py-3 px-6 rounded transition duration-300 w-fit min-w-[150px] md:min-w-[200px] whitespace-nowrap">
                            بدء المشاهدة
                            <ChevronRight className="w-7 h-7 mr-1" />
                        </button>
                    </div>
                </div>
            </section>

            {/* 4. Footer */}
            <footer className="py-10 bg-black text-gray-400 max-w-6xl mx-auto px-4" dir="rtl">
                <p className="mb-6">
                    هل لديك أسئلة؟ اتصل بنا.
                </p>
                
                {/* Footer Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm underline">
                    <a href="#" className="hover:text-gray-300">الأسئلة الشائعة</a>
                    <a href="#" className="hover:text-gray-300">مركز المساعدة</a>
                    <a href="#" className="hover:text-gray-300">شروط الاستخدام</a>
                    <a href="#" className="hover:text-gray-300">الخصوصية</a>
                    <a href="#" className="hover:text-gray-300">تفضيلات الكوكيز</a>
                    <a href="#" className="hover:text-gray-300">معلومات الشركة</a>
                    <a href="#" className="hover:text-gray-300">الاستثمار</a>
                    <a href="#" className="hover:text-gray-300">السرعة</a>
                </div>

                {/* Language Selector */}
                <div className="relative w-fit mt-6">
                    <Globe className="absolute top-1/2 -translate-y-1/2 right-2 w-4 h-4 text-gray-400 pointer-events-none" />
                    <select
                        className="bg-black border border-gray-500 text-gray-400 pl-8 pr-3 py-1.5 rounded text-sm appearance-none"
                        dir="rtl"
                    >
                        <option value="ar">العربية</option>
                        <option value="en">English</option>
                    </select>
                </div>

                <p className="mt-6 text-sm">
                    Netflix (Middle East)
                </p>
            </footer>

        </div>
    );
};

export default HomePage;