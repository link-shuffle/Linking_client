import React, { Component } from "react";
import GoogleLogin from "react-google-login";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      provider: ""
    };
  }
  responseGoogle = res => console.log(res);

  responseFail = err => console.log(err);

  render() {
    return (
      <div className="login">
        <h1>Let's link to Linking!</h1>
        <p>Link all in one workspace</p>
        <p>
          Save, Share, Collaborate <br></br>
          and get Organized<br></br>
          with Linking!
        </p>
        <div>
          <GoogleLogin
            clientId="185423882459-107vb5ja8v508lffukk94bc0s102o6tp.apps.googleusercontent.com"
            buttonText="Sign in with Google"
            onSuccess={this.responseGoogle}
            onFailure={this.responseFail}
          />
        </div>
      </div>
    );
  }
}

export default Login;
