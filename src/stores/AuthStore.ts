import {observable, computed, reaction} from 'mobx';
import {hashHistory} from 'react-router';

import http from '../services/http';

import * as AuthService from '../services/AuthService';

export class AuthStore {
  @observable sessionToken: string = '';
  @observable userProfile: UserProfile = new UserProfile();

  @computed get loggedIn() {
    return !!this.sessionToken;
  }

  constructor() {
    if (localStorage.getItem('sessionToken')) {
      this.sessionToken = localStorage.getItem('sessionToken');
      http['defaults'].headers['Authorization'] =
        'Bearer ' + this.sessionToken;
    }
  }

  signIn(email: string, password: string) {
    return AuthService.login(email, password).then((response: any) => {
      this.sessionToken = response.data.token;
      localStorage.setItem('sessionToken', this.sessionToken);
      http['defaults'].headers['Authorization'] =
        'Bearer ' + this.sessionToken;
      return this.sessionToken;
    });
  }

  signOut() {
    localStorage.removeItem("sessionToken");
    window.location.reload();
  }

  retrieveUserProfile() {
    if (!this.sessionToken) {
      return Promise.reject(this.userProfile);
    }

    return AuthService.getUserProfile()
    .then((response: any) => {
      this.userProfile = UserProfile.fromJson(response.data.profile);
      return this.userProfile;
    })
    .catch(() => {
      localStorage.removeItem('sessionToken');
      this.sessionToken = '';
      return Promise.reject(this.userProfile);
    });
  }
}

export class UserProfile {
  name: string = '';
  companyName: string = '';
  department: string = '';
  email: string = '';
  number: string = '';
  status: string = '';
  admin: boolean = false;
  administratorPrivileges: boolean = false;
  viewCustomerInfo: boolean = false;
  editCustomerInfo: boolean = false;
  receivePhoneCall: boolean = false;
  makePhoneCall: boolean = false;

  static fromJson(json): UserProfile {
    let userProfile = new UserProfile();
    userProfile.name = json.name;
    userProfile.companyName = json.company_name;
    userProfile.department = json.department;
    userProfile.email = json.email;
    userProfile.number = json.number;
    userProfile.status = json.status;
    userProfile.admin = json.admin;
    userProfile.administratorPrivileges = json.administrator_privileges;
    userProfile.viewCustomerInfo = json.view_customer_info;
    userProfile.editCustomerInfo = json.edit_customer_info;
    userProfile.receivePhoneCall = json.receive_phone_call;
    userProfile.makePhoneCall = json.make_phone_call;
    return userProfile;
  }

  needChangePassword() {
    return !this.admin && this.status === 'need_change_password';
  }
}

let authStore = new AuthStore();
export default authStore;
