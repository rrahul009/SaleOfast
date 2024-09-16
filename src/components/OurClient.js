'use client'
import React from 'react';
import Slider from 'react-slick';

// Import slick carousel CSS files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OurClient = () => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-8 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Clients</h2>

        {/* Clients Carousel */}
        <Slider {...settings}>
          {/* Client 1 */}
          <div className="flex items-center justify-center p-2 bg-white rounded-lg shadow-md">
            <img
              src="https://kloudrac.com/media/packageimage/Nikola-Labs.png"
              alt="Client 1"
              className="w-28 h-28 object-contain" // Consistent size
            />
          </div>

          {/* Client 2 */}
          <div className="flex items-center justify-center p-2 bg-white rounded-lg shadow-md">
            <img
              src="https://kloudrac.com/media/packageimage/Picture73.jpg"
              alt="Client 2"
              className="w-28 h-28 object-contain" // Consistent size
            />
          </div>

          {/* Client 3 */}
          <div className="flex items-center justify-center p-2 bg-white rounded-lg shadow-md">
            <img
              src="https://kloudrac.com/media/packageimage/Total-Security-Solutions-Inc.jpg"
              alt="Client 3"
              className="w-28 h-28 object-contain" // Consistent size
            />
          </div>

          {/* Client 4 */}
          <div className="flex items-center justify-center p-2 bg-white rounded-lg shadow-md">
            <img
              src="https://kloudrac.com/media/packageimage/Picture35.png"
              alt="Client 4"
              className="w-28 h-28 object-contain" // Consistent size
            />
          </div>

          {/* Client 5 */}
          <div className="flex items-center justify-center p-2 bg-white rounded-lg shadow-md">
            <img
              src="https://kloudrac.com/media/packageimage/Picture69.png"
              alt="Client 5"
              className="w-28 h-28 object-contain" // Consistent size
            />
          </div>

          {/* Client 6 */}
          <div className="flex items-center justify-center p-2 bg-white rounded-lg shadow-md">
            <img
              src="https://kloudrac.com/media/packageimage/Picture38.jpg"
              alt="Client 6"
              className="w-28 h-28 object-contain" // Consistent size
            />
          </div>

          {/* Client 7 */}
          <div className="flex items-center justify-center p-2 bg-white rounded-lg shadow-md">
            <img
              src="https://kloudrac.com/media/packageimage/Voyant-Technologies-scaled.jpg"
              alt="Client 7"
              className="w-28 h-28 object-contain" // Consistent size
            />
          </div>

          {/* Client 8 */}
          <div className="flex items-center justify-center p-2 bg-white rounded-lg shadow-md">
            <img
              src="https://kloudrac.com/media/packageimage/Picture15-e1672863152552.jpg"
              alt="Client 8"
              className="w-28 h-28 object-contain" // Consistent size
            />
          </div>

          {/* Client 9 */}
          <div className="flex items-center justify-center p-2 bg-white rounded-lg shadow-md">
            <img
              src="https://kloudrac.com/media/packageimage/Picture3.png"
              alt="Client 9"
              className="w-28 h-28 object-contain" // Consistent size
            />
          </div>

          {/* Client 10 */}
          <div className="flex items-center justify-center p-2 bg-white rounded-lg shadow-md">
            <img
              src="https://kloudrac.com/media/packageimage/Picture33.png"
              alt="Client 10"
              className="w-28 h-28 object-contain" // Consistent size
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default OurClient;
