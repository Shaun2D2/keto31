import { List } from 'immutable';
import axios from 'axios';

const FETCH_ENTRIES = 'FETCH_ENTRIES';

const fetchEntriesAction = data => ({
  type: FETCH_ENTRIES,
  data,
});

export const fetchEntries = () => (
  async (dispatch) => {
    try {
      const response = await axios.get('/api/entry');

      console.log(response);
      dispatch(fetchEntriesAction(response.data));

      return Promise.resolve();
    } catch (e) {
      return Promise.reject();
    }
  }
);

const initialState = List([]);

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ENTRIES:
      return List(action.data);
    default:
      return state;
  }
};
