import * as React from 'react';
import {observer} from 'mobx-react';

import CustomerListView from './CustomerListView';
import {CustomersList} from '../../stores/CustomerInfoStore';
import NewCustomerView from './NewCustomerView';
import CustomerDetailView from './CustomerDetailView';
import CallControlView from './CallControlView';
import twilioStore from '../../stores/TwilioStore';
import snackbar from '../App/Snackbar';

let customersList = new CustomersList();

@observer
export default class MainPage extends React.Component<any, any> {
  render() {
    return <div>
      <div className="row">

        <div className="col-md-4">
          <CustomerListView customersList={customersList} />
        </div>
        <div className="col-md-6">
          <div className="container">
            { !customersList.newCustomer ?
              <CustomerDetailView customersList={customersList} /> :
              <NewCustomerView customersList={customersList} />
            }
          </div>
        </div>

        <div className="col-md-2">
          <CallControlView twilioStore={twilioStore}
            customersList={customersList} />
        </div>
      </div>
    </div>;
  }
}

