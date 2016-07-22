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

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={MainPage}/>
    </Route>
  </Router>
), document.getElementById('app'));
