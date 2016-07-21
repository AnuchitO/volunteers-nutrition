import * as React from 'react';
import {findDOMNode} from 'react-dom';
import {observer} from 'mobx-react';
import {observable, IObservableValue, observe} from 'mobx';

interface DialogProps {
  title: string;
  onConfirm?: any;
  onCancel?: any;
  confirmText?: string;
  cancelText?: string;
  open?: IObservableValue<boolean>;
}

@observer
export default class Dialog extends React.Component<DialogProps, any> {
  componentDidMount() {
    $(findDOMNode(this)).on('hidden.bs.modal', this.closeDialog);

    observe(this.props.open, (value) => {
      let visibility = value ? 'show': 'hide';
      $(findDOMNode(this)).modal(visibility);
    });
  }

  onClickCancel = () => {
    this.props.onCancel();
    this.closeDialog();
  }

  onClickConfirm = () => {
    this.props.onConfirm();
    this.closeDialog();
  }

  closeDialog = () => {
    this.props.open.set(false);
  }

  render() {
    return  (
      <div aria-hidden="true" className="modal modal-va-middle fade"
        role="dialog" tabIndex="-1">
        <div className="modal-dialog modal-xs">
          <div className="modal-content">
            <div className="modal-heading">
              <p className="modal-title">{this.props.title}</p>
            </div>
            <div className="modal-inner">
              {this.props.children}
              </div>
            <div className="modal-footer">
              <p className="text-right">
                {this.props.onCancel ?
                  <button className="btn btn-flat btn-brand-accent"
                    onClick={this.onClickCancel}>
                    {this.props.cancelText ? this.props.cancelText: 'Cancel'}
                  </button>:
                  null
                }
                {this.props.onConfirm ?
                  <button className="btn btn-flat btn-brand"
                    onClick={this.onClickConfirm}>
                    {this.props.confirmText ? this.props.confirmText: 'Confirm'}
                  </button>:
                  null
                }
              </p>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

