import React from "react";

const WeOffer = () => {
  return (
    <section className="p-6 bg-gray-100 mx-auto ">
      {/* <div className="flex flex-col lg:flex-row justify-between items-center px-6 py-12 rounded-xl bg-white shadow-sm"> */}
        {/* Left Column: Heading */}
        {/* <div className="flex flex-col justify-center items-start w-full lg:w-1/2 mb-6 lg:mb-0 pl-6 lg:pl-12">
          <p className="text-lg text-gray-600 font-medium">What We're Offering</p>
          <p className="text-3xl text-[#070E79] lg:text-4xl font-bold mt-2">
            Dealing in all Sales
            <span className="block lg:inline text-center mt-2 lg:mt-0 lg:ml-3">
              Solutions
            </span>
          </p>
        </div> */}

        {/* Right Column: Content */}
        {/* <div className="lg:mr-20 lg:w-2/5">
        <p className="text-3xl font-bold mb-2">SaleOfast</p>
          <p className="text-md leading-relaxed text-black" style={{ fontWeight: '400' }}>
            At Saleofast, we specialize in dealing with all sales solutions to
            meet the diverse needs of modern businesses. Our comprehensive suite
            of tools and services covers every aspect of the sales process,
            ensuring seamless integration and maximum efficiency. From robust
            CRM systems that centralize customer data to advanced analytics
            platforms that provide actionable insights, our solutions are
            designed to enhance every stage of the sales journey.
          </p>
        </div> */}
      {/* </div> */}

      {/* Sales Solutions Section */}
      <section className="bg-gray-100 mt-6 ">
  <div className="max-w-screen-xl mx-auto">
    {/* Card Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* CRM Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out transform">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center ">CRM</h3>
        <div className="flex justify-center mb-4">
          <img
            src="/crm.png"
            alt="CRM"
            className="w-28 h-28 object-contain" // Ensures image is small and maintains aspect ratio
          />
        </div>
        <p className="text-gray-600 leading-relaxed text-start">
          CRM is a system used by businesses to manage interactions and relationships with current and potential customers. CRM is designed to streamline sales, customer service, and support functions with the overarching goal of enhancing customer satisfaction, loyalty, and retention.
        </p>
      </div>

      {/* Field Sales App Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out transform">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Field Sales App</h3>
        <div className="flex justify-center mb-4">
          <img
            src="/fieldsale.png"
            alt="Field Sales App"
            className="w-28 h-28 object-contain" // Same sizing for consistency
          />
        </div>
        <p className="text-gray-600 leading-relaxed">
          The app is designed to assist sales representatives in performing their duties while they are out in the field. This app is specifically tailored to meet the needs of sales professionals who spend a significant amount of time meeting clients, prospecting, and closing deals outside of the office.
        </p>
      </div>

      {/* Channel Partner App Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out transform">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Channel Partner App</h3>
        <div className="flex justify-center mb-4">
          <img
            src="/channelpartnerapp.png"
            alt="Channel Partner App"
            className="w-28 h-28 mt-2 object-contain" // Keep images consistent
          />
        </div>
        <p className="text-gray-600 leading-relaxed">
          An application designed to facilitate communication, collaboration, and transactions between a company and its channel partners. Our app helps companies provide their channel partners with easy access to essential resources, tools, and information needed to sell products or services effectively.
        </p>
      </div>

      {/* Retailer App Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out transform">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Retailer App</h3>
        <div className="flex justify-center mb-4">
          <img
            src="retailer.png"
            alt="Retailer App"
            className="w-32 h-32 object-contain" // Keep images consistent with the others
          />
        </div>
        <p className="text-gray-600 leading-relaxed">
          A retailer app is a mobile or web application designed to help companies sell their products and services directly to retailers. Our app offers a convenient way for retailers to browse, shop, purchase products, and track their orders through their mobile devices.
        </p>
      </div>
    </div>
  </div>
</section>

    </section>
  );
};

export default WeOffer;
