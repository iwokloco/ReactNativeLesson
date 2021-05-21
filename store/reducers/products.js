import { combineReducers } from 'redux';
import { DO_SEARCH, DO_SEARCH_FAIL, DO_SEARCH_SUCCESS, INIT_APP, LOGIN_SUCCESS, LOGOUT } from '../actions/Actions';
import { INIT_STATE } from '../State';

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case INIT_APP:
      return { ...state, isLoading: false, auth: { token: action.payload.token } };
    case LOGIN_SUCCESS:
      return { ...state, auth: { token: action.payload } };
    case LOGOUT:
      return { ...state, auth: { token: null } };
    case DO_SEARCH:
      return { ...state, search: action.payload };
    case DO_SEARCH_SUCCESS:
      const list = action.payload.filter((item) => item.user.username.includes(state.search));
      return { ...state, list, listServer: action.payload, err: null };
    case DO_SEARCH_FAIL:
      return { ...state, err: action.payload, list: [] };
  }
  return state;
};

export const reducers = combineReducers({
  productStore: reducer,
});
