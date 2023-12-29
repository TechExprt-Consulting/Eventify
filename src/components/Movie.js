import React,{useState} from 'react'
import Header from './header/Header'
import EventCarousel from './events/eventpages/EventCarousel'
import Eventcard from './events/eventpages/Eventcard'
import Grid from '@material-ui/core/Grid';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import KeyboardArrowUpSharpIcon from '@mui/icons-material/KeyboardArrowUpSharp';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const Movie = () => {
  const movie=  {
    "name": "The Shawshank Redemption",
    "certificate": "R",
    "languages": "English,hindi"
  }

  const [value, setValue] = React.useState('female');

  const handleChangeradio = (event) => {
    setValue(event.target.value);
  };

  const [isAttributesVisible, setIsAttributesVisible] = useState(false);

  const toggleAttributes = () => {
    setIsAttributesVisible(!isAttributesVisible);
  };

  const [isAttributesVisiblesecond, setIsAttributesVisiblesecond] = useState(false);

  const toggleAttributessecond = () => {
    setIsAttributesVisiblesecond(!isAttributesVisiblesecond);
  };
  
  return (
    < >
   <div style={{ overflow: 'hidden',marginTop:"1vh" }}>
      
   <Grid container spacing={2}>
  <Grid item xs={12} sm={12} md={12} lg={12}>
    <EventCarousel />
  </Grid>

  <Grid item xs={3} sm={3} md={3} lg={3} >
    <Grid item xs={12} sm={12} md={12} lg={12} style={{margin:"1vw",boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',padding:"1vw",borderRadius:"1vw"}}>
      <div
        className="heading d-flex justify-content-between mt-3 "
        data-toggle="collapse"
        data-target="#cuppingAttributesCollapse"
        aria-expanded={isAttributesVisible}
        aria-controls="cuppingAttributesCollapse"
        style={{ fontSize: '19px', color: 'black', cursor: 'pointer', fontWeight: '500' }}
        onClick={toggleAttributes}
      >
        <h4 className=''>Language</h4>
        <h4>{isAttributesVisible === false ? <KeyboardArrowDownSharpIcon /> : <KeyboardArrowUpSharpIcon/>}</h4>
      </div>

      <div className={`collapse ${isAttributesVisible ? 'show' : ''}`} id="cuppingAttributesCollapse">
        <FormControl style={{ paddingLeft: '.7vw' }}>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChangeradio}
          >
            <FormControlLabel value="All" control={<Radio />} label="All" />
            <FormControlLabel value="English" control={<Radio />} label="English" />
            <FormControlLabel value="Hindi" control={<Radio />} label="Hindi" />
          </RadioGroup>
        </FormControl>
      </div>

      <div
        className="heading d-flex justify-content-between mt-3 "
        data-toggle="collapse"
        data-target="#cuppingAttributesCollapse"
        aria-expanded={isAttributesVisiblesecond}
        aria-controls="cuppingAttributesCollapse"
        style={{ fontSize: '19px', color: 'black', cursor: 'pointer', fontWeight: '500' }}
        onClick={toggleAttributessecond}
      >
        <h4 className=''>Genres</h4>
        <h4>{isAttributesVisiblesecond === false ? <KeyboardArrowDownSharpIcon /> : <KeyboardArrowUpSharpIcon/>}</h4>
      </div>

      <div className={`collapse ${isAttributesVisiblesecond ? 'show' : ''}`} id="cuppingAttributesCollapse">
        <div><span> <Checkbox  /></span>Drama</div>
        <div><span> <Checkbox  /></span>Action</div>
        <div><span> <Checkbox  /></span>Thriller</div>
        <div><span> <Checkbox  /></span>Fantasy</div>
        <div><span> <Checkbox  /></span>Crime</div>
        <div><span> <Checkbox  /></span>Biography</div>
      </div>
    </Grid>
  </Grid>

  <Grid item xs={9} sm={9} md={9} lg={9}  >
    
    <Grid item xs={12} sm={ 12} md={12} lg={12}style={{margin:"1vw",boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',padding:"1vw",borderRadius:"1vw"}}><Eventcard /></Grid>
  </Grid>
</Grid>
    </div>

        
    </>
  )
}

export default Movie
