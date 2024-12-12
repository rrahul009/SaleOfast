import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const AboutUs = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <div className="container mx-auto text-center px-6 lg:px-16">
          <h1 className="text-5xl lg:text-5xl font-extrabold mb-2 animate-fadeInDown">
            Welcome to <span className="text-yellow-300">Saleofast</span>
          </h1>
          <p className="text-xl lg:text-md leading-relaxed animate-fadeInUp">
            Elevating Your Product Line with Speed and Efficiency
          </p>
          {/* <p className="mt-6 animate-fadeInUp">
            At Saleofast, we’re not just a collection of products; we’re a dynamic force dedicated to
            propelling your company’s offerings to new heights. We understand the importance of efficiency and
            effectiveness in today’s fast-paced market, 
            which is why we’ve curated a diverse range of products
            designed to meet your needs with speed and precision.
          </p> */}
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-blue-600 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to empower businesses like yours with the tools they need to thrive in an
              ever-evolving marketplace. Whether you’re looking to expand your product line, streamline your
              operations, or enhance your customer experience, Saleofast is here to help you achieve your goals
              with ease.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="aboutus.jpg"
              alt="Mission"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto text-center px-6 lg:px-16">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-10">
            Why Choose <span className="text-blue-600">Saleofast?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Comprehensive Selection',
                icon: 'fas fa-box-open',
                description:
                  'From innovative gadgets to essential office supplies, we offer a diverse range of products to suit every business need.',
              },
              {
                title: 'Quality Assurance',
                icon: 'fas fa-check-circle',
                description:
                  'Partnering with trusted suppliers ensures that every product meets the highest standards of quality and reliability.',
              },
              {
                title: 'Efficiency',
                icon: 'fas fa-tachometer-alt',
                description:
                  'Streamline your procurement process and get the products you need quickly, so you can focus on growing your business.',
              },
              {
                title: 'Personalized Service',
                icon: 'fas fa-user-friends',
                description:
                  'Our dedicated team provides tailored solutions to help you achieve your objectives efficiently and effectively.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-2xl transition duration-300"
              >
                <div className="mb-6">
                  <div className="bg-blue-500 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg mx-auto">
                    <i className={`${item.icon} text-2xl`}></i>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center px-6 lg:px-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {[
              {
                name: 'Atul Singhal',
                role: 'CEO & Founder',
                img: 'https://kloudrac.com/assets/img/team2/atul-singhal-new.png',
              },
              {
                name: 'Mudit Gupta',
                role: 'COO(Chief Operating Officer)',
                img: 'https://kloudrac.com/assets/img/team2/mudit.jpg',
              },
              // {
              //   name: 'Aseem Gupta',
              //   role: 'Bussiness Head',
              //   img: 'https://kloudrac.com/assets/img/team2/asim-gupta.jpg',
              // },
            ].map((team, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition duration-300"
              >
                <img
                  src={team.img}
                  alt={team.name}
                  className="rounded-full w-48 h-48 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">{team.name}</h3>
                <p className="text-gray-600">{team.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-4xl font-bold mb-6">Join the Saleofast Family</h2>
          <p className="text-lg mb-8">
            Ready to take your business to the next level? Join the Saleofast family today and experience
            the difference that speed, efficiency, and quality can make for your company.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-lg shadow-md hover:bg-yellow-300"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
