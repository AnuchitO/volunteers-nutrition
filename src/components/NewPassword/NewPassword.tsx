import * as React from 'react';
import {observer} from 'mobx-react';

import authStore from '../../stores/AuthStore';
import NewPasswdStore from '../../stores/NewPasswdStore';
import {TextField} from '../App/Input';

let newPasswdStore = new NewPasswdStore();

@observer
export default class NewPassword extends React.Component<any, any> {
  render() {
    return <div className="container">
      <h2 className="text-center">Setting your password</h2>
      <div className="row">
        <div className="content-inner col-md-4 col-md-offset-4">

          <div className="table-responsive">
            <table className="table">
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>{authStore.userProfile.name}</td>
                </tr>
                <tr>
                  <td>Number</td>
                  <td>{authStore.userProfile.number}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{authStore.userProfile.email}</td>
                </tr>
                <tr>
                  <td>Department</td>
                  <td>{authStore.userProfile.department}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <NewPasswd newPasswdStore={newPasswdStore}/>
        </div>
      </div>
    </div>;
  }
}

@observer
export class NewPasswd extends React.Component<{newPasswdStore: NewPasswdStore}, any> {
  setNewPassword = (e) => {
    e.preventDefault();
    this.props.newPasswdStore.submit();
  }

  onUpdateField = (field: string) => {
    return (e) => {
      this.props.newPasswdStore.updateField(field, e.target.value);
    }
  }

  render() {
    let fields = this.props.newPasswdStore.fields;

    return <form className="content-inner" onSubmit={this.setNewPassword}>
      <TextField id="new-password-text-field" type="password" required
        label="New Password"
        value={fields.password} onChange={this.onUpdateField('password')} />

      <TextField id="confirm-new-password-text-field" type="password" required
        label="Confirm Password"
        value={fields.confirmPassword} onChange={this.onUpdateField('confirmPassword')} />

      <div className="text-center form-group form-group-label">
        <button className="btn btn-brand"> Confirm </button>
      </div>
    </form>;
  }
}
