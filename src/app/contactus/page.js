import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const ContactPage = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 py-4 text-white text-center">
        <div className="container mx-auto px-6 lg:px-16">
          <h1 className="text-4xl lg:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">
            Have questions or need assistance? We’re here to help!
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Send Your Query</h2>
            <p className="text-gray-600 text-center mb-8">
              Fill out the form below, and we’ll get back to you as soon as possible.
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Enter the subject"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message here"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Address */}
            <div className="text-center">
              <div className="bg-blue-100 p-6 rounded-full inline-block mb-4">
                <i className="fas fa-map-marker-alt text-blue-600 text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Our Address</h3>
              <p className="text-gray-600">
                 Noida Sec-63, D-76 <br />
               Delhi, Noida,201309
              </p>
            </div>
            {/* Phone */}
            <div className="text-center">
              <div className="bg-blue-100 p-6 rounded-full inline-block mb-4">
                <i className="fas fa-phone text-blue-600 text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Call Us</h3>
              <p className="text-gray-600">
                +1 (555) 123-4567 <br />
                Mon - Fri, 9:00am - 8:00pm
              </p>
            </div>
            {/* Email */}
            <div className="text-center">
              <div className="bg-blue-100 p-6 rounded-full inline-block mb-4">
                <i className="fas fa-envelope text-blue-600 text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Email Us</h3>
              <p className="text-gray-600">
                support@saleofast.com <br />
                24/7 Support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-100">
  <div className="container mx-auto px-6 lg:px-16">
    <div className="rounded-lg overflow-hidden shadow-lg">
      <iframe
        title="Google Maps - Noida Sector 62 D Block"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.7664298123736!2d77.3626368759473!3d28.630328380312796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce537a65c4f05%3A0xe2e3efb89b29b928!2sD%20Block%2C%20Sector%2062%2C%20Noida%2C%20Uttar%20Pradesh%20201309!5e0!3m2!1sen!2sin!4v1702208302801!5m2!1sen!2sin"
        className="w-full h-96 border-0"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
</section>

      <Footer/>
    </>
  );
};

export default ContactPage;
