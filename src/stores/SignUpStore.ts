import {observable} from 'mobx';
import {hashHistory} from 'react-router';

import {register} from '../services/RegistrationService';

export default class SignUpStore {
  @observable fields: SignUpFormFields;

  constructor() {
    this.fields = new SignUpFormFields();
  }

  updateField(field: string, value: any) {
    this.fields[field] = value;
  }

  submit() {
    let expiryDate = this.fields.expiryMonth + '/' + this.fields.expiryYear;
    return register(this.fields.company, this.fields.name, this.fields.email,
                    this.fields.password, this.fields.creditCardNumber,
                    expiryDate, this.fields.securityCode)
    .then(() => {
      hashHistory.push('email-verification');
    })
    .catch(() => console.log('failed'));
  }
}

class SignUpFormFields {
  @observable company: string = '';
  @observable name: string = '';
  @observable email: string = '';
  @observable password: string = '';
  @observable confirmPassword: string = '';
  @observable creditCardNumber: string = '';
  @observable expiryMonth: string = '';
  @observable expiryYear: string = '';
  @observable securityCode: string = '';
}
