import React from 'react'
import './BannerSection.css'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
const BannerSection = () => {
  return (
    <div>
        <div className=''>
            <div className='movie-Banner'></div>

            <div className='row'>
                <div className='col-md-6'>
                    <div className='star-sign'><StarOutlinedIcon style={{color:"#FAAC1D"}}/><StarOutlinedIcon style={{color:"#FAAC1D"}}/><StarOutlinedIcon style={{color:"#FAAC1D"}}/><StarOutlinedIcon style={{color:"#FAAC1D"}}/><StarOutlinedIcon style={{color:"#FAAC1D"}}/></div>
                    <div>
                        <h2>Animal</h2>
                        <h5>Release on 1 Dec 2023</h5>
                        <h5>A - 3h 21m Action,Thriller</h5>
                        <p>Directed by: sam | Written by : Michael Waldron | Produced by :Kevin</p>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div>
                        <h4>About Movie</h4>
                        <p>Animal showcases a violent world set against the backdrop of a troubled relationship between Ranbir's character Ranvijay Singh and his father Balbir Singh, played by Anil Kapoor.</p>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default BannerSection
