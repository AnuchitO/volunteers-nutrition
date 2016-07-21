import * as React from 'react';
import {hashHistory} from 'react-router';
import {observer} from 'mobx-react';

import SideMenu from './App/SideMenu';
import AppBar from './App/AppBar';
import authStore, {UserProfile} from '../stores/AuthStore';

@observer
export default class App extends React.Component<any, any> {
  componentDidMount() {
    return authStore.retrieveUserProfile()
    .then((userProfile: UserProfile) => {
      if (userProfile.needChangePassword()) {
        hashHistory.push('new-password');
      }
    })
    .catch(() => hashHistory.push('/signin'));
  }

  render() {
    return <div>
      <SideMenu />
      <AppBar authStore={authStore} />
      <div>
        {this.props.children}
      </div>
    </div>;
  }
}
