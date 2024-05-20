import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import ProductReducer from './ProductReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  customization: customizationReducer,
  product:ProductReducer
});

export default reducer;
