import React, { useState } from 'react';

function Login({setIsLoggedIn}) {

  // Initialize state with empty strings
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // Event handlers
  function inputvalue1(e) {
    setUserName(e.target.value);
  }

  function inputvalue2(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="card mt-5" style={{ width: "400px", marginLeft: "850px" }}>
      <div className="card-body text-center p-5">
        <h1 className="p-3">Login Page</h1>
        <input
          onChange={inputvalue1}
          className="form-control mt-5"
          type="text"
          placeholder="Enter email address"
          value={userName} // Controlled input
        />{" "}
        <br />
        <input
          onChange={inputvalue2}
          className="form-control"
          type="text"
          placeholder="Enter password"
          value={password} // Controlled input
        />{" "}
        <br />
        <button
          className="btn btn-primary"
          onClick={() => {
            if (userName === "Shiva" && password === "Shiva@123") {
             setIsLoggedIn(true)
            } else {
              alert("Invalid details");
            }
          }}
        >
          Login
        </button>{" "}
        <br /> <br />
        <a href="">
          <p>Forgot password?</p>
        </a>
      </div>
    </div>
  );
}

export default Login;
