import {expect} from 'chai';
import * as sinon from 'sinon';

import {CustomersList, Customer} from '../stores/CustomerInfoStore';

import * as CustomerService from '../services/CustomerService';

describe('CustomersList', () => {
  let sandbox;

  beforeEach(() => sandbox = sinon.sandbox.create());
  afterEach(() => sandbox.restore());

  describe('getCustomers', () => {
    it('set customers response to customers', () => {
      let resolved = Promise.resolve({
        data: [
          {name: 'aki', phone_number: '555', email: 'a@mail.com', sex: 'male'}
        ]
      });
      sandbox.stub(CustomerService, 'getCustomerList').returns(resolved);

      let customersList = new CustomersList();

      return customersList.getCustomers().then(() => {
        expect(customersList.customers).to.have.length(1);
        expect(customersList.customers[0].name).to.equal('aki');
      });
    });
  });

  describe('showCreateForm', () => {
    it('create new blank customer', () => {
      let customersList = new CustomersList();
      customersList.showCreateForm();

      expect(customersList.newCustomer).to.not.be.undefined;
    });
  });

  describe('searchCustomer', () => {
    let customersList;

    beforeEach(() => {
      let resolved = Promise.resolve({
        data: [
          {
            name: 'aki',
            phone_number: '555',
            email: 'a@mail.com',
            sex: 'male'
          },
          {
            name: 'roof',
            phone_number: '555',
            email: 'roof@mail.com',
            sex: 'male'
          }
        ]
      });
      sandbox.stub(CustomerService, 'getCustomerList').returns(resolved);

      customersList = new CustomersList();
    });

    it('get customers that name match to search keyword', () => {
      return customersList.searchCustomer('roof').then(() => {
        expect(customersList.customers).to.have.length(1);
        expect(customersList.customers[0].name).to.equal('roof');
      });
    });

    it('get customer that name partially match to search keyword', () => {
      return customersList.searchCustomer('ro').then(() => {
        expect(customersList.customers).to.have.length(1);
        expect(customersList.customers[0].name).to.equal('roof');
      });
    });
  });

});

