import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <>
            <Navbar />
            <section className=" py-12 px-6 sm:px-12">
                <div className="max-w-6xl mx-auto text-center">
                    {/* Heading */}
                    <p className="text-2xl mt-4 sm:text-5xl font-extrabold text-black leading-tight tracking-tight mb-4">
                        Empowering Media Sales with Smarter Tools and 
                    </p>
                    <p className="text-2xl sm:text-5xl font-extrabold  leading-tight tracking-tight mb-8 text-blue-600">Seamless Integration</p>

                    {/* Subheading */}
                    <p className="text-lg sm:text-xl text-black  max-w-4xl mx-auto">
                        From <span className="text-blue-600 font-bold">campaign management</span>  to field sales optimization, SaleoFast transforms how media businesses sell, manage, and thrive in a competitive landscape.
                    </p>
                </div>

                {/* Decorative Elements */}
                {/* <div className="mt-12 flex justify-center">
                    <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
                </div> */}

                {/* Call-to-Action */}
                <div className="mt-12 mb-8 text-center">
                   <Link href="/contactus">
                   <button className="px-8 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-md transition-all duration-300">
                        See How It Works
                    </button>
                   </Link>
                </div>
            </section>


            <section className="py-3 px-6 sm:px-12 ">
                {/* Heading */}
                <div className="text-center mb-12">
                    <p className="text-3xl sm:text-5xl font-extrabold text-gray-800 mb-4">
                        How SaleoFast Helps
                    </p>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                        Your All-in-One Sales Solution for Media Businesses
                    </p>
                </div>

                {/* Content */}
                <div className="flex flex-wrap justify-between items-center max-w-7xl mx-auto">
                    {/* Text Section */}
                    <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
                        <p className="text-3xl font-bold text-blue-600 mb-6">
                            CRM for Media
                        </p>
                        <p className="text-lg text-gray-700 mb-8">
                            Centralize, Optimize, and Amplify Your Sales Campaigns
                        </p>

                        {/* Features */}
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                <h4 className="text-xl font-semibold text-blue-600 mb-2">
                                    Campaign Management
                                </h4>
                                <p className="text-gray-600">
                                    Plan, track, and execute campaigns with ease.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                <h4 className="text-xl font-semibold text-blue-600 mb-2">
                                    Site Inventory Management
                                </h4>
                                <p className="text-gray-600">
                                    Gain real-time insights into media site availability and maximize inventory usage.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                <h4 className="text-xl font-semibold text-blue-600 mb-2">
                                    Cost Sheet Management
                                </h4>
                                <p className="text-gray-600">
                                    Simplify cost calculation and improve transparency across teams.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                <h4 className="text-xl font-semibold text-blue-600 mb-2">
                                    Invoicing & Billing
                                </h4>
                                <p className="text-gray-600">
                                    Streamline financial operations with automated, error-free billing processes.
                                </p>
                            </div>
                        </div>

                        {/* Mobile App Section */}
                        <div className="mt-24 mr-12">
                            <img
                                src="https://saleofast.com/wp-content/uploads/2024/06/FSA.png"
                                alt="Mobile App for Media"
                                className="w-full rounded-lg shadow-md mb-8"
                            />
                            <p className="text-lg text-gray-700">
                                <strong>Mobile App for Media</strong> - Sales Solutions at Your Fingertips
                            </p>
                            <div className="text-gray-600">
                                Features:
                                <ul className="list-disc pl-6 mt-4 text-gray-600">
                                    <li>Intuitive design for easy navigation.</li>
                                    <li>Real-time data access and updates.</li>
                                    <li>Seamless integration with CRM and Field Sales App for complete operational visibility.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="w-full sm:w-1/2  mt-12">
                        <img
                            src="https://saleofast.com/wp-content/uploads/2024/11/Media-2.jpg"
                            alt="Media CRM"
                            className="rounded-lg shadow-lg object-cover  lg:ml-12 "
                            style={{ height: '350px', objectFit: 'cover' }}
                        />

                        {/* Field Sales App Section */}
                        <div className="mt-8 ml-12 lg:mt-12" >
                            <p className="text-xl font-semibold text-blue-600 mb-4">
                                Field Sales App - Empowering Field Teams to Sell Smarter, Not Harder
                            </p>
                            <div className="text-gray-600">
                                Features:
                                <ul className="list-disc pl-6 mt-4 text-gray-600">
                                    <li>Beat Planning: Strategically plan sales routes for maximum efficiency.</li>
                                    <li>Inventory Management: Manage on-the-go inventory seamlessly.</li>
                                    <li>Invoicing & Billing: Streamline financial operations with automated, error-free billing processes.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Additional Image */}
                        <img
                            src="https://saleofast.com/wp-content/uploads/2024/11/Media-1.png"
                            alt="Field Sales"
                            className="w-full rounded-lg shadow-lg mt-12 "
                        />
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 sm:px-12 bg-gray-50">
  {/* Heading */}
  <div className="text-center mb-12">
    <p className="text-3xl sm:text-5xl font-extrabold text-gray-800 mb-4">
      Benefits for Media Businesses
    </p>
    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
      Why Media Companies Love SaleoFast
    </p>
  </div>

  {/* Content */}
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {/* Benefit 1 */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h4 className="text-xl font-bold text-blue-600 mb-2">
          Enhanced Productivity
        </h4>
        <p className="text-gray-700">
          Empower your team with efficient tools that save time.
        </p>
      </div>

      {/* Benefit 2 */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h4 className="text-xl font-bold text-blue-600 mb-2">
          Data-Driven Decisions
        </h4>
        <p className="text-gray-700">
          Leverage actionable insights to optimize sales strategies.
        </p>
      </div>

      {/* Benefit 3 */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h4 className="text-xl font-bold text-blue-600 mb-2">
          Increased Revenue
        </h4>
        <p className="text-gray-700">
          Maximize inventory usage and minimize sales leakage.
        </p>
      </div>

      {/* Benefit 4 */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h4 className="text-xl font-bold text-blue-600 mb-2">
          Seamless Collaboration
        </h4>
        <p className="text-gray-700">
          Bridge the gap between office and field teams with unified tools.
        </p>
      </div>
    </div>
  </div>

  {/* Decorative Element */}
  <div className="mt-12 flex justify-center">
    <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
  </div>
</section>


<div className="flex flex-col sm:flex-row justify-between items-center p-6 mt-6 bg-[#070E79] space-y-4 sm:space-y-0 sm:space-x-4">
  <p className="text-white text-center sm:text-left text-lg sm:text-xl font-bold">
    Revolutionize Your Sales Process with SaleoFast Media
  </p>
  <button className="bg-blue-500 py-3 px-6 w-full sm:w-56 rounded-lg text-white text-center font-medium hover:bg-blue-600 transition duration-300">
    Book a Demo
  </button>
</div>


<Footer/>
        </>
    );
};

export default page;
