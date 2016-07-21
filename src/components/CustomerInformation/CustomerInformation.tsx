import * as React from 'react';
import * as axios from 'axios';

import CustomerList from './CustomerList';
import DataItemList from './DataItemList';

import CustomerListStore from '../../stores/CustomerListStore';
import CustomerSchemaStore from '../../stores/CustomerSchemaStore';

let customerSchema = new CustomerSchemaStore();
let customerList = new CustomerListStore();

export default class CustomerInformation extends React.Component<any, any> {
  componentDidMount() {
    axios.all([
      customerSchema.retrieve(), customerList.retrieve()
    ]).then(axios.spread((customerSchemaResponse, customerListResponse) => {
    }));
  }

  render() {
    return <div>
      <h3 className="text-center">Customer Information</h3>

      <div className="container">
        <nav className="tab-nav">
          <ul className="nav nav-justified">
            <li className="active">
              <a data-toggle="tab" href="#data-item-list"> Data Item List </a>
            </li>
            <li>
              <a data-toggle="tab" href="#customer-list"> Customer List </a>
            </li>
          </ul>
          <div className="tab-nav-indicator"></div>
        </nav>

        <div className="tab-content">
          <div role="tabpanel" className="tab-pane fade in active " id="data-item-list">
            <DataItemList customerSchema={customerSchema} />
          </div>
          <div role="tabpanel" className="tab-pane fade" id="customer-list">
            <CustomerList customerSchema={customerSchema} customerList={customerList} />
          </div>
        </div>

      </div>
    </div>;
  }

}
