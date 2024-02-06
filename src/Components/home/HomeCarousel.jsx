import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function HomeCarousel() {
    return (
        <>
            <div className="container-fluid p-2 p-sm-3 p-md-4  carousel_post_real positon_relative">
                <div className="title_Movies">
                    <h2 className='fw-bold ms-2 text-white pb-2 fs-1 movies mt-5 mt-lg-0' >Movies</h2>
                </div>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" aria-label="Slide 10"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="10" aria-label="Slide 11"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="11" aria-label="Slide 12"></button>
                    </div>
                    <div className="carousel-inner ">
                        <div className="carousel-item active " data-bs-interval="3000" >
                            <img src="./Images/Home/carousel/Carousel1.jpg" className="d-block w-100" alt="..." />
                            <div className="content position_absulate">
                                <img src="./Images/Home/carousel/Carousel1content1.jpg" alt="" className=' img-fluid content-img' /> <br />
                                <div className="button d-none d-sm-block ms-sm-1 ms-md-3">
                                    <button className='p-2 bg-white text-black mt-0 mt-sm-1 mt-md-2 mt-lg-3 mt-xl-5   fs-5 fw-semibold border-0 rounded buttn'>More Deatils</button>
                                    <button className=' watchlist_btn mt-0 mt-sm-1 mt-md-2 mt-lg-3 mt-xl-5 ms-2 ms-sm-3 ms-md-4'><FontAwesomeIcon icon="fa-solid fa-plus" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src="./Images/Home/carousel/Carousel2.jpg" className="d-block w-100" alt="..." />
                            <div className="content position_absulate11">
                                <img src="./Images/Home/carousel/Carousel2content2.jpg" alt="" className=' img-fluid content-img_2' /> <br />
                                <div className="button d-none d-sm-block ms-sm-1 ms-md-4">
                                    <button className='p-2 bg-white text-black mt-0 mt-sm-1 mt-md-2 mt-lg-3 mt-xl-5 fs-5 fw-semibold border-0 rounded buttn'>More Deatils</button>
                                    <button className=' watchlist_btn mt-0 mt-sm-1 mt-md-2 mt-lg-3 mt-xl-5 ms-2 ms-sm-3 ms-md-4'><FontAwesomeIcon icon="fa-solid fa-plus" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src="./Images/Home/carousel/Carousel3.jpg" className="d-block w-100" alt="..." />
                            <div className="content position_absulate mt-sm-1 mt-md-3">
                                <img src="./Images/Home/carousel/Carousel3content3.jpg" alt="" className=' img-fluid content-img' /> <br />
                                <div className="button d-none d-sm-block ms-sm-1 ms-md-5">
                                    <button className='p-2 bg-white text-black mt-0 mt-sm-1 mt-md-2 mt-lg-3 mt-xl-5   fs-5 fw-semibold border-0 rounded buttn'>More Deatils</button>
                                    <button className=' watchlist_btn mt-0 mt-sm-1 mt-md-2 mt-lg-3 mt-xl-5 ms-2 ms-sm-3 ms-md-4'><FontAwesomeIcon icon="fa-solid fa-plus" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src="./Images/Home/carousel/Carousel4.jpg" className="d-block w-100" alt="..." />
                            <div className="content position_absulate">
                                <img src="./Images/Home/carousel/Carousel4content4.jpg" alt="" className=' img-fluid content-img' /> <br />
                                <div className="button d-none d-sm-block ms-sm-1 ms-md-4 ">
                                    <button className='p-2 bg-white text-black mt-0 mt-sm-1 mt-md-2 mt-lg-3 mt-xl-5  fs-5 fw-semibold border-0 rounded buttn'>More Deatils</button>
                                    <button className=' watchlist_btn mt-0 mt-sm-1 mt-md-2 mt-lg-3 mt-xl-5 ms-2 ms-sm-3 ms-md-4'><FontAwesomeIcon icon="fa-solid fa-plus" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src="./Images/Home/carousel/Carousel5.jpg" className="d-block w-100" alt="..." />
                            <div className="content position_absulate">
                                <img src="./Images/Home/carousel/Carousel5content5.jpg" alt="" className=' img-fluid content-img mt-3' /> <br />
                                <div className="button d-none d-sm-block ms-sm-1 ms-md-4">
                                    <button className='p-2 bg-white text-black mt-0 mt-sm-1 mt-md-2 mt-lg-3 mt-xl-5 fs-5 fw-semibold border-0 rounded buttn'>More Deatils</button>
                                    <button className=' watchlist_btn mt-0 mt-sm-1 mt-md-2 mt-lg-3 mt-xl-5 ms-2 ms-sm-3 ms-md-4'><FontAwesomeIcon icon="fa-solid fa-plus" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src="./Images/Home/carousel/Carousel6.jpg" className="d-block w-100" alt="..." />
                            <div className="content position_absulate">
                                <img src="./Images/Home/carousel/Carousel6content6.jpg" alt="" className=' img-fluid content-img' /> <br />
                                <div className="button d-none d-sm-block ms-sm-1 ms-md-4">
                                    <button className='p-2 bg-white text-black mt-0 mt-sm-1 mt-md-2 mt-lg-3 mt-xl-5   fs-5 fw-semibold border-0 rounded buttn'>More Deatils</button>
                                    <button className=' watchlist_btn mt-0 mt-sm-1 mt-md-2 mt-lg-3 mt-xl-5 ms-2 ms-sm-3 ms-md-4'><FontAwesomeIcon icon="fa-solid fa-plus" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src="./Images/Home/carousel/Carousel7.jpg" className="d-block w-100" alt="..." />
                            <div className="content position_absulate">
                                <img src="./Images/Home/carousel/Carousel7content7.jpg" alt="" className=' img-fluid content-img' /> <br />
                                <div className="button d-none d-sm-block ms-sm-2 ms-md-5">
                                    <button className='p-2 bg-white text-black mt-0 mt-sm-1 mt-md-2 mt-lg-3 mt-xl-5   fs-5 fw-semibold border-0 rounded buttn'>More Deatils</button>
                                    <button className=' watchlist_btn mt-0 mt-sm-1 mt-md-2 mt-lg-3 mt-xl-5 ms-2 ms-sm-3 ms-md-4'><FontAwesomeIcon icon="fa-solid fa-plus" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src="./Images/Home/carousel/Carousel8.jpg" className="d-block w-100" alt="..." />
                            <div className="content position_absulate">
                                <img src="./Images/Home/carousel/Carousel8content8.jpg" alt="" className=' img-fluid content-img' /> <br />
                                <div className="button d-none d-sm-block ms-sm-1 ms-md-3">
                                    <button className='p-2 bg-white text-black mt-0 mt-sm-1 mt-md-2 mt-lg-3 mt-xl-5   fs-5 fw-semibold border-0 rounded buttn'>More Deatils</button>
                                    <button className=' watchlist_btn mt-0 mt-sm-1 mt-md-2 mt-lg-3 mt-xl-5 ms-2 ms-sm-3 ms-md-4'><FontAwesomeIcon icon="fa-solid fa-plus" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src="./Images/Home/carousel/Carousel9.jpg" className="d-block w-100" alt="..." />
                            <div className="content position_absulate">
                                <img src="./Images/Home/carousel/Carousel9content9.jpg" alt="" className=' img-fluid content-img' /> <br />
                                <div className="button d-none d-sm-block ms-sm-2 ms-md-5">
                                    <button className='p-2 bg-white text-black mt-0 mt-sm-1 mt-md-2 mt-lg-3 mt-xl-5   fs-5 fw-semibold border-0 rounded buttn'>More Deatils</button>
                                    <button className=' watchlist_btn mt-0 mt-sm-1 mt-md-2 mt-lg-3 mt-xl-5 ms-2 ms-sm-3 ms-md-4'><FontAwesomeIcon icon="fa-solid fa-plus" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src="./Images/Home/carousel/Carousel10.jpg" className="d-block w-100" alt="..." />
                            <div className="content position_absulate">
                                <img src="./Images/Home/carousel/Carousel10content10.jpg" alt="" className=' img-fluid content-img' /> <br />
                                <div className="button d-none d-sm-block ms-sm-2 ms-md-5">
                                    <button className='p-2 bg-white text-black mt-0 mt-sm-1 mt-md-2 mt-lg-3 mt-xl-5   fs-5 fw-semibold border-0 rounded buttn'>More Deatils</button>
                                    <button className=' watchlist_btn mt-0 mt-sm-1 mt-md-2 mt-lg-3 mt-xl-5 ms-2 ms-sm-3 ms-md-4'><FontAwesomeIcon icon="fa-solid fa-plus" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src="./Images/Home/carousel/Carousel11.jpg" className="d-block w-100" alt="..." />
                            <div className="content position_absulate">
                                <img src="./Images/Home/carousel/Carousel11content11.jpg" alt="" className=' img-fluid content-img' /> <br />
                                <div className="button d-none d-sm-block ms-sm-1 ms-md-5">
                                    <button className='p-2 bg-white text-black mt-0 mt-sm-1 mt-md-2 mt-lg-3 mt-xl-5   fs-5 fw-semibold border-0 rounded buttn'>More Deatils</button>
                                    <button className=' watchlist_btn mt-0 mt-sm-1 mt-md-2 mt-lg-3 mt-xl-5 ms-2 ms-sm-3 ms-md-4'><FontAwesomeIcon icon="fa-solid fa-plus" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src="./Images/Home/carousel/Carousel12.jpg" className="d-block w-100" alt="..." />
                            <div className="content position_absulate">
                                <img src="./Images/Home/carousel/Carousel12content12.jpg" alt="" className=' img-fluid content-img' /> <br />
                                <div className="button d-none d-sm-block ms-sm-1 ms-md-3">
                                    <button className='p-2 bg-white text-black mt-1 mt-sm-2 mt-md-4   fs-5 fw-semibold border-0 rounded buttn'>More Deatils</button>
                                    <button className=' watchlist_btn mt-1 mt-sm-2 mt-md-4 ms-2 ms-sm-3 ms-md-4'><FontAwesomeIcon icon="fa-solid fa-plus" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                        <span className="visually-hidden">Previous</span>
                        <FontAwesomeIcon icon="fa-solid fa-angle-left" className="carousel_css carousel_post_abulat_left" aria-hidden="true" />
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
                        <span className="visually-hidden">Next</span>
                        <FontAwesomeIcon icon="fa-solid fa-angle-right" className="carousel_css carousel_post_abulat_right" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default HomeCarousel