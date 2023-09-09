import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

let TYPE = "register";

function App() {
  const [title, setTitle] = useState("Register");
  const [message, setMessage] = useState("Already have an account? Sign in");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <>
      <div
        className="custom-container center-align text-center"
        id="background"
      >
        <h2 className="text-dark mt-4">Enter your credentials</h2>
        <div className="forms">
          {title === "Register" ? (
            <div className="username-form m-4">
              <h2 className="left-align">Username</h2>
              <input
                type="username"
                className="form-control w-100 custom-form fs-4"
                placeholder="Enter username"
                id="username"
              ></input>
            </div>
          ) : null}
          <div className="email-form m-4">
            <h2 className="left-align">Email</h2>
            <input
              type="email"
              className="form-control w-100 custom-form fs-4"
              placeholder="Enter email"
              id="email"
            ></input>
          </div>
          <div className="password-form m-4">
            <h2 className="left-align">Password</h2>
            <input
              type="password"
              className="form-control w-100 custom-form fs-4"
              placeholder="Enter password"
              id="password"
            ></input>
          </div>
          <div className="custom-container" id="form">
            {title === "Register" ? (
              <div className="gender-form m-4 custom-form left-align">
                <select
                  defaultValue={"0"}
                  className="custom-select h-100"
                  id="gender"
                >
                  <option value="" className="d-none">
                    Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="notSpecified">Prefer not to say</option>
                </select>
              </div>
            ) : null}{" "}
            <p
              className="test"
              onClick={() => {
                if (title === "Register") {
                  setTitle("Login");
                  setMessage("Don't have an account? Register now");
                  document.getElementById("form").style.marginTop = "50px";
                  document.getElementById("background").style.backgroundColor =
                    "lightblue";
                } else {
                  setTitle("Register");
                  setMessage("Already have an account? Sign in");
                  document.getElementById("form").style.marginTop = "";
                  document.getElementById("background").style.backgroundColor =
                    "tomato";
                }
              }}
            >
              <a>{message}</a>
            </p>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-warning custom-button w-50 fs-5"
          onClick={() => {
            TYPE = title;
            const status = submitHandler();
            if(status != "success"){
              setErrorMessage(status);
              document.getElementById("errorMessage").style.display="block";
            }

          }}
        >
          <b>{title}</b>
        </button>
        <div id="errorMessage" className="hide">
          <h4>{errorMessage}</h4>
        </div>
      </div>
    </>
  );
}

export default App;

function submitHandler() {
  let username = document.getElementById("username")?.value;
  let email = document.getElementById("email")?.value;
  let password = document.getElementById("password")?.value;
  let gender = document.getElementById("gender")?.value;
  
  if(username == "" && TYPE == "Register")
    return "Please enter an username!";

  if(email == "")
    return "Please enter" + (TYPE == "Register" ? " an " : " your ") + "email!";

  if(password == "")
    return "Please enter" + (TYPE == "Register" ? " an " : " your ") + "password!";

  if(gender == "")
    return "Please select an gender!";
}
