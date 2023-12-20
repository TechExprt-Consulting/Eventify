import React from 'react'
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
  width: 90%;
  height: 80px;
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
            <div className='movie-Banner'></div>

            <div className='row'>
                <div className='col-md-5 mx-4'>
                    <div className='star-sign mt-5 px-4'><StarOutlinedIcon style={{color:"#FAAC1D"}}/><StarOutlinedIcon style={{color:"#FAAC1D"}}/><StarOutlinedIcon style={{color:"#FAAC1D"}}/><StarOutlinedIcon style={{color:"#FAAC1D"}}/><StarOutlinedIcon style={{color:"#FAAC1D"}}/></div>
                    <div>
                        <h2 className='mt-2 px-4'>Animal</h2>
                        <h5 className='mt-2 px-4'>Release on 1 Dec 2023</h5>
                        <h5 className='mt-2 px-4'>A  3h 21m Action,Thriller</h5>
                        <p className='mt-2 px-4 '>Directed by: sam | Written by : Michael Waldron | Produced by :Kevin</p>
                    <div className=''>
                        <CarouselContainer>
                        <Carousel cols={7} showDots loop>
                            
                        
                            <Carousel.Item  >
                                <Card>
                                
                                <div>
                                <span className='sub-date-heading p-0 m-0' style={{fontSize:"14px"}}>Mon</span>
                                    <h5 className='fw-bold m-0 p-0'>01</h5>
                                <span className='sub-date-heading'>Dec</span>    
                                </div>
                        
                                </Card>
                            </Carousel.Item>

                            <Carousel.Item  >
                                <Card>
                                
                                <div>
                                <span className='sub-date-heading' style={{fontSize:"14px"}}>Mon</span>
                                <h5  style={{margin:"0",Padding:"0"}}>02</h5>
                                <span className='sub-date-heading'>Dec</span>    
                                </div>
                            
                                </Card>
                            </Carousel.Item>

                            <Carousel.Item  >
                                <Card>
                                
                                <div>
                                <span className='sub-date-heading' style={{fontSize:"14px"}}>Mon</span>
                                <h5  style={{margin:"0",Padding:"0"}}>03</h5>
                                <span className='sub-date-heading'>Dec</span>    
                                </div>
                                
                                </Card>
                            </Carousel.Item>
                            

                            <Carousel.Item  >
                                <Card>
                                
                                <div>
                                <span className='sub-date-heading' style={{fontSize:"14px"}}>Mon</span>
                                <h5  style={{margin:"0",Padding:"0"}}>04</h5>
                                <span className='sub-date-heading'>Dec</span>    
                                </div>
                                <Mask />
                                </Card>
                            </Carousel.Item>

                            <Carousel.Item  >
                                <Card>
                                
                                <div>
                                <span className='sub-date-heading' style={{fontSize:"14px"}}>Mon</span>
                                <h5  style={{margin:"0",Padding:"0"}}>05</h5>
                                <span className='sub-date-heading'>Dec</span>    
                                </div>
                        
                                </Card>
                            </Carousel.Item>
                            
                            <Carousel.Item  >
                                <Card>
                                
                                <div>
                                <span className='sub-date-heading' style={{fontSize:"14px"}}>Mon</span>
                                <h5  style={{margin:"0",Padding:"0"}}>06</h5>
                                <span className='sub-date-heading'>Dec</span>    
                                </div>
                                
                                </Card>
                            </Carousel.Item>

                            <Carousel.Item  >
                                <Card>
                                
                                <div>
                                <span className='sub-date-heading' style={{fontSize:"14px"}}>Mon</span>
                                <h5 style={{margin:"0",Padding:"0"}}>07</h5>
                                <span className='sub-date-heading'>Dec</span>    
                                </div>
                            
                                </Card>
                            </Carousel.Item>
                        
                            <Carousel.Item  >
                                <Card>
                                
                                <div>
                                <span className='sub-date-heading' style={{fontSize:"14px"}}>Mon</span>
                                <h5 style={{margin:"0",Padding:"0"}}>07</h5>
                                <span className='sub-date-heading'>Dec</span>    
                                </div>
                        
                                </Card>
                            </Carousel.Item>
                        
                            
                    
                        </Carousel>
                        </CarouselContainer>
                        </div>
                    </div>
                </div>
                <div className='col-md-5 mx-5 pl-2 mt-5'>
                    <div className='mt-2'>
                        <h4 style={{fontWeight:"600"}}>About Movie</h4>
                        <p>Animal showcases a violent world set against the backdrop of a troubled relationship between Ranbir's character Ranvijay Singh and his father Balbir Singh, played by Anil Kapoor.</p>
                    </div>
                    <div>
                     <h4 style={{fontWeight:"600"}}>Cast</h4>   
                    <Castcard/>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
        <SearchBar/>
        <MovieSearchResult/>
    </div>
  )
}

export default BannerSection
