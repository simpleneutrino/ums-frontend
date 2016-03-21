/* global __BASIC_URL__ */
export const _SUCCESS = '_SUCCESS';
export const _FAIL = '_FAIL';
export const _START = '_START';
export const LOAD_ = 'LOAD_';

export const BASIC_URL = __BASIC_URL__; // this url comes from WebpackDefine plugin (see webpack.config.js)
export const BASIC_AUTH = 'Basic YWRtaW46bmltZGE=';

// options for every http GET request
export const FETCH_OPTIONS = {
  method: 'GET',
  headers: {
    Authorization : BASIC_AUTH,
    'Content-Type': 'application/json'
  }
};
