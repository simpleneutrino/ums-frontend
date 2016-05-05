import { checkPermission, getError } from './helpers';
import {AUTH_NEEDED} from './constants'
import chai  from 'chai';
let should = chai.should();

describe('Auth helpers', () => {

  let authState = (isAuth = true, error = 'some error') => ({
    user: { authenticated: isAuth },
    error
  });

  describe('checkPermission fn', () => {

    let requiredAuth = ['/restricted_01', '/prohibited_02'];

    it('should return "true" when route is public', () => {
      checkPermission(authState(), '/public', requiredAuth).should.equal(true)
    })

    it('should return "true" when user is logged in', () => {
      checkPermission(authState(), '/restricted_01', requiredAuth).should.equal(true)
    })

    it('should return "false" when user is not logged in', () => {
      checkPermission(authState(false), '/restricted_01', requiredAuth).should.equal(false)
    })
    
  });

  describe('getError fn', () => {

    it('should return nothing (by default)', () => {
      getError({auth: authState(true, null), location: {query: {next: null}}})
        .should.equal(false)
    })

    it('should return an auth error from state', () => {
      getError({auth: authState(), location: ''}).should.equal('some error')
    })

    it('should return an "auth needed" error', () => {
      getError({auth: authState(true, null), location: {query: {next: '/route'}}})
        .should.equal(AUTH_NEEDED)
    })

  });

});