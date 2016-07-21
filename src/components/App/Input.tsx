import * as React from 'react';

interface TextFieldProps {
  id: string;
  label: string;
  type?: string;
  className?: string;
  value?: any;
  required?: boolean;
  onChange?: any;
  onKeyPress?: any;
}

const defaultTextFieldClass = "form-group form-group-label";

export class TextField extends React.Component<TextFieldProps, any> {
  render() {
    let { id,
          label,
          className,
          value,
          required,
          type = 'text',
          onChange,
          onKeyPress } = this.props;

    className = className ? ' ' + className : '';

    return <div className={defaultTextFieldClass + className}>
      <label className="floating-label" htmlFor={id}>{label}</label>
      <input className="form-control" id={id} type={type}
        value={value} onChange={onChange} onKeyPress={onKeyPress} required={required} />
    </div>;
  }
}

interface TextAreaProps {
  id: string;
  label: string;
}

export class TextArea extends React.Component<TextAreaProps, any> {
  render() {
    let {id, label} = this.props;
    return <div className="form-group form-group-label">
      <label className="floating-label" htmlFor={id}>{label}</label>
      <textarea className="form-control textarea-autosize" id={id} rows="4"></textarea>
    </div>;
  }
}


interface SwitchProps {
  id: string;
  label?: string;
  checked?: boolean;
  onChange?: any;
}

export class Switch extends React.Component<SwitchProps, any> {
  render() {
    let { id, label, checked, onChange } = this.props;

    return <div className="checkbox switch">
      <label htmlFor={this.props.id}>
        <input className="access-hide" id={id} type="checkbox"
          checked={checked} onChange={onChange} />
        <span className="switch-toggle"></span>
        {label}
      </label>
    </div>;
  }
}


interface SelectProps {
  id: string;
  label: string;
  value?: any;
  className?: string;
  onChange?: any;
  required?: boolean;
}

const defaultSelectClass = "form-group form-group-label control-highlight";

export class Select extends React.Component<SelectProps, any> {
  render() {
    let { id, label, className,
          value, onChange, required } = this.props;

    className = className ? ' ' + className : '';

    return <div className={defaultSelectClass + className}>
      <label className="floating-label" htmlFor={id}>{label}</label>
      <select className="form-control" value={value} id={id}
        required={required} onChange={onChange}>
        {this.props.children}
      </select>
    </div>;
  }
}

interface FileUploadProps {
  name: string;
  label: string;
  value?: any;
  onChange?: any;
}

export class FileUpload extends React.Component<FileUploadProps, any> {
  render() {
    let {name, label, value, onChange} = this.props;

    return <div className="form-group form-group-label force-control-highlight">
      <label className="floating-label">{label}</label>
      <input className="form-control" type="file" name={name}
        value={value} onChange={onChange} />
    </div>;
  }
}
