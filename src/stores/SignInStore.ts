import {observable, autorun} from 'mobx';
import {hashHistory} from 'react-router';

import authStore, {UserProfile} from './AuthStore';

export default class SignInStore {
  @observable email: string = '';
  @observable password: string = '';
  @observable showError: boolean = false;
  @observable signingIn: boolean = false;

  updateField(field: string, value: any) {
    this[field] = value;
  }

  submit() {
    this.signingIn = true;
    authStore.signIn(this.email, this.password)
    .then(() => {
      window.location.replace('/');
    })
    .catch(() => {
      this.signingIn = false;
      this.showError = true;
    });
  }
}

