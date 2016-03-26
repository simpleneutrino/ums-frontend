export function replaceTimePeriodId(url, timePeriodId) {
  if (url.indexOf('{{timePeriodId}}') > -1) {
    let newUrl = url.replace('{{timePeriodId}}', timePeriodId);
    return newUrl;
  }
  return url;
}