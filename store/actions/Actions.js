export const LOGIN_SUCCESS = '[Login] Login Success';
export const DO_SEARCH = '[Search] Do Search';
export const DO_SEARCH_SUCCESS = '[Search] Do Search Succes';
export const DO_SEARCH_FAIL = '[Search] Do Search Fail';

export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
export const doSearch = (searchParams) => ({ type: DO_SEARCH, payload: searchParams });
export const doSearchSuccess = (list) => ({ type: DO_SEARCH_SUCCESS, payload: list });
export const doSearchFail = (err) => ({ type: DO_SEARCH_FAIL, payload: err });
