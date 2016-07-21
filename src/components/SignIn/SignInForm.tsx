import * as React from 'react';
import {observer} from 'mobx-react';

import SignInStore from '../../stores/SignInStore';
import {TextField} from '../App/Input';

@observer
export default class SignInForm extends React.Component<{signInStore: SignInStore}, any> {

  onSignIn = (e) => {
    e.preventDefault();
    this.props.signInStore.submit();
  }

  onUpdateField = (field: string) => {
    return (e) => {
      this.props.signInStore.updateField(field, e.target.value);
    }
  }

  renderError() {
    if (this.props.signInStore.showError) {
      return <div className="card card-red h">
            <div className="card-main">
              <div className="card-inner margin-top-sm margin-bottom-sm">
                Wrong email or password.
              </div>
            </div>
        </div>;
    }
  }

  render() {
    let {email, password, signingIn} = this.props.signInStore;
    return (
      <div>
        { this.renderError() }

        <form onSubmit={this.onSignIn}>
          <TextField id="signin-email-text-field" label="Email" type="email" required
              value={email} onChange={this.onUpdateField('email')} />

          <TextField id="signin-password-text-field" label="Password" type="password" required
              value={password} onChange={this.onUpdateField('password')} />

          <div className="form-group form-group-label">
            { (signingIn) ? <CircularProgress />:
              <button className="btn btn-brand"> Sign In </button>
            }
          </div>
        </form>
      </div>
    );
  }
}

class CircularProgress extends React.Component<any, any> {
  render() {
    return <div className="progress-circular progress-circular-inline margin-top-no margin-bottom-no">
      <div className="progress-circular-wrapper">
          <div className="progress-circular-inner">
              <div className="progress-circular-left">
                  <div className="progress-circular-spinner"></div>
              </div>
              <div className="progress-circular-gap"></div>
              <div className="progress-circular-right">
                  <div className="progress-circular-spinner"></div>
              </div>
          </div>
      </div>
  </div>;
  }
}
