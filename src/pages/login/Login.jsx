import React from "react";
import GoogleLogin from "react-google-login";
import { baseUrl } from "../../config/base";

const GOOGLE_LOGIN_API_KEY =
  "185423882459-107vb5ja8v508lffukk94bc0s102o6tp.apps.googleusercontent.com";

const Login = () => {
  const responseGoogle = async res => {
    const googleUser = await res.profileObj;
    const userData = {
      email: googleUser.email,
      name: googleUser.name
    };
    await fetch(`${baseUrl}/user`, {
      method: "POST",
      redirect: "follow",
      body: JSON.stringify(userData)
    });
    // sessionStorage.setItem("name", userData.name);
    // sessionStorage.setItem("name", "vincentj");
    // sessionStorage.setItem("imgUrl", googleUser.imageUrl);
  };

  const responseFail = async err => {
    console.log(err);
  };

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
