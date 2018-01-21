import { combineReducers } from 'redux';

import auth from './auth';
import locationManager from './locationManager';

export default combineReducers({
  auth,
  locationManager,
});
