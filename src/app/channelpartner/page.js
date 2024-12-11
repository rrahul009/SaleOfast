"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    function toggleDescription(index) {
        setExpandedIndex(expandedIndex === index ? null : index);
    }

    const features = [
        {
            title: "Lead Management",
            description:
                "Lead management is a process that involves capturing, tracking, nurturing, and converting leads (potential customers) into sales. As the lead progresses, its status is updated, helping everyone understand the lead’s journey. Once a lead is ready for a more serious sales conversation, it’s often qualified and then converted into an opportunity within the app. The app then enables sales reps to manage and track each opportunity, guiding them through stages until close.",
            logo: "/leadmng.png",
        },
        {
            title: "Event/Task Management",
            description:
                "Task management is essential for keeping sales, marketing, and customer service teams organized and on track with their daily activities. By centralizing tasks, teams can efficiently manage their workload, prioritize actions, and follow up with leads and clients systematically. Users can create tasks manually to assign to themselves or other team members, allowing them to track to-dos for specific clients, opportunities, or leads. Tasks can be tagged as high, medium, or low priority, helping team members focus on critical actions that need immediate attention.",
            logo: "/eventmng.png",
        },
        {
            title: "Opportunity Management ",
            description:
                " Store management in a field sales app allows sales reps to manage their visits to retail stores or other points of sale, ensuring product visibility, stock levels, and in-store promotions are effectively maintained. This feature is particularly valuable for industries like FMCG, retail, and consumer electronics, where field reps need to regularly check on product displays, assess stock, and interact with store staff. The app can confirm that reps are present in the store location before allowing them to log activities, ensuring visits are completed as planned. The app allows reps to capture photos and verify that product displays meet branding and merchandising standards.",
            logo: "opportunitymng.png",
        },
        {
            title: "Brokerage Management",
            description:
                "Brokerage management in a channel partner app is crucial for handling commissions, fees, and payouts effectively, ensuring transparency and accuracy in the relationship between a company and its brokers or agents. In industries like insurance, real estate, financial services, and wholesale distribution, brokers act as intermediaries between the company and end customers, driving sales and earning commissions on closed deals. A brokerage management system integrated into a channel partner app can streamline this process, ensuring timely, accurate payments, and clear visibility for all stakeholders.",
            logo: "brokragemng.png",
        },
        {
            title: "Visit Management",
            description:
                " Visit management in a channel partner app helps sales reps efficiently plan, execute, and track customer visits, ensuring optimized schedules, enhanced customer interactions, and streamlined reporting. This feature is essential for industries where regular in-person visits are critical, such as FMCG, pharmaceuticals, and retail. Managers can define visit frequency and assign customer visit schedules based on priority, geography, or historical sales, helping reps manage their time effectively. Reps can check into visits only when they are within a specific radius of the location, ensuring that visits are accurately recorded.",
            logo: "visitmng.png",
        },
        {
            title: "Campaign Management",
            description:
                "Campaign management in a channel partner app allows companies to collaborate with their partners (distributors, resellers, brokers, etc.) to execute, track, and optimize marketing campaigns. By providing a centralized platform for managing campaigns, companies can ensure alignment with their partners, offer tailored support, and achieve better outcomes through coordinated efforts. The app provides pre-configured templates for different types of campaigns (e.g., product launch, seasonal promotions, discount offers) that partners can customize for their markets or regions.",
            logo: "campaginmng.png",
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
            title: "Media",
            image: "https://saleofast.com/wp-content/uploads/2024/08/Media_11.jpg",
        },
        {
            title: "Real Estate",
            image:
                "https://saleofast.com/wp-content/uploads/2024/08/Real-Estate_400-1.jpg",
        },
        {
            title: "Retails",
            image:
                "https://saleofast.com/wp-content/uploads/2024/08/Retail-Industry_11.jpg",
        },
        {
            title: "Manufacturing",
            image:
                "https://saleofast.com/wp-content/uploads/2024/08/manufacturing_11.jpg",
        },
        {
            title: "Pharma",
            image:
                "https://saleofast.com/wp-content/uploads/2024/08/Pharma_400-1.jpg",
        },
    ];

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
                        <h2 className="text-3xl font-bold text-center text-white ">
                            {" "}
                            Channel Partner App
                        </h2>
                    </div>
                    <section className="p-4">
                        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6 mt-12">
                            Here’s how Saleofast can empower your partners
                        </h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    text: "Efficient Lead Management",
                                    icon: "https://cdn-icons-png.flaticon.com/512/2589/2589176.png",
                                },
                                {
                                    text: "Incentives and Performance Tracking",
                                    icon: "https://cdn-icons-png.flaticon.com/512/1170/1170576.png",
                                },
                                {
                                    text: "Visit Management",
                                    icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
                                },
                                {
                                    text: "Customer Relationship Management (CRM) Integration",
                                    icon: "https://cdn-icons-png.flaticon.com/512/1087/1087925.png",
                                },
                                {
                                    text: "Enhanced Collaboration and Transparency",
                                    icon: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
                                },
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <img
                                        src={item.icon}
                                        alt="icon"
                                        className="w-12 h-12 mb-4 object-contain"
                                    />
                                    <p className="text-lg font-medium text-gray-700 text-center">
                                        {item.text}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <h2 className="text-3xl font-bold text-center text-blue-900 mb-12 mt-12">
                        Features That Empower Your Channel Partners
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
                                        className="h-24 w-24 object-contain"
                                    />
                                </div>
                                <h3 className="text-2xl text-center font-semibold text-gray-800 mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-left lg:ml-8">
                                    {expandedIndex === index
                                        ? feature.description
                                        : `${feature.description.substring(0, 134)}    ...`}
                                    <button
                                        className=" text-blue-500"
                                        onClick={() => toggleDescription(index)}
                                    >
                                        {expandedIndex === index ? "Read Less" : " Read More"}
                                    </button>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* get it touch */}
            <div className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 mt-6 bg-[#070E79] space-y-4 sm:space-y-0 sm:space-x-4">
                <p className="text-white text-lg sm:text-xl font-bold text-center sm:text-left">
                    Revolutionize Your Sales Process with SaleoFast FSA
                </p>
               <Link href="/contactus">
               <button className="bg-blue-500 px-6 py-3 sm:px-8 sm:py-4 w-auto sm:w-56 rounded-lg text-white text-sm sm:text-base">
                    Book a Demo
                </button></Link>
            </div>


            {/* Why Choose Saleofast CRM? */}
            <h2 className="text-3xl font-semibold text-center text-gray-800 mt-6 ">
                Features That Empower Your Channel Partners
            </h2>
            <section className="flex flex-col sm:flex-row items-center justify-center gap-8 p-6  rounded-lg shadow-lg">
                {/* Text Section */}
                <div className="w-full sm:w-1/2 space-y-6">
                    {[
                        {
                            title: " Lead Distribution and Management",
                            description:
                                "Distribute leads to your partners efficiently and track their progress in real-time. Ensure that every opportunity is followed up promptly.",
                        },
                        {
                            title: " Deal Registration",
                            description:
                                "Simplify the deal registration process with an intuitive interface that allows partners to register deals, get approvals, and track their status.",
                        },
                        {
                            title: " Sales and Marketing Resources",
                            description:
                                "Provide partners with access to the latest sales materials, product information, and marketing collateral. Keep everyone aligned with your brand message.",
                        },
                        {
                            title: "Training and Certification",
                            description:
                                "Offer training modules, webinars, and certification programs directly within the app. Equip your partners with the knowledge they need to sell effectively.",
                        },
                        {
                            title: " Real-Time Reporting",
                            description:
                                "Get instant insights into your sales activities with real-time reporting. Monitor progress and make informed decisions on the go.",
                        },
                        {
                            title: " Performance Tracking",
                            description:
                                "Monitor partner performance with comprehensive analytics and reporting. Identify top performers and areas for improvement to drive better results.",
                        },
                        {
                            title: " Centralized Collaboration",
                            description:
                                "Streamline communication and collaboration with a unified platform that keeps all partners connected and informed.",
                        },
                        {
                            title: "Real-Time Insights",
                            description:
                                "Provide your partners with real-time access to sales data, product updates, and marketing resources to help them close deals faster.",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg p-4 shadow-md flex gap-4 items-start"
                        >
                            <div className="text-blue-500 text-3xl font-bold flex-shrink-0">
                                {index + 1}.
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-blue-600">{item.title}</h3>
                                <p className="text-gray-700">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Image Section */}
                <div className="w-full sm:w-1/3">
                    <img
                        src="https://saleofast.com/wp-content/uploads/2024/08/Saleofast-CPA.png"
                        alt="Saleofast CRM"
                        className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </section>


            {/* Benefits for Your Business */}
            <section className="flex flex-col lg:flex-row justify-center items-center gap-12 p-6 lg:p-12">
                {/* Image Section */}
                <div className="lg:w-1/2">
                    <img
                        src="https://saleofast.com/wp-content/uploads/2024/08/Campaign.png"
                        alt="Benefits for Your Business"
                        className="rounded-lg shadow-lg w-full object-contain"
                    />
                </div>

                {/* Text Section */}
                <div className="lg:w-1/2 space-y-6">
                    <h2 className="text-4xl font-bold text-gray-800">
                        Benefits for Your Business
                    </h2>
                    <ul
                        className="list-decimal  space-y-4 text-gray-700 "
                        style={{ fontSize: "16px" }}
                    >
                        <li>
                            <span className="font-bold text-xl ">Increased Sales Efficiency:</span>{" "}
                            With streamlined processes and better communication, your partners
                            can close deals faster and more effectively.
                        </li>
                        <li>
                            <span className="font-bold text-xl">
                                Enhanced Partner Relationships:
                            </span>{" "}
                            Strengthen your relationships by providing partners with the tools
                            and support they need to succeed.
                        </li>
                        <li>
                            <span className="font-bold text-xl">Greater Market Reach:</span> Empower
                            your partners to reach new markets and customers, expanding your
                            business’s footprint.
                        </li>
                        <li>
                            <span className="font-bold text-xl">Improved Channel Visibility:</span>{" "}
                            Gain complete visibility into your channel operations, ensuring
                            you’re always informed and in control.
                        </li>
                        <li>
                            <span className="font-bold text-xl">Centralized Collaboration:</span>{" "}
                            Streamline communication and collaboration with a unified platform
                            that keeps all partners connected and informed.
                        </li>
                        <li>
                            <span className="font-bold text-xl">Seamless Integration:</span> The
                            SaleoFast app integrates effortlessly with your existing CRM and
                            partner management systems, keeping everything in sync and up to
                            date.
                        </li>
                    </ul>
                </div>
            </section>

            {/* Tailored Solutions for Every Industry */}
            <section className="lg:p-8 p-4 mt-4">
                <p className="text-start font-bold text-2xl mb-4">
                    Tailored Solutions for Every Industry
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {industry.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 sm:p-6 shadow-lg rounded-lg text-center flex flex-col items-center"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-64 h-64 sm:w-32 sm:h-32 md:w-full md:h-full object-contain rounded-sm mb-4"
                            />
                            <p className="text-sm sm:text-lg font-semibold text-gray-800">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>
            </section>


            <Footer />
        </>
    );
};

export default Page;
