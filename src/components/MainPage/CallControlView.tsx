import * as React from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';

import twilioStore, { TwilioStore } from '../../stores/TwilioStore';
import {CustomersList, Customer} from '../../stores/CustomerInfoStore';
import Dialog from '../App/Dialog';

@observer
export default class CallControlView extends React.Component<{twilioStore: TwilioStore, customersList: CustomersList}, any> {

  onAccept = () => {
    let {customersList} = this.props;
      twilioStore.accept();
      customersList.customers.forEach(function(customer) {
          if (customer.phoneNumber === twilioStore.from) {
              customersList.showDetail(customer);
          }
      });
  }

  render() {
    return (
      <div>

      <div aria-hidden="true" className="modal modal-va-middle fade" id="ui_incoming_dialog" role="dialog" tabIndex="-1">
-          <div className="modal-dialog modal-xs">
-            <div className="modal-content">
-              <div className="modal-inner">
-                <p className="h5">Incoming connection from {twilioStore.from}</p>
-              </div>
-              <div className="modal-footer">
-                <p className="text-right">
-                  <button className="btn btn-flat btn-brand-accent" data-dismiss="modal">Cancel</button>
-                  <button className="btn btn-flat btn-brand-accent" data-dismiss="modal" onClick={this.onAccept}>Receive</button>
-                </p>
-              </div>
-            </div>
-          </div>
-        </div>

        <div className="margin-bottom">
          <button className="btn btn-brand">Call</button>
        </div>

        <div className="">
          <button className="btn btn-green" onClick={() => twilioStore.callTransfer()}>Transfer</button>
          <button className="btn btn-orange">Hold</button>
          <button className="btn btn-red" onClick={() => twilioStore.hangup()}>
            Hang Up
          </button>
        </div>
      </div>
    );
  }
}
