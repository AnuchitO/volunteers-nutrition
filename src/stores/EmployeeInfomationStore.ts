import {observable, reaction, computed, action} from 'mobx';

import {getEmployees, createEmployee, uploadEmployees, updateEmployee, deleteEmployee} from '../services/EmployeeService';
import {generateCSV} from '../utils';

export class EmployeeInfoStore {
  employeesFile: any;
  csvFile: any;

  @observable employees: Employee[] = [];
  @observable isEditMode = false;
  @observable selectingEmployee: Employee = new Employee({}, null);

  uploadFile() {
    return uploadEmployees(this.employeesFile).then(() => {
      this.loadEmployees();
    });
  }

  loadEmployees() {
    return getEmployees().then((response: any) => {
      this.employees = response.data.map((employee) => {
        return new Employee(employee, this);
      });
    });
  }

  clearSelecting() {
    this.employees.forEach((employee) => {
      employee.isSelected = false;
    });
  }

  showEmployeeDetail(employee: Employee) {
    this.isEditMode = true;
    this.selectingEmployee.oid = employee.oid;
    this.selectingEmployee.number = employee.number;
    this.selectingEmployee.name = employee.name;
    this.selectingEmployee.email = employee.email;
    this.selectingEmployee.department = employee.department;
    this.selectingEmployee.adminPrivileges = employee.adminPrivileges;
    this.selectingEmployee.viewCustomerInfo = employee.viewCustomerInfo;
    this.selectingEmployee.editCustomerInfo = employee.editCustomerInfo;
    this.selectingEmployee.makePhoneCall = employee.makePhoneCall;
    this.selectingEmployee.receivePhoneCall = employee.receivePhoneCall;
    this.selectingEmployee.isSelected = employee.isSelected;
  }

  prepareToCreate() {
    this.clearSelecting();
    this.isEditMode = false;
  }

  clearDetailReaction = reaction(
    () => this.isEditMode,
    () => this.clearDetail()
  );

  clearDetail() {
    this.selectingEmployee = new Employee({}, null);
  }

  update() {
    return updateEmployee(this.selectingEmployee).then(() => {
      this.loadEmployees();
    });
  }

  delete() {
    return deleteEmployee(this.selectingEmployee).then(() => {
      this.loadEmployees();
      this.clearDetail();
    });
  }

  create() {
    return createEmployee(this.selectingEmployee)
    .then(() => {
      this.loadEmployees();
      this.clearDetail();
    });
  }

  getEmployeesCSV() {
    let headers = Object.keys(this.employees[0].asJson());
    let data = this.employees.map((employee, index) => {
      let employeeJson = employee.asJson();
      return headers.map((header) => {
        let currFields = employeeJson[header];
        if (typeof currFields === 'boolean') {
          currFields = Number(currFields);
        }
        return currFields;
      });
    });

    data.unshift(headers);

    return generateCSV(data);
  }
}

export class Employee {
  @observable oid: string;
  @observable number: string;
  @observable name: string;
  @observable email: string;
  @observable department: string;
  @observable adminPrivileges: boolean;
  @observable viewCustomerInfo: boolean;
  @observable editCustomerInfo: boolean;
  @observable makePhoneCall: boolean;
  @observable receivePhoneCall: boolean;
  @observable isSelected: boolean;
  employeeInfoStore: EmployeeInfoStore;

  constructor(source: any, employeeInfoStore: EmployeeInfoStore) {
    this.oid = source.oid || "";
    this.number = source.number || "";
    this.name = source.name || "";
    this.email = source.email || "";
    this.department = source.department || "";
    this.adminPrivileges = source.administrator_privileges || false;
    this.viewCustomerInfo = source.view_customer_info || false;
    this.editCustomerInfo = source.edit_customer_info || false;
    this.makePhoneCall = source.make_phone_call || false;
    this.receivePhoneCall = source.receive_phone_call || false;
    this.employeeInfoStore = employeeInfoStore;
  }

  showDetail() {
    this.employeeInfoStore.clearSelecting();
    this.isSelected = true;
    this.employeeInfoStore.showEmployeeDetail(this);
  }

  asJson() {
    return {
      id: this.oid,
      number: this.number,
      name: this.name,
      email: this.email,
      department: this.department,
      administrator_privileges: this.adminPrivileges,
      view_customer_info: this.viewCustomerInfo,
      edit_customer_info: this.editCustomerInfo,
      make_phone_call: this.makePhoneCall,
      receive_phone_call: this.receivePhoneCall
    };
  }
}
