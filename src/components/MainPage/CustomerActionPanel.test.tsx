import * as React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';
import * as sinon from 'sinon';

import {TextField} from '../App/Input';
import CustomerActionPanel from '../MainPage/CustomerActionPanel';
import {CustomersList} from '../../stores/CustomerInfoStore';

describe('CustomerActionPanel', () => {
  it('renders search text field and create button', () => {
    let customersList = new CustomersList();
    const wrapper = shallow(<CustomerActionPanel customersList={customersList} />);
    const text = <TextField id="search-customer-text-field" label="Search" />;
    const button = <button className="btn btn-brand">Create</button>;
    expect(wrapper.containsAllMatchingElements([text, button])).to.be.true;
  });

  it('when click create show create form', () => {
    let customersList = new CustomersList();
    let clickCreateSpy = sinon.spy(customersList, 'showCreateForm');
    const wrapper = shallow(<CustomerActionPanel customersList={customersList} />);
    wrapper.find('button').simulate('click');

    expect(clickCreateSpy.calledOnce).to.be.true;
  });

  it('when press enter on search box search for the customer', () => {
    let customersList = new CustomersList();
    let enterSpy = sinon.spy(customersList, 'searchCustomer');
    const wrapper = mount(<CustomerActionPanel customersList={customersList} />);
    let input = wrapper.find('input');
    input.simulate("keyPress", { key: 'Enter' });

    expect(enterSpy.calledOnce).to.be.true;
  });

  it('when press enter search for customers with search keyword', () => {

    let customersList = new CustomersList();
    let enterSpy = sinon.spy(customersList, 'searchCustomer');
    const wrapper = mount(<CustomerActionPanel customersList={customersList} />);
    let input = wrapper.find('#search-customer-text-field');
    input.simulate('change', {target: {value: 'roof'}});
    input.simulate('keyPress', { key: 'Enter' });

    expect(enterSpy.calledWith('roof')).to.be.true;
  });
});
