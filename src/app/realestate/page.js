import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <>
            <Navbar />
            <section className="relative py-4 mt-6 px-6 sm:px-12 ">
                <div className="relative rounded-lg shadow-lg overflow-hidden">
                    <img
                        src="/realestate.jpg"
                        alt="retails"
                        className="w-full h-72 sm:h-72 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-transparent flex items-center justify-center">
                        <h1 className="text-3xl sm:text-5xl font-bold text-white text-center px-6 drop-shadow-lg">
                        Empowering Retail Success with Smarter Tools
                        </h1>
                    </div>
                </div>
                
            </section>
            <section className=" py-6 px-6 sm:px-12">
                <div className="max-w-6xl mx-auto text-center">
                    {/* Heading */}
                    <p className="text-2xl sm:text-5xl font-extrabold text-black leading-tight tracking-tight mb-4">
                        Build the Future of<span className="text-2xl sm:text-5xl font-extrabold  leading-tight tracking-tight mb-8
                         text-blue-600 ml-3 "> 
                               Real Estate</span>  with SaleoFast
                    </p>


                    {/* Subheading */}
                    <p className="text-lg sm:text-md text-black  max-w-4xl mx-auto mt-4">
                        From lead generation to project delivery, SaleoFast transforms every step of your real estate sales journey with innovative tools designed for seamless operations.
                    </p>
                </div>

                {/* Decorative Elements */}
                {/* <div className="mt-12 flex justify-center">
                    <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
                </div> */}

                {/* Call-to-Action */}
                <div className="mt-6 text-center">
                <Link href="contactus">
                <button className="px-8 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-md transition-all duration-300">
                        Explore Real Estate Solutions
                    </button>
                </Link>
                </div>
            </section>


            <section className="py-8 px-6 sm:px-12">
    {/* Heading */}
    {/* <div className="text-center mb-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
            The Key to Real Estate Excellence
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering Real Estate Businesses with Cutting-Edge Technology
        </p>
    </div> */}

    {/* Intro Text */}
    {/* <div className="max-w-4xl mx-auto text-center text-gray-700 leading-relaxed mb-12">
        <p className="text-lg sm:text-md">
            The real estate industry is dynamic and competitive, requiring efficient lead management, seamless distributor coordination, and real-time insights for decision-making. SaleoFast offers a suite of tools tailored to meet the unique needs of real estate professionals and businesses.
        </p>
    </div> */}

    {/* Challenges Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Challenge 1 */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Faster Deal Closures</h3>
            <p className="text-gray-700 text-base">
                Manage leads and opportunities effectively to close deals faster and smarter.
            </p>
        </div>

        {/* Challenge 2 */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Seamless Collaboration</h3>
            <p className="text-gray-700 text-base">
                Foster better collaboration between brokers, distributors, and developers to streamline your operations.
            </p>
        </div>

        {/* Challenge 3 */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Streamlined Operations</h3>
            <p className="text-gray-700 text-base">
                Efficiently manage inventory, orders, and collections to ensure smoother, hassle-free operations.
            </p>
        </div>

        {/* Challenge 4 */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Boosted Field Productivity</h3>
            <p className="text-gray-700 text-base">
                Equip your field teams with the tools and insights they need to achieve ambitious sales targets.
            </p>
        </div>
    </div>
</section>





            {/* Solutions Designed for Real Estate */}
            <section className="py-12 px-6 sm:px-12 bg-gray-50">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
                        Solutions Designed for Real Estate
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600">
                        Integrated Solutions Tailored for Real Estate Success
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {/* CRM for Real Estate */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <img
                            src="realestatecrm.jpg"
                            alt="CRM for Real Estate"
                            className="w-full h-64 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-bold text-blue-600 mb-2">
                            CRM for Real Estate
                        </h3>
                        <p className="text-gray-700 mb-4">
                            Turn Prospects into Homeowners with Smarter CRM Tools. Simplify real estate transactions with tools designed for lead management, tracking opportunities, and maintaining client relationships.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>
                                <strong>Lead Management:</strong> Capture and prioritize potential buyers effectively.
                            </li>
                            <li>
                                <strong>Opportunity Management:</strong> Track property inquiries and follow-ups.
                            </li>
                            <li>
                                <strong>Account Management:</strong> Organize client information for long-term relationships.
                            </li>
                            <li>
                                <strong>Task/Event Management:</strong> Plan property visits and meetings seamlessly.
                            </li>
                            <li>
                                <strong>Target vs Achievement:</strong> Monitor and achieve sales objectives with real-time insights.
                            </li>
                        </ul>
                    </div>

                    {/* Distributor Management System */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <img
                            src="realstatedms.jpg"
                            alt="Distributor Management System"
                            className="w-full h-64 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-bold text-blue-600 mb-2">
                            Distributor Management System (DMS)
                        </h3>
                        <p className="text-gray-700 mb-4">
                            Seamless Coordination Across Real Estate Supply Chains. Enhance collaboration with brokers and distributors, ensuring smooth property transactions and promotional efforts.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>
                                <strong>Distributor Management:</strong> Foster strong partnerships with distributors and agents.
                            </li>
                            <li>
                                <strong>Order Management:</strong> Streamline purchase agreements and property bookings.
                            </li>
                            <li>
                                <strong>Account Return Management:</strong> Efficiently manage cancellations or refunds.
                            </li>
                            <li>
                                <strong>Discount/Scheme Management:</strong> Offer attractive schemes to boost property sales.
                            </li>
                        </ul>
                    </div>

                    {/* Channel Partner Management */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <img
                            src="realestatechannelpartner.jpg"
                            alt="Channel Partner Management"
                            className="w-full h-64 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-bold text-blue-600 mb-2">
                            Channel Partner Management
                        </h3>
                        <p className="text-gray-700 mb-4">
                            Strengthen Partnerships, Drive Sales. Engage and reward your real estate channel partners with effective management tools.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>
                                <strong>Lead Management:</strong> Empower channel partners to generate and manage leads.
                            </li>
                            <li>
                                <strong>Bonus Management:</strong> Incentivize partners with streamlined bonus tracking.
                            </li>
                        </ul>
                    </div>

                    {/* Mobile App */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <img
                            src="retailmobileapp.jpg"
                            alt="Mobile App"
                            className="w-full h-64 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-bold text-blue-600 mb-2">
                            Mobile App
                        </h3>
                        <p className="text-gray-700 mb-4">
                            Real Estate Operations on the Go. Take SaleoFast’s real estate solutions wherever you go, ensuring efficiency and connectivity at every step.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Access all tools in one user-friendly platform.</li>
                            <li>Real-time data insights for better decision-making.</li>
                            <li>Seamless communication between teams and clients.</li>
                        </ul>
                    </div>
                </div>
            </section>




            <div className="lg:p-12 lg:ml-12 p-6">
  <p className="text-3xl lg:text-5xl font-bold text-left mb-4 text-gray-900">
    Why Choose SaleoFast for Real Estate?
  </p>
  <p className="text-lg lg:text-xl font-semibold text-left mb-6 text-gray-700">
    Designed for Real Estate Professionals, Built for Excellence
  </p>

  <div>
    <p className="text-base lg:text-lg text-gray-700 mb-6">
      SaleoFast empowers real estate businesses to:
    </p>

    <ul className="list-inside space-y-4 text-base lg:text-lg text-gray-700">
      <li className="flex items-start space-x-2">
        <svg
          className="w-6 h-6 text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4M5 12l2 2 4-4M5 20h14M5 4h14"
          />
        </svg>
        <span>Boost sales productivity and team efficiency.</span>
      </li>
      <li className="flex items-start space-x-2">
        <svg
          className="w-6 h-6 text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4M5 12l2 2 4-4M5 20h14M5 4h14"
          />
        </svg>
        <span>Deliver superior client experiences.</span>
      </li>
      <li className="flex items-start space-x-2">
        <svg
          className="w-6 h-6 text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4M5 12l2 2 4-4M5 20h14M5 4h14"
          />
        </svg>
        <span>Optimize operational workflows and track performance effectively.</span>
      </li>
    </ul>
  </div>
</div>


            <div className="flex flex-col sm:flex-row justify-between items-center p-6 mt-6 bg-[#070E79] space-y-4 sm:space-y-0 sm:space-x-4">
  <p className="text-white text-center sm:text-left text-lg sm:text-xl font-bold">
    Revolutionize Your Sales Process with SaleoFast realestate
  </p>
 <Link href="/contactus">
 <button className="bg-blue-500 py-3 px-6 w-full sm:w-56 rounded-lg text-white text-center font-medium hover:bg-blue-600 transition duration-300">
    Book a Demo
  </button>
 </Link>
</div>


            <Footer />
        </>
    );
};

export default page;
