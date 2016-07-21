import * as React from 'react';
import {observer} from 'mobx-react';

import SignUpStore from '../../stores/SignUpStore';
import {generateMonths, generateYears} from '../../utils';
import {TextField, Select} from '../App/Input';

@observer
export default class SignUpForm extends React.Component<{signUpStore: SignUpStore}, any> {
  onSubmit = (e) => {
    e.preventDefault();
    this.props.signUpStore.submit();
  }

  onUpdateField = (field: string) => {
    return (e) => {
      this.props.signUpStore.updateField(field, e.target.value);
    }
  }

  render() {
    let fields = this.props.signUpStore.fields;

    return <form className="content-inner" onSubmit={this.onSubmit}>
      <div className="">

        <TextField id="signup-company-text-field" label="Company" required
          value={fields.company} onChange={this.onUpdateField('company')} />

        <TextField id="signup-name-text-field" label="Your Name" required
          value={fields.name} onChange={this.onUpdateField('name')} />

        <TextField id="signup-name-text-field" label="Email" required
          value={fields.email} onChange={this.onUpdateField('email')} />

        <TextField id="signup-password-text-field" label="Password" required
          value={fields.password} onChange={this.onUpdateField('password')} />

        <TextField id="signup-confirm-password-text-field" label="Confirm Password" required
          value={fields.confirmPassword} onChange={this.onUpdateField('confirmPassword')} />

        <TextField id="signup-credit-card-text-field" label="Credit Card Number" required
          value={fields.creditCardNumber} onChange={this.onUpdateField('creditCardNumber')} />


        <div className="row">
          <div className="col-md-6">
            <Select id="signup-month-select" label="Expiry Month" required
              className="margin-top-sm margin-bottom-no"
              value={fields.expiryMonth} onChange={this.onUpdateField('expiryMonth')}>
                <option value="">Choose Month</option>
                { generateMonths().map((month) =>
                    <option key={month}>{month}</option> ) }
            </Select>
          </div>
          <div className="col-md-6">
            <Select id="signup-year-select" label="Expiry Year" required
              className="margin-top-sm margin-bottom-no"
              value={fields.expiryYear} onChange={this.onUpdateField('expiryYear')}>
                <option value="">Choose Year</option>
                { generateYears().map((year, index) =>
                    <option key={index}>{year}</option> ) }
            </Select>
          </div>
        </div>

        <div className="form-group form-group-label">
            <label className="floating-label" htmlFor="security-code"> Security Code </label>
            <input className="form-control" id="security-code" type="text" required
            value={fields.securityCode} onChange={this.onUpdateField('securityCode')} />
        </div>
      </div>

      <div className="text-center">
        <button className="btn btn-brand"> Create New Account </button>
      </div>
    </form>;
  }
}
