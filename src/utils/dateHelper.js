export default class DateHelper {
  static padLeadingZero(value) {
    return value > 9 ? value : '0' + value;
  }
}
