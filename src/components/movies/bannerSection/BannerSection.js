import React, { useRef, useState,useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import moment from 'moment';
import { Pagination,Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
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
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {getMovieBannerById} from '../../../store/action/action';
import { Grid } from '@mui/material';


const BannerSection = () => {
    
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [moviesIdsData,setmoviesIdsData] = useState([])
  const[cast,setcast] = useState('')
  const [releasedate,setreleasedate]=useState('')

  const moviesIdData = useSelector((state) => state.event);
  console.log("moviesIdDatamoviesIdData",moviesIdData)

  useEffect(() => {
    const movieid =localStorage.getItem('singleMovieId')
    dispatch(getMovieBannerById(movieid));
  }, [dispatch]);

  useEffect(() => {
    if (moviesIdData !== null && moviesIdData !== undefined) {
        if(moviesIdData.readMovieBannerById !== null && moviesIdData.readMovieBannerById !== undefined ){
        
          setmoviesIdsData(moviesIdData.readMovieBannerById)
          setcast(moviesIdData.readMovieBannerById.cast)
          setreleasedate(moment(moviesIdData.readMovieBannerById.releaseDate).format("MMM Do YY"))
        }
    }
    
  }, [moviesIdData]);



  return (
    <div>
        <div className=''>
            <div className='movie-Banner'>
 

            </div>

              <Grid container spacing={2} justifyContent='center'>
            
                  <Grid item xs={12} md={10}>
                  <div className='row '>
                  <div className='col-md-6 '>
                    <div className='banner-movie-info'>
                      <div className='star-sign'><StarOutlinedIcon style={{color:"#FAAC1D"}}/><StarOutlinedIcon style={{color:"#FAAC1D"}}/><StarOutlinedIcon style={{color:"#FAAC1D"}}/><StarOutlinedIcon style={{color:"#FAAC1D"}}/><StarOutlinedIcon style={{color:"#FAAC1D"}}/></div>
                      <h2 className='mt-3'>{moviesIdsData.title}</h2>
                      <p >Release on {releasedate} </p>
                      <p >A  3h 21m Action,{moviesIdsData.genre}</p>
                      <p className=' ' >Directed by: {moviesIdsData.director} | Written by : {moviesIdsData.writter} | Produced by : {moviesIdsData.producer}</p>
                    </div>
                    <div className='datediv'>
                            <Swiper
                              slidesPerView={7}
                              spaceBetween={20}
                            
                              navigation={true}
                              modules={[Pagination,Navigation]}
                              className="mySwiper"
                              style={{backgroundColor:"#f4f0ec",padding:"1vw"}}
                            >
                              <SwiperSlide style={{backgroundColor:"#EC167F",color:"white",height:"10vh",width:"4vw",borderRadius:"13px",textAlign:"center",}}>
                                <h6 style={{paddingTop:".5vh"}}>Mon</h6>
                                <h6 style={{fontSize:"1.2vw"}}>01</h6>
                                <h6>Jan</h6>
                              </SwiperSlide>
                              <SwiperSlide style={{backgroundColor:"white",height:"10vh",width:"4vw",borderRadius:"13px",textAlign:"center",}}>
                                <h6 style={{paddingTop:".5vh"}}>Mon</h6>
                                <h6 style={{fontSize:"1.2vw"}}>01</h6>
                                <h6>Jan</h6>
                              </SwiperSlide>
                              <SwiperSlide style={{backgroundColor:"white",height:"10vh",width:"4vw",borderRadius:"13px",textAlign:"center",}}>
                                <h6 style={{paddingTop:".5vh"}}>Mon</h6>
                                <h6 style={{fontSize:"1.2vw"}}>01</h6>
                                <h6>Jan</h6>
                              </SwiperSlide>
                              <SwiperSlide style={{backgroundColor:"white",height:"10vh",width:"4vw",borderRadius:"13px",textAlign:"center",}}>
                                <h6 style={{paddingTop:".5vh"}}>Mon</h6>
                                <h6 style={{fontSize:"1.2vw"}}>01</h6>
                                <h6>Jan</h6>
                              </SwiperSlide>
                              <SwiperSlide style={{backgroundColor:"white",height:"10vh",width:"4vw",borderRadius:"13px",textAlign:"center",}}>
                                <h6 style={{paddingTop:".5vh"}}>Mon</h6>
                                <h6 style={{fontSize:"1.2vw"}}>01</h6>
                                <h6>Jan</h6>
                              </SwiperSlide>
                              <SwiperSlide style={{backgroundColor:"white",height:"10vh",width:"4vw",borderRadius:"13px",textAlign:"center",}}>
                                <h6 style={{paddingTop:".5vh"}}>Mon</h6>
                                <h6 style={{fontSize:"1.2vw"}}>01</h6>
                                <h6>Jan</h6>
                              </SwiperSlide>
                              <SwiperSlide style={{backgroundColor:"white",height:"10vh",width:"4vw",borderRadius:"13px",textAlign:"center",}}>
                                <h6 style={{paddingTop:".5vh"}}>Mon</h6>
                                <h6 style={{fontSize:"1.2vw"}}>01</h6>
                                <h6>Jan</h6>
                              </SwiperSlide>
                              <SwiperSlide style={{backgroundColor:"white",height:"10vh",width:"4vw",borderRadius:"13px",textAlign:"center",}}>
                                <h6 style={{paddingTop:".5vh"}}>Mon</h6>
                                <h6 style={{fontSize:"1.2vw"}}>01</h6>
                                <h6>Jan</h6>
                              </SwiperSlide>
                              <SwiperSlide style={{backgroundColor:"white",height:"10vh",width:"4vw",borderRadius:"13px",textAlign:"center",}}>
                                <h6 style={{paddingTop:".5vh"}}>Mon</h6>
                                <h6 style={{fontSize:"1.2vw"}}>01</h6>
                                <h6>Jan</h6>
                              </SwiperSlide>
                              <SwiperSlide style={{backgroundColor:"white",height:"10vh",width:"4vw",borderRadius:"13px",textAlign:"center",}}>
                                <h6 style={{paddingTop:".5vh"}}>Mon</h6>
                                <h6 style={{fontSize:"1.2vw"}}>01</h6>
                                <h6>Jan</h6>
                              </SwiperSlide>
                              <SwiperSlide style={{backgroundColor:"white",height:"10vh",width:"4vw",borderRadius:"13px",textAlign:"center",}}>
                                <h6 style={{paddingTop:".5vh"}}>Mon</h6>
                                <h6 style={{fontSize:"1.2vw"}}>01</h6>
                                <h6>Jan</h6>
                              </SwiperSlide>
                              <SwiperSlide style={{backgroundColor:"white",height:"10vh",width:"4vw",borderRadius:"13px",textAlign:"center",}}>
                                <h6 style={{paddingTop:".5vh"}}>Mon</h6>
                                <h6 style={{fontSize:"1.2vw"}}>01</h6>
                                <h6>Jan</h6>
                              </SwiperSlide>
                            </Swiper>

                    </div>
                  </div>


                  

                  <div className='col-md-6 about-section'>
                        <div className='movie-all-info'>
                            <h4 className='title-movie-banner'>About Movie</h4>
                            <p className='title-content'>{moviesIdsData.description}.</p>
                        </div>
                        <div className='movie-all-info'>
                        <h4 className='title-movie-banner'>Cast</h4>   
                        <Castcard casts={cast}/>
                        </div>
                        <div></div>
                    </div>

                
                </div>
                
                  </Grid>


                </Grid>

              <Grid container spacing={2} justifyContent='center'>

                  <Grid item xs={12} md={10} style={{marginLeft:"0"}}>
                  <hr/>
                    <SearchBar/>
                  <hr/>
                  </Grid>

                </Grid>



              <Grid container spacing={2} justifyContent='center'>

                  <Grid item xs={12} md={10} style={{marginLeft:"0"}}>
                  <MovieSearchResult/>
                  </Grid>

              </Grid>


        </div>
       

       
    </div>
  )
}

export default BannerSection
