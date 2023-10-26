import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });
  const [msg, setMsg] = React.useState("");
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    setShowPassword((prev) => !prev);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    let res;
    await axios
      .post("http://localhost:3000/user/login/", form)
      .then(function (response) {
        res = response;
        console.log(response);
      })
      .catch(function (error) {
        setMsg("Server error");
      });

    const token = res.data.token;
    if (token) {
      sessionStorage.setItem("token", token);
      const jsonData = JSON.stringify(res.data.user);
      sessionStorage.setItem("myData", jsonData);
      if (res.data.user.is_completed) navigate("/home");
      else navigate("/user-details");
    } else {
      setMsg(res.data.message);
    }
  };
  return (
    <div className="login-outer-container">
      <h1 className="login-text">Login</h1>
      <div className="input-container">
        <div className="text-field-container email-container">
          <img className="login-img" src="/images/envelope.png"></img>
          <input
            className="text-field"
            name="email"
            type="text"
            placeholder="Email"
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className="text-field-container password-container">
          <img className="login-img" src="/images/lock.png"></img>
          <input
            className="text-field"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => handleChange(e)}
          ></input>
          <img
            className="login-img eye"
            src={showPassword ? "/images/eye-crossed.png" : "/images/eye.png"}
            onClick={() => handleClick()}
          />
        </div>
        <div className="login-btn-container">
          <button className="login-btn" onClick={(e) => handleLogin(e)}>
            Login
          </button>
        </div>
        <div className="login-msg-container">
          <p className="login-msg">{msg}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
