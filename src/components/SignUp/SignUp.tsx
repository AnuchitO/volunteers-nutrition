import * as React from 'react';
import SignUpForm from './SignUpForm';

import SignUpStore from '../../stores/SignUpStore';

let signUpStore = new SignUpStore();

export default class SignUp extends React.Component<any, any> {
  render() {
    return <div className="container">
      <h3 className="text-center">Create New Account</h3>
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignUpForm signUpStore={signUpStore} />
        </div>
      </div>
    </div>;
  }
}
