import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function SearchPage() {
    const navigate = useNavigate();
    const handleback = () => {
        navigate(-1)
    }
    const [searchshow, Setsearchshow] = useState(true);
    const [query, setQuery] = useState('');
    const searchMovies = async () => {
        sessionStorage.setItem("searchitem", JSON.stringify(query));
    };

    return (
        <>
            <div className="container-fluid p-0" style={{ minHeight: '100vh', backgroundColor: '#191e25' }}>
                {/* navbar start */}
                <>
                    <div className="navbar2 bg-black d-lg-none container-fluid">
                        <div className="row d-flex">
                            <div className="col-3 col-sm-2 ps-4">
                                <Link to='/menufile' className='text-decoration-none'><div className="menuclss d-flex">Menu <FontAwesomeIcon icon="fa-solid fa-angle-down" className='menudown' /></div></Link>
                            </div>
                            <div className="col-5 col-sm-6 col-md-8">
                                <div className="movieslogo">
                                    <Link to="/home" className='text-decoration-none'><img src="./Images/logo/KB_logo.jpg" alt="" className='logoSizenavbar11' /></Link>
                                </div>
                            </div>
                            <div className="col-2 col-sm-2 col-md-1 text-end" onClick={handleback} style={{ backgroundColor: '#191e25' }}>
                                <FontAwesomeIcon icon="fa-solid fa-xmark" className='searchicon text-center' />
                            </div>
                            <div className="col-2 col-sm-2 col-md-1">
                                <Link to='/signoutpage'><span className='signinhover'> <img src="./Images/Home/profile_logo.svg" alt="" className='signInImg' /></span></Link>
                            </div>
                        </div>
                    </div>

                </>
                {/* navbar end */}

                {searchshow && <div className="searchbox1 p-3 ">
                    <div className="box11 mtop">
                        <div className="row d-flex outln">
                            <div className="col-11">
                                <form >
                                    <input type="search" name="" id="" className='searchinputcss p-1 ' value={query} onChange={(e) => setQuery(e.target.value)} />
                                </form>
                            </div>
                            <div className="col-1 proition_seacrh_rel text-center">
                                <Link to='/search' className='text-decoration-none' style={{ color: '#aaaaaa' }}><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='fs-4 p-0 m-0 position_absulte_seacrh' onClick={searchMovies} /></Link>
                            </div>
                        </div>
                    </div>
                </div>}

            </div>
        </>
    )
}

export default SearchPage