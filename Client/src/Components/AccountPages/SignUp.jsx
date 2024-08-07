import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import SideImage from "../Images/gift_candles.jpeg";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ name: name, email: email, password: password });
    let result = await fetch("http://localhost:9998/api/SignUp", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    const user = localStorage.setItem("user", JSON.stringify(result));

    if (result) {
      navigate("/Login");
      console.log(result);
    } else {
      return;
    }
  };

  return (
    /* Picture Div */
    <div className="Outer-Picture-Div">
      {/* Containing Margin */}
      <div className="Container-Div">
        {/* Spacing Div */}
        <div className="Margin-Div">
          {/* Image Div */}
          <div className="Image-Div">
            <img id="PreviewImage" src={SideImage} alt="PreviewImage" />
          </div>
          {/* Form Div */}
          <div className="Form-Div">
            <div className="Main-Form">
              <h1 style={{ marginBottom: 10 }}>Create an account</h1>
              <p style={{ marginBottom: 30 }}>
                Have an Account?{" "}
                <Link style={{ color: "green" }} to="/Login">
                  Log In
                </Link>
              </p>
              <form
                method="post"
                autoComplete="off"
                onSubmit={handleSubmit}
                className="Form"
              >
                <p>
                  <input
                    type="text"
                    placeholder="Name"
                    id="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="Name"
                    required
                    autoComplete="off"
                  />
                </p>

                <p>
                  <input
                    type="email"
                    placeholder="E-Mail"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="Email"
                    required
                  />
                </p>

                <p>
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    name="Password"
                    required
                  />
                </p>
                <p>
                  <input style={{ width: 20 }} type="checkbox" /> I agree to{" "}
                  <Link style={{ color: "green" }}>Terms & Conditions</Link>
                </p>
                <button id="Sign-In-Btn" type="submit">
                  Get Started
                </button>
              </form>
            </div>
            {/* Main Form */}
          </div>{" "}
          {/* Form Div */}
        </div>{" "}
        {/* Margin Div */}
      </div>{" "}
      {/* Container Div */}
    </div> /* Picture Div */
  );
}

export default SignUp;
