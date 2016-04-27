/**
 * Created by nikolay on 4/26/16.
 */
/* eslint no-unused-expressions:0 */
import chai, {expect} from 'chai'
import sinon from 'sinon'
import {fillMapWithData} from './helpers'
import sinonChai from 'sinon-chai'
chai.use(sinonChai);

describe('statistics helpers', () => {
  
  describe('fillMapWithData function', () => {
    let mapData =  [
      {
        adminUnit: 'some region name _ 02',
        adminUnitId: 111,
        entrantCount: 5
      },
      {
        adminUnit: 'some region name',
        adminUnitId: 222,
        entrantCount: 6
      }
    ];

    let validateNow = sinon.spy(() => {});
    let event = {
      chart: {
        validateNow,
        dataProvider: {
          areas: [
            {
              id: '111'
            },
            {
              id: '222'
            },
            {
              id: '333'
            }
          ]
        }
      }
    };

    let expected = [
      {
        id: '111',
        value: 5
      },
      {
        id: '222',
        value: 6
      },
      {
        id: '333',
        value: 0
      }
    ];

    it('should return areas', () => {
      expect(fillMapWithData(mapData)(event)).to.eql(expected)
    });

    it('should call "validateNow" method', () => {
      expect(validateNow).to.be.called;
    })
  })

});

