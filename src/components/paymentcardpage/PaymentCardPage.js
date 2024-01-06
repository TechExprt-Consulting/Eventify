import React, { useState } from 'react';
import { Box,TextField, Button, Grid, Paper, Typography, InputAdornment, SvgIcon  } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import EventNoteIcon from '@mui/icons-material/EventNote';
import LockIcon from '@mui/icons-material/Lock';
const PaymentCardPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to handle the payment information securely (e.g., using a payment gateway).
    console.log('Payment submitted:', { cardNumber, expirationDate, cvv });
    // Clear form fields or navigate to a success page.
  };

  return (
    <div >
    <Grid container justifyContent="center" alignItems="center" minHeight="100vh">
      {/* Left Part - Image */}
      <Grid item xs={12} sm={6} style={{height:"100vh"}}>
        <img src="pay 1.png" alt="Payment Card" style={{ width: '100%', height: '100%' }} />
      </Grid>
      {/* Right Part - Card Details */}
      <Grid item xs={12} sm={6} style={{height:"100vh", display: 'flex', alignItems: 'center' ,justifyContent: 'center'}} >
        <Box elevation={3} p={4} style={{height:"auto",width:"30vw",borderRadius:".6vw" ,boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px',padding:"4vh 2vw"}}>
          <Typography variant="h5" align="center" gutterBottom>
            Payment Card Info
          </Typography>
          <form style={{padding:"1vw"}} onSubmit={handleSubmit}>
            <TextField
              label="Card Number"
              variant="outlined"
              fullWidth
              margin="normal"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="Enter card number"
              inputProps={{ maxLength: 16 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon component={CreditCardIcon} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Expiration Date"
              variant="outlined"
              fullWidth
              margin="normal"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              placeholder="MM/YYYY"
              inputProps={{ maxLength: 7 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon component={EventNoteIcon} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="CVV"
              variant="outlined"
              fullWidth
              margin="normal"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="Enter CVV"
              inputProps={{ maxLength: 3 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon component={LockIcon} />
                  </InputAdornment>
                ),
              }}
            />
            <div style={{margin:"2vh 1vw"}}>
                <div className='d-flex justify-content-between'><h6>Price:</h6><h6>200</h6></div>
                <div className='d-flex justify-content-between'><h6>Quantity:</h6><h6>6</h6></div>
             
                <hr/>
                < div className='d-flex justify-content-between'><h6>Total Amount:</h6><h6>1200</h6></div>
        
                <hr/>
            </div>
            <Button style={{backgroundColor:"#EC167F",height:"5vh",fontSize:"1vw"}}variant="contained" color="primary" type="submit" fullWidth>
             Pay
            </Button>
          </form>
        </Box>
      </Grid>
    </Grid>
    </div>
  );
};

export default PaymentCardPage;
