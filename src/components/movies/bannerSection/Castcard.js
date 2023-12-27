import React from 'react'
import Carousel from 'react-grid-carousel'
import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import 'react-lazy-load-image-component/src/effects/blur.css'; 
import ranveer from '../../../images/cast/ranveer kapoor.jpg'
import rashmika from '../../../images/cast/rashmika.jpg'
import bobi from '../../../images/cast/bobideol.jpg'
import Anil from '../../../images/cast/anilkapoor.jpg'
import tripti from '../../../images/cast/tripti.jpg'
import Sourabh from '../../../images/cast/sourabh.jpg'
import { Padding } from '@mui/icons-material';


const Castcard = () => {
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
  text-align: center;
  img {
    width: 10vw;
    height: 20vh;
    object-fit: cover;
    border-radius: 50%;

    
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
    <div>
              <CarouselContainer>
                        <Carousel cols={5} showDots loop>
                            
                        
                            <Carousel.Item  >
                                <Card>
                                <LazyLoadImage src={ranveer}  effect="blur" />
                                <div>
                                    <Title>Ranveer Kapoor</Title>
                                    <span>Actor</span>
                                
                                </div>
                                <Mask />
                                </Card>
                            </Carousel.Item>

                            <Carousel.Item  >
                                <Card>
                                <LazyLoadImage src={rashmika} effect="blur" />
                                <div>
                                    <Title>Rashmika</Title>
                                    <span>Actress</span>
                                
                                </div>
                                <Mask />
                                </Card>
                            </Carousel.Item>

                            <Carousel.Item  >
                                <Card>
                                <LazyLoadImage src={bobi} effect="blur" />
                                <div>
                                <Title>Bobi Deol</Title>
                                    <span>villen</span>
                                    
                                </div>
                                <Mask />
                                </Card>
                            </Carousel.Item>

                            <Carousel.Item  >
                                <Card>
                                <LazyLoadImage src={Anil} effect="blur"/>
                                <div>
                                    <Title>Anil Kapoor</Title>
                                    <span>Co-Actor</span>
                                
                                </div>
                                <Mask />
                                </Card>
                            </Carousel.Item>

                            <Carousel.Item  >
                                <Card>
                                <LazyLoadImage src={tripti} effect="blur"/>
                                <div>
                                    <Title>Tripti</Title>
                                    <span>Co-Actress</span>
                                
                                </div>
                                <Mask />
                                </Card>
                            </Carousel.Item>

                            <Carousel.Item  >
                                <Card>
                                <LazyLoadImage src={Sourabh} effect="blur" />
                                <div>
                                <Title>Sourabh Sukla</Title>
                                    <span>Co-Actor</span>
                                    
                                </div>
                                <Mask />
                                </Card>
                            </Carousel.Item>

                            <Carousel.Item  >
                                <Card>
                                <LazyLoadImage src={Sourabh} effect="blur" />
                                <div>
                                <Title>Sourabh Sukla</Title>
                                    <span>Co-Actor</span>
                                    
                                </div>
                                <Mask />
                                </Card>
                            </Carousel.Item>

                        </Carousel>
                    </CarouselContainer>
    </div>
  )
}

export default Castcard
