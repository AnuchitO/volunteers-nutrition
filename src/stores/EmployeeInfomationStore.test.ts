import {toJS} from 'mobx';

import {Employee, EmployeeInfoStore} from './EmployeeInfomationStore';
import {getEmployees} from '../services/EmployeeService';

// describe('EmployeeInfomationStore', () => {
//   it('initial empty list of employees', () => {
//     let employeeInfoStore = new EmployeeInfoStore();
//     expect(employeeInfoStore.employees.length).toBe(0);
//   });
//
//   it('loadEmployees set in to employees', () => {
//     let expectedEmployees = [
//       {
//         number: '10100',
//         name: 'Name',
//         email: 'a@mail.com',
//         department: 'DEV',
//         adminPrivileges: false,
//         viewCustomerInfo: false,
//         editCustomerInfo:  false,
//         makePhoneCall:  false,
//         receivePhoneCall:  false
//       }
//     ];
//
//     getEmployees = jest.fn(() => {
//       return Promise.resolve({data: expectedEmployees});
//     });
//
//     let employeeInfoStore = new EmployeeInfoStore();
//
//     return employeeInfoStore.loadEmployees().then(() => {
//       expect(toJS(employeeInfoStore.employees).length).toBe(1);
//     });
//   });
//
//   describe('getEmployeesCSV', () => {
//     it('return csv content', () => {
//       let employeeInfoStore = new EmployeeInfoStore();
//
//       let employees = [
//         {
//           number: '10100',
//           name: 'Name',
//           email: 'a@mail.com',
//           department: 'DEV',
//           administrator_privileges: true,
//           view_customer_info: false,
//           edit_customer_info: false,
//           make_phone_call: false,
//           receive_phone_call: false
//         }
//       ];
//
//       employeeInfoStore.employees = [new Employee(employees[0])];
//
//       let expectedContent = "data:text/csv;charset=utf-8,number,name,email,department," +
//         "administrator_privileges,view_customer_info,edit_customer_info,make_phone_call,receive_phone_call\n" +
//         "10100,Name,a@mail.com,DEV,1,0,0,0,0";
//
//       expect(employeeInfoStore.getEmployeesCSV()).toEqual(expectedContent);
//     });
//   });
// });
//
