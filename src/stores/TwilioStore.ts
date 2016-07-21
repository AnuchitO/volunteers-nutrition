import {observable} from 'mobx';

import authStore from './AuthStore';
import {getCapabilityToken, transfer} from '../services/CapabilityTokenService';

declare var Twilio: any;

//actually is state
export class TwilioStore {
  @observable from: string = '';
  modalOpen = observable(false);
  conn: any;

  setup() {
    getCapabilityToken(authStore.userProfile.name).then((response: any) => {

      Twilio.Device.setup(response.data.token, {debug: true});

      Twilio.Device.ready(function (device) {
        $("body").snackbar({content: 'You are ready'});
      });

      Twilio.Device.connect(function (conn) {
        $("body").snackbar({content: "Successfully established call"});
      });

      Twilio.Device.disconnect(function (conn) {
        $("body").snackbar({content: "Call ended"});
      });

      Twilio.Device.incoming((conn) => {
        this.conn = conn;
        this.from = conn.parameters.From;
        $("#ui_incoming_dialog").modal('show');
      });
    });
  }

  accept() {
    this.conn.accept();
  }

  call() {
    Twilio.Device.connect();
  }

  hangup() {
    Twilio.Device.disconnectAll();
  }

  callTransfer() {
    transfer();
  }
}

let twilioStore = new TwilioStore();
export default twilioStore;
