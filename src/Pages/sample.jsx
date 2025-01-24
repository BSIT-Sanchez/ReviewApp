import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css'; 
import 'swiper/css/pagination'; // for pagination
import 'swiper/css/autoplay'; 
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

export default function Welcome({ auth }) {
    const [activeLink, setActiveLink] = useState("#home");

    const handleNavigationClick = (section) => {
        setActiveLink(section);
        if (section === "#home") {
            window.history.replaceState(null, "", "/"); // Update URL without #home
        } else {
            window.location.hash = section; // Navigate to other sections
        }
    };

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a 1-second fade-in duration
    }, []);

    useEffect(() => {
        // If the current URL ends with #home, remove it
        if (window.location.hash === "#home") {
            window.history.replaceState(null, "", "/");
        }
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            {/* Navigation Bar */}
            <header className="bg-white shadow fixed w-full z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                    {/* Left: Logo */}
                    <div className="flex items-center">
                        <h1 className="text-xl font-bold text-gray-800">HelloWorld</h1>
                    </div>

                    {/* Center: Navigation Links */}
                    <nav className="hidden md:flex space-x-6">
                        <a
                            href="#home"
                            onClick={() => handleNavigationClick("#home")}
                            className={`text-gray-600 hover:text-gray-900 ${
                                activeLink === "#home" ? "underline text-blue-600" : ""
                            }`}
                        >
                            Home
                        </a>
                        <a
                            href="#features"
                            onClick={() => handleNavigationClick("#features")}
                            className={`text-gray-600 hover:text-gray-900 ${
                              ``  activeLink === "#features" ? "underline text-blue-600" : ""
                            }`}
                        >
                            Features
                        </a>
                        <a
                            href="#subscribe"
                            onClick={() => handleNavigationClick("#subscribe")}
                            className={`text-gray-600 hover:text-gray-900 ${
                                activeLink === "#subscribe" ? "underline text-blue-600" : ""
                            }`}
                        >
                            Subscribe
                        </a>
                        <a
                            href="#contact"
                            onClick={() => handleNavigationClick("#contact")}
                            className={`text-gray-600 hover:text-gray-900 ${
                                activeLink === "#contact" ? "underline text-blue-600" : ""
                            }`}
                        >
                            Contact
                        </a>
                    </nav>

                    {/* Right: Authentication Buttons */}
                    <div className="flex items-center space-x-4">
                        {auth?.user ? (
                            <a href={route("dashboard")} className="text-gray-600 hover:text-gray-900">
                                Dashboard
                            </a>
                        ) : (
                            <>
                                <a
                                    href={route("login")}
                                    className="bg-transparent border border-gray-600 text-gray-600 px-4 py-2 rounded hover:bg-gray-100"
                                >
                                    Sign In
                                </a>
                                <a
                                    href={route("register")}
                                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
                                >
                                    Sign Up
                                </a>
                            </>
                        )}
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow">
                {/* Home Section */}
                <section id="home" className="h-screen flex flex-col md:flex-row items-center justify-center px-4">
                    <div className="md:w-1/2 flex flex-col items-start space-y-4">
                        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
                            Welcome to HelloWorld
                        </h1>
                        <p className="text-gray-600 mb-8">
                            Explore our features, subscribe to updates, and get in touch with us!
                        </p>
                        <a
                            href="#features"
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500"
                        >
                            Get Started
                        </a>
                    </div>
                    <div className="md:w-1/2 flex flex-col items-center space-y-4">
                        {/* Swiper Component for Auto Scrolling Cards with Bullets */}
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                              rotate: 50,
                              stretch: 0,
                              depth: 100,
                              modifier: 1,
                              slideShadows: true,
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                              }}
                              pagination={true}
                              modules={[EffectCoverflow, Pagination, Autoplay]}
                        >
                            {/* Review Cards */}
                            <SwiperSlide className="bg-red-500 shadow-xl rounded-xl p-4 mx-4">
                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex space-x-2">
                                            <h1 className="font-semibold text-center">Lando Doe</h1>
                                            <p className="text-gray-600">Feb 15, 2025</p>
                                        </div>
                                        <div className="flex space-x-1 text-yellow-500">
                                            {/* Star Ratings */}
                                            <h1>⭐</h1>
                                            <h1>⭐</h1>
                                            <h1>⭐</h1>
                                            <h1>⭐</h1>
                                            <h1>⭐</h1>
                                        </div>
                                    </div>
                                    <p className="text-gray-600">
                                        "This platform has been a game-changer. The user interface is intuitive and the features are top-notch!"
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="bg-blue-500 shadow-xl rounded-xl p-4 mx-4">
                                <div >
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex space-x-2">
                                            <h1 className="font-semibold">ahhiiil Smith</h1>
                                            <h1 className="text-gray-600">Mar 1, 2025</h1>
                                        </div>
                                        <div className="flex space-x-1 text-yellow-500">
                                            {/* Star Ratings */}
                                            <h1>⭐</h1>
                                            <h1>⭐</h1>
                                            <h1>⭐</h1>
                                            <h1>⭐</h1>
                                        </div>
                                    </div>
                                    <p className="text-gray-600">
                                        "I love the new features! The customizable dashboard is exactly what I needed. Highly recommend!"
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="bg-orange-500 shadow-xl rounded-xl p-4 mx-4">
                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex space-x-2">
                                            <h1 className="font-semibold text-center">Lando Doe</h1>
                                            <h1 className="text-gray-600">Feb 15, 2025</h1>
                                        </div>
                                        <div className="flex space-x-1 text-yellow-500">
                                            {/* Star Ratings */}
                                            <h1>⭐</h1>
                                            <h1>⭐</h1>
                                            <h1>⭐</h1>
                                            <h1>⭐</h1>
                                            <h1>⭐</h1>
                                        </div>
                                    </div>
                                    <p className="text-gray-600">
                                        "This platform has been a game-changer. The user interface is intuitive and the features are top-notch!"
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="bg-green-500 shadow-xl rounded-xl p-4 mx-4">
                                <div >
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex justify-center items-center">
                                            <h1 className="font-semibold">ahhiiil Smith</h1>
                                            <h1 className="text-gray-600">Mar 1, 2025</h1>
                                        </div>
                                        
                                    </div>
                                    <p className="text-gray-600">
                                        "I love the new features! The customizable dashboard is exactly what I needed. Highly recommend!"
                                    </p>
                                </div>
                            </SwiperSlide>
                            {/* Add more SwiperSlides as needed */}
                        </Swiper>
                    </div>
                </section>
                {/* Other Sections (Features, Subscribe, Contact) */}
                <section
                    id="features"
                    className="h-screen bg-gray-200 flex flex-col items-center justify-center px-4"
                >
                    <h2
                        className="text-3xl font-bold text-gray-800 mb-4"
                        data-aos="fade-right" // AOS fade effect
                    >
                        Features
                    </h2>
                    <div className="text-gray-600 text-center" data-aos="fade-up" data-aos-delay="200">
                        <p className="mb-6">
                            Explore the powerful features of HelloWorld. These tools are designed to help you achieve your goals and improve your experience.
                        </p>
                        <ul className="space-y-4">
                            <li data-aos="fade-up" data-aos-delay="400">
                                <h3 className="text-xl font-semibold text-gray-800">Easy Navigation</h3>
                                <p className="text-gray-600">
                                    With a user-friendly interface, navigating through the platform is simple and intuitive, whether you're on desktop or mobile.
                                </p>
                            </li>
                            <li data-aos="fade-up" data-aos-delay="600">
                                <h3 className="text-xl font-semibold text-gray-800">Real-Time Updates</h3>
                                <p className="text-gray-600">
                                    Stay up-to-date with real-time notifications, alerts, and updates to keep you informed and engaged with the platform.
                                </p>
                            </li>
                            <li data-aos="fade-up" data-aos-delay="800">
                                <h3 className="text-xl font-semibold text-gray-800">Customizable Dashboard</h3>
                                <p className="text-gray-600">
                                    Personalize your dashboard to fit your needs. Track important metrics, manage your tasks, and view updates all in one place.
                                </p>
                            </li>
                            <li data-aos="fade-up" data-aos-delay="1000">
                                <h3 className="text-xl font-semibold text-gray-800">Secure & Reliable</h3>
                                <p className="text-gray-600">
                                    We prioritize your data's security with top-notch encryption methods. Rest assured your information is always protected.
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Subscribe Section */}
                <section id="subscribe" className="h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Subscribe</h2>
                    <p className="text-gray-600 text-center mb-8">
                        Stay updated with the latest news and updates by subscribing to our newsletter.
                    </p>
                    <form className="flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
                        />
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-500">
                            Subscribe
                        </button>
                    </form>
                </section>

                {/* Contact Section */}
                <section id="contact" className="h-screen bg-gray-200 flex flex-col items-center justify-center px-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
                    <p className="text-gray-600 text-center">
                        Have questions? Reach out to us and we’ll be happy to help!
                    </p>
                    <a
                        href="mailto:contact@helloworld.com"
                        className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500"
                    >
                        Email Us
                    </a>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-4">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p>&copy; 2025 HelloWorld. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
