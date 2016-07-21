import * as React from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import {TextField} from '../App/Input';
import {CustomersList} from '../../stores/CustomerInfoStore';

@observer
export default class CustomerActionPanel extends React.Component<{customersList: CustomersList}, any> {
  @observable searchKeyword: string = '';

  onClickCreate = () => {
    this.props.customersList.showCreateForm();
  }

  onEnterSearch = (e: any) => {
    if (e.key == 'Enter') {
      this.props.customersList.searchCustomer(this.searchKeyword);
    }
  }

  render() {
    return <div>
      <TextField id="search-customer-text-field" label="Search"
        value={this.searchKeyword}
        onChange={(e: any) => this.searchKeyword = e.target.value}
        onKeyPress={this.onEnterSearch} />
      <button className="btn btn-brand"
        onClick={this.onClickCreate}>Create</button>
    </div>;
  }
}
