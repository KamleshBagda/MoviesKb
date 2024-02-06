import React, { useState } from 'react'
import Slide2 from './Slider/Slide2';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TVCard() {
    const handleseemore = (e) => {
        sessionStorage.setItem("categoryid", JSON.stringify(e))
    }

    const [categoryarr, setCategoryarr] = useState([
        {
            "category": "Comedy Shows",
            "genreId": 35
        },
        {
            "category": "Mystery Shows",
            "genreId": 9648
        },
        {
            "category": "Drama Shows",
            "genreId": 18
        },
        {
            "category": "Family Shows",
            "genreId": 10751
        },
        {
            "category": "Crime Shows",
            "genreId": 80
        },
        {
            "category": "Animation Shows",
            "genreId": 16
        },
        {
            "category": "Documentary Shows",
            "genreId": 99
        }
    ])
    return (
        <>
            {
                categoryarr.map((e, i) => (
                    <>
                        <div className="px-1 px-sm-2 px-md-3 movies text-white ms-2 mt-1 mt-sm-2 mt-md-3 position_realt_see_more">
                            <h3>{e.category}</h3>
                            <Link to='/tvcategoriesshow' className='text-decoration-none' style={{ color: 'white' }}><h4 className='rounded Position_absult_see_more movies fw-medium' onClick={() => handleseemore(e.genreId)}>See More<FontAwesomeIcon icon="fa-solid fa-angle-right" className='fs-5 ms-2' /></h4></Link>
                        </div>
                        <Slide2 data={e?.genreId} />
                    </>
                ))
            }
        </>
    )
}

export default TVCard