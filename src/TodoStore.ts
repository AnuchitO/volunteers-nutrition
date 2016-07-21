import { observable, autorun } from 'mobx';

export default class TodoStore {
  @observable list: Todo[] = [new Todo("11"), new Todo("22")];

  add(task: string) {
    this.list.push(new Todo(task));
  }
}


class Todo {
  @observable task: string = "";
  @observable completed: boolean = false;

  constructor(task: string){
    this.task = task;
    autorun(() => {
      console.log(this.completed);
    })
  }

}
