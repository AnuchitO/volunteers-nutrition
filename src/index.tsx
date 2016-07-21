import * as React from 'react';
import {render} from 'react-dom';
import Counter, { CounterStore } from './Counter';
import TodoApp from './TodoApp';
import TodoStore from './TodoStore';

let counterStore = new CounterStore();
let todoStore = new TodoStore();

// render(<Counter counterStore={ counterStore } name="Anuchit"/>, document.getElementById("app"));
render(<TodoApp todoStore={ todoStore }/>, document.getElementById("app"));
