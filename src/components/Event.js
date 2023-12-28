import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Eventcard  from './events/eventpages/Eventcard'
const Event = () => {

  const [eventdata,seteventdata] =useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("eventdata",eventdata)
  useEffect(()=>{
    eventapi();
  },[])

  const eventapi = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/events/all');
          seteventdata(response.data)
      } catch (error) {
        console.error('Error while fetching data:', error);
      }
  }
  
  const event=  {
    "name": "The event",
    "certificate": "aR",
    "languages": "English,hindi"
  }

  return (
    <div className=''>
    
      <div className='container'><Eventcard eve={event}/></div>
      
    </div>
  )
}

export default Event;
