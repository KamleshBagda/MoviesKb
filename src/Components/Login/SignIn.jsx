import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
    const [CheckedBox, setCheckedBox] = useState(true)
    const [signn, setSignn] = useState(false)
    const [inpemail, setInpemail] = useState("")
    const [inpasswod, setInpasswod] = useState("")
    const [onCreate, setOnCreate] = useState(false)
    const [chk, setChk] = useState(false)
    const [psword, setPsword] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    let arr2,arr;


    const handleEmail = (e) => {
        setInpemail(e.target.value);
        let index = arr2.indexOf(e.target.value);
        if (index == -1) {
            setChk(false)
        }
        else {
            setChk(true)
        }

    }

    const handlepassword = (e) => {
        setInpasswod(e.target.value)
        let emailindex = arr2.indexOf(inpemail)
        if (arr[emailindex] == e.target.value)
            setPsword(true)
        else
            setPsword(false)
    }

    const handleSign = () => {
        setSignn(true)
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handlecheckbox = (e) => {
        setCheckedBox(e.target.checked)
    }

    useEffect(() => {
        if (chk && psword) {
            setOnCreate(true)
        }
        else {
            setOnCreate(false)
        }
    })
    useEffect(()=>{
        if(localStorage.getItem("email")){
             arr2 = JSON.parse(localStorage.getItem("email")) 
        }
        else{
            arr2=[]
        }
        if(localStorage.getItem("password")){
            arr = JSON.parse(localStorage.getItem("password"))
        }
        else{
           arr=[]
        }
    })
    return (
        <>
            <div className="container-fluid sign_main_page p-0">
                <div className="container ">
                    <div className="row">
                        <div className="col-12">
                            <Link to="/"><img src="/Images/logo/KB_logo.jpg" alt="" className='logoSize' /></Link>
                        </div>
                    </div>
                </div>

                <div className="container mb-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-11 col-sm-10 col-md-6 col-lg-4 transprant_bg p-1 p-md-3 p-lg-4 p-xl-4 p-xxl-5 ">
                            <div className="row pt-1 pt-sm-2 pt-md-3 pb-1 pb-md-5 ps-4 mx-0">
                                <div className="col-11 ">
                                    <div className="sign_heading mb-3">
                                        Sign In
                                    </div>
                                </div>
                                <div className="col-11 mb-3 p-0">
                                    <input type="text" placeholder='Email or Phone Number' className='sign_emai_numb text-white' onChange={handleEmail} />
                                    {signn && !chk && <p className='text-danger'><FontAwesomeIcon icon="fa-regular fa-circle-xmark" /> Email Id Not Found</p>}
                                </div>
                                <div className="col-11 mb-4 p-0" style={{position:'relative'}} >
                                    <input type={showPassword ? 'text' : 'password'} placeholder='Password' className='sign_passwordd text-white' onChange={handlepassword} value={inpasswod} />
                                    <span onClick={togglePasswordVisibility} className='showpasword' style={{ cursor: 'pointer' }}>{showPassword ? <FontAwesomeIcon icon="fa-regular fa-eye " className='fs-5' /> : <FontAwesomeIcon icon="fa-regular fa-eye-slash" className='fs-5' />} </span>
                                    {signn && !psword && <p className='text-danger'><FontAwesomeIcon icon="fa-regular fa-circle-xmark" />Password not match</p>}
                                </div>
                                <div className="col-11 pb-1 pb-sm-2 p-0">
                                    {onCreate && <Link to="/home"> <button className='sign_in_button' onClick={handleSign}>Sign In</button></Link>}
                                    {!onCreate && <button className='sign_in_button' onClick={handleSign}>Sign In</button>}
                                </div>
                                <div className="col-11 mb-2 mb-md-5 p-0">
                                    <div className="row pos_realt">
                                        <div className="col-6">
                                            <input type="checkbox" className='checkbox_btn posabsult' onClick={handlecheckbox} checked={CheckedBox} /><span className='rember_me ms-1 ms-sm-0'>Remember Me</span>
                                        </div>
                                        <div className="col-6 text-end">
                                            <Link to='/create' className='needhelp text-primary'>Forgot password</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-11 my-3 p-0 new_user_kb">
                                    New to KB?&nbsp;<Link to="/Create" className='sign_up_color'>Sign Up now.</Link>
                                </div>
                                <div className="col-11 mb-3 p-0 recaptutre">
                                    This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='Learn_more'>Learn More</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* footer part in sign in */}
                <div className="container-fluid m-0 Create_footer transprant_bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 py-4">
                                Questions? Call <span className='numbr'>000-800-919-1694</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 col-sm-4 col-md-2">
                                <ul className='list-unstyled'>
                                    <li className='numbr mb-2'>FAQ</li>
                                    <li className='numbr mb-2'>Privacy</li>
                                </ul>
                            </div>
                            <div className="col-6 col-sm-4 col-md-2">
                                <ul className='list-unstyled'>
                                    <li className='numbr mb-2'>Help Centre</li>
                                    <li className='numbr mb-2'>Cookie Preferences</li>
                                </ul>
                            </div>
                            <div className="col-6 col-sm-4 col-md-2">
                                <ul className='list-unstyled'>
                                    <li className='numbr mb-2'>Netflix Shop</li>
                                    <li className='numbr mb-2'>Corporate Information</li>
                                </ul>
                            </div>
                            <div className="col-6 col-sm-4 col-md-2">
                                <ul className='list-unstyled'>
                                    <li className='numbr mb-2'>Terms of Use</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row pb-5">
                            <div className="col-12">
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle create_lag_btn mt-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <FontAwesomeIcon icon="fa-solid fa-globe" /><span className=''>&nbsp;English</span>
                                    </button>
                                    <ul className="dropdown-menu p-0 border-0 rounded">
                                        <li><Link className="dropdown-item lang_hover" to="#">English</Link></li>
                                        <li><Link className="dropdown-item lang_hover" to="#">हिंदी</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        </>
    )
}

export default SignIn