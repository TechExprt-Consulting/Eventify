import React from 'react'
import './Featuresection.css'
import networklogo from '../../images/Networking.png'
const Featuresection = () => {
  return (
    <div className='main-feature-div '>
       <div className='upper-feature-div'>
        <div className='upper-feature-inner-div'>

        </div>
        <div className='upper-feature-inner-div'>
          <div className='upper-feature-inner-div-first'> 
             <img  src={networklogo}/>
          </div>
          <div className='upper-feature-inner-div-second'>
              <h5>Greate Speakers</h5>
              <p className='featurecontent'>Lorem ipsum dolor sit amet, consectetur </p>
          </div>
        </div>
        

        <div className='upper-feature-inner-div'>
          <div className='upper-feature-inner-div-first'> 
             <img  src={networklogo}/>
          </div>
          <div className='upper-feature-inner-div-second'>
              <h5>Greate Speakers</h5>
              <p className='featurecontent'>Lorem ipsum dolor sit amet, consectetur </p>
          </div>
        </div>
       </div>






       <div className='lower-feature-div'>

          <div className='upper-feature-inner-div'>
              <div className='upper-feature-inner-div-first'> 
                <img  src={networklogo}/>
              </div>
              <div className='upper-feature-inner-div-second'>
                  <h5>Greate Speakers</h5>
                  <p className='featurecontent'>Lorem ipsum dolor sit amet, consectetur </p>
              </div>
            </div>

            <div className='upper-feature-inner-div'>
              <div className='upper-feature-inner-div-first'> 
                <img  src={networklogo}/>
              </div>
              <div className='upper-feature-inner-div-second'>
                  <h5>Greate Speakers</h5>
                  <p className='featurecontent'>Lorem ipsum dolor sit amet, consectetur </p>
              </div>
            </div>

            <div className='upper-feature-inner-div'>
              <div className='upper-feature-inner-div-first'> 
                <img  src={networklogo}/>
              </div>
              <div className='upper-feature-inner-div-second'>
                  <h5>Greate Speakers</h5>
                  <p className='featurecontent'>Lorem ipsum dolor sit amet, consectetur </p>
              </div>
            </div>
       </div>
      
    </div>
  )
}

export default Featuresection
