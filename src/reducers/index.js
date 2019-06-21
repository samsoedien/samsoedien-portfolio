import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import errorReducer from './errorReducer';
// import contactReducer from './contactReducer';

export default combineReducers({
  alert: alertReducer,
  error: errorReducer,
  // contact: contactReducer,
});
