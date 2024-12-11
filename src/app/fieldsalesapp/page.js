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
            title: "Beat Management",
            description: "Beat management in a field sales app is a critical feature for managing sales representatives' activities and optimizing their daily routes or beats It organizes reps’ schedules by defining and assigning specific geographical areas or customer territories, ensuring each rep covers their area effectively and efficiently. Beat management is especially useful for businesses with a large number of field sales representatives who need to reach numerous clients daily. It empowers sales teams to maximize their coverage, improve customer relationships, and enhance operational efficiency.",
            logo: "/beatmng.png"
        },
        {
            title: "Product Management",
            description:
                "Product management in a field sales app is crucial for equipping sales reps with real-time product information, streamlined inventory access, and the ability to manage orders efficiently. By including robust product management features, a field sales app empowers reps to close deals more effectively, ensuring they can provide customers with accurate, up-to-date product details and availability. Reps have access to a comprehensive catalog that includes product descriptions, images, specifications, pricing, and related documents, helping them answer customer questions accurately.",
            logo: "/productmng.png"
        },
        {
            title: "Store Management ",
            description:
                " Store management in a field sales app allows sales reps to manage their visits to retail stores or other points of sale, ensuring product visibility, stock levels, and in-store promotions are effectively maintained. This feature is particularly valuable for industries like FMCG, retail, and consumer electronics, where field reps need to regularly check on product displays, assess stock, and interact with store staff. The app can confirm that reps are present in the store location before allowing them to log activities, ensuring visits are completed as planned. The app allows reps to capture photos and verify that product displays meet branding and merchandising standards.",
            logo: "/storemng.png"
        },
        {
            title: "Order Management",
            description:
                "Order management in a field sales app is essential for enabling reps to place, track, and manage orders directly from the field. This functionality streamlines the entire ordering process, ensuring timely delivery, accurate order tracking, and enhanced customer satisfaction. Field reps can place orders instantly while meeting with clients, reducing the delay associated with manual order submission and ensuring fast processing. The app can automatically apply discounts, volume-based pricing, or special pricing for loyal customers, ensuring accurate pricing without manual adjustments.",
            logo: "/ordermng.png"
        },
        {
            title: "Payment & Collection",
            description:
                "Payment and collection features in a field sales app enable sales reps to manage financial transactions, from collecting payments at the point of sale to tracking outstanding balances and overdue payments. This functionality streamlines the payment process, ensuring timely collections, reducing errors, and improving cash flow. Sales reps can collect payments directly through the app during customer visits, reducing the need for follow-ups and ensuring immediate revenue capture. Once an order is confirmed, the app generates a digital invoice, which can be sent to the customer by email or WhatsApp, providing a clear record of the transaction.",
            logo: "/paymentcollection.png"
        },
        {
            title: "Visit Management",
            description:
                "Visit management in a field sales app helps sales reps efficiently plan, execute, and track customer visits, ensuring optimized schedules, enhanced customer interactions, and streamlined reporting. This feature is essential for industries where regular in-person visits are critical, such as FMCG, pharmaceuticals, and retail. Managers can define visit frequency and assign customer visit schedules based on priority, geography, or historical sales, helping reps manage their time effectively. Reps can check into visits only when they are within a specific radius of the location, ensuring that visits are accurately recorded.",
            logo: '/visitmng.png'
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
                        <h2 className="text-3xl font-bold text-center text-white "> SaleOFast Field Sales App</h2>
                    </div>
                    <section className="p-6 lg:ml-12  rounded-lg ">
                        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-5">
                            Here’s how <span className="text-blue-600">SaleOfast</span> can empower your sales team
                        </h2>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    text: "Real-Time Access to Customer Data",
                                    icon: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
                                },
                                {
                                    text: "Efficient Route Planning and Geolocation",
                                    icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
                                },
                                {
                                    text: "Automated Task Reminders and Follow-Ups",
                                    icon: "https://cdn-icons-png.flaticon.com/512/2589/2589176.png",
                                },
                                {
                                    text: "Instant Quote and Order Management",
                                    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828479.png",
                                },
                                {
                                    text: "Reporting and Performance Tracking",
                                    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828640.png",
                                },
                                {
                                    text: "Enhanced Communication and Collaboration",
                                    icon: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
                                },
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <img
                                        src={item.icon}
                                        alt="icon"
                                        className="w-8 h-8 mb-4 object-contain"
                                    />
                                    <p className="text-lg font-medium text-gray-700 text-center">
                                        {item.text}
                                    </p>
                                </li>
                            ))}
                        </ul>

                    </section>


                    <h2 className="text-3xl font-bold text-center text-blue-900 mb-6 mt-6">
                        Feature Packed FSA for Sales Automation
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
            <div className="flex flex-col sm:flex-row justify-between items-center p-6 mt-6 bg-gradient-to-r from-blue-800 to-[#070E79] rounded-lg shadow-lg space-y-4 sm:space-y-0 sm:space-x-6">
                <p className="text-white text-center sm:text-left text-2xl sm:text-3xl font-extrabold leading-relaxed">
                    Revolutionize Your Sales Process <br className="hidden sm:block" />
                    with <span className="text-yellow-300">SaleoFast FSA</span>
                </p>
              <Link href="/contactus">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    🚀 Book a Demo
                </button></Link>
            </div>



            {/* Why Choose Saleofast CRM? */}
            <h2 className="text-2xl lg:text-3xl font-semibold text-center text-gray-800 mt-6 ">Why Choose Saleofast FSA?</h2>
            <section className="flex flex-col sm:flex-row items-center justify-center p-2">
                {/* Text Section */}
                <div className="w-full sm:w-1/2">

                    <div >
                        <div className="bg-white p-2 ">
                            <h3 className="text-2xl font-bold text-blue-600 ">1. Route Optimization:</h3>
                            <p className="text-gray-700">
                                Maximize efficiency with Beat and Visit planning feature. Spend less time on the road and more time with customers.
                            </p>
                        </div>

                        <div className="bg-white p-2 ">
                            <h3 className="text-2xl font-bold text-blue-600 ">2.  Order Processing: </h3>
                            <p className="text-gray-700 ">
                                Create and manage orders on the spot. With instant access to product information and pricing, your team can close deals faster.
                            </p>
                            <ul className="list-disc pl-6 text-gray-700">
                                <li>Lead Tracking: Capture and nurture leads efficiently.</li>
                                <li>Opportunity Management: Streamline your sales processes.</li>
                                <li>Customer Engagement: Provide top-notch support with a 360-degree view of your customers.</li>
                                <li>Reporting & Analytics: Gain insights into your business with powerful analytics tools.</li>
                                <li>... and many more.</li>
                            </ul>
                        </div>

                        <div className="bg-white p-2 ">
                            <h3 className="text-2xl font-bold text-blue-600 ">3. Geo-Tagging: </h3>
                            <p className="text-gray-700">
                                Track and record visits with geo-tagging features. Ensure your team is covering their territories effectively and efficiently.
                            </p>
                        </div>

                        <div className="bg-white p-2 ">
                            <h3 className="text-2xl font-bold text-blue-600 ">4.  Real-Time Reporting:</h3>
                            <p className="text-gray-700">
                                Get instant insights into your sales activities with real-time reporting. Monitor progress and make informed decisions on the go.
                            </p>
                        </div>

                        <div className="bg-white p-2 ">
                            <h3 className="text-2xl font-bold text-blue-600 ">5. Payment Collection:</h3>
                            <p className="text-gray-700">
                                Sales person can collect the payment on spot and capture the evidence on the spot for easy tracking.
                            </p>
                        </div>
                        <div className="bg-white p-2 ">
                            <h3 className="text-2xl font-bold text-blue-600 ">5.  Mobile Accessibility:</h3>
                            <p className="text-gray-700">
                                Stay connected on the go with Saleofast FSA’s mobile app. Access customer information, manage tasks, and close deals from anywhere, anytime.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full sm:w-1/3  sm:mt-0 sm:ml-8">
                    <img src="https://saleofast.com/wp-content/uploads/2024/08/Saleofast-FSA.png" alt="Saleofast CRM" className="w-full rounded-lg shadow-lg" style={{ objectFit: 'cover' }} />
                </div>
            </section>

            {/* Tailored Solutions for Every Industry */}
            <section className="lg:p-8 mt-4">
                <p className="text-start font-bold text-2xl mb-1">Tailored Solutions for Every Industry</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {industry.map((item, index) => (
                        <div key={index} className="bg-white p-6 shadow-lg rounded-lg text-center">
                            <img src={item.image} alt={item.title} className="w-42 h-48 object-contain rounded-sm mb-6" />
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
