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
                        src="/retailapp.jpg"
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
            <section className="  px-6 sm:px-12">
                <div className="max-w-6xl mx-auto text-center">
                    {/* Heading */}
                    <p className="text-2xl sm:text-5xl font-extrabold text-black leading-tight tracking-tight mb-12 mt-6">
                        Empower <span className="text-blue-600 font-bold">Retail</span> Growth with SaleoFast
                    </p>


                    {/* Subheading */}
                    <p className="text-lg sm:text-xl text-black  max-w-4xl mx-auto">
                        From smarter CRM tools to   <span className="text-blue-600 font-bold">retail-specific apps</span>, SaleoFast delivers solutions that redefine retail efficiency, sales, and customer engagement.
                    </p>
                </div>

                {/* Decorative Elements */}
                {/* <div className="mt-12 flex justify-center">
                    <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
                </div> */}

                {/* Call-to-Action */}
                <div className="mt-12 text-center">
                  <Link href="contactus">
                  <button className="px-8 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-md transition-all duration-300">
                        Transform Your Retail Operations Today
                    </button></Link>
                </div>
            </section>


            <section className="py-6 px-6 sm:px-12 ">
                {/* Heading */}
                <div className="text-center mb-12 mt-8">
                    <p className="text-3xl sm:text-5xl font-extrabold text-gray-800 mb-4">
                        Retail Transformation Starts Here
                    </p>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                        Tailored Solutions for Retail Success
                    </p>
                </div>

                {/* Content */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
                    {/* Text Section */}
                    <div className="space-y-6">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Retail is a fast-paced, customer-driven industry that demands quick responses, accurate insights, and streamlined operations. SaleoFast provides innovative tools to help retailers overcome common challenges and deliver exceptional results.
                        </p>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h3 className="text-xl font-bold text-blue-600 mb-2">Key Retail Challenges We Solve:</h3>
                            <ul className="list-disc pl-6 space-y-3 text-gray-700">
                                <li>Managing leads, opportunities, and distributor relationships effectively.</li>
                                <li>Ensuring accurate inventory and order management across channels.</li>
                                <li>Boosting productivity and tracking target achievements for field teams.</li>
                                <li>Enabling retailers to meet customer demands with ease.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center">
                        <img
                            src="retail.jpg"
                            alt="Retail Transformation"
                            className="rounded-lg shadow-lg object-cover"
                            style={{ height: '300px' }}
                        />
                    </div>
                </div>

                {/* Decorative Element */}
                <div className="mt-12 flex justify-center">
                    <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
                </div>
            </section>



            <section className="py-12 px-6 sm:px-12 bg-gray-50">
                {/* Heading */}
                <div className="text-center mb-12">
                    <p className="text-3xl sm:text-5xl font-extrabold text-gray-800 mb-4">
                        Solutions Designed for Retailers
                    </p>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                        Integrated Solutions Tailored for Retail Success
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {/* CRM for Retail */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <img
                            src="/crmretails.jpg"
                            alt="CRM for Retail"
                            className="w-full h-64 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-bold text-blue-600 mb-2">CRM for Retail</h3>
                        <p className="text-gray-700 mb-4">
                            Centralized Customer Insights, Personalized Retail Engagement. Streamline retail operations with tools that help you manage leads, track opportunities, and monitor sales performance.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                            <li><b>Lead Management:</b> Identify and prioritize high-potential leads.</li>
                            <li><b>Opportunity Management:</b> Convert prospects into sales with better tracking.</li>
                            <li><b>Task/Event Management:</b> Plan and complete retail operations efficiently.</li>
                            <li><b>Target vs Achievement:</b> Measure and meet sales goals with actionable data.</li>
                        </ul>
                    </div>

                    {/* Distributor Management System */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <img
                            src="retailsdms.jpg"
                            alt="Distributor Management System"
                            className="w-full h-64 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-bold text-blue-600 mb-2">
                            Distributor Management System (DMS)
                        </h3>
                        <p className="text-gray-700 mb-4">
                            Optimize Your Retail Supply Chain with Seamless Distributor Management. Manage distributors with transparency and improve supply chain efficiency.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                            <li><b>Distributor Management:</b> Build strong relationships with your distributor network.</li>
                            <li><b>Order Management:</b> Automate and simplify the order lifecycle.</li>
                            <li><b>Account Return Management:</b> Resolve returns with efficiency.</li>
                            <li><b>Discount/Scheme Management:</b> Offer customized discounts and track promotional effectiveness.</li>
                        </ul>
                    </div>

                    {/* Field Sales App */}
                    <div className="bg-white rounded-lg shadow-lg p-6 ">
                        <img
                            src="retailsfieldsapp.jpg"
                            alt="Field Sales App"
                            className="w-full h-64 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-bold text-blue-600 mb-2">
                            Field Sales App (FSA)
                        </h3>
                        <p className="text-gray-700 mb-4">
                            Empower Field Teams to Deliver Better Retail Experiences. Give your field sales teams the tools they need to succeed on the go.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                            <li><b>Beat Planning:</b> Optimize routes and maximize productivity.</li>
                            <li><b>Inventory Management:</b> Ensure stock accuracy for retail fulfillment.</li>
                            <li><b>Order Management:</b> Capture and track retail orders in real-time.</li>
                            <li><b>Collections:</b> Simplify payment collection processes.</li>
                        </ul>
                    </div>

                    {/* Retailer App */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <img
                            src="retailerapp.jpg"
                            alt="Retailer App"
                            className="w-full h-64 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-bold text-blue-600 mb-2">Retailer App</h3>
                        <p className="text-gray-700 mb-4">
                            Put Control in Retailers' Hands with Smart Tools. Empower your retailers to manage their operations independently.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                            <li><b>Inventory Management:</b> Real-time updates for better stock control.</li>
                            <li><b>Order Management:</b> Simplify order placement and tracking.</li>
                            <li><b>Product Management:</b> Provide instant access to product catalogs and pricing.</li>
                            <li><b>Collections:</b> Enable faster, hassle-free payments.</li>
                        </ul>
                    </div>

                    {/* Channel Partner Management */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <img
                            src="channelpartnerapp.jpg"
                            alt="Channel Partner Management"
                            className="w-full h-64 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-bold text-blue-600 mb-2">
                            Channel Partner Management
                        </h3>
                        <p className="text-gray-700 mb-4">
                            Stronger Retail Partnerships, Bigger Results. Build trust and efficiency with your channel partners.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                            <li><b>Lead Management:</b> Drive collaborative sales efforts.</li>
                            <li><b>Bonus Management:</b> Reward and motivate channel partners effectively.</li>
                        </ul>
                    </div>

                    {/* Mobile App */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <img
                            src="retailmobileapp.jpg"
                            alt="Mobile App"
                            className="w-full h-64 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-bold text-blue-600 mb-2">Mobile App</h3>
                        <p className="text-gray-700 mb-4">
                            Retail Solutions Anytime, Anywhere. Access SaleoFast’s powerful tools on the go.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                            <li><b>Real-time updates and data insights.</b></li>
                            <li><b>Seamless connectivity across devices.</b></li>
                            <li><b>Intuitive, user-friendly interface.</b></li>
                        </ul>
                    </div>
                </div>
            </section>





            <div className="lg:p-12 lg:ml-12">
                <p className="text-5xl font-bold text-start mb-4"> Why Choose SaleoFast for Retail?</p>
                <p className="text-start font-bold mb-4"> Designed for Retailers, Built for Results</p>

                <div>
                    <p className="mb-4">Our solutions empower retailers to:</p>

                    <ul className="leading-y-md">
                        <li className="mb-4">Deliver superior customer experiences.</li>
                        <li className="mb-4">Achieve operational efficiency across all sales channels.</li>
                        <li>Track, analyze, and optimize performance with real-time insights.</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center p-6 mt-6 bg-[#070E79] space-y-4 sm:space-y-0 sm:space-x-4">
        <p className="text-white text-center sm:text-left text-lg sm:text-xl font-bold">
          Revolutionize Your Sales Process with SaleoFast Retail
        </p>
       <Link href="contactus">
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
