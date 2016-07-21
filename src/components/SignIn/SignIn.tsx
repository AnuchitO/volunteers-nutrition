import * as React from 'react';
import {Link} from 'react-router';
import {observer} from 'mobx-react';

import SignInForm from './SignInForm';
import SignInStore from '../../stores/SignInStore';

let signInStore = new SignInStore();

@observer
export default class SignIn extends React.Component<any, any> {
  render() {

    return <div className="container">
      <h2 className="text-center">Welcome to Call Jumper</h2>
      <div className="row">
        <div className="text-center content-inner col-md-4 col-md-offset-4">
          <SignInForm signInStore={signInStore} />
          <div className="content-inner text-center">
            <div><a href="#">Forget password?</a></div>
            <br />
            <div>
              <Link to={`/signup`}>
                <button className="btn btn-brand"> Create New Account </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}
