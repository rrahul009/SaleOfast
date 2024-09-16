import AboutCompany from '@/components/AboutCompany'
import Carausel from '@/components/Carousel'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import OurClient from '@/components/OurClient'
import OurPartner from '@/components/OurPartner'
import OurServices from '@/components/OurServices'
import WeOffer from '@/components/WeOffer'
import React from 'react'
 
 const page = () => {
   return (
     <div>
      <Header/>
      <Navbar/>
     <Carausel/>
     <OurServices/>
       <AboutCompany/>
       <OurClient/>
        <WeOffer/>
       <OurPartner/>
       <Footer/>
     </div>
   )
 }
 
 export default page
 