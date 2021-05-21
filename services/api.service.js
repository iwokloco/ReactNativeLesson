import { URL_GET_DATA } from '../constants';

export const ApiService = {
  getAulas: (token) => {
    return fetch(URL_GET_DATA, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'access-token': token,
      },
    });
  },
};
