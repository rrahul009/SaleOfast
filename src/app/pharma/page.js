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
                    <p className="text-2xl sm:text-5xl font-extrabold text-black leading-tight tracking-tight mb-8">
                        Revolutionizing Pharma Sales with SaleoFast
                    </p>


                    {/* Subheading */}
                    <p className="text-lg sm:text-md text-black  max-w-4xl mx-auto">
                        Empowering pharmaceutical businesses to streamline operations, optimize distribution, and enhance customer engagement with our advanced sales solutions.
                    </p>
                </div>

                {/* Decorative Elements */}
                {/* <div className="mt-12 flex justify-center">
                    <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
                </div> */}

                {/* Call-to-Action */}
                <div className="mt-12 text-center">
                <Link href="/contactus">
                <button className="px-8 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-md transition-all duration-300">
                        Explore Pharma Solutions
                    </button>
                </Link>
                </div>
            </section>


            <section className="flex flex-col md:flex-row items-center gap-4 bg-gray-50 py-12 px-6 md:px-12 lg:px-20 rounded-lg shadow-lg">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <p className="text-4xl text-gray-950 font-extrabold mb-4">
                        Driving Pharma Excellence
                    </p>
                    <p className="text-3xl text-gray-950 font-semibold mb-6">
                        Seamless Sales Solutions for the Pharma Industry
                    </p>
                    <div className="text-gray-700 ">
                        <p className="mb-6">
                            Driving excellence in the pharmaceutical industry through sales automation involves leveraging technology to streamline processes, improve efficiency, and enhance customer engagement.
                        </p>
                        <p className="mb-6">
                            From managing leads to ensuring timely product delivery, SaleoFast is designed to meet the unique demands of the pharma industry. With tools tailored for distributors, retailers, and field sales teams, we ensure efficiency, compliance, and growth at every step.
                        </p>
                        <p>
                            By implementing SaleoFast solutions, pharmaceutical companies can achieve greater scalability, maintain a competitive edge, and deliver better value to their healthcare customers.
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <img
                        src="https://saleofast.com/wp-content/uploads/2024/11/Pharma.jpeg"
                        alt="Pharma Excellence"
                        className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                </div>
            </section>


            <section className="py-12 px-6 sm:px-12 bg-gray-50">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
                        Solutions Designed for Pharma
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600">
                        Integrated Solutions Tailored for Pharma Industry
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {/* CRM for Real Estate */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <img
                            src="https://saleofast.com/wp-content/uploads/2024/11/CRM-250.jpg"
                            alt="CRM for Real Estate"
                            className="w-full h-64 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-bold text-blue-600 mb-2">
                            CRM for Pharma
                        </h3>
                        <p>Precision in Sales, Relationships in Focus</p>
                        <p className="text-gray-700 mb-4">
                            Empower your pharmaceutical sales force with tools to manage leads, track opportunities, and build strong client relationships with healthcare professionals and organizations.
                        </p>
                        <p>Benefits:</p>
                        <ul className="list-disc space-y-2 text-gray-700">
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
                            src="https://saleofast.com/wp-content/uploads/2024/11/DMS-250.jpg"
                            alt="Distributor Management System"
                            className="w-full h-64 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-bold text-blue-600 mb-2">
                            Distributor Management System (DMS)
                        </h3>
                        <p className="text-gray-700 mb-4">
                            Seamless Coordination Across Real Estate Supply Chains. Enhance collaboration with brokers and distributors, ensuring smooth property transactions and promotional efforts.
                        </p>
                        <p>Benefits:</p>
                        <ul className="list-disc   space-y-2 text-gray-700">
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

                    {/*  Field Sales App (FSA) */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <img
                            src="https://saleofast.com/wp-content/uploads/2024/11/SFA-250-1.png"
                            alt="Channel Partner Management"
                            className="w-full h-64 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-bold text-blue-600 mb-2">
                            Field Sales App (FSA)
                        </h3>
                        <p className="text-gray-700 mb-4">
                            Empowering Pharma Sales Reps on the Go
                        </p>
                        <p>Equip your field sales teams with tools to optimize territory coverage, manage inventory, and track sales targets.</p>
                        <p>Benefits:</p>
                        <ul className="list-disc   space-y-2 text-gray-700">
                            <li>
                                <strong>Beat Planning:</strong> Ensure effective doctor visit schedules and coverage.
                            </li>
                            <li>
                                <strong>Inventory Management:</strong> Track samples, promotional materials, and product availability
                            </li>
                            <li>
                                <strong>Order Management:</strong> Record and track prescription orders seamlessly.
                            </li>
                            <li>
                                <strong>Target vs Achievement:</strong>  Motivate reps with real-time performance tracking.
                            </li>
                            <li>
                                <strong>Inventory Management:</strong> Track samples, promotional materials, and product availability
                            </li>
                            <li>
                                <strong>Collections:</strong> Simplify payment collections and account reconciliations.
                            </li>
                        </ul>
                    </div>

                    {/*  Retailer App */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <img
                            src="https://saleofast.com/wp-content/uploads/2024/11/Retail-250.jpg"
                            alt="Mobile App"
                            className="w-full h-64 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-bold text-blue-600 mb-2">
                            Retailer App
                        </h3>
                        <p>Pharma at the Fingertips of Retailers</p>
                        <p className="text-gray-700 mb-4">
                            Empower pharmacies and healthcare retailers with tools to manage inventory, place orders, and track performance.
                        </p>
                        <p>Benefits:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>
                                <strong>Inventory Management:</strong> Monitor stock levels and reordering thresholds.
                            </li>
                            <li>
                                <strong> Order Management:</strong> Simplify order placements for quick replenishment.
                            </li>
                            <li>
                                <strong>Product Management: :</strong>Provide detailed drug and product catalogs.
                            </li>
                            <li>
                                <strong>Target vs Achievement:</strong> Help retailers monitor their performance.
                            </li>
                            <li>
                                <strong>Collections:</strong> Enable seamless payment tracking and settlement.
                            </li>

                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <img
                            src="https://saleofast.com/wp-content/uploads/2024/11/Channel-250-1.png"
                            alt="Mobile App"
                            className="w-full h-64 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-bold text-blue-600 mb-2">
                            Channel Partner Management
                        </h3>
                        <p>Enhancing Relationships with Pharmacies and Distributors</p>
                        <p className="text-gray-700 mb-4">
                            Engage and incentivize your channel partners with streamlined management tools.
                        </p>
                        Benefits:
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>
                                <strong>Lead Management:</strong> Enable channel partners to generate new leads.
                            </li>
                            <li>
                                <strong> Bonus Management :</strong> Reward partners effectively with automated bonus tracking.
                            </li>


                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <img
                            src="https://saleofast.com/wp-content/uploads/2024/11/Mobile-250-1.png"
                            alt="Mobile App"
                            className="w-full h-64 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-bold text-blue-600 mb-2">
                            Mobile App
                        </h3>
                        <p>Pharma Sales on the Go</p>
                        <p className="text-gray-700 mb-4">
                            Bring all SaleoFast solutions to your smartphone, ensuring mobility and efficiency for pharma operations.
                        </p>
                        <p>Benefits</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>
                                Access all tools on a unified platform.
                            </li>
                            <li>
                                Real-time data insights for better decision-making.
                            </li>
                            <li>
                                <strong>Product Management: :</strong>Provide detailed drug and product catalogs.
                            </li>
                            <li>
                                Enable seamless communication across teams.
                            </li>


                        </ul>
                    </div>
                </div>
            </section>
            

            <section className="p-12   rounded-lg shadow-lg">
    <div className="lg:ml-8 mb-8">
        <h2 className="text-center text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Why Pharma Chooses SaleOFast
        </h2>
        <p className="text-start text-xl font-semibold text-gray-600">
            From Precision to Performance, We’ve Got You Covered
        </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
            <img 
                src="https://www.shutterstock.com/image-vector/compliance-vector-icon-isolated-on-600nw-2080715119.jpg" 
                alt="Compliance Ready" 
                className="w-20 h-20 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Compliance Ready</h3>
            <p className="text-gray-600">
                Ensure adherence to pharma regulations with our tools.
            </p>
        </div>
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
            <img 
                src="https://thumbs.dreamstime.com/b/seamless-integration-round-ribbon-isolated-label-sign-sticker-193013805.jpg" 
                alt="Seamless Integration" 
                className="w-24 h-20 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Seamless Integration</h3>
            <p className="text-gray-600">
                Connect seamlessly with existing ERP systems and processes.
            </p>
        </div>
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
            <img 
                src="https://www.insightdata.co.uk/wp-content/uploads/2017/03/live-data.png" 
                alt="Real-Time Insights" 
                className="w-20 h-20 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-Time Insights</h3>
            <p className="text-gray-600">
                Leverage analytics for informed decision-making.
            </p>
        </div>
    </div>
</section>



<div className="flex flex-col sm:flex-row justify-between items-center p-6 mt-6 bg-[#070E79] space-y-4 sm:space-y-0 sm:space-x-4">
        <p className="text-white text-center sm:text-left text-lg sm:text-xl font-bold">
          Revolutionize Your Sales Process with SaleoFast CRM
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
