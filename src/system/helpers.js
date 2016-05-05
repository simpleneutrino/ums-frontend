import _ from 'lodash';

/**
 * 
 * @param url - e.g. '/enrolments/{{timePeriodId}}
 * @param timePeriodId {number}
 * @returns {*} '/enrolments/5
 */
export function replaceTimePeriodId(url, timePeriodId) {
  if (url.indexOf('{{timePeriodId}}') > -1) {
    let newUrl = url.replace('{{timePeriodId}}', timePeriodId);
    return newUrl;
  }
  return url;
}

// TODO: remove this funcitno at all; dont import whole lodash ! It's too big!
//convert a config to cache config
export function configToCache(config) {
  return _.chain(_.values(config))
    .keyBy('url')
    .mapValues('cache')
    .value();
}