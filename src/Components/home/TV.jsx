import React from 'react'
import TVCarousel from './TVCarousel'
import TVCard from './TVCard'
import './Home.css'
import Footer from './Footer'
import TVNavbar from './TVNavbar'


function TV() {
    return (
        <>
            <div className="container-fluid p-0 bg-black">
                <TVNavbar />
                <TVCarousel />
                <TVCard />
                <Footer/>
            </div>
        </>
    )
}

export default TV