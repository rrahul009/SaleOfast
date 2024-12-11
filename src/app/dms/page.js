'use client'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useState } from 'react';


const Page = () => {

    const [expandedIndex, setExpandedIndex] = useState(null)
    function toggleDescription(index) {
        setExpandedIndex(expandedIndex === index ? null : index)

    }

    const features = [
        {
            title: "Distributor Management",
            description: "Distributor Onboarding and Profile Management is important to create and manage profiles for each distributor, including essential details such as contact information, location, credit terms, agreements, and product lines they handle. Centralized distributor profiles allow manufacturers to easily access, update, and manage distributor information, helping maintain accurate records and effective communication channels. This also help distributors to comply with regulatory requirements and internal company standards. It provide analytics on distributor performance, helping manufacturers assess which distributors are meeting expectations and which may need support.",
            logo: "/distributermng.png"
        },
        {
            title: "Order Management",
            description:
                "Order management in a DMS app is essential for enabling distributors to place, track, and manage orders directly from the app. This functionality streamlines the entire ordering process, ensuring timely delivery, accurate order tracking, and enhanced customer satisfaction. Distributors can place orders instantly while looking at the stock, reducing the delay associated with sales rep visit and ensuring fast processing. The app can automatically apply discounts, volume-based pricing, or special pricing for loyal customers, ensuring accurate pricing without manual adjustments.",
            logo: "/ordermng.png"
        },
        {
            title: "Payment Management",
            description:
                "Payment Management feature in DMS app enable distributors to manage financial transactions, from making payments at the point of sale to tracking outstanding balances and overdue payments. This functionality streamlines the payment process, ensuring timely collections, reducing errors, and improving cash flow. Distributors can make payments directly through the app as and when they want, reducing the need for follow-ups and ensuring immediate revenue capture. Once an order is confirmed, the app generates a digital invoice, which is visible to customer as well.",
            logo: "paymentcollection.png"
        },
        {
            title: "Product Management",
            description:
                "Product management in DMS app is crucial for equipping retailers with real-time product information, streamlined inventory access, and the ability to make orders efficiently. By including robust product management features, DMS app empowers distributors to close deals more effectively, ensuring they have accurate, up-to-date product details and availability. Distributors have access to a comprehensive catalog that includes product descriptions, images, specifications, pricing, and related documents.",
            logo: "productmng.png"
        },
        {
            title: "Scheme Management",
            description:
                "Scheme management in a DMS app is a crucial feature that helps both brands and distributors manage promotional offers, discounts, and incentives effectively. It enables distributors to track, and manage various sales schemes to boost product sales, attract customers, and ensure that the promotions align with the brand’s goals. Distributors have access to all ongoing and upcoming schemes available for their stores, making it easy to keep track of what promotions they can offer to customers.",
            logo: "schmamng.png"
        },
        {
            title: "Claim & Return Management",
            description:
                "Claim and Return Management in a Distributor Management System (DMS) is designed to streamline the processes for handling product returns, managing claims for defective or damaged goods, and providing an organized way to resolve distributor issues. This feature is essential for maintaining smooth operations, ensuring customer satisfaction, and protecting brand reputation by managing any discrepancies or issues that arise within the distribution chain.",
            logo: '/claimreturnmng.png'
        },


    ];


    const benefits = [
        "Enhance Customer Relationships and Retention",
        "Optimize Sales",
        "Streamline Operations and Boost Productivity",
        "Enable Data-Driven Decision Making",
        "Improve Collaboration Across Teams",
    ];
    const industry = [
        {
            title: 'Media',
            image: "https://saleofast.com/wp-content/uploads/2024/08/Media_11.jpg"
        },
        {
            title: 'Real Estate',
            image: "https://saleofast.com/wp-content/uploads/2024/08/Real-Estate_400-1.jpg"
        },
        {
            title: 'Retails',
            image: "https://saleofast.com/wp-content/uploads/2024/08/Retail-Industry_11.jpg"
        },
        {
            title: 'Manufacturing',
            image: "https://saleofast.com/wp-content/uploads/2024/08/manufacturing_11.jpg"
        },
        {
            title: 'Pharma',
            image: "https://saleofast.com/wp-content/uploads/2024/08/Pharma_400-1.jpg"
        },

    ]

    return (
        <>
            <Navbar />
            <section className="bg-white">
                {/* <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12">
         
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">
              Welcome to Saleofast CRM: Your Path to Business Excellence
            </h1>
            <p className="text-lg text-gray-700">
              Transform your business with a CRM tailored for success.
            </p>
          </div>

  
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Transform the Way You Manage Relationships
            </h2>
            <p className="text-gray-700 leading-relaxed">
              In today’s competitive business environment, customer relationships are more important than ever. Saleofast CRM is designed to help you manage your customer interactions, streamline your processes, and drive business growth with ease. Using CRM to transform a business creates a competitive edge by enhancing customer engagement, improving internal efficiency, and enabling data-driven strategies that drive growth. By aligning CRM functionality with specific goals, companies can unlock new levels of productivity and foster a culture that puts the customer first.
            </p>
            <p className="mt-6 text-gray-700 font-bold">
              Here’s how Saleofast can empower a business transformation:
            </p>
          </div>

          
          <section className="  rounded-lg mt-5">
            <div className="max-w-4xl mx-auto px-4 lg:px-8">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full font-bold">
                        {index + 1}
                      </span>
                      <span className="text-lg font-medium text-gray-700 flex-1">
                        {benefit}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div> */}
            </section>

            <section className=" py-2">
                <div className=" px-4 lg:px-10 ">
                    <div className="bg-blue-950 p-2 rounded-sm ">
                        <h2 className="text-3xl font-bold text-center text-white ">DMS</h2>
                    </div>
                    <section className="p-6 lg:p-12 rounded-lg ">
                        <h2 className="sm:text-sm lg:text-2xl font-semibold text-gray-800 text-center mb-6">
                            Here’s how Saleofast can empower your partners
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Simplified Order Management",
                                    icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
                                },
                                {
                                    title: "Inventory Control and Management",
                                    icon: "https://cdn-icons-png.flaticon.com/512/2271/2271063.png",
                                },
                                {
                                    title: "Sales and Performance Tracking",
                                    icon: "https://cdn-icons-png.flaticon.com/512/991/991952.png",
                                },
                                {
                                    title: "Promotions and Discounts",
                                    icon: "https://cdn-icons-png.flaticon.com/512/7176/7176494.png",
                                },
                                {
                                    title: "Payment and Billing Management",
                                    icon: "https://cdn-icons-png.flaticon.com/512/2021/2021646.png",
                                },
                                {
                                    title: "Product Information and Catalog Management",
                                    icon: "https://cdn-icons-png.flaticon.com/512/3602/3602123.png",
                                },
                                {
                                    title: "Improved Distributor Engagement and Communication",
                                    icon: "https://cdn-icons-png.flaticon.com/512/4712/4712060.png",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg"
                                >
                                    <img
                                        src={item.icon}
                                        alt={item.title}
                                        className="w-8 h-8 mb-4"
                                    />
                                    <p className="text-lg font-medium text-gray-800">{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </section>


                    <h2 className="text-2xl lg:text-3xl font-bold text-center text-blue-900 mb-6 mt-4">
                        Feature Packed Distributor Management App
                    </h2>
                    {/* <p>Empower Your Field Sales Team with SaleoFast</p> */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white p-6  hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="flex justify-center mb-4">
                                    <img
                                        src={feature.logo}
                                        alt="Feature Logo"
                                        className="h-24 w-24 object-contain" />
                                </div>
                                <h3 className="text-2xl text-center font-semibold text-gray-800 mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-left lg:ml-8">
                                    {expandedIndex === index ? feature.description : `${feature.description.substring(0, 134)}    ...`}
                                    <button className=" text-blue-500" onClick={() => toggleDescription(index)}>{expandedIndex === index ? "Read Less" : " Read More"}</button>
                                </p>

                            </div>
                        ))}
                    </div>
                </div>
            </section>

         {/* Get in Touch */}
<div className="flex flex-col sm:flex-row justify-between items-center p-6 mt-6 bg-[#070E79] rounded-lg">
    <p className="text-white text-xl font-bold text-center sm:text-left mb-4 sm:mb-0">
        Revolutionize Your Sales Process with SaleoFast FSA
    </p>
   <Link href="contactus">
   <button className="bg-blue-500 p-4 w-full sm:w-56 rounded-lg text-white">
        Book a Demo
    </button></Link>
</div>



            {/* Why Choose Saleofast CRM? */}
            <h2 className="text-2xl lg:text-3xl font-semibold text-center text-gray-800 mt-6 ">Why Choose Saleofast Distributor Management App?</h2>
            <section className="flex flex-col sm:flex-row items-center justify-center p-2">
                {/* Text Section */}
                <div className="w-full sm:w-1/2">

                    <div >
                        <div className="bg-white p-2 ">
                            <h3 className="text-2xl font-bold text-blue-600 ">1.Order Processing:</h3>
                            <p className="text-gray-700">
                                Create and manage orders on the spot. With instant access to product information and pricing, your team can close deals faster.
                            </p>
                        </div>

                        <div className="bg-white p-2 ">
                            <h3 className="text-2xl font-bold text-blue-600 ">2.  Real-Time Reporting: </h3>
                            <p className="text-gray-700 ">
                                Get instant insights into your sales activities with real-time reporting. Monitor progress and make informed decisions on the go.
                            </p>

                        </div>

                        <div className="bg-white p-2 ">
                            <h3 className="text-2xl font-bold text-blue-600 ">3.Scheme Discount: </h3>
                            <p className="text-gray-700 ">
                                Distributors can view all the schemes or discounts company is offering, they can take advantage of those accordingly.
                            </p>

                        </div>

                        <div className="bg-white p-2 ">
                            <h3 className="text-2xl font-bold text-blue-600 ">4.Payment Collection: </h3>
                            <p className="text-gray-700">
                                Distributors can make payments on spot and capture the evidence on the spot for easy tracking.
                            </p>
                        </div>

                        <div className="bg-white p-2 ">
                            <h3 className="text-2xl font-bold text-blue-600 ">4.Mobile Accessibility:</h3>
                            <p className="text-gray-700">
                                Stay connected on the go with Saleofast DMS mobile app. Access all information from anywhere, anytime.


                            </p>
                        </div>

                        <div className="bg-white p-2 ">
                            <h3 className="text-2xl font-bold text-blue-600 ">5. Improved Communication:</h3>
                            <p className="text-gray-700">
                                Facilitate easy communication between the company and distributors, ensuring quick resolution of issues and timely updates on promotions and products.
                            </p>
                        </div>
                        <div className="bg-white p-2 ">
                            <h3 className="text-2xl font-bold text-blue-600 ">6.Stronger Partnerships:</h3>
                            <p className="text-gray-700">
                                By providing a platform that supports distributors' success, the app strengthens the distributor-company relationship, fostering long-term collaboration and growth.


                            </p>
                        </div>
                        <div className="bg-white p-2 ">
                            <h3 className="text-2xl font-bold text-blue-600 ">7. Improved Sales and Target Achievement:</h3>
                            <p className="text-gray-700">
                                DMS apps allow companies to set and track sales targets for distributors, monitor performance, and compare it to established benchmarks.
                            </p>
                        </div>
                        <div className="bg-white p-2 ">
                            <h3 className="text-2xl font-bold text-blue-600 ">7.Efficient Returns and Claims Management:</h3>
                            <p className="text-gray-700">
                                Distributors can submit claims and returns digitally, and the app manages these requests through approval workflows and quality inspections.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full sm:w-1/3  sm:mt-0 sm:ml-8">
                    <img src="https://saleofast.com/wp-content/uploads/2024/11/Retailer-App-Screens.png" alt="Saleofast CRM" className="w-full rounded-lg shadow-lg" style={{ objectFit: 'cover' }} />
                </div>
            </section>





            {/* Tailored Solutions for Every Industry */}
            <section className="lg:p-8 mt-4">
                <p className="text-start font-bold text-2xl mb-1">Tailored Solutions for Every Industry</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {industry.map((item, index) => (
                        <div key={index} className="bg-white p-6 shadow-lg rounded-lg text-center">
                            <img src={item.image} alt={item.title} className="w-full h-64 object-contain rounded-lg mb-6" />
                            <p className="text-lg font-semibold text-gray-800  rounded-sm">{item.title}</p>
                        </div>
                    ))}
                </div>
            </section>




            <Footer />
        </>
    );
};

export default Page;
