import createPersistedState from 'vuex-persistedstate';
import * as Cookies from 'js-cookie';

export const cookieStorage = {
  getItem: key => Cookies.get(key),
  // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
  setItem: (key, value) => Cookies.set(key, value, { expires: 30, secure: process.env.NODE_ENV === 'production' }),
  removeItem: key => Cookies.remove(key),
};

export const persistedStateConfig = {
  key: '_vuex',
  filter({ type }) {
    // Don't store route state in cookie
    return !type.startsWith('route/');
  },
  storage: cookieStorage,
};

export default createPersistedState(persistedStateConfig);
