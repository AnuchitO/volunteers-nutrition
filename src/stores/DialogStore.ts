import {observable} from 'mobx';
import * as $ from 'jquery';

export class DialogStore {
  @observable title: string = '';
  @observable childrenComponent: any = null;

  show(title: string, children: any) {
    this.title = title;
    this.childrenComponent = children;
    $('#ui_dialog').modal({
      backdrop: 'static'
    });
  }

  hide() {
    this.childrenComponent = null;
    $('#ui_dialog').modal('hide');
  }
}

let dialogStore = new DialogStore();
export default dialogStore;
