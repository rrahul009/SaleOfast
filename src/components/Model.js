'use client';
import React, { useState, useRef } from "react";
import Link from "next/link";

const SideDrawer = ({ isOpen, toggleDrawer }) => {
  const [isProductsModalOpen, setIsProductsModalOpen] = useState(false);
  const [isIndustriesModalOpen, setIsIndustriesModalOpen] = useState(false);
  const productsModalRef = useRef(null);
  const industriesModalRef = useRef(null);

  const openProductsModal = () => {
    setIsProductsModalOpen(true);
  
  };

  const closeProductsModal = () => {
    setIsProductsModalOpen(false);
    toggleDrawer()
  };

  const openIndustriesModal = () => {
    setIsIndustriesModalOpen(true);
  };

  const closeIndustriesModal = () => {
    setIsIndustriesModalOpen(false);
    toggleDrawer()
  };

  const handleClickOutside = (e) => {
    // Close Products modal if click is outside
    if (productsModalRef.current && !productsModalRef.current.contains(e.target)) {
      closeProductsModal();
    }
    // Close Industries modal if click is outside
    if (industriesModalRef.current && !industriesModalRef.current.contains(e.target)) {
      closeIndustriesModal();
    }
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
          onClick={toggleDrawer}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-transform z-50 w-64 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-bold">Our Services</h2>
          <button onClick={toggleDrawer} className="text-red-500 text-lg">
            &times;
          </button>
        </div>
        <ul className="space-y-2 p-4">
          <li>
            <button
              onClick={openProductsModal}
              className="w-full flex justify-between items-center text-left p-2 hover:bg-gray-100 rounded-lg"
            >
              Products <span>▶</span>
            </button>
          </li>
          <li>
            <button
              onClick={openIndustriesModal}
              className="w-full flex justify-between items-center text-left p-2 hover:bg-gray-100 rounded-lg"
            >
              Industries <span>▶</span>
            </button>
          </li>
          <li>
            <Link href="aboutus" className="block p-2 hover:bg-gray-100 rounded-lg">
              About Us
            </Link>
          </li>
          <li>
            <Link href="contactus" className="block p-2 hover:bg-gray-100 rounded-lg">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Products Modal */}
      {isProductsModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-start justify-start lg:ml-64 lg:mt-14 bg-black bg-opacity-50 z-50"
          onClick={handleClickOutside}
         >
          <div
            ref={productsModalRef}
            className="bg-white p-6 rounded-lg shadow-lg sm:w-full lg:w-1/6 lg:ml-1 ml-56 lg:mt-1 mt-16"
          >
            <ul className="space-y-4">
              <li>
                <Link href="/crm" onClick={closeProductsModal}>
                  CRM
                </Link>
              </li>
              <li>
                <Link href="/fieldsalesapp" onClick={closeProductsModal}>
                  Field Sales App
                </Link>
              </li>
              <li>
                <Link href="/channelpartner" onClick={closeProductsModal}>
                  Channel Partner App
                </Link>
              </li>
              <li>
                <Link href="/retailer" onClick={closeProductsModal}>
                  Retailer App
                </Link>
              </li>
              <li>
                <Link href="/dms" onClick={closeProductsModal}>
                  DMS
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Industries Modal */}
      {isIndustriesModalOpen && (
  <div
    className="fixed top-0 left-0 w-full h-full flex items-start justify-start lg:ml-64 lg:mt-14 bg-black bg-opacity-50 z-50"
    onClick={handleClickOutside}
  >
    <div
      ref={industriesModalRef}
    className="bg-white p-6 rounded-lg shadow-lg w-full lg:w-1/6 lg:ml-1 ml-56 lg:mt-1 mt-16"
    >
      <ul className="space-y-4">
        <li>
          <Link href="/mediaindustri" onClick={closeIndustriesModal}>
            Media
          </Link>
        </li>
        <li>
          <Link href="/industryretails" onClick={closeIndustriesModal}>
            Retail
          </Link>
        </li>
        <li>
          <Link href="/realestate" onClick={closeIndustriesModal}>
            Real Estate
          </Link>
        </li>
        <li>
          <Link href="/manufacturing" onClick={closeIndustriesModal}>
            Manufacturing
          </Link>
        </li>
        <li>
          <Link href="/pharma" onClick={closeIndustriesModal}>
            Pharma
          </Link>
        </li>
      </ul>
    </div>
  </div>
)}

    </>
  );
};

export default SideDrawer;
