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
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import SearchBar from "material-ui-search-bar";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Footer2 from './footer/Footer2';

const Movie = () => {
 

  const [value, setValue] = React.useState('All');
  const [sortvalue, setSortValue] = React.useState('Relevance')
  const handleChangeradio = (event) => {
    setValue(event.target.value);
  };
  
  const handleChangeSort = (event) => {
    setSortValue(event.target.value);
  };
  const [isAttributesVisible, setIsAttributesVisible] = useState(true);

  const toggleAttributes = () => {
    setIsAttributesVisible(!isAttributesVisible);
  };

  const [isAttributesVisiblesecond, setIsAttributesVisiblesecond] = useState(true);

  const toggleAttributessecond = () => {
    setIsAttributesVisiblesecond(!isAttributesVisiblesecond);
  };
  
  const [isAttributesVisiblethird, setIsAttributesVisiblethird] = useState(true);

  const toggleAttributesthird = () => {
    setIsAttributesVisiblethird(!isAttributesVisiblethird);
  };  


  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Perform search based on the searchTerm
    setSearchTerm(searchTerm);
  };


  return (
    < >
   <div style={{ overflow: 'hidden',marginTop:"1vh" ,backgroundColor:"#f4f4f4"}}>
      
  <Grid container spacing={2} >
  <Grid item xs={12} sm={12} md={12} lg={12}>
    <EventCarousel />
  </Grid>

  <Grid container spacing={2} style={{padding:"0 10.5vw" , backgroundColor:"#f4f4f4",marginTop:"4vh"}}>
      <Grid item xs={12}>
        <div className='d-flex justify-content-between'>
          <div style={{ display: 'flex', alignItems: 'center' }}>
           <SearchBar style={{width:"40vw"}}/>
          </div>
          <div
            className="heading d-flex  "
            data-toggle="collapse"
            data-target="#cuppingAttributesCollapse"
            aria-expanded={isAttributesVisible}
            aria-controls="cuppingAttributesCollapse"
            style={{ fontSize: '19px', color: 'black', cursor: 'pointer', fontWeight: '500',boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',padding:"0 1vw" ,}}
            onClick={toggleAttributes}
          >
            <p className='' style={{fontSize:"1.5vw",marginRight:"1vw"}}><LocationOnOutlinedIcon/></p>
            <p style={{fontSize:"1.5vw"}}>{isAttributesVisible === false ? <KeyboardArrowDownSharpIcon /> : <KeyboardArrowUpSharpIcon/>}</p>
          </div>

          </div>
      </Grid>
     
  </Grid>


  <div className="d-flex justify-content-center">
  <Box  width={{ lg: "80%" }} className="d-flex " >
  <Grid item xs={3} sm={3} md={3} lg={3}>
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
        <h4 className='' style={{fontSize:"1.5vw"}}>Language</h4>
        <h4 style={{fontSize:"1.5vw"}}>{isAttributesVisible === false ? <KeyboardArrowDownSharpIcon /> : <KeyboardArrowUpSharpIcon/>}</h4>
      </div>

      <div className={`collapse ${isAttributesVisible ? 'show' : ''}`} id="cuppingAttributesCollapse">
        <FormControl style={{ paddingLeft: '.7vw'}} >
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChangeradio}
     
          >
            <FormControlLabel value="All" control={<Radio />}  label=	{ <Typography style={{ fontSize: '1.1vw' ,padding:"1vh"}}>All</Typography> }    />
            <FormControlLabel value="English" control={<Radio />} label=	{ <Typography style={{ fontSize: '1.1vw' ,padding:"1vh"}}>English</Typography> } />
            <FormControlLabel value="Hindi" control={<Radio />} label=	{ <Typography style={{ fontSize: '1.1vw' ,padding:"1vh"}}>Hindi</Typography> }  />
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
        <h4 style={{fontSize:"1.5vw"}} className=''>Genres</h4>
        <h4>{isAttributesVisiblesecond === false ? <KeyboardArrowDownSharpIcon /> : <KeyboardArrowUpSharpIcon/>}</h4>
      </div>

      <div className={`collapse ${isAttributesVisiblesecond ? 'show' : ''}`} id="cuppingAttributesCollapse">
        <div className='d-flex align-items-center'><span> <Checkbox  /></span><Typography style={{ fontSize: '1.1vw',padding:"1vh" }}>Drama</Typography></div>
        <div className='d-flex align-items-center'><span> <Checkbox  /></span><Typography style={{ fontSize: '1.1vw',padding:"1vh"}}>Action</Typography></div>
        <div className='d-flex align-items-center'><span> <Checkbox  /></span><Typography style={{ fontSize: '1.1vw',padding:"1vh" }}>Thriller</Typography></div>
        <div className='d-flex align-items-center'><span> <Checkbox  /></span><Typography style={{ fontSize: '1.1vw',padding:"1vh" }}>Fantasy</Typography></div>
        <div className='d-flex align-items-center'><span> <Checkbox  /></span><Typography style={{ fontSize: '1.1vw',padding:"1vh" }}>Crime</Typography></div>
        <div className='d-flex align-items-center'><span> <Checkbox  /></span><Typography style={{ fontSize: '1.1vw',padding:"1vh" }}>Biography</Typography></div>
      </div>


      <div
        className="heading d-flex justify-content-between mt-3 "
        data-toggle="collapse"
        data-target="#cuppingAttributesCollapse"
        aria-expanded={isAttributesVisiblesecond}
        aria-controls="cuppingAttributesCollapse"
        style={{ fontSize: '19px', color: 'black', cursor: 'pointer', fontWeight: '500' }}
        onClick={toggleAttributesthird}
      >
        <h4 style={{fontSize:"1.5vw"}} className=''>Sort By</h4>
        <h4>{isAttributesVisiblethird === false ? <KeyboardArrowDownSharpIcon /> : <KeyboardArrowUpSharpIcon/>}</h4>
      </div>

      <div className={`collapse ${isAttributesVisiblethird ? 'show' : ''}`} id="cuppingAttributesCollapse">
        <FormControl style={{ paddingLeft: '.7vw' }}>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={sortvalue}
            onChange={handleChangeSort}
          >
            <FormControlLabel value="Relevance" control={<Radio />} label={ <Typography style={{ fontSize: '1.1vw',padding:"1vh" }}>Relevance</Typography> } />
            <FormControlLabel value="Release Date: New to Old" control={<Radio />} label={ <Typography style={{ fontSize: '1.1vw',padding:"1vh" }}>Release Date: New to Old</Typography> }  />
            <FormControlLabel value="Release Date: Old to New" control={<Radio />} label={ <Typography style={{ fontSize: '1.1vw',padding:"1vh" }}>Release Date: Old to New</Typography> }  />
          </RadioGroup>
        </FormControl>
      </div>
    </Grid>
  </Grid>

  <Grid item xs={9} sm={9} md={9} lg={9}  >
    
    <Grid item xs={12} sm={ 12} md={12} lg={12}style={{margin:"1vw",boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',padding:"1vw",borderRadius:"1vw"}}><Eventcard /></Grid>
  </Grid>
  </Box>
  </div>
</Grid>

<Footer2/>
    </div>

        
    </>
  )
}

export default Movie
