import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function TVMenuFile() {
    const navigate = useNavigate();
    const handleback = () => {
        navigate(-1);
    }
    const handlehideitem = () => {

        let d1 = document.getElementById('hideitem')
        if (d1.style.display == 'none') {
            d1.style.display = 'block';
            document.getElementById('uphome').style.display = 'block';
            document.getElementById('downhome').style.display = 'none';
            document.getElementById('close').style.display = 'none';
            document.getElementById('open').style.display = 'block';
            document.getElementById('home').style.color = 'white'
        }
        else {
            d1.style.display = 'none';
            document.getElementById('uphome').style.display = 'none';
            document.getElementById('downhome').style.display = 'block';
            document.getElementById('close').style.display = 'block';
            document.getElementById('open').style.display = 'none';
            document.getElementById('home').style.color = '#aaaaaa'
        }
    }

    const handlecategory = (e) => {
        sessionStorage.setItem("categoryid", JSON.stringify(e.target.id))
    }

    const catgoryfunct = () => {
        let d1 = document.getElementById('categoryshow')
        if (d1.style.display == 'none') {
            d1.style.display = 'block';
            document.getElementById('upcategory').style.display = 'block';
            document.getElementById('downcategory').style.display = 'none';
            document.getElementById('upcategory1').style.display = 'block';
            document.getElementById('downcategory1').style.display = 'none';
            document.getElementById('category').style.color = 'white'
        }
        else {
            d1.style.display = 'none';
            document.getElementById('upcategory').style.display = 'none';
            document.getElementById('downcategory').style.display = 'block';
            document.getElementById('upcategory1').style.display = 'none';
            document.getElementById('downcategory1').style.display = 'block';
            document.getElementById('category').style.color = '#aaaaaa'
        }
    }
    return (
        <>
            {/* navbar start */}
            <div className="navbar2 bg-black d-lg-none container-fluid">
                <div className="row d-flex">
                    <div className="col-3 col-sm-2" style={{ backgroundColor: '#191e25' }} onClick={handleback}>
                        <div className="menuclss d-flex">Menu <FontAwesomeIcon icon="fa-solid fa-angle-up" className='menudown' /></div>
                    </div>
                    <div className="col-5 col-sm-6 col-md-8">
                        <div className="movieslogo">
                            <Link to="/home" className='text-decoration-none'><img src="./Images/logo/KB_logo.jpg" alt="" className='logoSizenavbar11' /></Link>
                        </div>
                    </div>
                    <div className="col-2 col-sm-2 col-md-1">
                        <Link to='/tvsearchpage' ><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='searchicon' /></Link>
                    </div>
                    <div className="col-2 col-sm-2 col-md-1">
                    <Link to='/signoutpage'><span className='signinhover'> <img src="./Images/Home/profile_logo.svg" alt="" className='signInImg' /></span></Link>
                    </div>
                </div>
            </div>
            {/* navbar End */}
            <div className="container-fluid  d-lg-none" style={{ backgroundColor: '#191e25', minHeight: '100vh', fontSize: '20px', fontWeight: '400' }}>
                <div className="row menupos">
                    <div className="col-12 mt-5 mt-lg-2" style={{ color: '#aaaaaa' }} id='home'>
                        <div onClick={handlehideitem} className='pt-2 pt-lg-0'><FontAwesomeIcon icon="fa-solid fa-house" className='me-2' /><span>Home</span><FontAwesomeIcon icon="fa-solid fa-angle-down" className='menudown1 mt-5 mt-lg-0' id='downhome' style={{ display: 'block' }} /><FontAwesomeIcon icon="fa-solid fa-angle-up" className='menudown1 mt-5 mt-lg-0' id='uphome' style={{ display: 'none' }} /></div>
                        <div className="row pb-2 pt-1" id='hideitem' style={{ color: '#aaa', backgroundColor: '#33373d', display: 'none' }}>
                            <div className="col-12 mt-2" style={{ color: '#aaaaaa' }}>
                                <Link to='/home' className='text-decoration-none' style={{ color: '#aaaaaa', fontSize: '20px', fontWeight: '400' }}><FontAwesomeIcon icon="fa-solid fa-film" className='me-2' /><span>Movies</span></Link>
                            </div>
                            <div className="col-12 mt-2" style={{ color: '#aaaaaa' }}>
                                <Link to='/tv' className='text-decoration-none' style={{ color: '#aaaaaa', fontSize: '20px', fontWeight: '400' }}><FontAwesomeIcon icon="fa-solid fa-film" className='me-2' /><span>TV Shows</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 my-2" style={{ color: '#aaaaaa' }}>
                        <FontAwesomeIcon icon="fa-solid fa-tv" className='me-2' /><span>Live TV</span>
                    </div>
                    <div className="col-12 mb-2" style={{ color: '#aaaaaa' }} id='category'>
                        <div id='close' style={{ display: 'block' }} onClick={catgoryfunct}><FontAwesomeIcon icon="fa-solid fa-table-cells-large" className='me-2' /><span>Categories</span><FontAwesomeIcon icon="fa-solid fa-angle-down" className='menudown2 mt-5 mt-lg-0' id='downcategory' style={{ display: 'block' }} /><FontAwesomeIcon icon="fa-solid fa-angle-up" className='menudown2 mt-5 mt-lg-0' id='upcategory' style={{ display: 'none' }} /></div>
                        <div id='open' style={{ display: 'none' }} onClick={catgoryfunct}><FontAwesomeIcon icon="fa-solid fa-table-cells-large" className='me-2' /><span>Categories</span><FontAwesomeIcon icon="fa-solid fa-angle-down" className='menudown3 mt-5 mt-lg-0' id='downcategory1' style={{ display: 'block' }} /><FontAwesomeIcon icon="fa-solid fa-angle-up" className='menudown3 mt-5 mt-lg-0' id='upcategory1' style={{ display: 'none' }} /></div>
                    </div>
                    <div style={{ color: '#aaa', backgroundColor: '#33373d', display: 'none' }} id='categoryshow' >
                        <ul className='list-unstyled me-lg-3 me-xl-4 mb-0'>
                            {/* <Link to='/tvcategoriesshow' className='text-decoration-none' style={{ color: '#aaaaaa', fontSize: '19px', fontWeight: '400' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 rounded ms-4 my-2' onClick={handlecategory} id='28' >Action</li></Link> */}
                            <Link to='/tvcategoriesshow' className='text-decoration-none' style={{ color: '#aaaaaa', fontSize: '19px', fontWeight: '400' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 rounded ms-4 my-2' onClick={handlecategory} id='80' >Crime</li></Link>
                            <Link to='/tvcategoriesshow' className='text-decoration-none' style={{ color: '#aaaaaa', fontSize: '19px', fontWeight: '400' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 rounded ms-4 my-2' onClick={handlecategory} id='35' >Comedy</li></Link>
                            <Link to='/tvcategoriesshow' className='text-decoration-none' style={{ color: '#aaaaaa', fontSize: '19px', fontWeight: '400' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 rounded ms-4 my-2' onClick={handlecategory} id='18' >Drama</li></Link>
                            <Link to='/tvcategoriesshow' className='text-decoration-none' style={{ color: '#aaaaaa', fontSize: '19px', fontWeight: '400' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 rounded ms-4 my-2' onClick={handlecategory} id='16' >Animation</li></Link>
                            {/* <Link to='/tvcategoriesshow' className='text-decoration-none' style={{ color: '#aaaaaa', fontSize: '19px', fontWeight: '400' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 rounded ms-4 my-2' onClick={handlecategory} id='53' >Thriller</li></Link> */}
                            {/* <Link to='/tvcategoriesshow' className='text-decoration-none' style={{ color: '#aaaaaa', fontSize: '19px', fontWeight: '400' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 rounded ms-4 my-2' onClick={handlecategory} id='878' >Science Fiction</li></Link> */}
                            <Link to='/tvcategoriesshow' className='text-decoration-none' style={{ color: '#aaaaaa', fontSize: '19px', fontWeight: '400' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 rounded ms-4 my-2' onClick={handlecategory} id='10749' >Romance</li></Link>
                            <Link to='/tvcategoriesshow' className='text-decoration-none' style={{ color: '#aaaaaa', fontSize: '19px', fontWeight: '400' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 rounded ms-4 my-2' onClick={handlecategory} id='16' >Adventure</li></Link>
                            <Link to='/tvcategoriesshow' className='text-decoration-none' style={{ color: '#aaaaaa', fontSize: '19px', fontWeight: '400' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 rounded ms-4 my-2' onClick={handlecategory} id='10751' >Family</li></Link>
                            <Link to='/tvcategoriesshow' className='text-decoration-none' style={{ color: '#aaaaaa', fontSize: '19px', fontWeight: '400' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 rounded ms-4 my-2' onClick={handlecategory} id='14' >Fantasy</li></Link>
                            <Link to='/tvcategoriesshow' className='text-decoration-none' style={{ color: '#aaaaaa', fontSize: '19px', fontWeight: '400' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 rounded ms-4 my-2' onClick={handlecategory} id='9648' >Mystery</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TVMenuFile