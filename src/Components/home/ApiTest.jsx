// import React, { useEffect, useState } from 'react'

// import axios from 'axios';

// function ApiTest() {
//     const [movielist, setMovielist] = useState([])
//     const [genres, setGenres] = useState({});
//     const apiKey = '62a41d246069bcbcdab2e0c444715af4';
//     var page = 1;
//     var totalpage = 5;
//     const fetchGenres = async () => {
//         try {
//             const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`);
//             const genreMap = {};
//             response.data.genres.forEach((genre) => {
//                 genreMap[genre.id] = genre.name;
//             });
//             setGenres(genreMap);
//         } catch (error) {
//             console.error('Error fetching genres:', error);
//         }
//     };

//     const fetchMovies = async () => {
//         let allMovies = [];

//         for (page; page <= totalpage; page = page + 1) {
//             try {
//                 const response = await axios.get(
//                     `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}`
//                 );
//                 allMovies = allMovies.concat(response.data.results);
//                 // console.log("array is :", allMovies)
//                 console.log(page)
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         }
//         setMovielist(allMovies);
//     };

//     useEffect(() => {
//         fetchGenres();
//         fetchMovies();
//     }, []);


//     const handlemoredata = () => {
//         if(page==totalpage){
//             totalpage = totalpage+5;
//         }
//         else{
//             page = totalpage;
//             totalpage = totalpage+5;
//         }
//         console.log("page:",page)
//         console.log("totalpage",totalpage)
//         fetchMovies();
//         // fetchGenres();
//     }


//     return (
//         <>
//             {
//                 movielist.map((e) => (
//                     <>
//                         <div className="d-inline-flex">
//                             <img src={`https://image.tmdb.org/t/p/w500${e.poster_path}`} alt="" style={{ width: '350px', height: '400px' }} />
//                             <p> {e.genre_ids.map((genreId) => genres[genreId]).join(', ')}</p>
//                         </div>
//                     </>
//                 ))
//             }

//             <div className="row text-center">
//                 <button className='btn btn-primary p-3' onClick={handlemoredata}>Load More</button>
//             </div>

//         </>
//     )
// }

// export default ApiTest

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ApiTest() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const apiKey = '62a41d246069bcbcdab2e0c444715af4'; 

  const fetchMovies = async (pageNumber) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=${pageNumber}`
      );

      if (response.data.results) {
        const newMovies = response.data.results;
        setMovies((prevMovies) => [...prevMovies, ...newMovies]);
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
  }, [page]);

  return (
    <div>
      <h1>Movie List</h1>
      {movies.map((movie) => (
        <div className=" d-inline-flex" style={{width:'17rem'}}>
            <div key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="" />
          <h2>{movie.title}</h2>
          <p>Release Date: {movie.release_date}</p>
          <p>Overview:{movie.overview}</p>
        </div>
        </div>
      ))}
      {isLoading && <p>Loading...</p>}
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
}

export default ApiTest;
