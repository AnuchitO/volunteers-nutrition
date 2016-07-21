import * as React from 'react';
import {expect} from 'chai';
import {computed, observe, autorun, transaction} from 'mobx';
import {shallow, mount} from 'enzyme';

import {ExampleState, ExampleView} from './Example';

describe('ExampleStore', () => {
  it('example greetings', () => {
    let store = new ExampleState();
    let ar: string[] = [];

    autorun(() => {
      ar.push(store.greetings);
    });

    expect(ar[ar.length-1]).to.equal('Hello my name is ');

    store.name = 'Aki';
    expect(ar[ar.length-1]).to.equal('Hello my name is Aki');
  });
});


describe('ExampleView', () => {
  it('render greetings', () => {
    let store = new ExampleState();
    store.name = 'Aki';

    let wrapper = shallow(<ExampleView exampleState={store} />);

    expect(wrapper.text()).to.equal(store.greetings);
  });
});
