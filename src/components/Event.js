import React, { useEffect, useState } from 'react'

import Eventcard  from './events/eventpages/Eventcard'
import Grid from '@material-ui/core/Grid';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import KeyboardArrowUpSharpIcon from '@mui/icons-material/KeyboardArrowUpSharp';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import EventCarousel from './events/eventpages/EventCarousel'
import Box from '@mui/material/Box';
import EventpageCarousel from './events/eventpages/EventpageCarousel';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getreadAllEventdata } from '../store/action/action';
import Card from '@mui/material/Card';
import img3 from "../images/m23.jpeg"
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';



const Event = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [eventdata,seteventdata] =useState([])
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const [categoryCheckboxes, setCategoryCheckboxes] = useState({
    poetry: false,
    comedy: false,
    djnight: false,
    rockband: false,
  });

  const eventsData = useSelector((state) => state.event);
  
 

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    if (category === 'All') {
      setFilteredEvents(eventdata);
    } else {
      const filtered = eventdata.filter((event) => event.language === category);
      setFilteredEvents(filtered);
    }



    
  };




  useEffect(() => {
    dispatch(getreadAllEventdata());
  }, [dispatch]);

  useEffect(() => {
    if (eventsData !== null && eventsData !== undefined) {
        if(eventsData.readAllevent !== null && eventsData.readAllevent !== undefined ){
        
          seteventdata(eventsData.readAllevent)
          setFilteredEvents(eventsData.readAllevent)
        }
    }
    
  }, [eventsData]);

  const [value, setValue] = React.useState('female');

  

  const [isAttributesVisible, setIsAttributesVisible] = useState(true);

  const toggleAttributes = () => {
    setIsAttributesVisible(!isAttributesVisible);
  };

  const [isAttributesVisiblesecond, setIsAttributesVisiblesecond] = useState(true);

  const toggleAttributessecond = () => {
    setIsAttributesVisiblesecond(!isAttributesVisiblesecond);
  };

 const cardBanner =(eventid)=>{
 console.log("eventclicked",eventid)
  navigate('/eventBannerPage')
 }

  return (
    <div className='' style={{marginTop:"1vh"}}>
     
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <EventpageCarousel/>
            </Grid>
          <div className="d-flex justify-content-center" style={{width:"100vw"}}>  
          <Box className="d-flex" width={{ lg: "80vw" }} >
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
                  <h4 style={{fontSize:"1.2vw"}} className=''>Language</h4>
                  <h4>{isAttributesVisible === false ? <KeyboardArrowDownSharpIcon /> : <KeyboardArrowUpSharpIcon/>}</h4>
                </div>

                <div className={`collapse ${isAttributesVisible ? 'show' : ''}`} id="cuppingAttributesCollapse">
                  <FormControl style={{ paddingLeft: '.7vw' }}>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={selectedCategory}
                      onChange={(e) => handleCategoryChange(e.target.value)}
                    >
                      <FormControlLabel value="All" control={<Radio />}  label=	{ <Typography style={{ fontSize:"1vw" ,padding:"1vh"}}>All</Typography> }   />
                      <FormControlLabel value="english" control={<Radio />}  label=	{ <Typography style={{ fontSize:"1vw" ,padding:"1vh"}}>English</Typography> }  />
                      <FormControlLabel value="hindi" control={<Radio />}  label=	{ <Typography style={{ fontSize:"1vw" ,padding:"1vh"}}>Hindi</Typography> }  />
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
                  <h4 style={{fontSize:"1.2vw"}} className=''>Category</h4>
                  <h4>{isAttributesVisiblesecond === false ? <KeyboardArrowDownSharpIcon /> : <KeyboardArrowUpSharpIcon/>}</h4>
                </div>

                <div className={`collapse ${isAttributesVisiblesecond ? 'show' : ''}`} id="cuppingAttributesCollapse">
                 
                  <div className='d-flex align-items-center'><span> <Checkbox   /></span><Typography style={{ fontSize:"1vw",padding:"1vh" }}>Poetry</Typography></div>
                  <div className='d-flex align-items-center'><span> <Checkbox  /></span><Typography style={{ fontSize:"1vw",padding:"1vh" }}>Comedy</Typography></div>
                  <div className='d-flex align-items-center'><span> <Checkbox   /></span><Typography style={{ fontSize:"1vw",padding:"1vh" }}>DJ Night</Typography></div>
                  <div className='d-flex align-items-center'><span> <Checkbox  /></span><Typography style={{ fontSize:"1vw",padding:"1vh" }}>Rock Band</Typography></div>
               
                </div>  
  
              </Grid>
            </Grid>

            <Grid item xs={9} sm={9} md={9} lg={9}  >
              
              <Grid item xs={12} sm={ 12} md={12} lg={12}style={{margin:"1vw",boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',padding:"1vw",borderRadius:"1vw"}}>
                
                   <div className=''>
                      <div className='mt-3 mb-2'><p style={{fontSize:"1.6vw",fontWeight:"600",marginLeft:"1vw"}}>Movies in indore</p></div>  
                              <div className='mt-2  d-flex flex-wrap justify-content-start'>
                                  
                                  {filteredEvents.map((e,index) => (
                                      <Card onClick={()=>cardBanner(e.id)} key={index}  sx={{ width:310,boxShadow:" rgba(0, 0, 0, 0.01) 0px 3px 5px",marginBottom: 8, marginRight: 2,marginLeft:2, transition: 'transform 0.3s','&:hover': { transform: 'scale(1.05)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',cursor:"pointer"} }} className='card-movies'>
                                      <CardMedia
                                          sx={{ height: 290, objectFit: 'cover' }}
                                          image={img3}
                                          title="green iguana"
                                          
                                      />
                                      <CardContent>
                                          
                                          <Typography  variant="h6" component="div" style={{fontSize:".9vw",fontWeight:"550"}}>
                                          {e.eventName}
                                          </Typography>
                                          <Typography variant="body2" color="text.secondary">
                                          {e.performer}
                                          </Typography>
                                      
                                      </CardContent>
                                      </Card>
                                  ))}

                              </div>
                      </div>
              </Grid>
            </Grid>
            </Box>
           </div>  
          </Grid>
      
    </div>
  )
}

export default Event;
