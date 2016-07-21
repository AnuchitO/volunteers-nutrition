import {observable} from 'mobx';
import {getCustomerList, uploadCustomerList, deleteCustomer} from '../services/CustomerService';
import {generateCSV} from '../utils';

export default class CustomerListStore {
  @observable list: Array<any> = [];
  csvFile: any;

  retrieve() {
    return getCustomerList().then((response:any) => {
      this.list = response.data;
      return this.list;
    });
  }

  uploadFile() {
    return uploadCustomerList(this.csvFile)
    .then(() => {
      this.csvFile = null;
      this.retrieve();
    });
  }

  getCustomerListCSV() {
    let headers = Object.keys(this.list[0]).filter((header) => {
      return typeof this.list[0][header] === 'string';
    });
    let data = this.list.map((customer) => {
      return headers.map((header) => {
        return customer[header];
      });
    });

    data.unshift(headers);
    return generateCSV(data);
  }

  deleteCustomer(id: string) {
    return deleteCustomer(id).then(() => {
      this.retrieve();
    });
  }
}
