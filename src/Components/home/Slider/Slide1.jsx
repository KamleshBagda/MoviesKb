import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectCube, Autoplay, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Slide1(props) {
    const [hoveredId, setHoveredId] = useState(null);
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState({});

    const handleImageHover = (id) => {
        setHoveredId(id);
    };

    const handleImageLeave = () => {
        setHoveredId(null);
    };
    let genreId = props.data;

    const handleMoviedetail = (e) => {
        sessionStorage.setItem("moviedetail", JSON.stringify(e))
    }

    useEffect(() => {
        const apiKey = '62a41d246069bcbcdab2e0c444715af4';
        const totalpage = 5;

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

        for (let page = 1; page <= totalpage; page++) {
            try {
                fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}&page=${page}&include_adult=false`)
                    .then((response) => response.json())
                    .then((data) => {
                        setMovies(movies.concat(data.results));
                    })
                    .catch((error) => console.error('Error fetching movies', error));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    }, [])

    return (
        <>
            <div className="container-fluid px-1 px-sm-2 px-md-3 my-1">
                <Swiper
                    style={{
                        '--swiper-navigation-size': '25px',
                        '--swiper-navigation-top-offset': ' 50%',
                        '--swiper-navigation-sides-offset': '10px',
                        '--swiper-navigation-color': '#F8FFDB'
                    }}
                    modules={[Navigation, EffectCube, A11y, Autoplay, Mousewheel]}
                    // mousewheel={true}
                    // spaceBetween={15}
                    // slidesPerView={1}

                    // autoplay={{
                    //     delay: 100000,
                    //     disableOnInteraction: false,
                    // }}
                    navigation
                    breakpoints={{
                        120: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 25,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                        }
                    }}

                // pagination={{ clickable: true }}
                >
                    {movies?.map((e) => (
                        <SwiperSlide key={e.id} style={{ cursor: 'pointer' }}>
                            <Link to='/moviedetailpage' className='text-decoration-none'>
                                <div
                                    className="image-container"
                                    onMouseEnter={() => handleImageHover(e.id)}
                                    onMouseLeave={handleImageLeave}
                                    onClick={() => handleMoviedetail(e)}
                                >
                                    {hoveredId === e.id ? (
                                        <div className="card z-3 position-absulate" style={{ width: "19rem", background: 'black' }} >
                                            <img src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`} className='img-fluid rounded-3' style={{ height: '220px' }} />
                                            <div className="card-body " style={{ background: 'black', color: '#aaaaaa' }}>
                                                <h4 className="card-title text-white fw-bold fs-3 my-1">{e.original_title}</h4>
                                                <h5 className="card-title text-white ">{e.release_date}</h5>
                                                <h4 className="card-title text-white my-1">IMDb {e.vote_average}</h4>
                                                <p> {e.genre_ids.map((genreId) => genres[genreId]).join(', ')}</p>
                                                {/* <p className="card-text mt-2" style={{ height: '80px', overflow: 'inherit' }}>{e.overview}</p> */}
                                            </div>
                                        </div>
                                    ) : (
                                        <img src={`https://image.tmdb.org/t/p/w500${e.poster_path}`} alt={`Slide ${e.id}`} className='img-fluid rounded-3' />
                                    )}
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default Slide1