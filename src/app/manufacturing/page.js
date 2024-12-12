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
                        src="/manufacturing.jpg"
                        alt="retails"
                        className="w-full h-72 sm:h-72 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-transparent flex items-center justify-center">
                        <h1 className="text-3xl sm:text-5xl font-bold text-white text-center px-6 drop-shadow-lg">
                        Empowering manufacturing Success with Smarter Tools
                        </h1>
                    </div>
                </div>
                
            </section>
            <section className=" py-12 px-6 sm:px-12">
                <div className="max-w-6xl mx-auto text-center">
                    {/* Heading */}
                    <p className="text-2xl sm:text-5xl font-extrabold text-black leading-tight tracking-tight mb-8">
                        Revolutionizing Sales for <span className="text-blue-600">Manufacturing Businesses</span>
                    </p>


                    {/* Subheading */}
                    <p className="text-lg sm:text-xl text-black  max-w-4xl mx-auto">
                        From managing leads to optimizing distributor and retailer networks, SaleoFast’s powerful solutions are designed to drive efficiency and profitability for manufacturers.
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
                        See How it Works
                    </button>
                   </Link>
                </div>
            </section>


            <section class="py-10 px-6 md:px-12 lg:px-20 bg-white rounded-lg shadow-xl">
    <div class="max-w-5xl mx-auto text-center mb-10">
        <h1 class="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
            Industry Challenges
        </h1>
        <h2 class="text-xl md:text-2xl font-semibold text-gray-600 mb-6">
            Overcoming Sales and Distribution Hurdles in Manufacturing
        </h2>
        <p class="text-lg sm:text-md md:text-lg text-gray-700 leading-relaxed mb-8">
            Manufacturing businesses face a unique set of challenges in managing complex sales pipelines, distributor networks, and retailer interactions. Manual processes and disconnected systems can lead to inefficiencies, delayed decision-making, and missed revenue opportunities.
        </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* <!-- Challenge Card 1 --> */}
        <div class="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 class="text-lg font-bold text-blue-800 mb-3">
                Ineffective Lead and Opportunity Management
            </h3>
            <p class="text-gray-700">
                Leads often get lost in the pipeline, causing missed sales opportunities. The lack of proper tracking and follow-ups hampers efficient lead conversion.
            </p>
        </div>

        {/* <!-- Challenge Card 2 --> */}
        <div class="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 class="text-lg font-bold text-blue-800 mb-3">
                Lack of Real-Time Visibility
            </h3>
            <p class="text-gray-700">
                Without real-time data on distributor and retailer operations, manufacturers cannot make informed decisions, leading to missed opportunities and inefficiencies.
            </p>
        </div>

        {/* <!-- Challenge Card 3 --> */}
        <div class="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 class="text-lg font-bold text-blue-800 mb-3">
                Inefficient Inventory and Order Management
            </h3>
            <p class="text-gray-700">
                Poor inventory tracking and disorganized order management create delays in fulfilling customer demands and result in lost revenue.
            </p>
        </div>

        {/* <!-- Challenge Card 4 --> */}
        <div class="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 class="text-lg font-bold text-blue-800 mb-3">
                Difficulty Tracking Sales Performance
            </h3>
            <p class="text-gray-700">
                Without proper tools for tracking performance, manufacturers struggle to assess sales progress and identify areas for improvement.
            </p>
        </div>
    </div>
</section>



            {/* How SaleoFast Helps ... */}
            <section className="flex flex-col md:flex-row items-center bg-gray-50 py-6 px-6 md:px-12 lg:px-20 rounded-lg shadow-lg gap-8 ml-6">
                <div className="md:w-1/2">
                    <p className="text-lg md:text-4xl font-semibold text-gray-950 mb-4">
                        How SaleoFast Helps
                    </p>
                    <p className="text-base md:text-lg text-gray-700 mb-6">
                        Integrated Solutions Tailored for Manufacturing Success
                    </p>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                        CRM for Manufacturing
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Empowering Manufacturers with Smarter Lead-to-Order Management
                    </p>
                    <h4 className="text-lg font-medium text-gray-800 mb-4">Features:</h4>
                    <ul className="list-disc  text-gray-700 space-y-2 ">
                        <li>Lead Management: Capture, track, and nurture leads effortlessly.</li>
                        <li>Opportunity Management: Stay on top of potential deals and convert opportunities into wins.</li>
                        <li>Account Management: Centralize customer and distributor information for streamlined collaboration.</li>
                        <li>Task/Event Management: Improve productivity by planning and tracking tasks effectively.</li>
                        <li>Target vs Achievement: Set clear sales targets and monitor achievements in real time.</li>
                    </ul>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src="https://saleofast.com/wp-content/uploads/2024/06/crm-reasons.jpg"
                        alt="CRM Reasons"
                        className="w-full max-w-md rounded-lg shadow-md" style={{ width: '100%', height: '300px' }}
                    />
                </div>
            </section>

            <section className="flex flex-col md:flex-row items-center bg-gray-50 py-6 px-6 md:px-12 lg:px-20 rounded-lg shadow-lg gap-8 ml-6">
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src="https://saleofast.com/wp-content/uploads/2024/11/DMS.jpg"
                        alt="CRM Reasons"
                        className="w-full max-w-md rounded-lg shadow-md" style={{ width: '100%', height: '300px' }}
                    />
                </div>
                <div className="md:w-1/2">
                    <p className="text-lg md:text-4xl font-semibold text-gray-950 mb-4">
                        How SaleoFast Helps
                    </p>
                    <p className="text-base md:text-lg text-gray-700 mb-6">
                        Integrated Solutions Tailored for Manufacturing Success
                    </p>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">

                        Distributor Management System (DMS)
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Streamline Distributor Operations for Maximum Efficiency
                    </p>
                    <h4 className="text-lg font-medium text-gray-800 mb-4">Features:</h4>
                    <ul className="list-disc  text-gray-700 space-y-2 ">
                        <li>Distributor Management: Manage distributor relationships and activities seamlessly.</li>
                        <li>Order Management:  Simplify order processing with automated workflows.</li>
                        <li>Account Return Management:  Optimize return processes for better distributor satisfaction.</li>
                        <li>Discount/Scheme Management: Implement and track customized discount and incentive schemes.</li>

                    </ul>
                </div>

            </section>

            <section className="flex flex-col md:flex-row items-center bg-gray-50 py-2 px-6 md:px-12 lg:px-20 rounded-lg shadow-lg gap-8 ml-6">
                <div className="md:w-1/2">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                        Field Sales App
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Sales on the Go for Field Teams
                    </p>
                    <h4 className="text-lg font-medium text-gray-800 mb-4">Features:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Beat Planning: Plan and optimize sales routes for efficiency.</li>
                        <li>Inventory Management: Ensure accurate stock tracking for better order fulfillment.</li>
                        <li>Order Management: Simplify order capture and processing for field teams.</li>
                        <li>Product Management: Track sales goals and progress on the move.</li>
                        <li>Collections: Streamline collections and reduce outstanding dues.</li>
                    </ul>
                </div>
                <div className="md:w-1/2 flex flex-col items-center lg:mt-16">
                    <img
                        src="https://saleofast.com/wp-content/uploads/2024/06/FSA.png"
                        alt="Field Sales App"
                        className="w-full max-w-md rounded-lg shadow-md mb-6"
                        style={{ height: '300px', objectFit: 'cover' }}
                    />
                    <div className="text-center">
                        <p className="text-lg font-semibold text-gray-800 mb-2">
                            Retailer App
                        </p>
                        <p className="text-gray-950 text-xl mb-4">
                            Smart Tools for Smarter Retailer Interactions
                        </p>
                        <p className="font-medium text-2xl text-start text-gray-950 mb-2 ">Features:</p>
                        <ul className="list-disc text-start text-gray-700 space-y-2">
                            <li>Inventory Management: Track inventory levels and ensure product availability.</li>
                            <li>Order Management: Enable easy and accurate order placement for retailers.</li>
                            <li>Product Management: Keep product information up-to-date and accessible.</li>
                            <li>Target vs Achievement: Help retailers track sales performance effectively.</li>
                            <li>Collections: Simplify payment processes for faster collections.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="flex flex-col md:flex-row items-center bg-gray-50 py-6 px-6 md:px-12 lg:px-20 rounded-lg shadow-lg gap-8 ml-6">
                <div className="md:w-1/2">

                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                        Channel Partner Management
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Build Stronger Partnerships with Seamless Channel Management
                    </p>
                    <h4 className="text-lg font-medium text-gray-800 mb-4">Features:</h4>
                    <ul className="list-disc  text-gray-700 space-y-2 ">
                        <li>Lead Management:  Empower channel partners to drive more leads.</li>
                        <li>Bonus Management:  Manage and track partner bonuses with transparency and accuracy.</li>

                    </ul>
                </div>
                <div className="md:w-1/2 flex justify-center mt-12">
                    <img
                        src="https://saleofast.com/wp-content/uploads/2024/11/Media-Hero.png"
                        alt="CRM Reasons"
                        className="w-full max-w-md rounded-lg shadow-md" style={{ width: '100%', height: '300px' }}
                    />
                </div>
            </section>


            <section className="flex flex-col md:flex-row items-center bg-gray-50 py-6 px-6 md:px-12 lg:px-20 rounded-lg shadow-lg gap-8 ml-6">
                <div className="md:w-1/2 flex justify-center mt-12">
                    <img
                        src="https://saleofast.com/wp-content/uploads/2024/11/Media-1.png"
                        alt="CRM Reasons"
                        className="w-full max-w-md rounded-lg shadow-md" style={{ width: '100%', height: '300px' }}
                    />
                </div>
                <div className="md:w-1/2">

                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                        Mobile App for Media
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Sales Solutions at Your Fingertips
                    </p>
                    <h4 className="text-lg font-medium text-gray-800 mb-4">Features:</h4>
                    <ul className="list-disc  text-gray-700 space-y-2 ">
                        <li>User-friendly interface for on-the-go sales management.</li>
                        <li>Real-time updates and data visibility for smarter decision-making.</li>
                        <li>Seamless integration with CRM, DMS, and other systems for unified operations.</li>

                    </ul>
                </div>

            </section>


            <div className="lg:p-6  bg-gray-50 rounded-lg shadow-lg mt-6">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
                    Benefits for Manufacturing Businesses
                </h2>
                <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
                    Why Manufacturers Choose SaleoFast
                </h3>
                <p className="text-gray-600 mb-8 text-center leading-relaxed">
                    Our solutions deliver real, measurable results:
                </p>
                <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start space-x-3">
                        <svg className="w-6 h-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Enhanced Efficiency: Automate and streamline key processes to save time.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                        <svg className="w-6 h-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Improved Visibility: Gain real-time insights across sales and distribution channels.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                        <svg className="w-6 h-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Stronger Relationships: Build and nurture lasting connections with distributors, retailers, and partners.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                        <svg className="w-6 h-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Higher Revenue: Optimize sales performance and meet targets consistently.</span>
                    </li>
                </ul>
            </div>

            <div className="bg-blue-600 text-white p-12 w-full flex justify-end">

              <Link href="contactus">
              <button className="bg-black p-4 rounded-md">Contact us</button>
              </Link>
            </div>


            <Footer />
        </>
    );
};

export default page;
