
import { getSuggestions } from './helpers';
import chai  from 'chai';
let should = chai.should();

describe('Rating helpers', () => {


  describe('getSuggestions function', () => {

    let listOfOptions = [
      {
        'enrolmentId' : 1,
        'kb' : 222.38,
        'ratingPriority' : 4,
        'personId' : 1,
        'firstname' : 'Петро',
        'fathername' : 'Олексійович',
        'surname' : 'Кукуш'
      },
      {
        'enrolmentId' : 2,
        'kb' : 228.38,
        'ratingPriority' : 3,
        'personId' : 2,
        'firstname' : 'Василь',
        'fathername' : 'Іванович',
        'surname' : 'Ласточкін'
      },
      {
        'enrolmentId' : 3,
        'kb' : 320.38,
        'ratingPriority' : 1,
        'personId' : 3,
        'firstname' : 'Андрій',
        'fathername' : 'Петрович',
        'surname' : 'Кукульчук'
      }
    ];

    it('should return empty array when user input is empty', () => {
      getSuggestions('', listOfOptions).should.have.length(0);
    });

    it('should return one result when user input eq to "Ласт"', () => {
      let filtered = [
        {
          'enrolmentId' : 2,
          'kb' : 228.38,
          'ratingPriority' : 3,
          'personId' : 2,
          'firstname' : 'Василь',
          'fathername' : 'Іванович',
          'surname' : 'Ласточкін'
        }
      ];

      getSuggestions('Ласт', listOfOptions).should.eql(filtered);
      getSuggestions('Ласточкін', listOfOptions).should.have.length(1);
    });

    it('should return two results when user input eq to "Куку"', () => {
      let filtered = [
        {
          'enrolmentId' : 1,
          'kb' : 222.38,
          'ratingPriority' : 4,
          'personId' : 1,
          'firstname' : 'Петро',
          'fathername' : 'Олексійович',
          'surname' : 'Кукуш'
        },
        {
          'enrolmentId' : 3,
          'kb' : 320.38,
          'ratingPriority' : 1,
          'personId' : 3,
          'firstname' : 'Андрій',
          'fathername' : 'Петрович',
          'surname' : 'Кукульчук'
        }
      ];

      getSuggestions('Куку', listOfOptions).should.eql(filtered);
      getSuggestions('Куку', listOfOptions).should.have.length(2);
    });

  });

});