import { Map } from 'immutable';
import axios from 'axios';

const FETCH_USER = 'FETCH_USER';

const fetchUserAction = data => ({
  type: FETCH_USER,
  data,
});

export const fetchUser = () => (
  async (dispatch) => {
    try {
      const response = await axios.get('/api/user');

      dispatch(fetchUserAction(response.data));

      return Promise.resolve();
    } catch (e) {
      return Promise.reject();
    }
  }
);

const initialState = Map({});

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return Map(action.data);
    default:
      return state;
  }
};
