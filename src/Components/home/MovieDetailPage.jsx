import React, { useEffect, useState } from 'react'
import HomeNavbar from './HomeNavbar'
import axios from 'axios';
import Footer from './Footer';
import { useNavigate  } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




function MovieDetailPage() {
    const navigate = useNavigate();
    const handleback = () => {
        navigate(-1);
    }

    const [genres, setGenres] = useState({});
    let MovieData;

    MovieData = JSON.parse(sessionStorage.getItem('moviedetail'))
    console.log("data is", JSON.parse(sessionStorage.getItem('moviedetail')))

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
    }, [])

    return (
        <>
            <div className="container-fluid bg-black buttonrel" style={{ minHeight: '100vh' }}>
                <HomeNavbar />
                <div className="back" onClick={handleback}>
                    <button className='buttoncls'><FontAwesomeIcon icon="fa-solid  fa-arrow-left-long" className='me-2'/>Back</button>
                </div>
                <div className="container  pt-2 pt-sm-3 pt-md-5 ">
                    <div className="row d-flex">
                        <div className="col-12 col-md-6">
                            <div className="image_section pt-3">
                                <img src={`https://image.tmdb.org/t/p/w500${MovieData?.poster_path}`} alt="" className='img-fluid' style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="row movietitle mb-2" style={{ color: "white" }}>
                            {MovieData.original_title?(
                                <span style={{ fontFamily: 'monospace' }} >
                                    {MovieData.original_title}
                                </span>)
                                : (
                                <span style={{ fontFamily: 'monospace' }} >
                                    {MovieData.original_name}
                                </span>)}
                            </div>
                            <div className="row movieoverview mb-1 mb-sm-2" style={{ color: "#aaaaaa" }}>
                                <span style={{ fontFamily: 'cursive' }} >
                                    {MovieData.overview}
                                </span>
                            </div>
                            <div className="row movieoverview mb-1 mb-sm-2" style={{ color: "white" }}>
                                <span style={{ fontFamily: 'cursive' }} >
                                    {`IMDb ${MovieData.vote_average}, ${MovieData.release_date}`}
                                </span>
                            </div>
                            <div className="row movieoverview mb-1 mb-sm-2" style={{ color: "white" }}>
                                <span style={{ fontFamily: 'cursive' }} >
                                    <p> {MovieData.genre_ids.map((genreId) => genres[genreId]).join(', ')}</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default MovieDetailPage