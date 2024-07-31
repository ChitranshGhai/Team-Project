import React from "react";
import "./AccountPages.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div>
      <form action="/action_page.php" method="post" autocomplete="off">
        <div className="Form-MainContainer">
          <img
            id="Top-img"
            src="https://i.pinimg.com/564x/19/ff/7e/19ff7e96eba588957d722382b7c84908.jpg"
            alt="picture"
          />

          <p id="Heading">WELCOME</p>
          <p id="Msg">Sign in by entering the information below</p>

          <input
            className="Username-Input"
            type="text"
            name="userName"
            id="userName"
            required
            placeholder="Username"
          />

          <input
            className="Password-Input"
            type="password"
            name="password"
            id="password"
            required
            placeholder="Password"
          />

          <a id="ForgetPassword" href="ForgetPasswordPage.html">
            Forgot Password
          </a>

          <button id="SignUp-Btn" type="submit">
            Get Started
          </button>

          <p id="S-U">Don't have an account?</p>
          <Link id="Sign-Up" to="/SignUp">
            SIGN UP
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
