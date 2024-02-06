import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



function LoginNavbar() {

    const [valemail, setValemail] = useState("")
    const [onsubmit, setOnsubmit] = useState(false)
    const [onCreate, setOnCreate] = useState(false)
    const [chk, setChk] = useState(false)
    let plusi,clossi;


    useEffect(() => {
        let d1 = document.getElementById('plusicon');
        let d2 = document.getElementById('crossicons');
         plusi = d1?.innerHTML
         clossi = d2?.innerHTML
    }, [])

    const one = () => {
        if (document.getElementById('id1').style.display == "none") {
            document.getElementById('id1').style.display = "block";
            document.getElementById('icon1').innerHTML = clossi;
            document.getElementById('id2').style.display = "none";
            document.getElementById('icon2').innerHTML = plusi;
            document.getElementById('id3').style.display = "none";
            document.getElementById('icon3').innerHTML = plusi;
            document.getElementById('id4').style.display = "none";
            document.getElementById('icon4').innerHTML = plusi;
            document.getElementById('id5').style.display = "none";
            document.getElementById('icon5').innerHTML = plusi;
            document.getElementById('id6').style.display = "none";
            document.getElementById('icon6').innerHTML = plusi;
        }
        else {
            document.getElementById('id1').style.display = "none";
            document.getElementById('icon1').innerHTML = plusi;
        }
    }
    const two = () => {
        if (document.getElementById('id2').style.display == "none") {
            document.getElementById('id2').style.display = "block";
            document.getElementById('icon2').innerHTML = clossi;
            document.getElementById('id1').style.display = "none";
            document.getElementById('icon1').innerHTML = plusi;
            document.getElementById('id3').style.display = "none";
            document.getElementById('icon3').innerHTML = plusi;
            document.getElementById('id4').style.display = "none";
            document.getElementById('icon4').innerHTML = plusi;
            document.getElementById('id5').style.display = "none";
            document.getElementById('icon5').innerHTML = plusi;
            document.getElementById('id6').style.display = "none";
            document.getElementById('icon6').innerHTML = plusi;
        }
        else {
            document.getElementById('id2').style.display = "none";
            document.getElementById('icon2').innerHTML = plusi;
        }
    }
    const three = () => {
        if (document.getElementById('id3').style.display == "none") {
            document.getElementById('id3').style.display = "block";
            document.getElementById('icon3').innerHTML = clossi;
            document.getElementById('id1').style.display = "none";
            document.getElementById('icon1').innerHTML = plusi;
            document.getElementById('id2').style.display = "none";
            document.getElementById('icon2').innerHTML = plusi;
            document.getElementById('id4').style.display = "none";
            document.getElementById('icon4').innerHTML = plusi;
            document.getElementById('id5').style.display = "none";
            document.getElementById('icon5').innerHTML = plusi;
            document.getElementById('id6').style.display = "none";
            document.getElementById('icon6').innerHTML = plusi;
        }
        else {
            document.getElementById('id3').style.display = "none";
            document.getElementById('icon3').innerHTML = plusi;
        }
    }
    const four = () => {
        if (document.getElementById('id4').style.display == "none") {
            document.getElementById('id4').style.display = "block";
            document.getElementById('icon4').innerHTML = clossi;
            document.getElementById('id1').style.display = "none";
            document.getElementById('icon1').innerHTML = plusi;
            document.getElementById('id2').style.display = "none";
            document.getElementById('icon2').innerHTML = plusi;
            document.getElementById('id3').style.display = "none";
            document.getElementById('icon3').innerHTML = plusi;
            document.getElementById('id5').style.display = "none";
            document.getElementById('icon5').innerHTML = plusi;
            document.getElementById('id6').style.display = "none";
            document.getElementById('icon6').innerHTML = plusi;
        }
        else {
            document.getElementById('id4').style.display = "none";
            document.getElementById('icon4').innerHTML = plusi;
        }
    }
    const five = () => {
        if (document.getElementById('id5').style.display == "none") {
            document.getElementById('id5').style.display = "block";
            document.getElementById('icon5').innerHTML = clossi;
            document.getElementById('id1').style.display = "none";
            document.getElementById('icon1').innerHTML = plusi;
            document.getElementById('id2').style.display = "none";
            document.getElementById('icon2').innerHTML = plusi;
            document.getElementById('id3').style.display = "none";
            document.getElementById('icon3').innerHTML = plusi;
            document.getElementById('id4').style.display = "none";
            document.getElementById('icon4').innerHTML = plusi;
            document.getElementById('id6').style.display = "none";
            document.getElementById('icon6').innerHTML = plusi;
        }
        else {
            document.getElementById('id5').style.display = "none";
            document.getElementById('icon5').innerHTML = plusi;
        }
    }
    const six = () => {
        if (document.getElementById('id6').style.display == "none") {
            document.getElementById('id6').style.display = "block";
            document.getElementById('icon6').innerHTML = clossi;
            document.getElementById('id1').style.display = "none";
            document.getElementById('icon1').innerHTML = plusi;
            document.getElementById('id2').style.display = "none";
            document.getElementById('icon2').innerHTML = plusi;
            document.getElementById('id3').style.display = "none";
            document.getElementById('icon3').innerHTML = plusi;
            document.getElementById('id4').style.display = "none";
            document.getElementById('icon4').innerHTML = plusi;
            document.getElementById('id5').style.display = "none";
            document.getElementById('icon5').innerHTML = plusi;
        }
        else {
            document.getElementById('id6').style.display = "none";
            document.getElementById('icon6').innerHTML = plusi;
        }
    }

    function checkemail(emailcheck) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailcheck)
    }

    const valid_email = (e) => {
        setValemail(e.target.value);
        setChk(checkemail(valemail))
        if (checkemail(valemail)) {
            setOnCreate(true)
        }
        else {
            setOnCreate(false)
        }
    }
    const startedbtn = () => {
        if (chk) {
            setOnsubmit(false)
            localStorage.setItem("tempemail", JSON.stringify(valemail))
        }
        else {
            setOnsubmit(true)
        }
    }

    return (
        <>
            {/* navbar part */}
            <div className="main_bg_img">
                <div className="container-fluid position_real">
                    <div className="row d-flex flex-nowrap justify-content-center">
                        <div className="col-3 col-sm-3">
                            <Link to="/"><img src="/Images/logo/KB_logo.jpg" alt="" className='logoSize' /></Link>
                        </div>
                        <div className="col-7 col-sm-6 mt-2 text-end">
                            <div className="dropdown">
                                <button className="btn dropdown-toggle text-white lang_btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FontAwesomeIcon icon="fa-solid fa-globe" /><span className='lang_english'>English</span>
                                </button>
                                <ul className="dropdown-menu p-0 border-0 rounded">
                                    <li><Link className="dropdown-item text-white lang_hover" to="#">English</Link></li>
                                    <li><Link className="dropdown-item text-white lang_hover" to="#">हिंदी</Link></li>
                                </ul>
                                <Link to="/SignIn"><button className='sign_btn'>Sign In</button></Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* after the navbar part */}
                <div className="container-fluid  ">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-12 text-center text-wrap ">
                                <div className="heading_title">
                                    Unlimited movies, TV shows and more
                                    {/* The biggest Indian hits. The best Indian stories. All streaming here. */}
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-com=ntent-center">
                            <div className="col-11 text-center text-wrap">
                                <div className="heading_content">
                                    Watch anywhere. Cancel anytime.
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-com=ntent-center">
                            <div className="col-11 text-center text-wrap">
                                <div className="after_heading_content">
                                    Ready to watch? Enter your email to create or restart your membership.
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center posit-realt">
                            <div className="col-11 col-sm-6 text-end p-0">
                                <input type="email" placeholder='Email address' className='inpt_email' onChange={valid_email} value={valemail} />
                                {onsubmit && !chk && <p className='Error_messag posit-absul'> <FontAwesomeIcon icon="fa-regular fa-circle-xmark" />Invalid Email</p>}
                            </div>
                            <div className="col-11 col-sm-6 text-start">
                                {onCreate && <Link to="/Create"> <button className='btn_started' onClick={startedbtn}>Get Started &nbsp;<FontAwesomeIcon icon="fa-solid fa-angle-right" /></button></Link>}
                                {!onCreate && <button className='btn_started' onClick={startedbtn}>Get Started &nbsp;<FontAwesomeIcon icon="fa-solid fa-angle-right" /></button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enjoy your tv part */}
            <div className="container-fluid bg-black">
                <div className="container mt-2 pt-2 pt-lg-5 pb-5">
                    <div className="row pb-1 pb-sm-3 pb-md-5">
                        <div className="col-12 col-lg-6 ">
                            <div className="title_enjoy">
                                Enjoy on your TV
                            </div>
                            <div className="content_enjoy">
                                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 Posit_realtive">
                            <div className="Tv_img">
                                <img src="../Images/background/tv.png" alt="" className='img-fluid' />
                            </div>
                            <div className="Posit_abul">
                                <video src='../Images/background/Enjoy.m4v' type='video/mp4' className="object-fit-contain" autoPlay playsInline muted loop>
                                    <source />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* watch offline section  */}
            <div className="container-fluid bg-black mt-2 py-5">
                <div className="container pt-1 pt-sm-3 pt-sm-5 pb-1 pb-sm-3">
                    <div className="row">
                        <div className="col-12 col-lg-6 pos_relat order-2 order-lg-1">
                            <div className="phone_imag">
                                <img src="../Images/background/watch_offline.jpg" alt="" className='img-fluid' />
                            </div>
                            <div className="image_box d-flex posit_absul">
                                <img src="../Images/background/boxshot.png" alt="" className='img-fluid' />
                                <div className="container">
                                    <div className="row mt-0 mt-sm-1">
                                        <div className="col-12 text-white fw-bold">Stranger Things</div>
                                        <div className="col-12 fs-6">Downloading...</div>
                                    </div>
                                </div>
                                <div className="gif_part mt-0 mt-lg-1">
                                    <img src="../Images/background/download-icon.gif" alt="" className='img-fluid gif_imag' />
                                </div>
                            </div>

                        </div>
                        <div className="col-12 col-lg-6 order-1 order-lg-2">
                            <div className="title_enjoy">
                                Download your shows to watch offline
                            </div>
                            <div className="content_enjoy">
                                Save your favourites easily and always have something to watch.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* watch everywhere part */}
            <div className="container-fluid bg-black mt-2 py-5">
                <div className="container pt-1 pt-sm-3 pt-sm-5 pb-1 pb-sm-3">
                    <div className="row">
                        <div className="col-12 col-lg-6 ">
                            <div className="title_enjoy">
                                Watch everywhere
                            </div>
                            <div className="content_enjoy">
                                Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 Posit_real mt-4 mt-lg-0">
                            <div className="Tv_img">
                                <img src="../Images/background/device.png" alt="" className='img-fluid' />
                            </div>
                            <div className="Post_abul">
                                <video src='../Images/background/watch_everwhere.m4v' type='video/mp4' className="object-fit-contain" autoPlay playsInline muted loop>
                                    <source />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* kids section */}
            <div className="container-fluid bg-black mt-2 py-5">
                <div className="container pt-1 pt-sm-3 pt-sm-5 pb-1 pb-sm-3">
                    <div className="row">
                        <div className="col-12 col-lg-6 pos_relat order-2 order-lg-1">
                            <div className="phone_imag">
                                <img src="../Images/background/children.png" alt="" className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 order-1 order-lg-2">
                            <div className="title_enjoy">
                                Create profiles for kids
                            </div>
                            <div className="content_enjoy">
                                Send children on adventures with their favourite characters in a space made just for them—free with your membership.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Frequently Asked Questions section */}
            <div className="container-fluid bg-black mt-2 py-5">
                <div className="container pt-1 pt-sm-3 pb-1 pb-sm-3">
                    <div className="row">
                        <div className="col-12">
                            <div className="heading_title11 text-center">
                                Frequently Asked Questions
                            </div>
                        </div>
                        <div className="col-12 mt-3 mt-sm-5 ">
                            <div className="container text-center">
                                <div className="row d-flex accordion mb-2 mb-sm-2 " onClick={one}>
                                    <div className="col-10 col-sm-11">
                                        What is KB?
                                    </div>
                                    <div className="col-1 text-end" style={{ fontSize: '30px', fontWeight: 'bold' }} id='icon1'>
                                        <FontAwesomeIcon icon='fa-solid fa-plus' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 ps-0">
                                        <div className="content-faqs">
                                            <div className="panel" id='id1'>
                                                KB is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

                                                You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row d-flex accordion mb-2 mb-sm-2" onClick={two}>
                                    <div className="col-10 col-sm-11">
                                        How much does KB cost?
                                    </div>
                                    <div className="col-1  text-end" style={{ fontSize: '30px', fontWeight: 'bold' }} id='icon2'>
                                        <FontAwesomeIcon icon='fa-solid fa-plus' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 ps-0">
                                        <div className="content-faqs">
                                            <div className="panel" id='id2'>
                                                Watch KB on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row d-flex accordion mb-2 mb-sm-2" onClick={three}>
                                    <div className="col-10 col-sm-11">
                                        Where can I watch?
                                    </div>
                                    <div className="col-1  text-end" style={{ fontSize: '30px', fontWeight: 'bold' }} id='icon3'>
                                        <FontAwesomeIcon icon='fa-solid fa-plus' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 ps-0">
                                        <div className="content-faqs">
                                            <div className="panel" id='id3'>Watch anywhere, anytime. Sign in with your KB account to watch instantly on the web at KB.com from your personal computer or on any internet-connected device that offers the KB app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                                                You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take KB with you anywhere.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row d-flex accordion mb-2 mb-sm-2" onClick={four}>
                                    <div className="col-10 col-sm-11">
                                        How do I cancel?
                                    </div>
                                    <div className="col-1  text-end" style={{ fontSize: '30px', fontWeight: 'bold' }} id='icon4'>
                                        <FontAwesomeIcon icon='fa-solid fa-plus' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 ps-0">
                                        <div className="content-faqs">
                                            <div className="panel" id='id4'>
                                                KB is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row d-flex accordion mb-2 mb-sm-2" onClick={five}>
                                    <div className="col-10 col-sm-11">
                                        What can I watch on KB?
                                    </div>
                                    <div className="col-1  text-end" style={{ fontSize: '30px', fontWeight: 'bold' }} id='icon5'>
                                        <FontAwesomeIcon icon='fa-solid fa-plus' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 ps-0">
                                        <div className="content-faqs">
                                            <div className="panel" id='id5'>
                                                KB has an extensive library of feature films, documentaries, TV shows, anime, award-winning KB originals, and more. Watch as much as you want, anytime you want.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row d-flex accordion mb-2 mb-sm-2" onClick={six}>
                                    <div className="col-10 col-sm-11">
                                        Is KB good for kids?
                                    </div>
                                    <div className="col-1  text-end" style={{ fontSize: '30px', fontWeight: 'bold' }} id='icon6'>
                                        <FontAwesomeIcon icon='fa-solid fa-plus' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 ps-0">
                                        <div className="content-faqs">
                                            <div className="panel" id='id6'>
                                                The KB Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

                                                Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* not for use */}
                                < div className='d-none' id="plusicon">
                                    <FontAwesomeIcon icon='fa-solid fa-plus' />
                                </div >
                                <div className='d-none' id="crossicons">
                                    <FontAwesomeIcon icon='fa-solid fa-xmark' />
                                </div>
                                {/* not for use */}

                                <div className="row d-flex justify-com=ntent-center mt-2 mt-sm-3">
                                    <div className="col-11 text-center text-wrap">
                                        <div className="after_heading_content11">
                                            Ready to watch? Enter your email to create or restart your membership.
                                        </div>
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-center">
                                    <div className="col-11 col-sm-6 text-end p-0">
                                        <input type="email" placeholder='Email address' className='inpt_email11' />
                                    </div>
                                    <div className="col-11 col-sm-6 text-start">
                                        <button className='btn_started11'>Get Started &nbsp;<FontAwesomeIcon icon="fa-solid fa-angle-right" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* footer section */}
            <div className="container-fluid bg-black mt-2 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 question my-2">
                            Questions? Call <Link to="#" className='question'>000-800-919-1694</Link>
                        </div>
                    </div>
                    <div className="row mt-3 mt-sm-4">
                        <div className="col-12 col-sm-6 col-md-4">
                            <ul className='list-unstyled'>
                                <li><Link to="#" className='question'>FAQ</Link></li>
                                <li className='mt-2'><Link to="#" className='question'>Media Centre</Link></li>
                                <li className='mt-2'><Link to="#" className='question'>Ways to Watch</Link></li>
                                <li className='mt-2'><Link to="#" className='question'>Cookie Preferences</Link></li>
                                <li className='mt-2'><Link to="#" className='question'>Speed Test</Link></li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <ul className='list-unstyled'>
                                <li><Link to="#" className='question'>Help Centre</Link></li>
                                <li className='mt-2'><Link to="#" className='question'>Investor Relations</Link></li>
                                <li className='mt-2'><Link to="#" className='question'>Terms of Use</Link></li>
                                <li className='mt-2'><Link to="#" className='question'>Corporate Information</Link></li>
                                <li className='mt-2'><Link to="#" className='question'>Legal Notices</Link></li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <ul className='list-unstyled'>
                                <li><Link to="#" className='question'>Account</Link></li>
                                <li className='mt-2'><Link to="#" className='question'>Jobs</Link></li>
                                <li className='mt-2'><Link to="#" className='question'>Privacy</Link></li>
                                <li className='mt-2'><Link to="#" className='question'>Contact Us</Link></li>
                                <li className='mt-2'><Link to="#" className='question'>Only on KB</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="dropdown">
                                <button className="btn dropdown-toggle lang_btn text-white mt-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FontAwesomeIcon icon="fa-solid fa-globe" /><span className=''>&nbsp;English</span>
                                </button>
                                <ul className="dropdown-menu p-0 border-0 rounded">
                                    <li><Link className="dropdown-item text-white lang_hover" to="#">English</Link></li>
                                    <li><Link className="dropdown-item text-white lang_hover" to="#">हिंदी</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-12">
                            <div className="question mt-3 fs-5">
                                KB India
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default LoginNavbar