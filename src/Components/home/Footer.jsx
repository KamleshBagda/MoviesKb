import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
    return (
        <>
            <div className="bg-black p-1 p-sm-2 p-md-3">
                <footer className="footer-section">
                    <div className="container">
                        <div className="footer-cta pt-5 ">
                            <div className="row">
                                <div className="col-xl-4 col-md-4 mb-30">
                                    <div className="single-cta">
                                    <FontAwesomeIcon icon="fa-solid fa-location-dot" className='fs-3 location'/>
                                        <div className="cta-text ">
                                            <h4>Find us</h4>
                                            <span>Y-Block Narayan Vihar Mansaovar,Jaipur,Rajasthan-302026 </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-4 mb-30">
                                    <div className="single-cta">
                                    <FontAwesomeIcon icon="fa-solid fa-phone-flip" className='fs-3 mb-3 call'/>
                                        <div className="cta-text">
                                            <h4>Call us</h4>
                                            <span>+91 1234567890</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-4 mb-30">
                                    <div className="single-cta">
                                    <FontAwesomeIcon icon="fa-regular fa-envelope-open" className='fs-3 mb-3 mail'/>
                                        <div className="cta-text">
                                            <h4>Mail us</h4>
                                            <span>contact@gmail.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-content pt-5 pb-1">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 mb-50">
                                    <div className="footer-widget">
                                        <div className="footer-logo">
                                            <a><img src="./Images/logo/KB_logo.jpg" className="img-fluid" alt="logo" /></a>
                                        </div>
                                        <div className="footer-text">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                        </div>
                                        <div className="footer-social-icon">
                                            <span>Follow us</span>
                                            <ul className="social_icon">
                                                <li><a href="#"><FontAwesomeIcon icon="fa-brands fa-facebook-f" className='mt-2 fs-5 socal_icon'/></a></li>
                                                <li><a href="#"><FontAwesomeIcon icon="fa-brands fa-twitter" className='mt-2 fs-5 socal_icon'/></a></li>
                                                <li><a href="#"><FontAwesomeIcon icon="fa-brands fa-instagram" className='mt-2 fs-5 socal_icon'/></a></li>
                                                <li><a href="#"><FontAwesomeIcon icon="fa-brands fa-youtube" className='mt-2 fs-5 socal_icon'/></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                    <div className="footer-widget">
                                        <div className="footer-widget-heading">
                                            <h3>Useful Links</h3>
                                        </div>
                                        <ul>
                                            <li><a href="#">Our Team</a></li>
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Our Gallery</a></li>
                                            <li><a href="#">Selection Process</a></li>
                                            <li><a href="#">FAQ</a></li>
                                            <li><a href="#">Sponsorship</a></li>
                                            <li><a href="#">Our Policies</a></li>
                                            <li><a href="#">Our Team</a></li>
                                            <li><a href="#">Contact us</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                    <div className="footer-widget">
                                        <div className="footer-widget-heading">
                                            <h3>Subscribe</h3>
                                        </div>
                                        <div className="footer-text mb-25">
                                            <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                        </div>
                                        <div className="subscribe-form">
                                            <form action="#">
                                                <input type="text" placeholder="Email Address" />
                                                <button><FontAwesomeIcon icon="fab fa-telegram-plane" className='telegram'/></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 text-center text-lg-left mt-lg-2">
                                    <div className="copyright-text">
                                        <p>Copyright &copy; 2023, All Right Reserved <a href="#" className='text-decoration-none fw-bold'>Kamlesh Bagda</a></p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right mt-lg-1">
                                    <div className="footer-menu">
                                        <ul>
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#">Terms</a></li>
                                            <li><a href="#">Privacy</a></li>
                                            <li><a href="#">Policy</a></li>
                                            <li><a href="#">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer