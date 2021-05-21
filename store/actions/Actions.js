import { SecureStoreService } from '../../services/secure-store.service';

export const INIT_APP = '[Load] Init App';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGOUT = '[Auth] Logout';
export const DO_SEARCH = '[Search] Do Search';
export const DO_SEARCH_SUCCESS = '[Search] Do Search Succes';
export const DO_SEARCH_FAIL = '[Search] Do Search Fail';

export const initApp = (payload) => ({ type: INIT_APP, payload });
export const loginSuccess = (payload) => {
  const { token } = payload;
  SecureStoreService.save(token);
  return { type: LOGIN_SUCCESS, payload };
};
export const logout = () => {
  SecureStoreService.delete('token');
  return { type: LOGOUT };
};
export const doSearch = (searchParams) => ({ type: DO_SEARCH, payload: searchParams });
export const doSearchSuccess = (list) => ({ type: DO_SEARCH_SUCCESS, payload: list });
export const doSearchFail = (err) => ({ type: DO_SEARCH_FAIL, payload: err });
