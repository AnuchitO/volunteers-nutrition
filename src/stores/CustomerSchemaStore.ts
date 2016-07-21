import {observable} from 'mobx';
import {getCustomerSchema, uploadCustomerSchema} from '../services/CustomerService';
import {generateCSV} from '../utils';

export default class CustomerSchemaStore {
  @observable schema: any = {sequence: []};
  csvFile: any;

  retrieve() {
    return getCustomerSchema().then((response:any) => {
      this.schema = response.data;
      return this.schema;
    });
  }

  uploadFile() {
    return uploadCustomerSchema(this.csvFile)
    .then(() => {
      this.csvFile = null;
      this.retrieve();
    });
  }

  getCustomerSchemaCSV() {
    let data = [];
    for (let field in this.schema) {
      if (typeof this.schema[field] === 'string') {
        data.push([field, this.schema[field]])
      }
    }

    return generateCSV(data);
  }
}
