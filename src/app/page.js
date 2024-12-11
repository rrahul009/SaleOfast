import AboutCompany from '@/components/AboutCompany'
import Carausel from '@/components/Carousel'
import Industries from '@/components/Industries'
import OurClient from '@/components/OurClient'
import OurPartner from '@/components/OurPartner'
import OurServices from '@/components/OurServices'
import WeOffer from '@/components/WeOffer'
import CompareWithSaloFast from '../components/CompareWithSaloFast'
import React from 'react'
import CustomerChooseUs from '@/components/CustomerChooseUs'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>

      {/* <Header/> */}
      <Carausel />
     <div className="bg-gray-50 p-6">
     <div className="flex flex-col lg:flex-row justify-between items-center px-6 py-12 rounded-xl bg-white shadow-sm">
        {/* Left Column: Heading */}
        <div className="flex flex-col justify-center items-start w-full lg:w-1/2 mb-6 lg:mb-0 pl-6 lg:pl-12">
          <p className="text-lg text-gray-600 font-medium">What We're Offering</p>
          <p className="text-3xl text-[#070E79] lg:text-4xl font-bold mt-2">
            Dealing in all Sales
            <span className="block lg:inline text-center mt-2 lg:mt-0 lg:ml-3">
              Solutions
            </span>
          </p>
        </div>

        {/* Right Column: Content */}
        <div className="lg:mr-20 lg:w-2/5">
        <p className="text-3xl font-bold mb-2">SaleOfast</p>
          <p className="text-md leading-relaxed text-black" style={{ fontWeight: '400' }}>
            At Saleofast, we specialize in dealing with all sales solutions to
            meet the diverse needs of modern businesses. Our comprehensive suite
            of tools and services covers every aspect of the sales process,
            ensuring seamless integration and maximum efficiency. From robust
            CRM systems that centralize customer data to advanced analytics
            platforms that provide actionable insights, our solutions are
            designed to enhance every stage of the sales journey.
          </p>
        </div>
      </div>
     </div>
      <Industries/>
      <OurServices/>
      
      {/* <OurClient/> */}
      <WeOffer/>
      {/* <OurPartner/> */}
      <CompareWithSaloFast/>
      <CustomerChooseUs/>
      <Footer/>


    </div>
  )
}

export default page
