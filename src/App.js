import './App.css';
import Create from './Components/Login/Create';
import Login from './Components/Login/Login';
import SignIn from './Components/Login/SignIn';
import { Route, Routes} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import Home from './Components/home/Home';
import ApiTest from './Components/home/ApiTest';
import TV from './Components/home/TV';
import CategoriesShow from './Components/home/CategoriesShow';
import Footer from './Components/home/Footer';
import SearchItems from './Components/home/SearchItems';
import MovieDetailPage from './Components/home/MovieDetailPage';
import MenuFile from './Components/home/MenuFile';
import SearchPage from './Components/home/SearchPage';
import SignOutpage from './Components/home/SignOutpage';
import TVCategoryShow from './Components/home/TVCategoryShow';
import TVSearchitems from './Components/home/TVSearchitems';
import TVDatailPage from './Components/home/TVDatailPage';
import TVMenuFile from './Components/home/TVMenuFile';
import TVSearchpage from './Components/home/TVSearchpage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Create' element={<Create />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/home' element={<Home />} />
        <Route path='/tv' element={<TV />} />
        <Route path='/categoriesshow' element={<CategoriesShow />} />
        <Route path='/tvcategoriesshow' element={<TVCategoryShow />} />
        <Route path='/search' element={<SearchItems />} />
        <Route path='/tvsearch' element={<TVSearchitems />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/moviedetailpage' element={<MovieDetailPage />} />
        <Route path='/tvdetailpage' element={<TVDatailPage />} />
        <Route path='/menufile' element={<MenuFile/>}/>
        <Route path='/tvmenufile' element={<TVMenuFile/>}/>
        <Route path='/searchpage' element={<SearchPage/>}/>
        <Route path='/tvsearchpage' element={<TVSearchpage/>}/>
        <Route path='/signoutpage' element={<SignOutpage/>}/>
      </Routes>

      {/* <Home/> */}
      {/* <CategoriesShow /> */}
      {/* <ApiTest/> */}
      {/* <MovieDetailPage /> */}
      {/* <MenuFile/> */}


    </>
  );
}

export default App;
library.add(fab, fas, far)
