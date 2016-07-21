import * as React from 'react';

import {observable, computed, extendObservable} from 'mobx';
import {observer} from 'mobx-react';

export class ExampleState {
  @observable name: string = '';

  @computed get greetings(): string {
      return 'Hello my name is ' + this.name;
  }
}

@observer
export class ExampleView extends React.Component<{exampleState: ExampleState}, any> {
  render() {
    return <div>
      <input type="text" value={this.props.exampleState.name}
        onChange={(e: any) => this.props.exampleState.name = e.target.value} />
      <span>{this.props.exampleState.greetings}</span>
    </div>;
  }
}

let exampleState = new ExampleState();

@observer
export class Example extends React.Component<any, any> {
  render() {
    return <div>
      <ExampleView exampleState={exampleState} />
    </div>;
  }
}
