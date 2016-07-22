import * as React from 'react';
import {Link} from 'react-router';

export default class SideMenu extends React.Component<any, any> {
  onMenuClick() {
    $('#side_menu').trigger('click');
  }

  render() {
    return (
      <nav aria-hidden="true" className="menu" id="ui_menu" tabIndex="-1">
        <div className="menu-scroll">
          <div className="menu-content">
            <a className="menu-logo" href="#">Volunteers Nutrition</a>
            <ul className="nav">
              <li>
                <Link to={`/`} onClick={this.onMenuClick}>
                  Main Page
                </Link>
              </li>
              <li>
                <Link to={`/customer-information`} onClick={this.onMenuClick}>
                  Customer Information
                </Link>
              </li>
              <li>
                <Link to={`/employee-information`} onClick={this.onMenuClick}>
                  Employee Information
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

