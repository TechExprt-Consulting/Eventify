import React from 'react'
import { Grid } from '@mui/material'

const DetailForm = () => {
  return (
    <div>
    <Grid container spacing={2}>
    
      <Grid item xs={12} md={10} justifyContent='center'>
         <div className="d-flex  flex-column justify-content-center" style={{backgroundColor:"grey"}}>
            <h4 className='text-center'>Account Setup</h4>
            <p className='text-center'>Please fill in the below details so that we can setup account for your organisation in our system and give you access to The Do-it-yourself portal for listing your event</p>
         </div>
      </Grid>
      <Grid item xs={12} md={10} justifyContent='center' style={{backgroundColor:"grey"}}>
         <div className="" >
           <h6>Organisation Details</h6>
         </div>
         <div>
                   <div>
                        <label >organisation/individual name</label>
                        <input type="text" style={{width:"30vw"}}class="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                   </div>
                        
                   <div>
                         <label >organisation/individual PAN card number</label>
                        <input type="text" style={{width:"30vw"}} class="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div> 

                    <div>
                         <label >Enter your GST number(if any)</label>
                        <input type="text" style={{width:"30vw"}} class="form-control"  aria-label="Username" aria-describedby="basic-addon1"/>
                    </div> 
                    <div>
                         <label >Enter your state</label>
                        <input type="text" style={{width:"30vw"}} class="form-control"  aria-label="Username" aria-describedby="basic-addon1"/>
                    </div> 
              

              
         </div>
         <div className="mt-5" >
           <h6>Contact Person Details</h6>
         </div>
         <div >
                   <div>
                        <label >Full Name</label>
                        <input type="text" style={{width:"30vw"}}class="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                   </div>
                        
                   <div>
                         <label >Email Address</label>
                        <input type="text" style={{width:"30vw"}} class="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div> 

                    <div>
                         <label >Mobile number</label>
                        <input type="text" style={{width:"30vw"}} class="form-control"  aria-label="Username" aria-describedby="basic-addon1"/>
                    </div> 
              
         </div>

         <div className="mt-5" >
           <h6>Bank Details</h6>
         </div>
         <div>
                   <div>
                        <label >Beneficiary Name</label>
                        <input type="text" style={{width:"30vw"}}class="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                   </div>
                        
                   <div>
                         <label >Bank Name</label>
                        <input type="text" style={{width:"30vw"}} class="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div> 

                    <div>
                         <label >Account Number</label>
                        <input type="text" style={{width:"30vw"}} class="form-control"  aria-label="Username" aria-describedby="basic-addon1"/>
                    </div> 

                    <div>
                         <label >Bank IFSC</label>
                        <input type="text" style={{width:"30vw"}} class="form-control"  aria-label="Username" aria-describedby="basic-addon1"/>
                    </div> 
              
         </div>
      </Grid>
    </Grid>

    </div>
  )
}

export default DetailForm
