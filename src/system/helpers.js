import _ from 'lodash';

export function replaceTimePeriodId(url, timePeriodId) {
  if (url.indexOf('{{timePeriodId}}') > -1) {
    let newUrl = url.replace('{{timePeriodId}}', timePeriodId);
    return newUrl;
  }
  return url;
}

//convert a config to cache config
export function configToCache(config) {
  return _.chain(_.values(config))
    .keyBy('url')
    .mapValues('cache')
    .value();
}