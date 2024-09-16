import React from 'react';

const AboutCompany = () => {
  return (
    <div className="p-2 bg-gray-100">
      <div className="bg-white container mx-auto flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2 p-4">
        <div className="flex flex-col items-center">
        <img
            src="img05.jpg" // Replace with your image path
            alt="About Our Company"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            style={{ height: '400px', width: '100%' }} // Adjust height and width as needed
          />
         
           

        </div>
         
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            About Our Company
          </h1>
          <p className="text-md text-gray-700 mb-4">
            We are Partner of Your Innovations
          </p>
          <ul className="list-disc text-md  text-gray-700 mb-4 space-y-2 pl-5">
            <li>
              We understand that in today's fast-paced market, staying ahead of the curve requires more than just keeping up with trends; it demands a commitment to continuous improvement and breakthrough solutions.
            </li>
            <li>
              As your dedicated partner, we provide cutting-edge sales enhancement products designed to propel your business forward.
            </li>
            <li>
              Our comprehensive suite is crafted to meet your unique needs.
            </li>
            <li>
              We are not just a product but a collaborator dedicated to driving your success.
            </li>
            <li>
              Together, we transform challenges into opportunities.
            </li>
          </ul>
          <a
            href="/learn-more" // Replace with your actual link
            className="inline-block mt-4 px-6 py-3 bg-navyblue text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
