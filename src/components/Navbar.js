'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Model from './Model'; // Assuming the model (side drawer) component is used for the Products and Industries menu

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDrawer = () => {
    setIsOpen(!isOpen); // Toggles the state of the side drawer (Products/Industries)
  };

  return (
    <>
      <div>
        <nav className="bg-white z-50 w-full border-gray-200 dark:bg-gray-900">
          <div className="flex flex-wrap items-center justify-between mx-auto p-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img
                src="https://saleofast.com/wp-content/uploads/2024/09/Saleofast-logo-for-white-bg.png"
                className="h-8"
                alt="Saleofast Logo"
              />
            </Link>

            {/* Right Section: Login, Contact, Book Demo, Mobile Menu */}
            <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              {/* Login and Contact Us */}
              <div className="hidden md:flex items-center gap-4">
                <p className="lg:ml-5 mt-2 font-semibold text-black cursor-pointer" style={{ fontSize: '14px' }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  Login
                </p>
                <button
                  style={{ fontSize: '14px' }}
                  className="hidden md:block mr-3  py-1 px-3 ml-3 mt-2 font-semibold text-black bg-black-600 rounded-lg"
                >
                  Contact Us: 7017738564
                </button>
              </div>

              {/* Book Demo Button */}
              <button className="w-full lg:py-4 py-3 font-semibold text-blue-600 bg-white border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm">
                Book Demo
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMobileMenu}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile and Desktop Menu */}
            <div
              className={`${
                isMobileMenuOpen ? 'block' : 'hidden'
              } md:flex md:order-1 w-full md:w-auto md:order-1 md:flex-row items-center bg-gray-50 md:bg-transparent p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 transition-all duration-300 ease-in-out`}
            >
              <ul className="flex flex-col md:flex-row gap-6 md:gap-8 font-semibold text-gray-900 md:text-black">
                {/* Main Menu Links */}
                <li>
                  <Link
                    href="/"
                    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 hover:bg-blue-600"
                  >
                    Home
                  </Link>
                </li>
                <li className="cursor-pointer" onClick={toggleDrawer}>
                  <p className="block py-2 px-3 rounded hover:bg-gray-100">Products</p>
                </li>
                <li onClick={toggleDrawer}>
                  <p className="block py-2 px-3 rounded hover:bg-gray-100 cursor-pointer">Industries</p>
                </li>
                <li>
                  <Link href="/aboutus" className="block py-2 px-3 rounded hover:bg-gray-100">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contactus" className="block py-2 px-3 rounded hover:bg-gray-100">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Side Drawer (Model) for Products and Industries */}
          <Model isOpen={isOpen} toggleDrawer={toggleDrawer} />
        </nav>
      </div>

      {/* Side Drawer Model for Products and Industries */}
      <Model isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Navbar;
