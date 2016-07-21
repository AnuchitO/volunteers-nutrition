import {observable, computed} from 'mobx';
import * as CustomerService from '../services/CustomerService';

export class CustomersList {
  @observable customers: Customer[] = [];
  @observable detailedCustomer;
  @observable newCustomer: Customer = new Customer(this);

  showCreateForm() {
    this.newCustomer = new Customer(this);
    this.detailedCustomer = undefined;
  }

  searchCustomer(searchKeyword: string) {
    return this.getCustomers().then(() => {
      this.customers = this.customers.filter((customer: Customer) => {
        return customer.name.indexOf(searchKeyword) > -1;
      });
    });
  }

  createCustomer() {
    return CustomerService.createCustomer(this.newCustomer.asJson)
    .then(() => {
      this.getCustomers();
    });
  }

  showDetail(customer: Customer) {
    this.newCustomer = undefined;
    this.detailedCustomer = customer;
    console.log('show customer');
  }

  getCustomers() {
    return CustomerService.getCustomerList()
    .then((resp: any) => {
      this.customers = resp.data.map((customer) => {
        return Customer.fromJson(customer, this);
      });
    });
  }
}

export class Customer {
  @observable name: string = '';
  @observable phoneNumber: string = '';
  @observable email: string = '';
  @observable sex: string = '';
  @observable customersList: CustomersList;
  @observable isSelected: boolean = false;

  constructor(store: CustomersList) {
    this.customersList = store;
  }

  static fromJson(json, customersList: CustomersList) {
    let customer = new Customer(customersList);
    customer.name = json.name;
    customer.email = json.email;
    customer.phoneNumber = json.phone_number;
    customer.sex = json.sex;
    return customer;
  }

  @computed get asJson() {
    return {
      "name": this.name,
      "phone_number": this.phoneNumber,
      "email": this.email,
      "sex": this.sex
    };
  }
}
