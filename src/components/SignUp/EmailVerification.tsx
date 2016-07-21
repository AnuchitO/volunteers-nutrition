import * as React from 'react';

export default class EmailVerification extends React.Component<any, any> {
  render() {
    return <div>

      <div className="text-center">
        <h3 className="">Please Verify Your Email Address</h3>
        <p className="content-inner">
          Look for the verification email in your inbox and click the link in the email.
          A confirmation message will appear in your web browser.
        </p>
      </div>

    </div>;
  }
}
