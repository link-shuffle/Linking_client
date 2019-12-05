import React from "react";
import GoogleLogin from "react-google-login";

const GOOGLE_LOGIN_API_KEY =
  "185423882459-107vb5ja8v508lffukk94bc0s102o6tp.apps.googleusercontent.com";

const Login = () => {
  const responseGoogle = res => console.log(res);
  const responseFail = err => console.log(err);

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
          clientId={GOOGLE_LOGIN_API_KEY}
          buttonText="Sign in with Google"
          onSuccess={responseGoogle}
          onFailure={responseFail}
        />
      </div>
    </div>
  );
};

export default Login;
