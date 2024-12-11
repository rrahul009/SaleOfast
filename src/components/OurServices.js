'use client'
import { initializeAOS } from '@/utils/Aos_setup';
import React, { useEffect } from 'react';

const OurServices = () => {
  useEffect(() => {
    const cleanupAOS = initializeAOS();
    return cleanupAOS; // Cleanup AOS on unmount
  }, []);

  const cardContent = [
    {
      title: 'Great Products',
      description: [
        'Comprehensive set of features fulfilling user needs effectively.',
        'Saves time and effort for users with practical and useful solutions.',
        'Easy to use and responsive products.',
        'Regular updates and enhancements for continuous improvement.'
      ],
      image: '/banner1.jpg'
    },
    // {
    //   title: 'Expert Team',
    //   description: [
    //     'Designed by industry experts to fit various industries.',
    //     'Products developed after intensive research on features.',
    //     'Experienced team ensures high quality and reliability.',
    //     'Ongoing support and innovation driven by expert feedback.'
    //   ],
    //   image: '/banner2.jpg'
    // },
    {
      title: 'Excellent Support',
      description: [
        'Strong customer support and service to resolve issues quickly.',
        'Offers warranties or guarantees to instill confidence.',
        'Dedicated support team available for troubleshooting and guidance.',
        'Regularly updated FAQs and help resources for user convenience.'
      ],
      image: '/banner4.jpg'
    },
    {
      title: 'Value for Money',
      description: [
        'Excellent value relative to cost with high ROI.',
        'Less time to go live compared to competing products.',
        'Offers more benefits and features than alternatives.',
        'Transparent pricing with no hidden costs.'
      ],
      
       image: '/banner3.jpg'
    }
  ];

  return (
    <div className=" p-6 mt-5">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-10" data-aos="zoom-in-up">
          <h1 className="text-4xl font-bold text-gray-800">Our Exceptional Services</h1>
          <p className="text-lg text-gray-600 mt-3">
            Discover the key benefits and features that set our services apart
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardContent.map((item, index) => (
            <div
              key={index}
              className=" rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              data-aos="zoom-in-up"
            >
              <img
                src={item.image}
                alt={item.title}
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-3xl text-center  font-bold text-gray-800 mb-3">{item.title}</h2>
                <ul className="list-disc pl-5  text-gray-600 space-y-2">
                  {item.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
