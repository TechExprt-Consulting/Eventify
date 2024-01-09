const initialState={
    readAllevent: [],
    readEventBannerById:[],
    readMovieBannerById:[],
    readAllmovie: [],
    loading: false,
    error: null,
}


const userReducer = (state = initialState, action) => {
   
switch (action.type) {

  
  case "FETCH_EVENT_REQUEST":
    return {
      ...state,
      loading: true,
      error: null,
    };
  case "FETCH_EVENT_SUCCESS":
    return {
      ...state,
      readAllevent: action.payload,
      loading: false,
      error: null,
    };
  case "FETCH_EVENT_FAILURE":
    return {
      ...state,
      loading: false,
      error: action.payload,
    };

 case "FETCH_EVENTBANNER_BY_ID_REQUEST":
    return {
      ...state,
      loading: true,
      error: null,
    };
  case "FETCH_EVENTBANNER_BY_ID_SUCCESS":
    return {
      ...state,
      readEventBannerById: action.payload,
      loading: false,
      error: null,
    };
  case "FETCH_EVENTBANNER_BY_ID_FAILURE":
    return {
      ...state,
      loading: false,
      error: action.payload,
    };



    case "FETCH_MOVIEBANNER_BY_ID_REQUEST":
    return {
      ...state,
      loading: true,
      error: null,
    };
  case "FETCH_MOVIEBANNER_BY_ID_SUCCESS":
    return {
      ...state,
      readMovieBannerById: action.payload,
      loading: false,
      error: null,
    };
  case "FETCH_MOVIEBANNER_BY_ID_FAILURE":
    return {
      ...state,
      loading: false,
      error: action.payload,
    }; 


    case "FETCH_MOVIE_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_MOVIE_SUCCESS":
      return {
        ...state,
        readAllmovie: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_MOVIE_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

  default:
        return state;  

   }

}

export default userReducer;