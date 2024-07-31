import "./AccountPages.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let result = await fetch('http://localhost:9994/api/Login', {
                method: 'post',
                body: JSON.stringify({ email, password }),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            result = await result.json();
            if (result.data === "Success") {
                navigate("/");
            } else {
                alert(result.data);
            }
        } catch (error) {
            console.error("There was an error with the fetch operation:", error);
        }
    };

    return (
        <div>
            <form method="post" autoComplete="off" onSubmit={handleSubmit}>
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="userName"
                        required
                        placeholder="E-Mail"
                    />

                    <input
                        className="Password-Input"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
