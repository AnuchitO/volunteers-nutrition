import http from './http';

import {Employee} from '../stores/EmployeeInfomationStore';

export function uploadEmployees(file: any) {
  let data = new FormData();
  data.append('empfile', file);

  return http.post('employees', data);
}

export function newPasswd(employeeNumber: string, newPassword: string) {
  let body = {
    'newpasswd': newPassword
  };

  return http.post('employee/'+employeeNumber+'/password', body);
}

export function getEmployees() {
  return http.get('employees');
}

export function createEmployee(employee: Employee) {
  let body = {
    "number": employee.number,
    "name": employee.name,
    "email": employee.email,
    "department": employee.department,
    "administrator_privileges": employee.adminPrivileges,
    "view_customer_info": employee.viewCustomerInfo,
    "edit_customer_info": employee.editCustomerInfo,
    "make_phone_call": employee.makePhoneCall,
    "receive_phone_call": employee.receivePhoneCall
  };
  return http.post('employee', body);
}

export function updateEmployee(employee: Employee) {
  let body = {
    "name": employee.name,
    "email": employee.email,
    "number": employee.number,
    "department": employee.department,
    "administrator_privileges": employee.adminPrivileges,
    "view_customer_info": employee.viewCustomerInfo,
    "edit_customer_info": employee.editCustomerInfo,
    "make_phone_call": employee.makePhoneCall,
    "receive_phone_call": employee.receivePhoneCall
  };
  return http.put('employee/' + employee.oid, body);
}

export function deleteEmployee(employee: Employee) {
  return http.delete('employee/' + employee.oid);
}
