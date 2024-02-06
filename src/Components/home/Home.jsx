import React from 'react'
import HomeCarousel from './HomeCarousel'
import HomeCard1 from './HomeCard1'
import './Home.css'
import HomeNavbar from './HomeNavbar'
import Footer from './Footer'

function Home() {
  return (
    <>
      <div className="container-fluid p-0 bg-black">
        <HomeNavbar />
        <HomeCarousel />
        <HomeCard1 />
        <Footer/>
      </div>
    </>
  )
}

export default Home