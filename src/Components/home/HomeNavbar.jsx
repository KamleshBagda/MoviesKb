import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


function HomeNavbar() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [searchshow, Setsearchshow] = useState(false);
  const [query, setQuery] = useState('');
  // const [results, setResults] = useState([]);
  // const [movies, setMovies] = useState([]);
  // const [genres, setGenres] = useState({});


  // const apiKey = '62a41d246069bcbcdab2e0c444715af4';
  // useEffect(() => {

  //   const fetchGenres = async () => {
  //     try {
  //       const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=62a41d246069bcbcdab2e0c444715af4`);
  //       const genreMap = {};
  //       response.data.genres.forEach((genre) => {
  //         genreMap[genre.id] = genre.name;
  //       });
  //       setGenres(genreMap);
  //     } catch (error) {
  //       console.error('Error fetching genres:', error);
  //     }
  //   };

  //   fetchGenres();


  // }, [])

  const searchMovies = async () => {
    // try {
    //   const response = await fetch(
    //     `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
    //   );

    //   if (!response.ok) {
    //     throw new Error(`HTTP error! Status: ${response.status}`);
    //   }

    //   const data = await response.json();
    //   setResults(data.results);
    // } catch (error) {
    //   console.error('Error searching movies:', error);
    // }
    sessionStorage.setItem("searchitem",JSON.stringify(query));

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

  return (
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

            <div className="col-lg-1 col-xl-2 text-end p-0 ">
              {/* <Link to='/search' className='text-decoration-none' style={{ color: '#aaaaaa' }}> */}
                <span onClick={handlesearhbtn}>
                  {!searchshow && <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='searchicon text-center' />}
                  {searchshow && <FontAwesomeIcon icon="fa-solid fa-xmark" className='searchicon text-center' />}
                </span>
              {/* </Link> */}
            </div>

            <div className="col-lg-2 col-xl-2 text-center">
              <span className={`signinhover ${hoveredItem === 3 ? 'active' : ''}`} onMouseEnter={() => handleListItemHover(3)} onMouseLeave={handleListItemLeave}> <img src="./Images/Home/profile_logo.svg" alt="" className='signInImg' />
                {
                  hoveredItem === 3 && <div className='signin_categories rounded-bottom p-1'>
                    <ul className='list-unstyled bg_color_homelist mb-0 rounded-bottom text-start'>
                      <Link to='/SignIn'className='text-decoration-none' style={{ color: '#aaaaaa' }}><li className='py-lg-1 px-lg-2 py-xl-2 px-xl-3 list_hover_home3'>Sign Out</li></Link>
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
                {/* <input type="search" name="" id="" className='searchinputcss p-1 ' /> */}
              </form>
            </div>
            <div className="col-1 proition_seacrh_rel">
            <Link to='/search' className='text-decoration-none' style={{ color: '#aaaaaa' }}><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='fs-4 p-0 m-0 position_absulte_seacrh' onClick={searchMovies} /></Link>
              {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='fs-4 p-0 m-0 position_absulte_seacrh' /> */}
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
          <div className="col-2 col-sm-2 col-md-1 ps-0 alignrightcss" >
            <Link to='/searchpage' ><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='searchicon' /></Link>
          </div>
          <div className="col-2 col-sm-2 col-md-1">
            <Link to='/signoutpage'><span className='signinhover'> <img src="./Images/Home/profile_logo.svg" alt="" className='signInImg' /></span></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeNavbar