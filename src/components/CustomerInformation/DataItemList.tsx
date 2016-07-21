import * as React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import * as uuid from 'node-uuid';

import CustomerSchemaStore from '../../stores/CustomerSchemaStore';
import Dialog from '../App/Dialog';
import {FileUpload} from '../App/Input';
import snackbar from '../App/Snackbar';

interface DataItemListProps {
  customerSchema: CustomerSchemaStore;
}

@observer
export default class DataItemList extends React.Component<DataItemListProps, any> {
  open = observable(false);

  onClickExport = () => {
    let csvContent = this.props.customerSchema.getCustomerSchemaCSV();
    window.open(encodeURI(csvContent));
  }

  onConfirmImport = () => {
    this.props.customerSchema.uploadFile().then(() => {
      snackbar({content: 'Data Items are created'});
    });
  }

  render() {
    let customerSchema = this.props.customerSchema;
    return <div>
      <Dialog
        open={this.open}
        title="Import CSV"
        onCancel={() => {}}
        onConfirm={this.onConfirmImport}>
        <FileUpload name="file" label="CSV file"
          onChange={(e: any) => customerSchema.csvFile = e.target.files[0]} />
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

      <DataItemListTable customerSchema={customerSchema} />
    </div>;
  }
}

@observer
class DataItemListTable extends React.Component<DataItemListProps, any> {
  render() {
    let customerSchema = this.props.customerSchema;
    let index = 0;
    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>NO</th>
              <th>Item</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            { Object.keys(customerSchema.schema).map((key) => {
                if (key !== "_id" && key !== "sequence") {
                  index += 1;
                  return (
                    <tr key={uuid.v1()}>
                      <td>{index}</td>
                      <td>{key}</td>
                      <td>{customerSchema.schema[key]}</td>
                    </tr>
                  );
                }
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

