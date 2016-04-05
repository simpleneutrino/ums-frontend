/**
 * @param value{string} - user input
 * @param list{array} - array of object to filter
 * @returns {array} - array of suggestion (to show in drop down list)
 */
export function getSuggestions(value, list) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') return [];

  const regex = new RegExp('^' + escapedValue, 'i');
  return list.filter(enrolment => regex.test(enrolment.surname));
}

/**
 * https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
 * @param str
 * @returns {*}
 */
export function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
