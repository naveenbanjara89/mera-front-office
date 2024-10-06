import React, { useState } from "react";
import "@fontsource/poppins";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 ">
      <div className=" rounded shadow p-4" style={{ width: "400px", backgroundColor:"#20202cad", color:"white" }}>
        <h1 className="text-center mb-4" style={{fontWeight:"bold"}}>Log In</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              style={{backgroundColor:"#18112980", color:"white"}}
              onChange={(e) => setUsername(e.target.value)}
              aria-describedby="usernameHelp"
              required
            />
            <div id="usernameHelp" className="form-text" style={{ color:"white"}}>
              We'll never share your details with anyone else.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              style={{backgroundColor:"#18112980", color:"white"}}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100" style={{backgroundColor:"#5b56f7"}}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
