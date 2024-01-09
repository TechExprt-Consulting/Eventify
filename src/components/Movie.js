import React,{useState,useEffect} from 'react'
import Header from './header/Header'
import EventCarousel from './events/eventpages/EventCarousel'
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
import InputAdornment from '@mui/material/InputAdornment';
import Footer2 from './footer/Footer2';
import EventpageCarousel from './events/eventpages/EventpageCarousel';
import img3 from "../images/m23.jpeg"
import img4 from "../images/aqua.jpeg"
import img5 from "../images/sambhadur.jpeg"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {getreadAllMoviedata} from '../store/action/action'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
const Movie = () => {

  const imageses=[{
    id:1,
    movieimg:img3
  },{
    id:2,
    movieimg:img3
  },{
    id:3,
    movieimg:img3
  }
]
  

 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('All');
  const [sortvalue, setSortValue] = React.useState('Relevance')
  const [moviedata,setmoviedata] =useState([])
  const [genereData,setgenereData] =useState([])
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [search,setSearch] = useState('')
  const [searchfilter,setsearchfilter] =useState()

  
  const moviesData = useSelector((state) => state.event);


  useEffect(() => {
    dispatch(getreadAllMoviedata());
  }, [dispatch]);

  useEffect(() => {
    if (moviesData !== null && moviesData !== undefined) {
        if(moviesData.readAllmovie !== null && moviesData.readAllmovie !== undefined ){
        
          setmoviedata(moviesData.readAllmovie)
          setFilteredMovies(moviesData.readAllmovie)
          setgenereData(moviesData.readAllmovie)
    
      
        }
    }
    
  }, [moviesData]);


  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    if (category === 'All') {
      setFilteredMovies(moviedata);
    } else {
      const filtered = moviedata.filter((event) => event.language === category);
      setFilteredMovies(filtered);
    }
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

  const movieBanner =(movieid)=>{
  

    localStorage.setItem('singleMovieId', movieid);
    const data =localStorage.getItem('singleMovieId')
    console.log("ggg",data)
     navigate('/movie/banner')
    }



  return (
    < >
   <div style={{ overflow: 'hidden',marginTop:"1vh" ,backgroundColor:"#f4f4f4"}}>
      
  <Grid container spacing={2} >
  <Grid item xs={12} sm={12} md={12} lg={12}>
    <EventpageCarousel/>
  </Grid>
 

  
  <Grid container  >
      <div className='offset-1' style={{ width: '100%',marginLeft:"11vw"  }}>
        <div class="input-group mb-3"  style={{ width: '78vw', height:"7.5vh", boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',borderRadius: '1vw',borderStyle:"none",backgroundColor:"#f4f4f4"}}>
          <input value={search} onClick={(e)=>setSearch(e.target.value)} style={{borderRadius: '1vw'}} type="text" class="form-control" placeholder="Search your movies..." aria-label="Username" aria-describedby="basic-addon1"/>
        </div>

      </div>
    </Grid>
    
 

  <div className="d-flex justify-content-center" style={{width:"100vw"}}>
  <Box  width={{ lg: "80%" }} className="d-flex " >
  <Grid item xs={3} sm={3} md={3} lg={3}>
    <Grid item xs={12} sm={12} md={12} lg={12} style={{margin:"1vw",boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',backgroundColor:"#ffffff",padding:"1vw",borderRadius:"1vw"}}>
      <div
        className="heading d-flex justify-content-between mt-3 "
        data-toggle="collapse"
        data-target="#cuppingAttributesCollapse"
        aria-expanded={isAttributesVisible}
        aria-controls="cuppingAttributesCollapse"
        style={{ fontSize: '19px', color: 'black', cursor: 'pointer', fontWeight: '500' }}
        onClick={toggleAttributes}
      >
        <h4 className='' style={{fontSize:"1.2vw"}}>Language</h4>
        <h4 style={{fontSize:"1.2vw"}}>{isAttributesVisible === false ? <KeyboardArrowDownSharpIcon /> : <KeyboardArrowUpSharpIcon/>}</h4>
      </div>

      <div className={`collapse ${isAttributesVisible ? 'show' : ''}`} id="cuppingAttributesCollapse">
        <FormControl style={{ paddingLeft: '.7vw'}} >
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
        <h4 style={{fontSize:"1.2vw"}} className=''>Genres</h4>
        <h4>{isAttributesVisiblesecond === false ? <KeyboardArrowDownSharpIcon /> : <KeyboardArrowUpSharpIcon/>}</h4>
      </div>

      <div className={`collapse ${isAttributesVisiblesecond ? 'show' : ''}`} id="cuppingAttributesCollapse">
        <div className='d-flex align-items-center'><span> <Checkbox  /></span><Typography style={{ fontSize:"1vw",padding:"1vh" }}>Drama</Typography></div>
        <div className='d-flex align-items-center'><span> <Checkbox  /></span><Typography style={{ fontSize:"1vw",padding:"1vh"}}>Action</Typography></div>
        <div className='d-flex align-items-center'><span> <Checkbox  /></span><Typography style={{ fontSize:"1vw",padding:"1vh" }}>Thriller</Typography></div>
        <div className='d-flex align-items-center'><span> <Checkbox  /></span><Typography style={{ fontSize:"1vw",padding:"1vh" }}>Fantasy</Typography></div>
        <div className='d-flex align-items-center'><span> <Checkbox  /></span><Typography style={{ fontSize:"1vw",padding:"1vh" }}>Crime</Typography></div>
        <div className='d-flex align-items-center'><span> <Checkbox  /></span><Typography style={{ fontSize:"1vw",padding:"1vh" }}>Biography</Typography></div>
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
        <h4 style={{fontSize:"1.2vw"}} className=''>Sort By</h4>
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
            <FormControlLabel value="Relevance" control={<Radio />} label={ <Typography style={{ fontSize: '1vw',padding:"1vh" }}>Relevance</Typography> } />
            <FormControlLabel value="Release Date: New to Old" control={<Radio />} label={ <Typography style={{ fontSize: '1vw',padding:"1vh" }}>Release Date: New to Old</Typography> }  />
            <FormControlLabel value="Release Date: Old to New" control={<Radio />} label={ <Typography style={{ fontSize:"1vw",padding:"1vh" }}>Release Date: Old to New</Typography> }  />
          </RadioGroup>
        </FormControl>
      </div>
    </Grid>
  </Grid>

  <Grid item xs={9} sm={9} md={9} lg={9}  >
    
    <Grid item xs={12} sm={ 12} md={12} lg={12}style={{margin:"1vw",boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',padding:"1vw",borderRadius:"1vw",backgroundColor:"#ffffff"}}>
                 <div className=''>
                      <div className='mt-3 mb-2'><p style={{fontSize:"1.6vw",fontWeight:"600",marginLeft:"1vw"}}>Events in indore</p></div>  
                              <div className='mt-2  d-flex flex-wrap justify-content-start'>
                                  
                                  {filteredMovies.map((m,index) => (
                                      <Card  key={index}  onClick={()=>movieBanner(m.id)} sx={{ width:310,boxShadow:" rgba(0, 0, 0, 0.01) 0px 3px 5px",marginBottom: 8, marginRight: 2,marginLeft:2, transition: 'transform 0.3s','&:hover': { transform: 'scale(1.05)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',cursor:"pointer"} }} className='card-movies'>
                                      <CardMedia
                                          sx={{ height: 290, objectFit: 'cover' }}
                                       
                                          image={img3}
                                        
                                          title="green iguana"
                                          
                                      />
                                      <CardContent>
                                          
                                          <Typography  variant="h6" component="div" style={{fontSize:".9vw",fontWeight:"550"}}>
                                          {m.title}
                                          </Typography>
                                          <Typography variant="body2" color="text.secondary">
                                          {m.language}
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

<Footer2/>
    </div>

        
    </>
  )
}

export default Movie
