import { createStore } from 'redux';
import rootReducer from './reducer';
// config extension redux-devtool
import { composeWithDevTools } from 'redux-devtools-extension';

const composedEnhancers = composeWithDevTools();

// Tao kho luu tru cac state chung
const store = createStore(rootReducer, composedEnhancers);


export default store;