import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Cardsectionfirst from './components/cardsectionfirst/Cardsectionfirst';
import Cardsectionsecond from './components/cardsectionsecond/Cardsectionsecond';
import MiddleBanner from './components/middleBanner/MiddleBanner';
import Featuresection from './components/featuresection/Featuresection';
import TimeCounter from './components/timeCounter/TimeCounter';
import BannerSection from './components/movies/bannerSection/BannerSection';
import MainBannerSearch from './components/main-banner-search/MainBannerSearch';
function App() {
  return (
    <div className="App">
      
     <div><Header/></div>
     <div><MainBannerSearch/></div>
     <div><Cardsectionfirst/></div>
      
      <div><Cardsectionsecond/></div>
      
      <div><MiddleBanner/></div>
      <div><Featuresection/></div>
      <div><TimeCounter/></div>
      
      
      {/* <BannerSection/> */}
    </div>
  );
}

export default App;
