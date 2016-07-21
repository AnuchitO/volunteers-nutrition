import * as React from 'react';
import { observable  } from 'mobx';
import { observer } from 'mobx-react';
import TodoStore from './TodoStore';


interface Todoer {
  todoStore: TodoStore
}

export default class TodoApp extends React.Component<Todoer, any> {
  render() {
    let { todoStore } = this.props;
    return (
      <div>
        <TodoList todoStore={ todoStore }/>
        <TodoInput todoStore={ todoStore }/>
      </div>
    );
  }
}

@observer
class TodoList extends React.Component<{todoStore: TodoStore}, any> {
  render() {
    let { todoStore } = this.props;
    return (
      <ul>
        {
          todoStore.list.map((todo) => {
            return <li>
              <input type="checkbox"
                checked={ todo.completed }
                onChange={() => todo.completed = !todo.completed }
                />
                Task { todo.task  }</li>;
          })
        }
      </ul>
    );
  }
}


@observer
class TodoInput extends React.Component<{todoStore: TodoStore}, any> {
  @observable newTask: string = "";

  onEnter = (e:any) => {
    if (e.key == 'Enter') {
      this.props.todoStore.add(this.newTask);
      this.newTask = "";
    }
  }

  render() {
    return (
      <input type="text"
        value={this.newTask}
        onChange={(e:any)=> this.newTask = e.target.value}
        onKeyPress={ this.onEnter }/>

    );
  }

}
