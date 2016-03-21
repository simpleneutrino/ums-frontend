import chai from 'chai';
import DateHelper from './dateHelper';

chai.should();

describe('Date Helper', () => {
  describe('getFormattedDateTime', () => {
    it('pads single digit minute and second values with leading zeros', () => {
      //arrange
      //The 7 numbers specify the year, month, day, hour, minute, second, and millisecond, in that order
      let date = new Date(99, 0, 4, 11, 3, 2, 0);

      //assert
      '1/4 11:03:02'.should.equal('1/4 11:03:02');
    });
  });
});
