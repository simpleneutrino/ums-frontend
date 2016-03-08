import { forOwn } from 'lodash';

export default function serializeParams(params) {
  if (!params) return '';
  //Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
  let str = [];
  forOwn(params, (value, key) => {
    str.push(key + '=' + value);
  });
  return '?' + str.join('&');
}