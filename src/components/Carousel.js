'use client'

import React, { useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';
import { initializeAOS } from '@/utils/Aos_setup';
import Navbar from './Navbar';

const Carausel = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS; // Cleanup AOS on unmount
    }, []);
    return (
        <>
            <Navbar />
            <Carousel
                showStatus={false}
                showThumbs={false}
            >
                {/* Slide 1 */}

                <div className="relative bg-gradient-to-r from-white to-white flex items-center  p-1">
                    {/* Content Section */}
                    <div className="flex flex-col justify-center items-start lg:p-16 lg:ml-4 p-6  lg:w-1/2 sm:w-full space-y-4 z-10" >
                        <p className="text-xl lg:text-xl font-medium lg:text-start text-gray-950 leading-relaxed">
                            Experience the best <span className="text-blue-600">Sales Solutions</span>
                        </p>

                        <h1 className="font-extrabold text-start text-5xl leading-snug text-gray-800">
                            Empower Your Sales <span className="text-blue-600 ">Growth</span> <br />
                            <span>with Modern Solutions</span>
                        </h1>
                        <div className="space-y-2 sm:space-y-3">
                            <p className="text-lg text-start text-black sm:mt-2">
                                Drive success with innovative tools and personalized services designed
                            </p>
                            <p className="text-lg text-start text-black">
                                to transform your business performance.
                            </p>
                        </div>

                        <div className="flex space-x-4">
                            <button className="py-3 px-8 mt-6 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg"

                            >
                                Book Demo
                            </button>
                            <button className="py-3 px-8 mt-6 font-semibold text-blue-600 bg-white border border-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-md">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="relative w-1/2 h-90 flex items-center justify-center hidden sm:flex">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent opacity-70"></div>
                        <img
                            src="https://innatos.com.mx/wp-content/uploads/2021/12/Top-Custom-software-development.png"
                            alt="Web Development"
                            className="object-cover max-h-[80%] max-w-[80%] rounded-lg z-10"
                            data-aos="fade-left"
                        />
                    </div>

                </div>




                {/* Slide 2 */}
                <div className="relative h-[580px] w-full bg-banner2 bg-cover bg-center flex items-center">
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-10" data-aos="fade"></div>

                    {/* Content */}
                    <div className="relative z-10 w-full   px-6 lg:px-12 flex flex-col justify-center items-center space-y-6 text-white">
                        {/* Headline */}
                        <h1
                            className="font-extrabold text-3xl lg:text-5xl leading-tight text-center"
                            data-aos="fade-right"
                        >
                            Products designed for  SMEs
                        </h1>
                        <h1
                            className="font-extrabold text-3xl lg:text-5xl leading-tight"
                            data-aos="fade-right"
                        >
                            Grow your business
                        </h1>

                        {/* Subheadline */}
                        <h2
                            className="font-bold text-2xl lg:text-4xl leading-tight"
                            data-aos="zoom-in-up"
                        >
                            We will give consultation with supporting products to Grow your bussiness
                        </h2>

                        {/* Description */}
                        <p
                            className="font-medium text-lg lg:text-xl max-w-3xl"
                            data-aos="fade-left"
                        >
                            Discover how our tailored services can drive your success and future growth    .

                        </p>
                        <p>We empower businesses with innovative strategies and cutting-edge technologies.</p>

                        {/* Button */}
                        <button
                            className="mt-6 py-3 px-6 bg-red-700 hover:bg-red-600 rounded-lg shadow-lg text-lg font-semibold transition-transform transform hover:scale-105"
                            data-aos="fade-up"
                        >
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Slide 3 */}
                <div className="relative h-[580px]  bg-cover bg-center flex items-center justify-center">
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50" data-aos="zoom-in-up"></div>

                    {/* Content */}
                    <div className="relative z-10 text-center px-6 max-w-5xl">
                        {/* Main Headline */}
                        <h1
                            className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-white mb-6"
                            data-aos="zoom-in-up"
                        >
                            Device-Friendly &  Sales Solutions
                        </h1>

                        {/* Subheadline */}
                        <h2
                            className="font-bold text-2xl md:text-3xl text-white mb-6 leading-relaxed"
                            data-aos="fade-right"
                        >
                            All our apps are easy to use. <br /> Access them on desktop, mobile, or tablet.
                        </h2>

                        {/* Description */}
                        <p
                            className="text-lg md:text-xl text-white mb-8"
                            data-aos="fade-left"
                        >
                            Discover how our bespoke services can propel your business forward and unlock new opportunities.
                        </p>

                        {/* Call-to-Action Button */}
                        <button
                            className="py-3 px-6 bg-red-700 text-white hover:bg-red-600 rounded-lg shadow-lg text-lg font-semibold transition-transform transform hover:scale-105"
                            data-aos="fade-up"
                        >
                            Learn More
                        </button>
                    </div>
                </div>

            </Carousel>
        </>
    );
}

export default Carausel;
