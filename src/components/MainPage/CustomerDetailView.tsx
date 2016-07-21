import * as React from 'react';
import {observer} from 'mobx-react';

import {CustomersList} from '../../stores/CustomerInfoStore';
import {TextField} from '../App/Input';

@observer
export default class CustomerDetailView extends React.Component<{customersList: CustomersList}, any> {
  render() {
    let detailedCustomer = this.props.customersList.detailedCustomer;
    return (
      <div className="">
        <div className="row">
          <div className="col-md-7">
            <TextField id="customer-number-text-field" label="No"
              className="force-control-highlight" />

            <TextField id="customer-name-text-field" label="Name"
              className="force-control-highlight" value={detailedCustomer.name}
              onChange={(e: any) => detailedCustomer.name = e.target.value} />

            <TextField id="customer-phone-number-text-field" label="Phone number"
              className="force-control-highlight" value={detailedCustomer.phoneNumber}
              onChange={(e: any) => detailedCustomer.phoneNumber = e.target.value} />

            <TextField id="customer-email-text-field" label="Email"
              className="force-control-highlight" value={detailedCustomer.email}
              onChange={(e: any) => detailedCustomer.email = e.target.value} />

            <TextField id="customer-sex-text-field" label="Sex"
              className="force-control-highlight" value={detailedCustomer.sex}
              onChange={(e: any) => detailedCustomer.sex = e.target.value} />
          </div>
        </div>

        <div className="form-group form-group-label">
          <label className="floating-label" for="note"> Note </label>
          <textarea className="form-control textarea-autosize" id="note" rows="4"></textarea>
        </div>

        <button className="btn btn-brand pull-right">Edit</button>
      </div>
    );
  }
}
