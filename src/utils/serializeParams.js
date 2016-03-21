import { forOwn } from 'lodash';

/**
 * serialize parameters for req
 * @param params {object} smth like {offset: 10, limit: 20}
 * @returns {String} '?offset=10&limi=20'
 */
export default function serializeParams(params) {
  if (!params) return '';
  //Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
  let str = [];
  forOwn(params, (value, key) => {
    str.push(key + '=' + value);
  });
  return '?' + str.join('&');
}