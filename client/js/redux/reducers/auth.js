import { Map } from 'immutable';
import axios from 'axios';

import { fetchUser } from './user';
import authConfig from '../../utils/helpers';

const USER_LOGIN = 'USER_LOGIN';

const loginUserAction = data => ({
  type: USER_LOGIN,
  data,
});

export const registerUser = payload => (
  async (dispatch) => {
    try {
      const response = await axios.post('/api/register', payload);

      dispatch(loginUserAction(response.data));

      authConfig(response.data.token);

      await dispatch(fetchUser());

      return Promise.resolve();
    } catch (e) {
      console.log(e);
      return Promise.reject();
    }
  }
);

export const loginUser = payload => (
  async (dispatch) => {
    try {
      const response = await axios.post('/api/login', payload);

      dispatch(loginUserAction(response.data));

      return Promise.resolve();
    } catch (e) {
      return Promise.reject();
    }
  }
);

const initialState = Map({
  token: null,
  expiration: null,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return Map(action.data);
    default:
      return state;
  }
};
