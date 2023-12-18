import React from 'react'
import './Featuresection.css'
import networklogo from '../../images/Networking.png'
const Featuresection = () => {
  return (
    <div className='container'>
        <div className='mainSection mb-3'>
            <div className='d-flex justify-content-evenly'>
                <div className='col-md-3 mx-4 mt-4 mb-4' style={{height:'110px',width:'330px'}}></div>
                <div className='col-md-3 mx-4 mt-4 mb-4' style={{boxShadow:'rgba(0, 0, 0, 0.15) 0px 5px 15px',borderRadius:'2px',height:'110px',width:'330px'}}>
                  <div className='d-flex justify-content-center align-items-center'>
                    <div className='col-3 pb-4 '><img  src={networklogo}/></div>
                    <div className='col-7 '>
                        <h5 className='featuretitlecontent mt-1 pt-1'>Networking</h5>
                        <p className='featurecontent'>Lorem ipsum dolor sit amet, consectetur </p>
                    </div>
                  </div>
                </div>

                <div className='col-md-3 mx-4 mt-4 mb-4' style={{boxShadow:'rgba(0, 0, 0, 0.15) 0px 5px 15px',borderRadius:'2px',height:'110px',width:'330px'}}>
                  <div className='d-flex justify-content-center align-items-center'>
                    <div className='col-3 pb-4 '><img  src={networklogo}/></div>
                    <div className='col-7 '>
                        <h5 className='featuretitlecontent mt-1 pt-1'>Networking</h5>
                        <p className='featurecontent'>Lorem ipsum dolor sit amet, consectetur </p>
                    </div>
                  </div>
                </div>
            </div>
            <div className='d-flex justify-content-evenly '>
                <div className='col-md-3 mx-4 my-4' style={{boxShadow:'rgba(0, 0, 0, 0.15) 0px 5px 15px',borderRadius:'2px',height:'110px',width:'330px'}}>
                  <div className='d-flex justify-content-center align-items-center'>
                    <div className='col-3 pb-4 '><img  src={networklogo}/></div>
                    <div className='col-7 '>
                        <h5 className='featuretitlecontent mt-1 pt-1'>Networking</h5>
                        <p className='featurecontent'>Lorem ipsum dolor sit amet, consectetur </p>
                    </div>
                  </div>
                </div>

                <div className='col-md-3 mx-4 my-4 ' style={{boxShadow:'rgba(0, 0, 0, 0.15) 0px 5px 15px',borderRadius:'2px',height:'110px',width:'330px'}}>
                  <div className='d-flex justify-content-center align-items-center'>
                    <div className='col-3 pb-4 '><img  src={networklogo}/></div>
                    <div className='col-7 '>
                        <h5 className='featuretitlecontent mt-1 pt-1'>Networking</h5>
                        <p className='featurecontent'>Lorem ipsum dolor sit amet, consectetur </p>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 mx-4 my-4' style={{boxShadow:'rgba(0, 0, 0, 0.15) 0px 5px 15px',borderRadius:'2px',height:'110px',width:'330px'}}>
                  <div className='d-flex justify-content-center align-items-center'>
                    <div className='col-3 pb-4 '><img  src={networklogo}/></div>
                    <div className='col-7 '>
                        <h5 className='featuretitlecontent mt-1 pt-1'>Networking</h5>
                        <p className='featurecontent'>Lorem ipsum dolor sit amet, consectetur </p>
                    </div>
                  </div>
                </div>
            </div>
        
        </div>
      
    </div>
  )
}

export default Featuresection
