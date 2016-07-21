import {observable} from 'mobx';
import {hashHistory} from 'react-router';

import {newPasswd} from '../services/EmployeeService';
import authStore from './AuthStore';

export default class NewPasswd {
  @observable fields: NewPasswdFormFields;

  constructor() {
    this.fields = new NewPasswdFormFields();
  }

  updateField(field: string, value: any) {
    this.fields[field] = value;
  }

  submit() {
    if (this.fields.password != this.fields.confirmPassword){
      $('body').snackbar({content: 'Password mismatch'});
      return;
    }

    return  newPasswd(authStore.userProfile.number , this.fields.password)
    .then(() => {
      hashHistory.push('mainpage');
    })
    .catch(() => console.log('failed'));
  }
}

class NewPasswdFormFields {
  @observable password: string = '';
  @observable confirmPassword: string = '';
}
