import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';
import Header from './components/header/Header';
import Cardsectionfirst from './components/cardsectionfirst/Cardsectionfirst';
import Cardsectionsecond from './components/cardsectionsecond/Cardsectionsecond';
import MiddleBanner from './components/middleBanner/MiddleBanner';
import Featuresection from './components/featuresection/Featuresection';
import TimeCounter from './components/timeCounter/TimeCounter';
import BannerSection from './components/movies/bannerSection/BannerSection';
import MainBannerSearch from './components/main-banner-search/MainBannerSearch';
import EventCarousel from './components/events/eventpages/EventCarousel';
import Eventcard from './components/events/eventpages/Eventcard';
import Home from './components/Home';
import Movie from './components/Movie';
import Event from './components/Event';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import ListYourShow from './components/listyourshow/ListYourShow';
import Navbar from './components/navbar/Navbar';
import Movieseat from './components/movieseat/Movieseat';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/movie"  element={<Movie/>} />
          <Route path="/movie/banner"  element={<BannerSection/>} />
          <Route path="/Event"  element={<Event/>} />
          <Route path="/login"  element={<Login/>} />
          <Route path="/Signup"  element={<Signup/>} />
          <Route path="/ListYourShow"  element={<ListYourShow/>} />
          <Route path="/navbar"  element={<Navbar/>} /> 
          <Route path="/movieseat"  element={<Movieseat/>} />
          <Route path="/footer"  element={<Footer/>} />
        </Routes>
        
     
      </Router>
     {/* <div><Header/></div>
     <div><MainBannerSearch/></div>
     <div><Cardsectionfirst/></div>
      
      <div><Cardsectionsecond/></div>
      
      <div><MiddleBanner/></div>
      <div><Featuresection/></div>
      <div><TimeCounter/></div>
      
      <BannerSection/> */}
      {/* <div><EventCarousel/></div> 
      <Eventcard/> */}
    </div>
  );
}

export default App;
