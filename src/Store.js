import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
// import rootReducer from './store/reducer/reducer.reducer';
import rootReducer from './store/reducer/reducer.reducer';


const store = createStore( rootReducer, applyMiddleware(thunk));



export default store;

// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';  // Correct import statement
// import rootReducer from './store/reducer/reducer.reducer';

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;
