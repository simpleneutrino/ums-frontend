/**
 * Created by nikolaykozhukharenko on 4/2/16.
 */


export function getSuggestions(value, list) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') return [];

  const regex = new RegExp('^' + escapedValue, 'i');
  return list.filter(enrolment => regex.test(enrolment.surname));
}

export function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
