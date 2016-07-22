import * as React from 'react';
import {hashHistory} from 'react-router';
import {observer} from 'mobx-react';

import AppBar from './App/AppBar';
import authStore, {UserProfile} from '../stores/AuthStore';

@observer
export default class App extends React.Component<any, any> {
  componentDidMount() {
    hashHistory.push('/');
  }

  render() {
    return <div>
      <AppBar authStore={authStore} />
      <div>
        {this.props.children}
      </div>
    </div>;
  }
}
