import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
// import { UserContext } from "../../UserContext";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        updateProfile(user, { displayName: displayName })
          .then(() => {
            console.log("Display name updated successfully");
            alert("Sign up successfully");
            // console.log(userCredentials)
            navigate("/header");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigate = useNavigate();

  return (
    <div>
      <div className="Form">
        <div className="HeaderText">
          <p>Sign up to LinkedIn</p>
        </div>
        <form className="SignInForm" onSubmit={handleSubmit}>
          <div className="InputWrapper">
            <label>Name</label>
            <input
              type="displayName"
              placeholder=""
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>
          <div className="InputWrapper">
            <label>Email</label>
            <input
              type="email"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="InputWrapper">
            <label>Password</label>
            <div className="PasswordWrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="Show"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <div className="InputWrapper99">
            <input id="consent" type="checkbox" />I agree to the terms and
            conditions.
          </div>
          <button type="submit" className="SignInButton">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
