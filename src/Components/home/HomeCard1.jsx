import React, { useState } from 'react'
import Slide1 from './Slider/Slide1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


function HomeCard1() {
    const [categoryarr, setCategoryarr] = useState([
        {
            "category": "Action",
            "genreId":"28"
        },
        {
            "category": "Adventure",
            "genreId":"12"
        },
        {
            "category": "Horror",
            "genreId":"27"
        },
        {
            "category": "Comedy",
            "genreId":"35"
        },
        {
            "category": "Mystery",
            "genreId":"9648"
        },
        {
            "category": "Drama",
            "genreId":"18"
        },
        {
            "category": "Family",
            "genreId":"10751"
        },
        {
            "category": "Fantasy",
            "genreId":"14"
        },
        {
            "category": "Romance",
            "genreId":"10749"
        },
        {
            "category": "Science Fiction",
            "genreId":"878"
        },
        {
            "category": "Thriller",
            "genreId":"53"
        },
        {
            "category": "Crime",
            "genreId":"80"
        },

    ])

    const handleseemore =(e)=>{
    sessionStorage.setItem("categoryid", JSON.stringify(e))
    }
    return (
        <>
            {
                categoryarr.map((e, i) => (
                    <>
                        <div className="px-1 px-sm-2 px-md-3 movies text-white ms-2 mt-1 mt-sm-2 mt-md-3 position_realt_see_more">
                            <h4>{e.category}</h4>
                            <Link to='/categoriesshow' className='text-decoration-none' style={{ color: 'white' }}><h4 className='rounded Position_absult_see_more movies fw-medium' onClick={()=>handleseemore(e.genreId)}>See More<FontAwesomeIcon icon="fa-solid fa-angle-right" className='fs-5 ms-2'/></h4></Link>
                        </div>
                        <Slide1 data={e.genreId} />
                    </>

                ))
            }

        </>
    )
}

export default HomeCard1