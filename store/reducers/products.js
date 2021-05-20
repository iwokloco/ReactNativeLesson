import { combineReducers } from 'redux';
import { DO_SEARCH, DO_SEARCH_FAIL, DO_SEARCH_SUCCESS, LOGIN_SUCCESS } from '../actions/Actions';
import { INIT_STATE } from '../State';

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload };
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
