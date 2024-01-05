import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import './BannerSection.css'
import Carousel from 'react-grid-carousel'
import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import 'react-lazy-load-image-component/src/effects/blur.css'; 
import images from '../../../images/movie5.jpg'
import images1 from '../../../images/movie2.jpg'
import { Padding } from '@mui/icons-material';
import Castcard from './Castcard';
import SearchBar from '../searchbar/SearchBar';
import MovieSearchResult from '../moviesearchresult/MovieSearchResult';


const BannerSection = () => {
    
const Body = styled.div`
  background: #f3f3f3;
  position: absolute;
  top: 0;
 
  left: 0;
  min-height: 100%;
  width: 100%;
`

const CarouselContainer = styled.div`
  padding: 20px 0;
`
const Title = styled.div`
  margin-top:10px;
  font-weight:600;
  font-size: 18px;
 
  height: 25px;
  overflow: hidden;
  `
const Row = styled.div`
  max-width: 1000px;
  margin: 10px auto;
  border-radius: 8px;
  background: #fff;

  @media screen and (max-width: 767px) {
    margin: 10px;
  }
`

const RowHead = styled.div`
  
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid #eee;
`

const Card = styled.div`

  position: relative;
  border:3px solid #E0E0E0;
  width: 100%;
  text-align: center;
  height: 12vh;
  border-radius:10px;

  display:flex;
  justify-content:center;
 

 



  @media screen and (max-width: 767px) {
    background: #f3f3f3;
    border: 1px solid #f3f3f3;
  
  }
`



const Mask = styled.div`
  opacity: 0;
  height: 100%;
  width: 100%;
  cursor: pointer;
  background: #0000000a;
  position: absolute;
  border-radius: 8px;
  top: 0;
  left: 0;
  
  &:hover {
    opacity: .5;
  
    border-color:2px solid #EC167F;
    color:white
  }
`



const Reference = styled.div`

  width: 100%;
  max-width: 1000px;
  border-top: 1px solid #666;

  img {
    width: 100%;
  }`

  return (
    <div>
        <div className=''>
            <div className='movie-Banner'>
 

            </div>

            <div className='row'>
              <div className='col-md-6'>
                 <div className='banner-movie-info'>
                  <div className='star-sign'><StarOutlinedIcon style={{color:"#FAAC1D"}}/><StarOutlinedIcon style={{color:"#FAAC1D"}}/><StarOutlinedIcon style={{color:"#FAAC1D"}}/><StarOutlinedIcon style={{color:"#FAAC1D"}}/><StarOutlinedIcon style={{color:"#FAAC1D"}}/></div>
                  <h2 className='mt-3'>Animal</h2>
                  <p >Release on 1 Dec 2023</p>
                  <p >A  3h 21m Action,Thriller</p>
                  <p className=' ' >Directed by: sam | Written by : Michael Waldron | Produced by :Kevin</p>
                 </div>
                 <div className='datediv'>
                        <Swiper
                          slidesPerView={3}
                          spaceBetween={30}
                          pagination={{
                            clickable: true,
                          }}
                          modules={[Pagination]}
                          className="mySwiper"
                        >
                          <SwiperSlide>
                            <h6>Mon</h6>
                            <h6>01</h6>
                            <h6>Jan</h6>
                          </SwiperSlide>
                          <SwiperSlide>Slide 2</SwiperSlide>
                          <SwiperSlide>Slide 3</SwiperSlide>
                          <SwiperSlide>Slide 4</SwiperSlide>
                          <SwiperSlide>Slide 5</SwiperSlide>
                          <SwiperSlide>Slide 6</SwiperSlide>
                          <SwiperSlide>Slide 7</SwiperSlide>
                          <SwiperSlide>Slide 8</SwiperSlide>
                          <SwiperSlide>Slide 9</SwiperSlide>
                        </Swiper>

                 </div>
              </div>


              

              <div className='col-md-6 about-section'>
                    <div className='movie-all-info'>
                        <h4 className='title-movie-banner'>About Movie</h4>
                        <p className='title-content'>Animal showcases a violent world set against the backdrop of a troubled relationship between Ranbir's character Ranvijay Singh and his father Balbir Singh, played by Anil Kapoor.A father, who is often away due to work, is unable to comprehend the intensity of his son's love. Ironically, this fervent love and admiration for his father and family creates conflict between the father and son.</p>
                    </div>
                    <div className='movie-all-info'>
                     <h4 className='title-movie-banner'>Cast</h4>   
                    <Castcard/>
                    </div>
                    <div></div>
                </div>

            
            </div>


        </div>
        <SearchBar/>
        <div className='date-calander mt-3'>

        </div>
        <MovieSearchResult/>
    </div>
  )
}

export default BannerSection
