import axios from "axios";

export const FETCH_EVENT_REQUEST = "FETCH_EVENT_REQUEST";
export const FETCH_EVENT_SUCCESS = "FETCH_EVENT_SUCCESS";
export const FETCH_EVENT_FAILURE = "FETCH_EVENT_FAILURE";


export const FETCH_EVENTBANNER_BY_ID_REQUEST = "FETCH_EVENTBANNER_BY_ID_REQUEST";
export const FETCH_EVENTBANNER_BY_ID_SUCCESS = "FETCH_EVENTBANNER_BY_ID_SUCCESS";
export const FETCH_EVENTBANNER_BY_ID_FAILURE = "FETCH_EVENTBANNER_BY_ID_FAILURE";

export const getreadAllEventdata = () => {
    return (dispatch) => {
      dispatch({ type: FETCH_EVENT_REQUEST });
      axios
        .get('http://localhost:8080/api/events/all')
        .then((response) => {
          dispatch({ type: FETCH_EVENT_SUCCESS, payload: response.data });
          console.log('response',response)
        })
  
        .catch((error) => {
          dispatch({ type: FETCH_EVENT_FAILURE, payload: error.message });
        });
    };
  };


export const getEventBannerById = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_EVENTBANNER_BY_ID_REQUEST });
    axios
      .get('http://localhost:8080/api/events/getById?eventId=1')
      .then((response) => {
        dispatch({ type: FETCH_EVENTBANNER_BY_ID_SUCCESS, payload: response.data });
      })

      .catch((error) => {
        dispatch({ type: FETCH_EVENTBANNER_BY_ID_FAILURE, payload: error.message });
      });
  };
};