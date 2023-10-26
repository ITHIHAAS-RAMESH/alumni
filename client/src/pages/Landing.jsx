import React from "react";
import Login from "../components/login";
import Signup from "../components/signup";
import "./landing.css";
const Landing = () => {
  sessionStorage.clear();
  const [form, setForm] = React.useState("login");
  console.log(form);
  const handleClick = () => {
    setForm((prev) => (prev == "login" ? "signup" : "login"));
  };
  return (
    <>
      <div className="landing-outer">
        <div className="landing">
          <div className="left-container">
            <h1 className="heading">Alumni Network</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="right-container">
            {form == "login" ? <Login /> : <Signup />}
            <div className="signup-container">
              <button
                className="register-or-login"
                onClick={() => handleClick()}
              >
                {form == "login"
                  ? "Don't have an account? Signup"
                  : "Already have an account? Login"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
