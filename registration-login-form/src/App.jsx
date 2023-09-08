import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [title, setTitle] = useState("Register");

  return (
    <>
      <div className="custom-container center-align text-center">
        <h2 className="text-dark mt-4">Enter your credentials</h2>
        <div className="forms">
          {title === "Register" ? (
            <div className="username-form m-4">
              <h2 className="left-align">Username</h2>
              <input
                type="username"
                className="form-control w-100 custom-form fs-4"
                placeholder="Enter username"
              ></input>
            </div>
          ) : null}
          <div className="email-form m-4">
            <h2 className="left-align">Email</h2>
            <input
              type="email"
              className="form-control w-100 custom-form fs-4"
              placeholder="Enter email"
            ></input>
          </div>
          <div className="password-form m-4">
            <h2 className="left-align">Password</h2>
            <input
              type="password"
              className="form-control w-100 custom-form fs-4"
              placeholder="Enter password"
            ></input>
          </div>
          <div className="">
            {title === "Register" ? (
              <div className="gender-form m-4 custom-form left-align">
                <select class="custom-select h-100">
                  <option selected>Gender</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Prefer not to say</option>
                </select>
              </div>
            ) : null}{" "}
            <p className="right-align">
              <a href="">Test</a>
            </p>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-warning custom-button w-50 fs-5"
        >
          <b>{title}</b>
        </button>
      </div>
    </>
  );
}

export default App;
