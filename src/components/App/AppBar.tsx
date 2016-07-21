import * as React from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';

import authStore, {AuthStore} from '../../stores/AuthStore';

import twilioStore from '../../stores/TwilioStore';
import Dialog from '../App/Dialog';


@observer
export default class AppBar extends React.Component<{authStore: AuthStore}, any> {
  render() {
    return (
      <header className="header header-brand">
        { this.props.authStore.loggedIn ? <SideMenuButton />: null }

        <a className="header-logo" href="#">Call Jumper</a>
        { this.props.authStore.loggedIn ?
          <UserBar authStore={this.props.authStore} /> : null }
      </header>
    );
  }
}

@observer
class UserBar extends React.Component<{authStore: AuthStore}, any> {
  onSignOut = () => {
    this.props.authStore.signOut();
  }

  render() {
    return (
      <ul className="nav nav-list pull-right">
        <li>
          <OperatorStatusView />
        </li>
        <li>
          <a>
            <span>{authStore.userProfile.name}</span>
            <span className="icon icon-2x">person</span>
          </a>
        </li>
        <li><a className="" onClick={this.onSignOut}>Sign out</a></li>
      </ul>
    );
  }
}

class OperatorStatusView extends React.Component<any, any> {

  render() {
    return <div>
      <button className="btn btn-green"
        onClick={() => twilioStore.setup()}>
        Start
      </button>
      <button className="btn btn-red">Exit</button>
    </div>;
  }
}

class SideMenuButton extends React.Component<any, any> {
  render() {
    return (
      <ul className="nav nav-list pull-left">
        <li>
          <a id="side_menu" data-toggle="menu" href="#ui_menu">
            <span className="icon icon-lg">menu</span>
          </a>
        </li>
      </ul>
    );
  }
}
