import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Create() {
    let value;
    if (localStorage.getItem("tempemail"))
        value = JSON.parse(localStorage.getItem("tempemail"))
    else
        value = ""
    const [signn, setSignn] = useState(false)
    const [inpemail, setInpemail] = useState(value)
    const [inpasswod, setInpasswod] = useState()
    const [onCreate, setOnCreate] = useState(false)
    const [chk, setChk] = useState(false)
    const [psword, setPsword] = useState(false)
    const [datapassword, setDatapassword] = useState([])
    const [dataemail, setDataemail] = useState([])
    const [showPassword, setShowPassword] = useState(false);

    function checkemail(emailcheck) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailcheck)
    }

    function checkpassword(password) {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    }

    const handleEmail = (e) => {
        setInpemail(e.target.value);
        setChk(checkemail(inpemail))
        if (checkemail(inpemail) && checkpassword(inpasswod)) {
            setOnCreate(true)
        }
        else {
            setOnCreate(false)
        }
    }

    const handlepassword = (e) => {
        setInpasswod(e.target.value)
        setPsword(checkpassword(inpasswod))
        if (checkemail(inpemail) && checkpassword(inpasswod)) {
            setOnCreate(true)
        }
        else {
            setOnCreate(false)
        }
    }

    const handleSign = () => {
        setSignn(true)
        if (checkemail(inpemail) && checkpassword(inpasswod)) {
            let temp = [inpasswod]
            let temp2 = [inpemail]
            localStorage.setItem("email", JSON.stringify(dataemail.concat(temp2)))
            localStorage.setItem("password", JSON.stringify(datapassword.concat(temp)))
            setDataemail([])
            setDatapassword([])
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    useEffect(() => {

        // password 
        if (localStorage.getItem("password")) {
            let temp = JSON.parse(localStorage.getItem("password"))
            setDatapassword(datapassword.concat(temp))
        }
        else {
            localStorage.setItem("password", "[]")
        }

        // Eamil
        if (localStorage.getItem("email")) {
            let temp = JSON.parse(localStorage.getItem("email"))
            setDataemail(dataemail.concat(temp))
        }
        else {
            localStorage.setItem("email", "[]")
        }
    }, [])

    return (
        <>
            {/* the create section */}
            {/* navbar part */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <Link to="/"><img src="/Images/logo/KB Logo1.jpg" alt="" className='logoSize' /></Link>
                    </div>
                    <div className="col-6">
                        <div className="text-end">
                            <Link to="/SignIn"><button className='sign_btns'>Sign In</button></Link>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>

            {/* create form */}
            <div className="container mt-5 mb-5">
                <div className="row mt-1 nt-sm-3 mt-md-4 d-flex justify-content-center">
                    <div className="col-11 col-sm-8 col-md-6 col-lg-4">
                        <div className="box">
                            <div className="top_content_form">
                                Create a Password to Start
                            </div>
                            <div className="second_content_form">
                                Just a few more steps and you're done!
                                We hate paperwork, too.
                            </div>
                            <div className="form_mail mt-2">
                                <input type="email" placeholder='Enter the Email ' className='inp_email text-black' onChange={handleEmail} value={inpemail} />
                                {signn && !chk && <p className='text-danger'><FontAwesomeIcon icon="fa-regular fa-circle-xmark" /> Invalid Email</p>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-11 col-sm-8 col-md-6 col-lg-4">
                        <div className="box">
                            <div className="form_mail mt-3" style={{position:'relative'}}>
                                <input type={showPassword ? 'text' : 'password'} placeholder='Create a password' className='inp_pass text-black' onChange={handlepassword} value={inpasswod}/>
                                <span onClick={togglePasswordVisibility} className='showpasword' style={{ cursor: 'pointer' }}>{showPassword ? <FontAwesomeIcon icon="fa-regular fa-eye " className='fs-5' /> : <FontAwesomeIcon icon="fa-regular fa-eye-slash" className='fs-5' />} </span>
                                {signn && !psword && <p className='text-danger'><FontAwesomeIcon icon="fa-regular fa-circle-xmark" /> Password must contain at least eight characters,both lower and uppercase letters and special characters</p>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center mb-5">
                    <div className="col-11 col-sm-8 col-md-6 col-lg-4">
                        <div className="box mb-5">
                            <div className="btton mt-3">
                                {onCreate && <Link to="/SignIn"> <button className='btton_pas' onClick={handleSign}>Sign In</button></Link>}
                                {!onCreate && <button className='btton_pas' onClick={handleSign}>Sign In</button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* footer part */}
            <div className="container-fluid Create_footer">
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
        </>
    )
}

export default Create