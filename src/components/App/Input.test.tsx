import * as React from 'react';
import {expect} from 'chai';
import * as sinon from 'sinon';
import {shallow, mount} from 'enzyme';

import {FileUpload, TextField, Switch, Select, TextArea} from './Input';

describe('TextField', () => {
  it('renders textfield with type', () => {
    const wrapper = shallow(<TextField id="email" type="email" label="Email" />);

    const expected = <div className="form-group form-group-label">
      <label className="floating-label" htmlFor="email">Email</label>
      <input className="form-control" id="email" type="email" />
    </div>;

    expect(wrapper.containsMatchingElement(expected)).to.be.true;
  });

  it('renders textfield with className', () => {
    const wrapper = shallow(<TextField id="name" label="Your Name" className="margin-bottom-no" />);

    const expected = <div className="form-group form-group-label margin-bottom-no">
      <label className="floating-label" htmlFor="name">Your Name</label>
      <input className="form-control" id="name" type="text" />
    </div>;

    expect(wrapper.containsMatchingElement(expected)).to.be.true;
  });

  it('fills value', () => {
    let expectedValue = 'This is a book';
    const wrapper = shallow(<TextField id="name" label="Your Name" className="margin-bottom-no" value={expectedValue} />);

    let input = wrapper.find('input');
    expect(input.prop('value')).to.equal(expectedValue);
  });

  it('handle onChange', () => {
    let changeSpy = sinon.spy();
    const wrapper = mount(<TextField id="name" label="Your Name" className="margin-bottom-no" onChange={changeSpy} />);

    let input = wrapper.find('input');
    input.simulate('change', {target: { value: 'eiei'}});
    expect(changeSpy.calledOnce).to.be.true;
  });

  it('check required', () => {
    const wrapper = shallow(<TextField id="name" label="Your Name" required />);

    expect(wrapper.find('input').prop('required')).to.be.true;
  });
});

describe('TextArea', () => {
  it('renders textarea', () => {
    const wrapper = shallow(<TextArea id="note" label="Note" />)

    const expected = <div className="form-group form-group-label">
      <label className="floating-label" htmlFor="note">Note</label>
      <textarea className="form-control textarea-autosize"
        id="note" rows="4"></textarea>
    </div>;

    expect(wrapper.containsMatchingElement(expected)).to.be.true;
  });
});


describe('Switch', () => {
  it('renders switch with label', () => {
    const wrapper = shallow(<Switch id="admin" label="Administrator" />);

    const expected = <div className="checkbox switch">
      <label htmlFor="admin">
        <input className="access-hide" id="admin" type="checkbox" />
        <span className="switch-toggle"></span>
        Administrator
      </label>
    </div>;

    expect(wrapper.containsMatchingElement(expected)).to.be.true;
  });

  it('fills checked value', () => {
    let wrapper = shallow(<Switch id="phone" checked={true} />);
    expect(wrapper.find('input').prop('checked')).to.equal(true);

    wrapper = shallow(<Switch id="phone" checked={false} />);
    expect(wrapper.find('input').prop('checked')).to.equal(false);
  });

  it('handle onChange', () => {
    let checkSpy = sinon.spy();
    let wrapper = mount(<Switch id="make-call" onChange={checkSpy} />);

    let input = wrapper.find('input');
    input.simulate('change', {target: { checked: true}});

    expect(checkSpy.calledOnce).to.be.true;
  });
});

describe('Select', () => {
  it('renders select with className', () => {
    const wrapper = shallow(<Select id="year" label="Month"
      className="margin-no">
      <option value="">Choose Month</option>
    </Select>);

    const expected = <div className="form-group form-group-label control-highlight margin-no">
      <label className="floating-label" htmlFor="year">Month</label>
      <select className="form-control" id="year">
        <option value="">Choose Month</option>
      </select>
    </div>;

    expect(wrapper.containsMatchingElement(expected)).to.equal(true);
  });

  it('renders label', () => {
    const wrapper = shallow(<Select id="year" label="Expiry Month">
      <option value="">Choose Month</option>
    </Select>);

    expect(wrapper.find('label').text()).to.equal('Expiry Month');
  });

  it('renders options', () => {
    const wrapper = shallow(<Select id="year" label="Month">
      <option value="">Choose Month</option>
      <option value="2015">2015</option>
    </Select>);

    const expected = <div className="form-group form-group-label control-highlight">
      <label className="floating-label" htmlFor="year">Month</label>
      <select className="form-control" id="year">
        <option value="">Choose Month</option>
        <option value="2015">2015</option>
      </select>
    </div>;

    expect(wrapper.containsMatchingElement(expected)).to.equal(true);
  });

  it('handle onChange', () => {
    let selectSpy = sinon.spy();
    const wrapper = mount(<Select id="year" onChange={selectSpy} label="Month">
      <option value="">Choose Month</option>
      <option value="2015">2015</option>
    </Select>);

    let select = wrapper.find('select');
    select.simulate('change', {target: { value: '2015'}});

    expect(selectSpy.calledOnce).to.be.true;
  });

  it('fills value', () => {
    const wrapper = shallow(<Select id="year" label="Month" value="2015">
      <option value="">Choose Month</option>
      <option value="2015">2015</option>
    </Select>);

    expect(wrapper.find('select').prop('value')).to.equal('2015');
  });

  it('check required', () => {
    const wrapper = shallow(<Select id="year" label="Month" required>
      <option value="">Choose Month</option>
      <option value="2015">2015</option>
    </Select>);

    expect(wrapper.find('select').prop('required')).to.be.true;
  });

});

describe('FileUpload', () => {
  it('renders input file with label', () => {
    const wrapper = shallow(<FileUpload name="csv" label="CSV" />)
    const expected = <div className="form-group form-group-label force-control-highlight">
      <label className="floating-label">CSV</label>
      <input className="form-control" type="file" name="csv" />
    </div>;

    expect(wrapper.containsMatchingElement(expected)).to.be.true;
  });

  it('fills value', () => {
    const wrapper = mount(<FileUpload name="csv" label="CSV" value="data:file" />)

    expect(wrapper.find('input').prop('value')).to.equal('data:file');
  });

  it('handle onChange', () => {
    let fileChangeSpy = sinon.spy();
    const wrapper = mount(<FileUpload name="csv" label="CSV" onChange={fileChangeSpy} />)

    let input = wrapper.find('input');
    input.simulate('change', {target: {value:'data:file'}});

    expect(fileChangeSpy.calledOnce).to.be.true;
  });
});
