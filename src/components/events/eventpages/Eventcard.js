import React from 'react'
import "./Eventcard.css"
import img2 from "../../../images/salar.jpeg"
import img3 from "../../../images/sambhadur.jpeg"
import aqua from "../../../images/aqua.jpeg"
const Eventcard = ({data,eve}) => {
  return (
    <div className='mt-4'>
        
        <div className='d-flex justify-content-center'>
            <button className='btn btn filterbutton m-2'>Hindi</button>
            <button className='btn btn filterbutton m-2'>English</button>
            <button className='btn btn filterbutton m-2'>Malyalam</button>
            <button className='btn btn filterbutton m-2'>Telgu</button>
            <button className='btn btn filterbutton m-2'>Tamil</button>
        </div>
        
       <div className='card-section row justify-content-center mt-3 '>

           <div className="card my-2" >
                <img src={aqua} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h6>{data.name}</h6>
                    <p className="card-text">{data.certificate}</p>
                    <p className="card-text">{data.languages}</p>
                </div>
            </div>

            <div className="card my-2" >
                <img src={img2} 
                className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h6>Avenger</h6>
                    <p className="card-text">UA</p>
                    <p className="card-text">Hindi,English</p>
                </div>
            </div>


            <div className="card my-2" >
                <img src={img3} 
                className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h6>GOG</h6>
                    <p className="card-text">UA</p>
                    <p className="card-text">Hindi,English</p>
                </div>
            </div>


            <div className="card my-2" >
                <img src={aqua} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h6>Animal</h6>
                    <p className="card-text">A</p>
                    <p className="card-text">Hindi</p>
                </div>
            </div>

            <div className="card my-2" >
                <img src={img2} 
                className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h6>Avenger</h6>
                    <p className="card-text">UA</p>
                    <p className="card-text">Hindi,English</p>
                </div>
            </div>


            <div className="card my-2" >
                <img src={img3} 
                className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h6>GOG</h6>
                    <p className="card-text">UA</p>
                    <p className="card-text">Hindi,English</p>
                </div>
            </div>
            
            <div className="card my-2" >
                <img src={aqua} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h6>Animal</h6>
                    <p className="card-text">A</p>
                    <p className="card-text">Hindi</p>
                </div>
            </div>

            <div className="card my-2" >
                <img src={img2} 
                className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h6>Avenger</h6>
                    <p className="card-text">UA</p>
                    <p className="card-text">Hindi,English</p>
                </div>
            </div>


            <div className="card my-2" >
                <img src={img3} 
                className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h6>GOG</h6>
                    <p className="card-text">UA</p>
                    <p className="card-text">Hindi,English</p>
                </div>
            </div>
        </div>



            
    </div>
  )
}

export default Eventcard
