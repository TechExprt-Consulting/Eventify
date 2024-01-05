// import { combineReducers } from 'redux';
// import eventReducer from './reducer';

// const rootReducer = combineReducers({
//     event: eventReducer,

//   });

// export default rootReducer;  


import { combineReducers } from 'redux';
import eventReducer from './reducer';



const rootReducer = combineReducers({
  event: eventReducer,
  // Add other reducers here if needed
});



export default rootReducer;