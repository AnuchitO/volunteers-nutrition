import * as React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import {CustomersTableView} from './CustomerListView';
import {CustomersList} from '../../stores/CustomerInfoStore';

describe('CustomersTableView', () => {
  it('shows table', () => {
    let customersList = new CustomersList();
    customersList.customers = [];
    let wrapper = shallow(<CustomersTableView customersList={customersList} />);
    expect(wrapper.find('table')).to.have.length(1);
  });

});
