import http from './http';

import {Customer} from '../stores/CustomerInfoStore';

export function uploadCustomerList(file: any) {
  let data = new FormData();
  data.append('customerfile', file);

  return http.post('customers', data);
}

export function getCustomerList() {
  return http.get('customers');
}

export function createCustomer(body: any) {
  return http.post('customer', body);
}

export function uploadCustomerSchema(file: any) {
  let data = new FormData();
  data.append('customerschemafile', file);

  return http.post('customers/schema', data);
}

export function getCustomerSchema() {
    return http.get('customers/schema');
}

export function deleteCustomer(id: string) {
  return http.delete('customer/'+id);
}

export function getCustomerByNumber(number: string) {
    return http.get('customer/'+number);
}
