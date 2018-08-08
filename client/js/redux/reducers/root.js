import { combineReducers } from 'redux-immutable';
import auth from './auth';
import user from './user';

export default combineReducers({
  auth,
  user
});
