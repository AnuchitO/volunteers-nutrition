import * as React from 'react';
import {observer} from 'mobx-react';

import {EmployeeInfoStore} from '../../stores/EmployeeInfomationStore';
import {TextField, Switch} from '../App/Input';
import snackbar from '../App/Snackbar';

@observer
export default class EmployeeDetailView extends React.Component<{employeeInfoStore: EmployeeInfoStore}, any> {
  updateCheckBoxField(field: string) {
    return (e: any) => {
      this.props.employeeInfoStore.selectingEmployee[field] = e.target.checked;
    };
  }

  onClickEdit = (e) => {
    e.preventDefault();
    this.props.employeeInfoStore.update()
    .then(() => {
      snackbar({content: 'The employee is updated'});
    });
  }

  onClickDelete = (e) => {
    e.preventDefault();
    this.props.employeeInfoStore.delete()
    .then(() => {
      snackbar({content: 'The employee is deleted'});
    });
  }

  onClickCreate = (e) => {
    e.preventDefault();
    this.props.employeeInfoStore.create()
    .then(() => {
      snackbar({content: 'The employee is created'});
    });
  }

  render() {
    let employee = this.props.employeeInfoStore.selectingEmployee;
    return <div>
      <form>
        <TextField
          className="force-control-highlight" id="employee-name-text-field"
          label="Name" value={employee.name} required
          onChange={(e: any) => employee.name = e.target.value} />

        <TextField className="force-control-highlight" id="employee-number-text-field"
          label="Number" value={employee.number} required
          onChange={(e: any) => employee.number = e.target.value} />

        <TextField className="force-control-highlight" id="employee-email-text-field"
          label="Email" value={employee.email} required
          onChange={(e: any) => employee.email = e.target.value} />

        <TextField className="force-control-highlight" id="employee-department-text-field"
          label="Department" value={employee.department} required
          onChange={(e: any) => employee.department = e.target.value} />

        <div className="">
          <div className="margin-bottom">

            <label className="pull-left">Administrator privileges</label>
            <div className="pull-right">
              <Switch id="privileges" checked={employee.adminPrivileges}
                onChange={this.updateCheckBoxField('adminPrivileges')} />
            </div>
            <div className="clearfix"></div>

          </div>

          <div className="margin-bottom">

            <label className="pull-left">Viewing authority of customer information</label>
            <div className="pull-right">
              <Switch id="employee-view-customer-info-switch" checked={employee.viewCustomerInfo}
                onChange={this.updateCheckBoxField('viewCustomerInfo')} />
            </div>
            <div className="clearfix"></div>

          </div>

          <div className="margin-bottom">

            <label className="pull-left">Editing authority of customer information</label>
            <div className="pull-right">
              <Switch id="employee-edit-customer-info-switch" checked={employee.editCustomerInfo}
                onChange={this.updateCheckBoxField('editCustomerInfo')} />
            </div>
            <div className="clearfix"></div>

          </div>

          <div className="margin-bottom">

            <label className="pull-left">Making a phone call</label>
            <div className="pull-right">
              <Switch id="employee-make-call-switch" checked={employee.makePhoneCall}
                onChange={this.updateCheckBoxField('makePhoneCall')} />
            </div>
            <div className="clearfix"></div>

          </div>

          <div className="margin-bottom">

            <label className="pull-left">Receiving a phone call</label>
            <div className="pull-right">
              <Switch id="employee-receive-call-switch" checked={employee.receivePhoneCall}
                onChange={this.updateCheckBoxField('receivePhoneCall')} />
            </div>
            <div className="clearfix"></div>

          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <button className="btn btn-brand-accent" onClick={this.onClickDelete}> Delete </button>
          </div>
          <div className="col-md-6">
            { (this.props.employeeInfoStore.isEditMode) ?
              <button className="btn btn-brand" onClick={this.onClickEdit}> Edit </button>:
              <button className="btn btn-brand" onClick={this.onClickCreate}> Create </button>
            }
          </div>
        </div>

      </form>
    </div>;
  }
}
