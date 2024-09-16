'use client'

import React, { useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';
import { initializeAOS } from '@/utils/Aos_setup';

const Carausel = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS; // Cleanup AOS on unmount
    }, []);
    return (
        <Carousel
            showStatus={false}
            showThumbs={false}
        >
            {/* Slide 1 */}

            <div className="relative h-[580px] bg-banner1 bg-cover bg-center flex items-center" data-aos="zoom-in-up">

                <div className="absolute inset-0 bg-black bg-opacity-20 blur-lg" data-aos="zoom-in-up"></div>

                <div className='relative flex flex-col justify-center items-start p-8 w-1/2 z-10'>
                    <p className='font-extrabold text-xl text-white mb-4' data-aos="zoom-in-up">
                        Experience  the best sales solution.
                    </p>
                    <p className='font-extrabold text-5xl text-white mb-4 text-start' data-aos="fade-right">
                        Sales Solutions and Services
                    </p>
                    <p className='font-semibold text-xl text-white' data-aos="fade-left">
                        unlock fast sales with Sale O Fast
                    </p>
                    <div className=' text-white p-2 mt-12 rounded-lg'>
                        <button className='w-full py-4 px-8 font-semibold bg-red-800 hover:bg-red-600 rounded-lg'>
                            Book Demo
                        </button>
                    </div>
                </div>

                <div className='absolute right-0 bottom-0 p-8'>
                    <img
                        src='https://img.freepik.com/free-vector/designers-are-working-desing-web-page-web-design-user-interface-user-experience-content-organization_335657-4403.jpg'
                        alt="Web Development"
                        style={{ height: "300px", width: "400px" }}
                        className="object-cover rounded-lg shadow-lg animate-bounce"
                    />
                </div>

            </div>

            {/* Slide 2 */}
            <div className="relative h-[580px] bg-banner2 bg-cover bg-start flex items-center">
                <div className="absolute inset-0 bg-black bg-opacity-30" data-aos="zoom-in-up"></div>
                <div className="relative flex flex-col justify-start items-start p-4 w-full max-w-2xl  ">
                    <p className="font-extrabold text-4xl md:text-5xl text-white z-10 mb-4" data-aos="zoom-in-up">
                        Transforming Vision into Reality with Cutting-Edge Solutions.
                    </p>
                    <p className="font-extrabold text-4xl md:text-5xl mr-10 text-white z-10 mb-4" data-aos="fade-right">
                        Harness the Power of Innovation
                    </p>
                    <p className="font-bold text-lg md:text-xl text-white z-10 mb-6" data-aos="fade-left">
                        Discover how our tailored services can drive your success and future growth.
                    </p>
                    <div className=" text-white p-2 rounded-lg mt-4">
                        <button className="w-full py-2 px-4 font-semibold bg-red-700 hover:bg-red-600 rounded-lg">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>






            {/* Slide 3 */}
            <div className="relative h-[580px] bg-banner3 bg-cover bg-center flex items-center">
                <div className="absolute inset-0 bg-black bg-opacity-30 blur-lg" data-aos="zoom-in-up"></div>
                <div className='relative flex flex-col justify-center items-start p-8 w-1/2 '>
                    <p className='font-extrabold text-5xl text-white z-10 mb-4' data-aos="zoom-in-up">
                        Revolutionizing Your Industry with State-of-the-Art Solutions
                    </p>
                    <p className='font-extrabold text-5xl text-white z-10 mb-4 text-start ml-10'  data-aos="fade-right">
                        Where Innovation Meets Excellence
                    </p>
                    <p className='font-bold text-xl text-white z-10 text-start ml-10' data-aos="fade-left">
                        Discover how our bespoke services can propel your business forward and unlock new opportunities.
                    </p>
                    <div className=' text-white p-2 mt-4 rounded-lg ml-10'>
                        <button className='w-full py-2 px-4 font-semibold bg-red-700 hover:bg-red-600 rounded-lg'>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

        </Carousel>
    );
}

export default Carausel;
