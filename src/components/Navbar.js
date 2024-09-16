'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false)
  const [isServiceOpen, setIsServiceOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [lastScrollTop, setLastScrollTop] = useState(0)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > lastScrollTop) {
        // Scrolling down
        setIsSticky(false)
      } else {
        // Scrolling up
        setIsSticky(true)
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop)

      if (scrollTop > 300) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollTop])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`sticky top-0 w-full bg-white p-3 font-poppins z-10 transition-transform `}>
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo/Brand Name */}
          <img
            src='https://saleofast.com/wp-content/uploads/2024/09/Saleofast-logo-for-white-bg.png'
            alt="Saleofast Logo"
            className="h-7"
          />

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-2 items-center">
            <div className="relative group">
              <button
                onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                className="flex items-center text-black cursor-pointer px-4 py-2 rounded transition"
              >
                <h2>Industries</h2>
                <svg
                  className={`ml-2 w-4 h-4 font-bold transition-transform ${isIndustriesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isIndustriesOpen && (
                <div className="absolute right-0 left-0 mt-2 bg-white text-black rounded shadow-lg p-5" style={{ width: '200px' }}>
                  <Link href="/industry1" className="block px-4 py-2 hover:bg-gray-200">
                    Industry 1
                  </Link>
                  <Link href="/industry2" className="block px-4 py-2 hover:bg-gray-200">
                    Industry 2
                  </Link>
                  <Link href="/industry3" className="block px-4 py-2 hover:bg-gray-200">
                    Industry 3
                  </Link>
                </div>
              )}
            </div>

            <div className="relative group ml-6">
              <button
                onClick={() => setIsServiceOpen(!isServiceOpen)}
                className="flex items-center text-black px-4 py-2 rounded transition"
              >
                <h2>Service</h2>
                <svg
                  className={`ml-2 w-4 h-4 transition-transform ${isServiceOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServiceOpen && (
                <div className="absolute left-0 mt-2 bg-white text-black rounded shadow-lg p-5 " style={{ width: '200px' }}>
                  <Link href="/service1" className="block px-8 py-2 hover:bg-gray-200">
                    Service 1 ssssss
                  </Link>
                  <Link href="/service2" className="block px-4 py-2 hover:bg-gray-200">
                    Service 2 ddddd
                  </Link>
                  <Link href="/service3" className="block px-4 py-2 hover:bg-gray-200">
                    Service 3 dddddd
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about" className="text-black px-4 py-2 rounded transition ml-6">
              <h2>About</h2>
            </Link>
            <Link href="/contact" className="text-black px-4 py-2 rounded transition ml-6">
              <h2>Contact</h2>
            </Link>
          </div>

          {/* Desktop Right Links */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Box */}
            <div className="relative ">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2  rounded-lg border border-gray-300
                 focus:outline-none focus:border-gray-500" style={{width:'150px'}}
              />

            </div>

            {/* Login Link */}
            <Link href="/login" className="text-black hover:bg-gray-600 px-4 py-2 rounded transition">
              <p>Login</p>
            </Link>
          </div>

        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute inset-x-0 top-16 bg-gray-900 p-4`}>
          <div className="flex flex-col items-center space-y-4">
            <Link href="/" className="text-white hover:bg-gray-700 px-4 py-2 rounded transition">
              Home
            </Link>
            <div className="relative group">
              <button
                onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                className="flex items-center text-white hover:bg-gray-700 px-4 py-2 rounded transition"
              >
                Industries
                <svg
                  className={`ml-2 w-4 h-4 transition-transform ${isIndustriesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isIndustriesOpen && (
                <div className="absolute left-0 mt-2 bg-gray-700 text-white rounded shadow-lg">
                  <Link href="/industry1" className="block px-4 py-2 hover:bg-gray-600">
                    Industry 1
                  </Link>
                  <Link href="/industry2" className="block px-4 py-2 hover:bg-gray-600">
                    Industry 2
                  </Link>
                  <Link href="/industry3" className="block px-4 py-2 hover:bg-gray-600">
                    Industry 3
                  </Link>
                </div>
              )}
            </div>
            <div className="relative group">
              <button
                onClick={() => setIsServiceOpen(!isServiceOpen)}
                className="flex items-center text-white hover:bg-gray-700 px-4 py-2 rounded transition"
              >
                Service
                <svg
                  className={`ml-2 w-4 h-4 transition-transform ${isServiceOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServiceOpen && (
                <div className="absolute left-0 mt-2 bg-gray-700 text-white rounded shadow-lg">
                  <Link href="/service1" className="block px-4 py-2 hover:bg-gray-600">
                    Service 1
                  </Link>
                  <Link href="/service2" className="block px-4 py-2 hover:bg-gray-600">
                    Service 2
                  </Link>
                  <Link href="/service3" className="block px-4 py-2 hover:bg-gray-600">
                    Service 3
                  </Link>
                </div>
              )}
            </div>
            <Link href="/about" className="text-white hover:bg-gray-700 px-4 py-2 rounded transition">
              About
            </Link>
            <Link href="/contact" className="text-white hover:bg-gray-700 px-4 py-2 rounded transition">
              Contact
            </Link>
            <Link href="/search" className="text-white hover:bg-gray-700 px-4 py-2 rounded transition">
              Search
            </Link>
            <Link href="/login" className="text-white hover:bg-gray-700 px-4 py-2 rounded transition">
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 15l-7-7-7 7" />
          </svg>
        </button>
      )}
    </>
  )
}

export default Navbar
