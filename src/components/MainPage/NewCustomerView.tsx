import * as React from 'react';
import {observer} from 'mobx-react';

import {CustomersList} from '../../stores/CustomerInfoStore';
import snackbar from '../App/Snackbar';

@observer
export default class NewCustomerView extends React.Component<{customersList: CustomersList}, any> {
  onClickCreate = () => {
    this.props.customersList.createCustomer().then(() => {
      snackbar({content: 'Customer is created'});
    });
  }

  render() {
    let newCustomer = this.props.customersList.newCustomer;
    return (
      <div className="row">
        <div className="row">
          <div className="col-md-7">
            <div className="form-group form-group-label force-control-highlight">
              <label className="floating-label" for="no">No</label>
              <input className="form-control" id="no" type="text" />
            </div>

            <div className="form-group form-group-label force-control-highlight">
              <label className="floating-label" for="name"> Name </label>
              <input className="form-control" id="name" type="text" value={newCustomer.name} onChange={(e: any) => newCustomer.name = e.target.value} />
            </div>

            <div className="form-group form-group-label force-control-highlight">
              <label className="floating-label" for="phone-number"> Phone Number </label>
              <input className="form-control" id="phone-number" type="text" value={newCustomer.phoneNumber}
              onChange={(e: any) => newCustomer.phoneNumber = e.target.value} />
            </div>

            <div className="form-group form-group-label force-control-highlight">
              <label className="floating-label" for="email"> Email </label>
              <input className="form-control" id="email" type="email" value={newCustomer.email}
                onChange={(e: any) => newCustomer.email = e.target.value} />
            </div>

            <div className="form-group form-group-label  force-control-highlight">
              <label className="floating-label" for="sex"> Sex </label>
              <input className="form-control" id="sex" type="text" value={newCustomer.sex}
                onChange={(e: any) => newCustomer.sex = e.target.value} />
            </div>
          </div>


        </div>

        <div className="col-md-7">
          <button className="btn btn-brand pull-right" onClick={this.onClickCreate}>Create</button>
        </div>
      </div>
    );
  }
}
