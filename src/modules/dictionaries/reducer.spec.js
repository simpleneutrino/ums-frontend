/**
 * Created by nikolaykozhukharenko on 4/24/16.
 */
/* eslint no-unused-expressions:0 */
import chai, { expect }  from 'chai';

import * as types from './constants';
import sinon from 'sinon'
import mockery from 'mockery';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);
chai.should();

describe('dictionary reducer', () => {
  
  let helpersMock;
  let reducer;

  before(function () {
    mockery.enable({useCleanCache: true, warnOnUnregistered: false});

    helpersMock = {
      createDataMap: sinon.spy(() => ({}))
    };
    mockery.registerMock('./helpers', helpersMock);
    reducer = require('./reducer').default;
  });

  after(function () {
    mockery.deregisterAll();
    mockery.disable();
  });

  let res =  {a: 1};

  let actionFactory = (type, resources, collectionName) => {
    type = type || types.DICTIONARY_LOAD_SUCCESS;
    resources = resources || res;
    collectionName = collectionName || 'someCollection1';
    return {
      type,
      payload: {
        collectionName
      },
      response: {
        resources
      },
      error: {
        message: 'some msg'
      }
    }
  };

  it('should handle START action ->' +
    ' set isLoading flag to "true" for collection', () => {
    expect(reducer({}, actionFactory(types.DICTIONARY_LOAD_START))).to.eql({
      someCollection1: {
        isLoading: true
      }
    });
  });


  it('should handle SUCCESS action', () => {
    expect(reducer({}, actionFactory())).to.eql({
      someCollection1: {
        isLoading: false,
        resources: res,
        resourcesMap: {}
      }
    });
  });


  it('should call createDataMap with response resources', () => {
    reducer({}, actionFactory());
    helpersMock.createDataMap.should.have.been.calledWith(res)
  });


  it('should handle FAIL action', () => {
    expect(reducer({}, actionFactory(types.DICTIONARY_LOAD_FAIL))).to.eql({
      someCollection1: {
        isLoading: false,
        error: 'some msg'
      }
    });
  });

});