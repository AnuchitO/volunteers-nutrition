import { observable } from 'mobx';
export default class VolunteersStore {
  @observable list: Volunteer[] = [];

  create(name: string, phone: string) {
    this.list.push(new Volunteer(name, phone));
  }
}

class Volunteer {
  @observable name: string = "";
  @observable phone: string = "";

  constructor(name: string, phone: string){
    this.name = name;
    this.phone = phone;
  }

}
