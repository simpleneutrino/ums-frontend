/**
 * Created by nikolay on 4/26/16.
 */
import chai, { expect }  from 'chai'
import * as types from './constants'
import reducer from './reducer'
chai.should();

describe('statistics reducer', () => {

  let res =  {a: 1};

  let actionFactory = (type, resources, collectionName) => {
    type = type || types.STATISTICS_LOAD_SUCCESS;
    resources = resources || res;
    collectionName = collectionName || 'someCollection1';
    return {
      type,
      payload: {
        collectionName
      },
      response: {
        ...resources
      },
      error: {
        message: 'some msg'
      }
    }
  };

  it('should handle START action -> sets isLoading to "true" ', () => {
    expect(reducer({someCollection1: 11}, actionFactory(types.STATISTICS_LOAD_START))).to.eql({
      someCollection1: {
        data: [],
        isLoading: true
      }
    });
  });

  it('should handle SUCCESS action -> sets response data ', () => {
    expect(reducer({wierdName: 1}, actionFactory())).to.eql({
      someCollection1: {
        isLoading: false,
        data: res
      },
      wierdName: 1
    });
  });

  it('should handle FAIL action -> sets error message', () => {
    expect(reducer({}, actionFactory(types.STATISTICS_LOAD_FAIL))).to.eql({
      someCollection1: {
        isLoading: false,
        data: [],
        error: 'some msg'
      }
    });
  });

});