import "./Login.css";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
          const data = new FormData(event.target);
          const userName = data.get("userName");
          const password = data.get("password");
          signInWithEmailAndPassword(auth, userName, password)
            .then((userDetails) => {
              console.log("user is valid");
            //   localStorage.setItem("username", userName);
              navigate("/header")
            })
            .catch(() => {
              console.log("user is invalid");
              setErrorMessage("Invalid User");
            });
        }
    const navigate = useNavigate();

    return (
        <div>
            <div className="Form">
                <div className="HeaderText">
                    <p>Sign in to LinkedIn</p>
                </div>

                <form className="SignInForm" onSubmit={handleSubmit}>
                    <div className="InputWrapper">
                        <label>Email</label>
                        <input
                            type="text"
                            name="userName"
                            placeholder=""
                        />
                    </div>
                    <div className="InputWrapper">
                        <label>Password</label>
                        <div className="PasswordWrapper">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder=""
                            />
                            <button className="Show" type="button" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>
                    <div className="InputWrapper">
                        <a href="#">Forgot password?</a>
                    </div>
                    <div style={{ color: "red" }}>{errorMessage}</div>
                    <button type="submit" className="SignInButton">
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    )
}
export default Login;