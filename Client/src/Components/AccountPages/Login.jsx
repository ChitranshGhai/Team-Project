import "./AccountPages.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SideImage from "../Images/gift_candles.jpeg";
import './AccountPages.css'


function Login() {

  const loginwithgoogle = () => {
    window.open("http://localhost:9998/auth/google/callback", "_self");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let result = await fetch("http://localhost:9998/api/Login", {
        method: "post",
        body: JSON.stringify({ email, password}),
        headers: {
          "Content-Type": "application/json",
        },
      });
      localStorage.setItem("user:", JSON.stringify({email,password}));

      result = await result.json();
      if (result.data === "Success") {
        navigate("/");
      } else {
        setErrorMessage(result.data);
      }
    } catch (error) {
      console.error("There was an error with the fetch operation:", error);
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
                <h1 style={{marginBottom:30}}>Log in to your account</h1>
                <p style={{marginBottom:50}}>Don't Have an Account? <Link style={{color:"#e2a532"}} to='/SignUp'>Sign Up</Link></p>
                {errorMessage && (
                <div style={{ color: "red", marginBottom: 20 }}>
                  {errorMessage}
                </div>
              )}
              <form method="post" autoComplete="off" onSubmit={handleSubmit} className="Form">
                <p>
                <input
                  type="email"
                  placeholder="E-Mail"
                  id="mail"
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
                  id="Pass"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="Password"
                  required
                />
                </p>
                <p>
                    <input style={{width: 20}} type='checkbox'/> I agree to <Link to="/TermsandCon" style={{color:"#e2a532"}}>Terms & Conditions</Link>
                </p>
                <button id="Sign-In-Btn" type="submit">Log In</button>
                <button id="GoogleSignin-Btn" onClick={loginwithgoogle}>
                  Continue with Google
                </button>
              </form>
            </div>{/* Main Form */}
          </div> {/* Form Div */}
        </div> {/* Margin Div */}
      </div> {/* Container Div */}
    </div> /* Picture Div */
  );
}

export default Login;
