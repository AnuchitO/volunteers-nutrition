import * as React from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';

import {EmployeeInfoStore, Employee} from '../../stores/EmployeeInfomationStore';
import Dialog from '../App/Dialog';
import {FileUpload} from '../App/Input';
import snackbar from '../App/Snackbar';

@observer
export default class EmployeeListView extends React.Component<{employeeInfoStore: EmployeeInfoStore}, any> {
  render() {
    return <div>
      <h3>Employee Information</h3>
      <EmployeeActionView employeeInfoStore={this.props.employeeInfoStore} />
      <EmployeeListTable employees={this.props.employeeInfoStore.employees} />
    </div>;
  }
}

class EmployeeActionView extends React.Component<{employeeInfoStore: EmployeeInfoStore}, any> {
  open = observable(false);

  onClickCreate = () => {
    this.props.employeeInfoStore.prepareToCreate();
  }

  onClickExport = () => {
    let csvContent = this.props.employeeInfoStore.getEmployeesCSV();
    window.open(encodeURI(csvContent));
  }

  onConfirmImport = () => {
    this.props.employeeInfoStore.uploadFile().then(() => {
      snackbar({content: 'Data Items are created'});
    });
  }

  render() {
    return <div className="">
      <button className="btn btn-brand margin-right"
        onClick={this.onClickExport}> CSV Export </button>
      <button className="btn btn-brand margin-right"
        onClick={() => this.open.set(true)}> CSV Import </button>
      <button className="btn btn-brand margin-right"
        onClick={this.onClickCreate}> Create </button>
      <Dialog
        open={this.open}
        title="Import CSV"
        onCancel={() => {}}
        onConfirm={this.onConfirmImport}>
        <FileUpload name="file" label="CSV file"
          onChange={(e: any) => this.props.employeeInfoStore.csvFile = e.target.files[0]} />
      </Dialog>
    </div>;
  }
}

@observer
export class EmployeeListTable extends React.Component<{employees: Employee[]}, any> {
  onEmployeeClick(employee) {
    return () => {
      employee.showDetail();
    }
  }

  render() {
    return <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>NO</th>
            <th>Number</th>
            <th>Name</th>
            <th>Email Address</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          { this.props.employees.map((employee, index) => {
            return (
              <tr key={index+1} onClick={this.onEmployeeClick(employee)}
                className={(employee.isSelected) ? "highlight": ""}>
                <td>{index+1}</td>
                <td>{employee.number}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.department}</td>
              </tr>
            );
          }) }
        </tbody>
      </table>
    </div>;
  }
}
