const USER_LOGIN = 'USER_LOGIN';

const initialState = {
  token: null,
  expiration: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {};
    default:
      return state;
  }
};
