import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SignOutpage() {
    const navigate = useNavigate();
    const handleback = () => {
        navigate(-1);
    }

    const handlecategory = (e) => {
        sessionStorage.setItem("categoryid", JSON.stringify(e.target.id))
    }


    return (
        <>
            {/* navbar start */}
            <div className="navbar2 bg-black d-lg-none container-fluid">
                <div className="row d-flex">
                    <div className="col-3 col-sm-2">
                        <Link to='/menufile' className='text-decoration-none'><div className="menuclss d-flex">Menu <FontAwesomeIcon icon="fa-solid fa-angle-down" className='menudown' /></div></Link>
                    </div>
                    <div className="col-5 col-sm-6 col-md-8">
                        <div className="movieslogo">
                            <Link to="/home" className='text-decoration-none'><img src="./Images/logo/KB_logo.jpg" alt="" className='logoSizenavbar11' /></Link>
                        </div>
                    </div>
                    <div className="col-2 col-sm-2 col-md-1 ps-0 alignrightcss" >
                        <Link to='/searchpage' ><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='searchicon' /></Link>
                    </div>
                    <div className="col-2 col-sm-2 col-md-1" onClick={handleback} style={{ backgroundColor: '#191e25' }}>
                        <span className='signinhover'> <img src="./Images/Home/profile_logo.svg" alt="" className='signInImg' /></span>
                    </div>
                </div>
            </div>
            {/* navbar End */}
            <div className="container-fluid  d-lg-none" style={{ backgroundColor: '#191e25', minHeight: '100vh', fontSize: '20px', fontWeight: '400' }}>
                <div className="row pt-5 pt-lg-0 ps-3" style={{ color: '#aaaaaa' }}>
                    <div className="col-12 mt-3 mt-lg-0 ">
                        <Link to='/SignIn' className='text-decoration-none' style={{ color: '#aaaaaa', fontSize: '20px', fontWeight: '400',cursor:'pointer' }}><span>SignOut</span></Link>
                    </div>
                    <div className="col-12 mt-3">
                        <span>
                            Help
                        </span>
                    </div>
                    <div className="col-12 my-3">
                        Watch Anywhere
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignOutpage