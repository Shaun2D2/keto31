import { combineReducers } from 'redux-immutable';
import auth from './auth';
import user from './user';
import entries from './entries';

export default combineReducers({
  auth,
  user,
  entries
});
