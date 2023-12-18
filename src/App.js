import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Cardsectionfirst from './components/cardsectionfirst/Cardsectionfirst';
import Cardsectionsecond from './components/cardsectionsecond/Cardsectionsecond';
import MiddleBanner from './components/middleBanner/MiddleBanner';
import Featuresection from './components/featuresection/Featuresection';
import TimeCounter from './components/timeCounter/TimeCounter';
import BannerSection from './components/movies/bannerSection/BannerSection';
function App() {
  return (
    <div className="App">
      

      <Header/>
   
      <Cardsectionfirst/>
      <Cardsectionsecond/>
      <MiddleBanner/>
      <Featuresection/>
      <TimeCounter/>
      <BannerSection/>
    </div>
  );
}

export default App;
