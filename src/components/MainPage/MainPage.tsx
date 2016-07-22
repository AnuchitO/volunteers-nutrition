import * as React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import VolunteersStore from '../../stores/VolunteersStore';

export default class MainPage extends React.Component<any, any> {
  render() {
    let voluns = new VolunteersStore();
    return (
      <div>
        <h3 className="text-center">Registration</h3>
        <div className="container text-center">
          <div className="row">
            <div className="col-md-12">
              <FormInfo voluns={ voluns }/>
              <VolunteersList voluns={ voluns }/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


@observer
class FormInfo extends React.Component<{ voluns:VolunteersStore }, any> {
  @observable name: string = "";
  @observable phone: string = "";

  create = () => {
    if (!!this.name) {
      this.props.voluns.create(this.name, this.phone);
      this.name = "";
      this.phone = "";
    } else {
      $('body').snackbar({content: "Required fiels Name."});
    }
  }

  render() {
    return (
      <div>
        <div className="form-group form-group-label">
          <label className="floating-label" htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name"
            value={ this.name  }
            onChange={(e:any) => this.name = e.target.value}/>
        </div>
        <div className="form-group form-group-label">
          <label className="floating-label" htmlFor="phone">Phone</label>
          <input type="text" className="form-control" id="phone"
            value={ this.phone }
            onChange={(e:any)=> this.phone = e.target.value}/>
        </div>
        <div className="text-center">
          <button className="btn btn-green" onClick={ this.create }>Create</button>
        </div>
      </div>
    );
  }
}

@observer
class VolunteersList extends React.Component<{ voluns: VolunteersStore }, any> {
  render() {
    let voluns = this.props.voluns;

    return (
      <div className="table-responsive">
        <table className="table text-center">
            <thead>
              <th className="text-center">Name</th>
              <th className="text-center">Phone</th>
            </thead>
            <tbody>
              { voluns.list.map((v)=> {
                return (
                  <tr>
                    <td>{ v.name }</td>
                    <td>{ v.phone }</td>
                  </tr>
                  );
              })
              }
              </tbody>
        </table>
      </div>
    );
  }

}
