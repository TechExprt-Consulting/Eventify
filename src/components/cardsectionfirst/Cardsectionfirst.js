import React from 'react'
import Carousel from 'react-grid-carousel'
import styled from 'styled-components'
import images from '../../images/movie1.jpg'
import images1 from '../../images/movie2.jpg'
import './Cardsectionfirst.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; 
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Cardsectionfirst = () => {


  const navigate = useNavigate();

  
  const cardclick =()=> {
    
    console.log("hello")
    navigate('/movie/banner')
  }
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
  padding: 20px;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid #eee;
`

const Card = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 320px;
    object-fit: cover;
    border-radius: 8px;
  }

 



  @media screen and (max-width: 767px) {
    background: #f3f3f3;
    border: 1px solid #f3f3f3;
  }
`

const Title = styled.div`
  margin-top:10px;
  font-weight:600;
  font-size: 18px;
 
  height: 25px;
  overflow: hidden;
  
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
    opacity: 1;
  }
`

const Code = styled.pre`
  max-width: 1000px;
  margin: 10px auto;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
`

const Reference = styled.div`
  margin: 50px auto;
  width: 100%;
  max-width: 1000px;
  border-top: 1px solid #666;

  img {
    width: 100%;
  }`



  
  return (
    <div className='container'>
        <div className='sectionTitle '>
            <span>Recommended Movies</span>
        </div>
      
       <CarouselContainer>
          <Carousel cols={5} showDots loop>
            
         
               <Carousel.Item >
                <Card >
                  <LazyLoadImage src={images} onclick={cardclick}  effect="blur" />
                  <div>
                    <Title>Avengers</Title>
                    <span>Action/Sci-Fi</span>
                   
                  </div>
                  <Mask />
                </Card>
              </Carousel.Item>
              
              <Carousel.Item  >
                <Card>
                  <LazyLoadImage src={images1} effect="blur" />
                  <div>
                    <Title>Avengers</Title>
                    <span>Action/Sci-Fi/Drama</span>
                   
                  </div>
                  <Mask />
                </Card>
              </Carousel.Item>

              <Carousel.Item  >
                <Card>
                  <LazyLoadImage src={images} effect="blur" />
                  <div>
                  <Title>Avengers</Title>
                    <span>Action/Sci-Fi/Drama</span>
                    
                  </div>
                  <Mask />
                </Card>
              </Carousel.Item>

              <Carousel.Item  >
                <Card>
                  <LazyLoadImage src={images1} effect="blur"/>
                  <div>
                    <Title>Avengers</Title>
                    <span>Action/Sci-Fi</span>
                   
                  </div>
                  <Mask />
                </Card>
              </Carousel.Item>

              <Carousel.Item  >
                <Card>
                  <LazyLoadImage src={images} effect="blur"/>
                  <div>
                    <Title>Avengers</Title>
                    <span>Action/Sci-Fi</span>
                  
                  </div>
                  <Mask />
                </Card>
              </Carousel.Item>

              <Carousel.Item  >
                <Card>
                  <LazyLoadImage src={images1} effect="blur" />
                  <div>
                  <Title>Avengers</Title>
                    <span>Action/Sci-Fi</span>
                    
                  </div>
                  <Mask />
                </Card>
              </Carousel.Item>
        
         
              
     
          </Carousel>
        </CarouselContainer>
    </div>
  )
}

export default Cardsectionfirst
