import * as React from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import * as uuid from 'node-uuid';

import CustomerListStore from '../../stores/CustomerListStore';
import CustomerSchemaStore from '../../stores/CustomerSchemaStore';
import Dialog from '../App/Dialog';
import {FileUpload} from '../App/Input';
import snackbar from '../App/Snackbar';

interface CustomerListProps {
  customerSchema: CustomerSchemaStore;
  customerList: CustomerListStore;
}

@observer
export default class CustomerList extends React.Component<CustomerListProps, any> {
  open = observable(false);

  onClickExport = () => {
    let csvContent = this.props.customerList.getCustomerListCSV();
    window.open(encodeURI(csvContent));
  }

  onConfirmImport = () => {
    this.props.customerList.uploadFile().then(() => {
      snackbar({content: 'Customers are created'});
    });
  }

  render() {
    let {customerList, customerSchema} = this.props;
    return <div>
      <Dialog
        open={this.open}
        title="Import CSV"
        onCancel={() => {}}
        onConfirm={this.onConfirmImport}>
        <FileUpload name="file" label="CSV file"
          onChange={(e: any) => customerList.csvFile = e.target.files[0]} />
      </Dialog>

      <div className="text-center row">
        <div className="col-md-6">
          <button className="btn btn-brand"
            onClick={this.onClickExport}> CSV export </button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-brand"
            onClick={() => this.open.set(true)}> CSV import </button>
        </div>
      </div>

      <CustomerListTable
        customerSchema={customerSchema}
        customerList={customerList} />
    </div>;
  }
}

@observer
class CustomerListTable extends React.Component<CustomerListProps,any> {

  onClickDelete(id) {
    return () => {
      this.props.customerList.deleteCustomer(id);
    }
  }

  render() {
    let schemaSequence = this.props.customerSchema.schema.sequence;
    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>NO</th>
              { this.props.customerSchema.schema.sequence.map((column) => {
              return <th key={uuid.v1()}>{column}</th>
              }) }
            </tr>
          </thead>
          <tbody>
            {this.props.customerList.list.map((customer,index)=>{
              return (
                <tr key={uuid.v1()}>
                  <td>{index+1}</td>
                  <td>{customer[schemaSequence[0]]}</td>
                  <td>{customer[schemaSequence[1]]}</td>
                  <td>{customer[schemaSequence[2]]}</td>
                  <td>{customer[schemaSequence[3]]}</td>
                  <td>
                    <button className="btn btn-brand margin-right"
                      onClick={this.onClickDelete(customer._id.$oid)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
