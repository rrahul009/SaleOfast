'use client'
import { initializeAOS } from '@/utils/Aos_setup';
import React from 'react';
import { useEffect } from 'react';

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
    {
      title: 'Expert Team',
      description: [
        'Designed by industry experts to fit various industries.',
        'Products developed after intensive research on features.',
        'Experienced team ensures high quality and reliability.',
        'Ongoing support and innovation driven by expert feedback.'
      ],
      image: '/banner2.jpg'
    },
    {
      title: 'Excellent Support',
      description: [
        'Strong customer support and service to resolve issues quickly.',
        'Offers warranties or guarantees to instill confidence.',
        'Dedicated support team available for troubleshooting and guidance.',
        'Regularly updated FAQs and help resources for user convenience.'
      ],
      image: '/banner3.jpg'
    },
    {
      title: 'Value for Money',
      description: [
        'Excellent value relative to cost with high ROI.',
        'Less time to go live compared to competing products.',
        'Offers more benefits and features than alternatives.',
        'Transparent pricing with no hidden costs.'
      ],
      image: '/banner1.jpg'
    }
  ];

  return (
    <div className=" bg-gray-100 p-4 mt-5">
      <div className="container mx-auto" >
        {/* Heading */}
        <div className="text-center mb-6"data-aos="zoom-in-up">
          <h1 className="text-3xl font-bold text-gray-800">Our Exceptional Services</h1>
          <p className="text-md text-gray-600 mt-2">
            Discover the key benefits and features that set our services apart.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6"data-aos="zoom-in-up">
          {cardContent.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="zoom-in-up">
              <div
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="p-6 w-full md:w-1/2">
                  <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {item.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="w-full md:w-1/2 p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                    style={{height:'280px', width:'500px'}}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
