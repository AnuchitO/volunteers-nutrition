import * as React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

interface CounterProps {
    counterStore: CounterStore;
    name?: string;
}

@observer
export default class Counter extends React.Component<CounterProps, any> {
  render() {
      let { counterStore } = this.props;
    return (
      <div>
          <h1>Counter</h1>
          <button onClick={ () => counterStore.decrement() }>-</button>
          <p>{ this.props.counterStore.count }</p>
          <button onClick={ () => counterStore.increment() }>+</button>
      </div>
    );
  }
}

export class CounterStore {
  @observable count: number = 0;

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }

}

