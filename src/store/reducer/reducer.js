const initialState={
    readAll: [],
    loading: false,
    error: null,
}


const userReducer = (state = initialState, action) => {
   
switch (action.type) {


case "FETCH_USERS_REQUEST":
    return {
      ...state,
      loading: true,
      error: null,
    };
  case "FETCH_DATA_SUCCESS":
    return {
      ...state,
      readAllProductList: action.payload,
      loading: false,
      error: null,
    };
  case "FETCH_DATA_FAILURE":
    return {
      ...state,
      loading: false,
      error: action.payload,
    };

  default:
        return state;  

   }

}