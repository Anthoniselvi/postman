import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="container">
      <div className="login-container">
        <div className="login-text">
          <h1>Login</h1>
          <p>Log in to My WishList.</p>
          <p>
            (If you don't have an account yet, Kindly
            <a href="">Register Here</a>)
          </p>
          <form>
            <div className="form-innerbox">
              <label htmlFor="name">E.mail</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-innerbox">
              <label htmlFor="name">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button>Login</button>
          </form>
          <a href="">Forgot your Password?</a>
        </div>
        <div className="login-pic"></div>
      </div>
    </div>
  );
}

export default Login;
