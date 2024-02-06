import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

function SearchItems() {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [searchshow, Setsearchshow] = useState(false);
    const [query, setQuery] = useState(JSON.parse(sessionStorage.getItem("searchitem")));
    const [results, setResults] = useState([]);
    const [genres, setGenres] = useState({});
    const [hoveredId, setHoveredId] = useState(null);

    const [page, setPage] = useState(1);
    // const [movies1, setMovies1] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const handleImageHover = (id) => {
        setHoveredId(id);
    };

    const handleImageLeave = () => {
        setHoveredId(null);
    };


    const apiKey = '62a41d246069bcbcdab2e0c444715af4';
    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=62a41d246069bcbcdab2e0c444715af4`);
                const genreMap = {};
                response.data.genres.forEach((genre) => {
                    genreMap[genre.id] = genre.name;
                });
                setGenres(genreMap);
            } catch (error) {
                console.error('Error fetching genres:', error);
            }
        };
        fetchGenres();
        searchMovies(page);
    }, [])

    const searchMovies =  async (pageNumber) => {
        try {
        setIsLoading(true);
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=en-US&sort_by=popularity.desc&page=${pageNumber}`
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            const filteredResults = data.results.filter(
                (movie) => movie.poster_path !== null && movie.backdrop_path !== null
            );
            setResults(results.concat(filteredResults));
            sessionStorage.setItem("searchitem", JSON.stringify(query));
        } catch (error) {
            console.error('Error searching movies:', error);
        }finally {
            setIsLoading(false);
        }
    };


    // const fetchMovies = async (pageNumber) => {
    //     setIsLoading(true);
    //     try {
    //         const response = await axios.get(
    //             `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=en-US&sort_by=popularity.desc&page=${pageNumber}`
    //             // `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=${pageNumber}&with_genres=${genreId}`
    //         );

    //         if (response.data.results) {
    //             const newMovies = response.data.results;
    //             setMovies1((prevMovies) => [...prevMovies, ...newMovies]);
    //         }
    //     } catch (error) {
    //         console.error('Error fetching data: ', error);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

    const handleLoadMore = () => {
        const nextPage = page + 1;
        searchMovies(nextPage);
        setPage(nextPage);
    };





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
    }
    const handleItemEnter = (e) => {
        setQuery(e.target.value);
        sessionStorage.setItem("searchitem", JSON.stringify(e.target.value));
    }
    const handleMoviedetail = (e) => {
        sessionStorage.setItem("moviedetail", JSON.stringify(e))
    }


    return (
        <>
            <div className="container-fluid bg-black" style={{ minHeight: '100vh' }}>
                {/* navbar start */}
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
                                                <Link className='text-decoration-none' style={{ color: '#aaaaaa' }} to='/home'><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 list_hover_home1' >Movies</li></Link>
                                                <Link className='text-decoration-none' style={{ color: '#aaaaaa' }} to='/tv'><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 list_hover_home1 rounded-bottom' >TV Shows</li></Link>
                                            </ul>
                                        </div>}
                                    </div>
                                    <div className={`home_part2 ${hoveredItem === 2 ? 'active' : ''}`} onMouseEnter={() => handleListItemHover(2)} onMouseLeave={handleListItemLeave}>Categories <FontAwesomeIcon icon="fa-solid fa-angle-down" className='down_icon' />
                                        {hoveredItem === 2 && <div className="category_categories d-flex rounded-bottom p-lg-3 ">
                                            <ul className='list-unstyled bg_color_categorylist me-lg-3 me-xl-4 mb-0'>
                                                <Link to='/categoriesshow' className='text-decoration-none' style={{ color: '#aaaaaa' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 list_hover_home2 rounded' onClick={handlecategory} id='28' >Action</li></Link>
                                                <Link to='/categoriesshow' className='text-decoration-none' style={{ color: '#aaaaaa' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 list_hover_home2 rounded' onClick={handlecategory} id='80' >Crime</li></Link>
                                                <Link to='/categoriesshow' className='text-decoration-none' style={{ color: '#aaaaaa' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 list_hover_home2 rounded' onClick={handlecategory} id='35' >Comedy</li></Link>
                                                <Link to='/categoriesshow' className='text-decoration-none' style={{ color: '#aaaaaa' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 list_hover_home2 rounded' onClick={handlecategory} id='18' >Drama</li></Link>
                                                <Link to='/categoriesshow' className='text-decoration-none' style={{ color: '#aaaaaa' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 list_hover_home2 rounded' onClick={handlecategory} id='27' >Horror</li></Link>
                                                <Link to='/categoriesshow' className='text-decoration-none' style={{ color: '#aaaaaa' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 list_hover_home2 rounded' onClick={handlecategory} id='53' >Thriller</li></Link>
                                            </ul>
                                            <ul className='list-unstyled bg_color_categorylist mb-0'>
                                                <Link to='/categoriesshow' className='text-decoration-none' style={{ color: '#aaaaaa' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 list_hover_home2 rounded' onClick={handlecategory} id='878' >Science Fiction</li></Link>
                                                <Link to='/categoriesshow' className='text-decoration-none' style={{ color: '#aaaaaa' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 list_hover_home2 rounded' onClick={handlecategory} id='10749' >Romance</li></Link>
                                                <Link to='/categoriesshow' className='text-decoration-none' style={{ color: '#aaaaaa' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 list_hover_home2 rounded' onClick={handlecategory} id='16' >Adventure</li></Link>
                                                <Link to='/categoriesshow' className='text-decoration-none' style={{ color: '#aaaaaa' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 list_hover_home2 rounded' onClick={handlecategory} id='10751' >Family</li></Link>
                                                <Link to='/categoriesshow' className='text-decoration-none' style={{ color: '#aaaaaa' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 list_hover_home2 rounded' onClick={handlecategory} id='14' >Fantasy</li></Link>
                                                <Link to='/categoriesshow' className='text-decoration-none' style={{ color: '#aaaaaa' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 list_hover_home2 rounded' onClick={handlecategory} id='9648' >Mystery</li></Link>
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
                                                    <Link to='/SignIn' className='text-decoration-none' style={{ color: '#aaaaaa' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 list_hover_home3'>Sign Out</li></Link>                                                    <li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 list_hover_home3'>Help</li>
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
                                        <input type="search" name="" id="" className='searchinputcss p-1 ' value={query} onChange={handleItemEnter} />
                                    </form>
                                </div>
                                <div className="col-1 proition_seacrh_rel" onClick={() => window.location.reload()}>
                                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='fs-4 p-0 m-0 position_absulte_seacrh' onClick={searchMovies} />
                                </div>
                            </div>
                        </div>
                    </div>}

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
                            <div className="col-2 col-sm-2 col-md-1">
                                <Link to='/searchpage' ><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='searchicon' /></Link>
                            </div>
                            <div className="col-2 col-sm-2 col-md-1">
                                <Link to='/signoutpage'><span className='signinhover'> <img src="./Images/Home/profile_logo.svg" alt="" className='signInImg' /></span></Link>
                            </div>
                        </div>
                    </div>
                </>
                {/* navbar end */}
                <div className="container-fluid p-2 p-sm-3 p-md-4">

                    <div className="title_Movies mt-3">
                        <h2 className='fw-bold ms-2 text-white pb-2 fs-1 movies mt-5' >Results For "{query}"</h2>
                    </div>

                    {results?.map((e) => (
                        <div className="card d-inline-flex mx-1 my-4 bg-black" style={{ width: '17rem', height: "27rem", overflow: 'hidden' }}>
                            <Link to='/moviedetailpage' className='text-decoration-none'>
                                <div
                                    className="image-container1"
                                    onMouseEnter={() => handleImageHover(e.id)}
                                    onMouseLeave={handleImageLeave}
                                    onClick={() => handleMoviedetail(e)}
                                >
                                    {hoveredId === e.id ? (
                                        <div className="card z-3 b-0" style={{ background: 'black', width: '17rem', height: "27rem", overflow: 'hidden' }} >
                                            <img src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`} className='img-fluid rounded-3' style={{ height: '13rem' }} />
                                            <div className="card-body" style={{ background: 'black', color: '#aaaaaa', overflow: 'hidden', height: '13rem' }}>
                                                <h3 className="card-title text-white fw-bold fs-3">{e.title}</h3>
                                                <h5 className="card-title text-white ">{e.release_date}</h5>
                                                <h4 className="card-title text-white ">IMDb {e.vote_average}</h4>
                                                <p> {e.genre_ids.map((genreId) => genres[genreId]).join(', ')}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <img src={`https://image.tmdb.org/t/p/w500${e.poster_path}`} style={{ width: '17rem', height: "27rem", overflow: 'hidden' }} className='img-fluid rounded-3' />
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
        </>
    )
}

export default SearchItems