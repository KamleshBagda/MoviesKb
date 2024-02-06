import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function TVCategoryShow() {
    const [hoveredId, setHoveredId] = useState(null);
    const [genres, setGenres] = useState({});
    const [query, setQuery] = useState('');

    const [page, setPage] = useState(1);
    const [movies1, setMovies1] = useState([]);
    const [isLoading, setIsLoading] = useState(false);



    const handleImageHover = (id) => {
        setHoveredId(id);
    };

    const handleImageLeave = () => {
        setHoveredId(null);
    };

    const genreCategories = {
        28: 'Action',
        12: 'Adventure',
        16: 'Animation',
        35: 'Comedy',
        80: 'Crime',
        99: 'Documentary',
        18: 'Drama',
        10751: 'Family',
        14: 'Fantasy',
        36: 'History',
        27: 'Horror',
        10402: 'Music',
        9648: 'Mystery',
        10749: 'Romance',
        878: 'Science Fiction',
        10770: 'TV Movie',
        53: 'Thriller',
        10752: 'War',
        37: 'Western',
    };

    function findCategoryByGenreId(genreId) {
        return genreCategories[genreId] || 'Unknown';
    }
    let genreId, category;
    let categoryid = JSON.parse(sessionStorage.getItem("categoryid"))
    genreId = categoryid;
    category = findCategoryByGenreId(genreId);

    const apiKey = '62a41d246069bcbcdab2e0c444715af4';

    const fetchGenres = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}`);
            const genreMap = {};
            response.data.genres.forEach((genre) => {
                genreMap[genre.id] = genre.name;
            });
            setGenres(genreMap);
        } catch (error) {
            console.error('Error fetching genres:', error);
        }
    };
    const fetchMovies = async (pageNumber) => {
        setIsLoading(true);
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=${pageNumber}&with_genres=${genreId}`
            );

            if (response.data.results) {
                const newMovies = response.data.results;
                setMovies1((prevMovies) => [...prevMovies, ...newMovies]);
            }
        } catch (error) {
            console.error('Error fetching data: ', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleLoadMore = () => {
        const nextPage = page + 1;
        fetchMovies(nextPage);
        setPage(nextPage);
    };

    useEffect(() => {
        fetchMovies(page);
        fetchGenres();
    }, []);

    // navbar components start
    const [hoveredItem, setHoveredItem] = useState(null);
    const [searchshow, Setsearchshow] = useState(false)

    const handleListItemHover = (index) => {
        setHoveredItem(index);
    };

    const handleListItemLeave = () => {
        setHoveredItem(null);
    };


    const handlesearhbtn = () => {
        if (searchshow == false) {
            Setsearchshow(true)
        }
        else {
            Setsearchshow(false)
        }

    }
    const handlecategory = (e) => {
        // console.log("e is ", e.target.id)
        sessionStorage.setItem("categoryid", JSON.stringify(e.target.id))
        window.location.reload();
    }
    const searchMovies = async () => {
        sessionStorage.setItem("searchitem", JSON.stringify(query));
    }

    // navbar component end

    const handleMoviedetail = (e) => {
        sessionStorage.setItem("moviedetail", JSON.stringify(e))
    }

    return (
        < >
            <div className="bg-black">
                {/* navbar section start */}
                <>
                    <div className={`navbar1 bg-black d-none d-lg-block `}   >
                        <div className='home_catoriy_rel'>
                            <div className="row">
                                <div className="col-lg-1 col-xl-2">
                                    <Link to="/home"><img src="./Images/logo/KB_logo.jpg" alt="" className='logoSizenavbar' /></Link>
                                </div>
                                <div className={`col-lg-8 col-xl-6 d-flex`} >
                                    <div className={`home_part1  ${hoveredItem === 1 ? 'active' : ''}`} onMouseEnter={() => handleListItemHover(1)} onMouseLeave={handleListItemLeave}>Home <FontAwesomeIcon icon="fa-solid fa-angle-down" className='down_icon' />
                                        {hoveredItem === 1 && <div className="home_categories rounded-bottom" >
                                            <ul className='list-unstyled bg_color_homelist mb-0 rounded-bottom'>
                                                <Link className='text-decoration-none' style={{ color: '#aaaaaa' }} to='/home'><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 list_hover_home1'>Movies</li></Link>
                                                <Link className='text-decoration-none' style={{ color: '#aaaaaa' }} to='/tv'><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 list_hover_home1 rounded-bottom'>TV Shows</li></Link>
                                            </ul>
                                        </div>}
                                    </div>
                                    <div className={`home_part2 ${hoveredItem === 2 ? 'active' : ''}`} onMouseEnter={() => handleListItemHover(2)} onMouseLeave={handleListItemLeave}>Categories <FontAwesomeIcon icon="fa-solid fa-angle-down" className='down_icon' />
                                        {hoveredItem === 2 && <div className="category_categories d-flex rounded-bottom p-lg-3 ">
                                        <ul className='list-unstyled bg_color_categorylist me-lg-3 me-xl-4 mb-0'>
                                        {/* <Link to='/tvcategoriesshow' className='text-decoration-none' style={{ color: '#aaaaaa' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 list_hover_home2 rounded' onClick={handlecategory} id='28' >Action</li></Link> */}
                                        <Link to='/tvcategoriesshow' className='text-decoration-none' style={{ color: '#aaaaaa' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 list_hover_home2 rounded' onClick={handlecategory} id='80' >Crime</li></Link>
                                        <Link to='/tvcategoriesshow' className='text-decoration-none' style={{ color: '#aaaaaa' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 list_hover_home2 rounded' onClick={handlecategory} id='35' >Comedy</li></Link>
                                        <Link to='/tvcategoriesshow' className='text-decoration-none' style={{ color: '#aaaaaa' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 list_hover_home2 rounded' onClick={handlecategory} id='18' >Drama</li></Link>
                                        <Link to='/tvcategoriesshow' className='text-decoration-none' style={{ color: '#aaaaaa' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 list_hover_home2 rounded' onClick={handlecategory} id='16' >Animation</li></Link>
                                        {/* <Link to='/tvcategoriesshow' className='text-decoration-none' style={{ color: '#aaaaaa' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 list_hover_home2 rounded' onClick={handlecategory} id='53' >Thriller</li></Link> */}
                                    </ul>
                                    <ul className='list-unstyled bg_color_categorylist mb-0'>
                                        {/* <Link to='/tvcategoriesshow' className='text-decoration-none' style={{ color: '#aaaaaa' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 list_hover_home2 rounded' onClick={handlecategory} id='878' >Science Fiction</li></Link> */}
                                        <Link to='/tvcategoriesshow' className='text-decoration-none' style={{ color: '#aaaaaa' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 list_hover_home2 rounded' onClick={handlecategory} id='10749' >Romance</li></Link>
                                        <Link to='/tvcategoriesshow' className='text-decoration-none' style={{ color: '#aaaaaa' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 list_hover_home2 rounded' onClick={handlecategory} id='16' >Adventure</li></Link>
                                        <Link to='/tvcategoriesshow' className='text-decoration-none' style={{ color: '#aaaaaa' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 list_hover_home2 rounded' onClick={handlecategory} id='10751' >Family</li></Link>
                                        {/* <Link to='/tvcategoriesshow' className='text-decoration-none' style={{ color: '#aaaaaa' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 list_hover_home2 rounded' onClick={handlecategory} id='14' >Fantasy</li></Link> */}
                                        <Link to='/tvcategoriesshow' className='text-decoration-none' style={{ color: '#aaaaaa' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 list_hover_home2 rounded' onClick={handlecategory} id='9648' >Mystery</li></Link>
                                    </ul>
                                        </div>}
                                    </div>
                                    <div className="home_part">Live TV</div>
                                </div>
                                <div className="col-lg-1 col-xl-2 text-end p-0 " onClick={handlesearhbtn}>
                                    {!searchshow && <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='searchicon text-center' />}
                                    {searchshow && <FontAwesomeIcon icon="fa-solid fa-xmark" className='searchicon text-center' />}
                                </div>

                                <div className="col-lg-2 col-xl-2 text-center">
                                    <span className={`signinhover ${hoveredItem === 3 ? 'active' : ''}`} onMouseEnter={() => handleListItemHover(3)} onMouseLeave={handleListItemLeave}> <img src="./Images/Home/profile_logo.svg" alt="" className='signInImg' />
                                        {
                                            hoveredItem === 3 && <div className='signin_categories rounded-bottom p-1'>
                                                <ul className='list-unstyled bg_color_homelist mb-0 rounded-bottom text-start'>
                                                    <Link to='/SignIn' className='text-decoration-none' style={{ color: '#aaaaaa' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 list_hover_home3'>Sign Out</li></Link>
                                                    <li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 list_hover_home3'>Help</li>
                                                    <li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 list_hover_home3 rounded-bottom'>Watch Anywhere</li>
                                                </ul>
                                            </div>
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {searchshow && <div className="searchbox p-3 ">
                        <div className="box11">
                            <div className="row d-flex outln">
                                <div className="col-11">
                                    <form >
                                        <input type="search" name="" id="" className='searchinputcss p-1 ' value={query} onChange={(e) => setQuery(e.target.value)} />
                                    </form>
                                </div>
                                <div className="col-1 proition_seacrh_rel">
                                    <Link to='/tvsearch' className='text-decoration-none' style={{ color: '#aaaaaa' }}><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='fs-4 p-0 m-0 position_absulte_seacrh' onClick={searchMovies} /></Link>                                </div>
                            </div>
                        </div>
                    </div>}

                    <div className="navbar2 bg-black d-lg-none container-fluid">
                        <div className="row d-flex">
                            <div className="col-3 col-sm-2">
                                <Link to='/tvmenufile' className='text-decoration-none'><div className="menuclss d-flex">Menu <FontAwesomeIcon icon="fa-solid fa-angle-down" className='menudown' /></div></Link>
                            </div>
                            <div className="col-5 col-sm-6 col-md-8">
                                <div className="movieslogo">
                                    <Link to="/home" className='text-decoration-none'><img src="./Images/logo/KB_logo.jpg" alt="" className='logoSizenavbar11' /></Link>
                                </div>
                            </div>
                            <div className="col-2 col-sm-2 col-md-1 text-end">
                                <Link to='/tvsearchpage' ><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='searchicon' /></Link>
                            </div>
                            <div className="col-2 col-sm-2 col-md-1">
                                <Link to='/signoutpage'><span className='signinhover'> <img src="./Images/Home/profile_logo.svg" alt="" className='signInImg' /></span></Link>
                            </div>
                        </div>
                    </div>
                </>

                {/* Navbar secton end */}

                <div className="container text-white pt-4">
                    <div className="row py-2">
                        <div className="col-12 pt-3 ">
                            <h2>{category} Shows</h2>
                        </div>
                    </div>
                </div>

                <div className="container-fluid px-1 px-sm-2 px-md-3 mt-1">

                    {movies1?.map((e) => (
                        <div className="card d-inline-flex mx-1 my-4 bg-black" style={{ width: '18rem', height: "27rem", overflow: 'hidden' }}>
                            <Link to='/tvdetailpage' className='text-decoration-none'>
                                <div
                                    className="image-container1"
                                    onMouseEnter={() => handleImageHover(e.id)}
                                    onMouseLeave={handleImageLeave}
                                    onClick={() => handleMoviedetail(e)}
                                    key={e.id}
                                >
                                    {hoveredId === e.id ? (
                                        <div className="card z-3 b-0" style={{ background: 'black', overflow: 'hidden' }} >
                                            <img src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`} className='img-fluid rounded-3' style={{ height: '220px' }} />
                                            <div className="card-body p-2" style={{ background: 'black', color: '#aaaaaa', overflow: 'hidden', height: '220px' }}>
                                                <h3 className="card-title text-white fw-bold fs-3 my-1">{e.original_title}</h3>
                                                <h5 className="card-title text-white ">{e.first_air_date}</h5>
                                                <h4 className="card-title text-white my-1">IMDb {e.vote_average}</h4>
                                                <p> {e.genre_ids.map((genreId) => genres[genreId]).join(', ')}</p>
                                                {/* <p className="card-text " style={{  }}>{e.overview}</p> */}
                                            </div>
                                        </div>
                                    ) : (
                                        <img src={`https://image.tmdb.org/t/p/w500${e.poster_path}`} className='img-fluid rounded-3' />
                                    )}
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center my-1">
                            {isLoading && <p className='text-white fs-4 fw-semibold py-2'>Loading...</p>}
                            <button className='btn btn-primary px-2 py-1 px-sm-3 py-sm-2 fw-semibold fs-5' onClick={handleLoadMore} >Load More</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default TVCategoryShow