import 'material';
import 'material.css';

import * as React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, hashHistory, useRouterHistory} from 'react-router';

import App from './components/App';
import { Example } from './components/Example/Example';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import EmailVerification from './components/SignUp/EmailVerification';
import MainPage from './components/MainPage/MainPage';
import EmployeeInformation from './components/EmployeeInformation/EmployeeInformation';
import CustomerInformation from './components/CustomerInformation/CustomerInformation';
import NewPassword  from './components/NewPassword/NewPassword'

import authStore from './stores/AuthStore';

function requireAuth(nextState, replace) {
  if (!authStore.loggedIn) {
    replace({
      pathname: '/signin',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={MainPage} onEnter={requireAuth} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Route path="/email-verification" component={EmailVerification} />
      <Route path="/employee-information" component={EmployeeInformation} onEnter={requireAuth} />
      <Route path="/customer-information" component={CustomerInformation} onEnter={requireAuth} />
      <Route path="/new-password" component={NewPassword} onEnter={requireAuth} />
      <Route path="/example" component={Example} />
    </Route>
  </Router>
), document.getElementById('app'));
