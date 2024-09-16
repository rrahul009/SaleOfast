'use client'
import React from 'react';
import Slider from 'react-slick';

// Import slick carousel CSS files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OurPartner = () => {
    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,  // Show 4 slides on larger screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4, // Show 4 slides on tablets and large screens
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3, // Show 3 slides on smaller tablets and large mobile screens
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2, // Show 2 slides on very small screens
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="p-5 bg-gray-100">
            <div className="bg-white p-5 container mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Partner</h2>

                {/* Clients Carousel */}
                <Slider {...settings}>
                    {/* Client 1 */}
                    <div className="flex items-center justify-center">
                        <img
                            src="https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png"
                            alt="Client 1"
                            className="h-24 object-contain mx-4" // Consistent height and scaling
                        />
                    </div>

                    {/* Client 2 */}
                    <div className="flex items-center justify-center">
                        <img
                            src="https://pngimg.com/d/microsoft_PNG6.png"
                            alt="Client 2"
                            className="h-24 object-contain mx-4" // Consistent height and scaling
                        />
                    </div>

                    {/* Client 3 */}
                    <div className="flex items-center justify-center">
                        <img
                            src="https://icon2.cleanpng.com/20240214/sbj/transparent-salesforce-logo-salesforce-logo-blue-cloud-with-white-1710878324421.webp"
                            alt="Client 3"
                            className="h-24 object-contain mx-4" // Consistent height and scaling
                        />
                    </div>

                    {/* Client 4 */}
                    <div className="flex items-center justify-center">
                        <img
                            src="https://kloudrac.com/assets/img/partner/1.jpg"
                            alt="Client 4"
                            className="h-24 object-contain mx-4" // Consistent height and scaling
                        />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default OurPartner;
