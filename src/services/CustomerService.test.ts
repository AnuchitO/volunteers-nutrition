import * as sinon from 'sinon';
import {expect} from 'chai';
import http from './http';

import * as CustomerService from './CustomerService';

describe('CustomerService', () => {
  let sandbox;
  beforeEach(() => sandbox = sinon.sandbox.create());
  afterEach(() => sandbox.restore());

  it('uploadCustomerList', () => {
    let httpMock = sandbox.mock(http);
    httpMock.expects('post').once().withArgs('customers');

    CustomerService.uploadCustomerList("data:file");

    httpMock.verify();
  });

  it('getCustomerList', () => {
    let resolved = Promise.resolve({
      data: [ {"name": "aki"}, {"name": "yod"} ]
    });

    let httpMock = sandbox.mock(http);
    httpMock.expects('get').once().withArgs('customers');

    CustomerService.getCustomerList();

    httpMock.verify();
  });

});
