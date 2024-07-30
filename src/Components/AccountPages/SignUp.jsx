import React from "react";

function SignUp() {
  return (
    <div>
      <form action="/action_page.php" method="post" autocomplete="off">
        <div className="SignUp-Main-container">
          <img
            className="SignUp-Logo"
            src="https://i.pinimg.com/564x/19/ff/7e/19ff7e96eba588957d722382b7c84908.jpg"
            alt="logo"
          />

          <p id="Heading">SIGN-UP</p>

          <input
            className="Signup-UserName-Input"
            type="text"
            id="userName"
            name="userName"
            autofocus
            required
            placeholder="Username"
          />

          <input
            className="Signup-Email-Input"
            type="email"
            id="email"
            name="email"
            required
            placeholder="E-mail"
          />

          {/* <input
            className="Signup-Date-Input"
            type="date"
            id="birthDate"
            name="birthDate"
            required
            placeholder="Birth-Date"
          /> */}

          <input
            className="Signup-Phone-Input"
            type="tel"
            id="number"
            required
            name="number"
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            placeholder="Phone number"
          />

          <input
            className="Signup-Password-Input"
            type="password"
            name="password"
            id="password"
            required
            placeholder="Password"
          />

          <button id="SignUp-Btn" type="submit">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
