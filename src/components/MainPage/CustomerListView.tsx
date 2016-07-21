import * as React from 'react';
import {observer} from 'mobx-react';

import {CustomersList} from '../../stores/CustomerInfoStore';
import CustomerActionPanel from '../MainPage/CustomerActionPanel';

@observer
export default class CustomerListView extends React.Component<{customersList: CustomersList}, any> {
  componentDidMount() {
    return this.props.customersList.getCustomers();
  }

  render() {
    return <div>
      <CustomerActionPanel customersList={this.props.customersList} />
      <CustomersTableView customersList={this.props.customersList} />
    </div>;
  }
}

@observer
export class CustomersTableView extends React.Component<{customersList: CustomersList}, any> {
  render() {
    let customers = this.props.customersList.customers;
    return <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>NO</th>
              <th>Name</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            { customers.map((customer, index) => {
                return <tr onClick={() => this.props.customersList.showDetail(customer)}>
                  <td>{index+1}</td>
                  <td>{customer.name}</td>
                  <td>{customer.phoneNumber}</td>
                </tr>;
              })
            }
          </tbody>
        </table>
      </div>;
  }
}
