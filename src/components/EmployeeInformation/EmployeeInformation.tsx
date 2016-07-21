import {observer} from 'mobx-react';
import * as React from 'react';

import EmployeeListView from './EmployeeListView';
import EmployeeDetailView from './EmployeeDetailView';
import {EmployeeInfoStore} from '../../stores/EmployeeInfomationStore';

let employeeInfoStore = new EmployeeInfoStore();

@observer
class EmployeeInformation extends React.Component<any, any> {
  componentDidMount() {
    employeeInfoStore.loadEmployees();
  }

  render() {
    return <div className="container">
      <div className="row">
        <div className="col-md-6">
          <EmployeeListView employeeInfoStore={employeeInfoStore} />
        </div>

        <div className="col-md-6">
          <EmployeeDetailView employeeInfoStore={employeeInfoStore} />
        </div>
      </div>
    </div>;
  }
}

export default EmployeeInformation;
