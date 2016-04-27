/**
 * Created by nikolay on 4/26/16.
 */

'use strict';

import chai  from 'chai';
import configureStore from 'redux-mock-store';
import {loadStatistics} from './actions'
let expect = chai.expect;

describe('Statistis actions', () => {
  const mockStore = configureStore();

  let storeFactory = (data = [1,2]) => {
    return {
      statistics: {
        collection01: {
          data
        }
      }
    }
  };

  describe('loadStatistics AC', () => {

    describe('interrupt fn', () => {
      const interrupt = loadStatistics('url', 'collection01').interrupt;

      it('interrupt loadStatistics ' +
        'when data for stat collection01 is available (full arr)', () => {
        let store = mockStore(storeFactory());
        expect(interrupt(store)).to.equal(true)
      });

      it('do not interrupts a loading of loadStatistics ' +
        'when data for stat collection01 is not available (empty arr)', () => {
        let store = mockStore(storeFactory([]));
        expect(interrupt(store)).to.equal(false)
      });
    });

  });
  
});