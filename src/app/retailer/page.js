'use client'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useState } from 'react';


const Page = () => {

    const [expandedIndex, setExpandedIndex] = useState(null)
    function toggleDescription(index) {
        setExpandedIndex(expandedIndex === index ? null : index)

    }

    const features = [
        {
            title: "Order Management",
            description: "Order management in a retailer app is essential for enabling retailers to place, track, and manage orders directly from the app. This functionality streamlines the entire ordering process, ensuring timely delivery, accurate order tracking, and enhanced customer satisfaction. Retailers can place orders instantly while looking at the stock, reducing the delay associated with sales rep visit and ensuring fast processing. The app can automatically apply discounts, volume-based pricing, or special pricing for loyal customers, ensuring accurate pricing without manual adjustments.",
            logo: "/ordermng.png"
        },
        {
            title: "Payment Management",
            description:
                "Payment Management feature in retailer app enable retailers to manage financial transactions, from making payments at the point of sale to tracking outstanding balances and overdue payments. This functionality streamlines the payment process, ensuring timely collections, reducing errors, and improving cash flow. Retailers can make payments directly through the app as and when they want, reducing the need for follow-ups and ensuring immediate revenue capture. Once an order is confirmed, the app generates a digital invoice, which is visible to customer as well.",
            logo: "/paymentcollection.png"
        },
        {
            title: "Product Management ",
            description:
                "Product management in retailer app is crucial for equipping retailers with real-time product information, streamlined inventory access, and the ability to make orders efficiently. By including robust product management features, retailer app empowers retailers to close deals more effectively, ensuring they have accurate, up-to-date product details and availability. Retailers have access to a comprehensive catalog that includes product descriptions, images, specifications, pricing, and related documents.",
            logo: "/productmng.png"
        },
        {
            title: "Scheme Management",
            description:
                "Scheme management in a retailer app is a crucial feature that helps both brands and retail partners manage promotional offers, discounts, and incentives effectively. It enables retailers to track, and manage various sales schemes to boost product sales, attract customers, and ensure that the promotions align with the brand’s goals. Retailers have access to all ongoing and upcoming schemes available for their stores, making it easy to keep track of what promotions they can offer to customers.",
            logo: "/schmamng.png"
        },
        {
            title: "Achievements",
            description:
                "The Target vs Achievement feature in a retailer app is designed to help retailers track their performance against pre-set sales or business goals. This feature enables retailers to set clear objectives and monitor their progress in real-time, giving them a structured approach to evaluate how well they are performing relative to their targets. Clear targets and real-time tracking keep the retailer motivated to achieve set goals, leading to improved performance.",
            logo: "/achievement.png"
        }


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
            title: 'Manufacturing',
            image: "https://saleofast.com/wp-content/uploads/2024/08/manufacturing_11.jpg"
        },
        {
            title: 'Pharma',
            image: "https://saleofast.com/wp-content/uploads/2024/08/Pharma_400-1.jpg"
        },
        {
            title: 'Garments',
            image: "https://saleofast.com/wp-content/uploads/2024/11/Retail_400_1.jpg"
        },
        {
            title: "FMCG",
            image: "https://saleofast.com/wp-content/uploads/2024/11/FMCG_400.jpg"
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
                        <h2 className="text-3xl font-bold text-center text-white "> Retailer App</h2>
                    </div>
                    <section className="p-6 lg:ml-12">
                        <h2 className="text-md lg:text-3xl font-bold text-gray-800 text-center mt-2 lg:mb-12">
                            Here’s how we can empower your retailers
                        </h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    text: "Simplified Order Management",
                                    icon: "https://cdn-icons-png.flaticon.com/512/2204/2204346.png",
                                },
                                {
                                    text: "Inventory Control and Management",
                                    icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
                                },
                                {
                                    text: "Sales and Performance Tracking",
                                    icon: "https://cdn-icons-png.flaticon.com/512/1233/1233563.png",
                                },
                                {
                                    text: "Promotions and Discounts",
                                    icon: "https://cdn-icons-png.flaticon.com/512/3500/3500833.png",
                                },
                                {
                                    text: "Payment and Billing Management",
                                    icon: "https://cdn-icons-png.flaticon.com/512/1378/1378644.png",
                                },
                                {
                                    text: "Product Information and Catalog Management",
                                    icon: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
                                },
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start bg-white shadow-lg rounded-lg p-6 space-x-4 hover:shadow-xl transition-shadow duration-300"
                                >
                                    <img
                                        src={item.icon}
                                        alt={item.text}
                                        className="w-12 h-12 object-contain"
                                    />
                                    <p className="text-lg font-semibold text-gray-800">{item.text}</p>
                                </li>
                            ))}
                        </ul>
                    </section>


                    <h2 className="text-3xl font-bold text-center text-blue-900 mb-6 mt-12">
                        Feature Packed Retailer App
                    </h2>
                    {/* <p>Empower Your Field Sales Team with SaleoFast</p> */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white p-6  hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="flex justify-center">
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

            {/* get it touch */}
            <div className="flex flex-col sm:flex-row justify-between items-center p-6 mt-6 bg-[#070E79] space-y-4 sm:space-y-0">
                <p className="text-white text-center sm:text-left text-lg sm:text-xl font-bold">
                    Revolutionize Your Sales Process with SaleoFast Retailer App
                </p>
                <button className="bg-blue-500 py-3 px-6 w-full sm:w-auto rounded-lg text-white font-medium text-base sm:text-lg">
                    Book a Demo
                </button>
            </div>




            {/* Why Choose Saleofast CRM? */}
            <h2 className="text-3xl font-semibold text-center text-gray-800 mt-6 ">Why Choose Saleofast Retailer App?</h2>
            <section className="flex flex-col sm:flex-row items-center justify-center p-2">
                {/* Text Section */}
                <div className="w-full sm:w-1/2">

                    <div >
                        <div className="bg-white p-2 ">
                            <h3 className="text-2xl font-bold text-blue-600 ">1. Order Processing:</h3>
                            <p className="text-gray-700">
                                Create and manage orders on the spot. With instant access to product information and pricing, your team can close deals faster.
                            </p>
                        </div>

                        <div className="bg-white p-2 ">
                            <h3 className="text-2xl font-bold text-blue-600 ">2.Real-Time Reporting: </h3>
                            <p className="text-gray-700 ">
                                Get instant insights into your sales activities with real-time reporting. Monitor progress and make informed decisions on the go.
                            </p>

                        </div>

                        <div className="bg-white p-2 ">
                            <h3 className="text-2xl font-bold text-blue-600 ">3.  Scheme Discount: </h3>
                            <p className="text-gray-700 ">
                                Retailer can view all the schemes or discounts company is offering, they can take advantage of those accordingly.
                            </p>

                        </div>

                        <div className="bg-white p-2 ">
                            <h3 className="text-2xl font-bold text-blue-600 ">4.Payment Collection: </h3>
                            <p className="text-gray-700">
                                Retailer can make payments on spot and capture the evidence on the spot for easy tracking.
                            </p>
                        </div>

                        <div className="bg-white p-2 ">
                            <h3 className="text-2xl font-bold text-blue-600 ">4. Mobile Accessibility:</h3>
                            <p className="text-gray-700">
                                Stay connected on the go with Saleofast Retailer mobile app. Access all information from anywhere, anytime.
                            </p>
                        </div>

                        <div className="bg-white p-2 ">
                            <h3 className="text-2xl font-bold text-blue-600 ">5.Improved Communication: :</h3>
                            <p className="text-gray-700">
                                Facilitate easy communication between the company and retailers, ensuring quick resolution of issues and timely updates on promotions and products.
                            </p>
                        </div>
                        <div className="bg-white p-2 ">
                            <h3 className="text-2xl font-bold text-blue-600 ">6. Stronger Partnerships:</h3>
                            <p className="text-gray-700">
                                By providing a platform that supports retailers' success, the app strengthens the retailer-company relationship, fostering long-term collaboration and growth.
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {industry.map((item, index) => (
                        <div key={index} className="bg-white p-6 shadow-lg rounded-lg text-center">
                             <p className="text-lg font-semibold text-gray-800  rounded-sm">{item.title}</p>
                            <img src={item.image} alt={item.title} className="w-full h-full object-contain rounded-sm mb-6" />
                           
                        </div>
                    ))}
                </div>
            </section>




            <Footer />
        </>
    );
};

export default Page;
