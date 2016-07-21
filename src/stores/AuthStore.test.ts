import {autorun} from 'mobx';
import {expect} from 'chai';
import * as sinon from 'sinon';
import authStore, {UserProfile} from './AuthStore';
import * as AuthService from '../services/AuthService';

describe('AuthStore', () => {
  let sandbox;
  beforeEach(() => sandbox = sinon.sandbox.create());
  afterEach(() => sandbox.restore());

  describe('constructor', () => {
    it('loggedIn', () => {
      authStore.sessionToken = '';
      let ar: boolean[] = [];

      autorun(() => {
        ar.push(authStore.loggedIn);
      });
      expect(ar[ar.length-1]).to.equal(false);

      authStore.sessionToken = '#token';
      expect(ar[ar.length-1]).to.equal(true);
    });
  });

  describe('signIn', () => {
    it('set sessionToken when login success', () => {
      let resolved = Promise.resolve({data: {token: '##tokenn'}});
      sandbox.stub(AuthService, 'login').returns(resolved);

      return authStore.signIn('a@mail.com', '1234').then(() => {
        expect(authStore.sessionToken).to.equal('##tokenn');
      });

    });
  });

});
