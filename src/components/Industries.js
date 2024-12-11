import React from "react";
import Link from "next/link";

const Industries = () => {
  const industries = [
    {
      name: "Media",
      description: "Leading innovation in the ever-evolving media landscape.",
      keyService: "Content Creation & Distribution",
      image: 'https://cdn-icons-png.freepik.com/256/1434/1434721.png?semt=ais_hybrid',

    },
    {
      name: "Retail",
      description: "Empowering retailers with technology for smarter operations.",
      keyService: "Smart Inventory Management",
      image: 'https://cdn-icons-png.flaticon.com/512/1198/1198412.png',

    },
    {
      name: "Real Estate",
      description: "Transforming the real estate experience with cutting-edge solutions.",
      keyService: "Virtual Property Tours",
      image: 'https://cdn-icons-png.flaticon.com/512/4896/4896425.png',

    },
    {
      name: "Manufacturing",
      description: "Optimizing industrial processes with smart automation.",
      keyService: "Process Automation Systems",
      image: 'https://cdn-icons-png.flaticon.com/512/8071/8071052.png',

    },
    {
      name: "Pharma",
      description: "Revolutionizing pharmaceutical services with digital solutions.",
      keyService: "Telemedicine Platforms",
      image: 'https://cdn-icons-png.flaticon.com/512/4559/4559984.png',

    },
    // {
    //   name: "Retail", // Another Retail industry item, if needed
    //   description: "Empowering retailers with technology for smarter operations.",
    //   keyService: "Smart Inventory Management",
    //   image: 'https://cdn-icons-png.flaticon.com/512/1198/1198412.png',

    // },
  ];

  return (
    <div className="industries-page py-4">
      <div className="container mx-auto text-center px-7 ">
        <div className="p-2 rounded-lg">
          <p className="text-3xl text-black font-semibold mb-2">Industries We Serve</p>
          {/* <p className="text-black text-xl font-bold mb-2">Who We Serve</p> */}
          <p className="text-black text-center text-lg max-w-4xl mx-auto mb-2" style={{ fontFamily: 'roboto' }}>
            We have clients in various industries and have the capability and experience
            to serve and support all businesses and nonprofits. Below is more detailed
            information on some of the key industries of our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-4 cursor-pointer">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg bg-white transform transition-transform duration-300"
            >
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-0 transition-opacity duration-300"></div>

              {/* Static Content */}
              <div className="p-6 text-center flex flex-col justify-between h-full">
                <h2 className="text-2xl font-semibold mb-3 group-hover:text-blue-600 transition-colors" style={{ color: '#083B7F' }}>
                  {industry.name}
                </h2>
                {/* Centered Image */}
                <div className="flex justify-center mb-4">
                  <img src={industry.image} alt={industry.name} style={{ height: '80px' }} />
                </div>
                <p className="text-gray-500 mb-4">{industry.description}</p>
                <p className="text-blue-500 font-medium">{industry.keyService}</p>
            
                  <p className="mt-4 cursor-pointer font-semibold hover:text-blue-700 underline transition-all z-10">
                    <Link href='about'>Learn more</Link>
                  </p>
               

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
