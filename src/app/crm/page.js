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
      title: "Lead Management",
      description:
        "Lead management in CRM (Customer Relationship Management) is a process that involves capturing, tracking, nurturing, and converting leads (potential customers) into sales. As the lead progresses, its status is updated, helping everyone understand the lead’s journey. Once a lead is ready for a more serious sales conversation, it’s often qualified and then converted into an opportunity within the CRM. The CRM system then enables sales reps to manage and track each opportunity, guiding them through stages until close.",
      logo: "/leadmng.png"
    },

    {
      title: "Event/Task Management",
      description:
        "Task management in CRM (Customer Relationship Management) systems is essential for keeping sales, marketing, and customer service teams organized and on track with their daily activities. By centralizing tasks within a CRM, teams can efficiently manage their workload, prioritize actions, and follow up with leads and clients systematically. Users can create tasks manually to assign to themselves or other team members, allowing them to track to-dos for specific clients, opportunities, or leads. Tasks can be tagged as high, medium, or low priority, helping team members focus on critical actions that need immediate attention.",
      logo: "/event_task.png"
    },
    {
      title: "Opportunity Management",
      description:
        "Opportunity management in CRM is the process of tracking, managing, and nurturing sales opportunities through each stage of the sales pipeline until they are closed (either won or lost). It’s a critical function for sales teams to monitor potential deals, forecast revenue, and prioritize activities to maximize conversion rates. SaleOfast allows businesses to define the various stages of their sales process. Opportunity management in CRM includes analytics to track metrics such as win/loss rates, average deal size, and close rates. It’s a powerful way to drive consistency, prioritize high-value deals, and maximize revenue growth.",
      logo: "opportunityMang.png"
    },
    {
      title: "Expense Management",
      description:
        "Expense management in CRM helps businesses track, monitor, and control expenses related to sales, marketing, customer service, and other CRM-related activities. Integrating expense management into CRM allows teams to capture expenses at each stage of the customer journey, improve budgeting accuracy, and streamline reimbursements. Sales reps and other CRM users can log expenses directly within the CRM, which might include travel costs, meals, accommodations, client gifts, or other project-related expenses. Expense management within a CRM centralizes financial oversight related to customer-facing activities.",
      logo: "expanceMng.png"
    },
    {
      title: "Attendance Management",
      description:
        "Attendance management in CRM is designed to track, manage, and report on employee attendance, which can be particularly useful for sales teams, field service teams, and remote employees. Integrating attendance management with a CRM allows companies to monitor employee availability, manage schedules, and ensure accurate time tracking for both in-office and remote workforces. CRM attendance management systems allow employees to check in and check out for the day directly within the CRM, logging their working hours.",
      logo: "attendencemang.png"
    },
    {
      title: "Quotation Management",
      description:
        "Quotation management in CRM is the process of generating, sending, tracking, and managing quotes (also known as proposals or estimates) for prospective customers. This function helps sales teams streamline the quote creation process, ensure accuracy, and improve their chances of closing deals by providing timely, tailored quotes. Saleofast provide customizable quote templates that ensure consistency in format, branding, and information across all quotes. Sales reps can pull in product details, pricing, and taxes automatically for accurate, efficient quote creation.",
      logo: '/quatationmng.png'
    },
    {
      title: "Target vs Achievement",
      description:
        "Target vs. Achievement tracking in CRM is a critical feature for monitoring and analyzing the progress of sales, marketing, or service teams against set goals or quotas. This comparison helps businesses assess team performance, identify trends, and make informed adjustments to strategies. Targets can be set at various levels, including individual, team, department, or company-wide, based on KPIs (e.g., revenue, number of deals closed, new customer acquisitions). As sales or service activities are completed, data is automatically captured in the CRM (e.g., closed deals), providing real-time updates toward target achievement.",
      logo: '/targetachievement.png'
    },
    {
      title: "Day Planning",
      description:
        "A daily activity report in CRM is a summary of key actions, tasks, and results from a sales rep’s or team’s day. This report provides managers with insights into team productivity, tracks performance against targets, and helps identify trends and areas for improvement. It can cover number of tasks (such as calls, emails, meetings) completed during the day. It also captures the visits at client location and summary of the discussion done at client side. Details of key interactions with high-priority customers or accounts, noting important discussions, requirements, and follow-up actions.",
      logo: "dayplanning.png"
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

      </section>

      <section className="relative bg-gray-50">
        <div className="relative">
          <img
            src="/crm.jpg"
            alt="CRM"
            className="w-full h-72 object-cover"
          />
          {/* Add overlay text */}
          <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center">
            <h2 className="text-2xl lg:text-5xl font-bold text-white text-center px-4">
              Feature Packed CRM for Sales Automation
            </h2>
          </div>
        </div>

        <div className="mt-10 px-4 lg:px-20">
          <p className="text-center text-lg lg:text-md mb-4 text-gray-700">
            Empower your sales team with an innovative and intuitive CRM designed to automate workflows,
            enhance productivity, and deliver exceptional results.
          </p>
        </div>
      </section>


      <section className=" py-2">
        <div className="max-w-7xl mx-auto px-4 lg:px-10">

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


      {/* Tailored Solutions for Every Industry */}
      <section className="p-4 lg:p-8 mt-4">
        <p className="text-start font-bold text-xl sm:text-2xl mb-4">
          Tailored Solutions for Every Industry
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {industry.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-4 shadow-md rounded-lg text-center transition-transform duration-300 hover:scale-105"
            >
              <p className="text-base sm:text-lg mb-3 font-semibold text-gray-800">
                {item.title}
              </p>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full sm:h-48 object-contain rounded-sm "
              />

            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Saleofast CRM? */}
      <h2 className="text-2xl lg:text-3xl font-semibold text-center text-gray-800 mt-6">
        Why Choose Saleofast CRM?
      </h2>
      <section className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 p-4 lg:p-8">
        {/* Text Section */}
        <div className="w-full lg:w-2/3 space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-600">1. Intuitive Interface</h3>
            <p className="text-gray-700 mt-2">
              Saleofast CRM offers an easy-to-navigate interface, allowing your team to quickly adapt and make the most of the platform. With its user-friendly design, you can effortlessly manage customer data, track sales, and monitor performance.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-600">2. Comprehensive Features</h3>
            <p className="text-gray-700 mt-2">
              From lead management to generating quotations, Saleofast CRM covers all aspects of the customer lifecycle. Our features include:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-700">
              <li>Lead Tracking: Capture and nurture leads efficiently.</li>
              <li>Opportunity Management: Streamline your sales processes.</li>
              <li>Customer Engagement: Provide top-notch support with a 360-degree view of your customers.</li>
              <li>Reporting & Analytics: Gain insights into your business with powerful analytics tools.</li>
              <li>... and many more.</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-600">3. Scalable Solutions</h3>
            <p className="text-gray-700 mt-2">
              Whether you’re a small startup or a large enterprise, Saleofast CRM scales with your business. Our modular solutions grow with your needs, ensuring that you always have the right tools at your disposal.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-600">4. Seamless Integration</h3>
            <p className="text-gray-700 mt-2">
              Saleofast CRM integrates seamlessly with your existing systems, from email marketing tools to eCommerce platforms. This ensures that your business operations are cohesive and that data flows smoothly across your entire organization.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-600">5. Mobile Accessibility</h3>
            <p className="text-gray-700 mt-2">
              Stay connected on the go with Saleofast CRM’s mobile app. Access customer information, manage tasks, and close deals from anywhere, anytime.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/3 flex justify-center items-center">
          <img
            src="https://saleofast.com/wp-content/uploads/2024/08/Saleofast-CRM-2.png"
            alt="Saleofast CRM"
            className="w-full rounded-lg shadow-lg"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </section>


      {/* get it touch */}
      <div className="flex flex-col sm:flex-row justify-between items-center p-6 mt-6 bg-[#070E79] space-y-4 sm:space-y-0 sm:space-x-4">
        <p className="text-white text-center sm:text-left text-lg sm:text-xl font-bold">
          Revolutionize Your Sales Process with SaleoFast CRM
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

export default Page;
