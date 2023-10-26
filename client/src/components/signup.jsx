import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./signup.css";
const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [form, setForm] = React.useState({
    email: "",
    username: "",
    password: "",
    role: "",
    confirmPassword: "",
  });
  const [msg, setMsg] = React.useState("");
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  console.log(form);
  const handleClick = () => {
    setShowPassword((prev) => !prev);
  };
  const handleSubmit = (e) => {
    console.log(form);
    e.preventDefault();
    if (
      form.name == "" ||
      form.email == "" ||
      form.password == "" ||
      form.role == ""
    ) {
      setMsg("Please fill all the fields");
    } else if (form.password != form.confirmPassword) {
      setMsg("Passwords do not match");
    } else {
      axios
        .post("http://localhost:3000/user/register", form)
        .then((res) => {
          if (res.data.success) {
            const jsonData = JSON.stringify(res.data.user);
            sessionStorage.setItem("myData", jsonData);
            navigate("/user-details");
          } else {
            setMsg(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="signup-outer-container">
      <h1 className="login-text">Signup</h1>
      <div className="input-container">
        <div className="text-field-container email-container">
          <img className="login-img" src="/images/envelope.png"></img>
          <input
            className="text-field"
            name="email"
            type="email"
            placeholder="Email"
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className="text-field-container username-container">
          <img className="login-img" src="/images/user.png"></img>
          <input
            name="username"
            className="text-field"
            type="text"
            placeholder="Username"
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className="text-field-container password-container">
          <img className="login-img" src="/images/lock.png"></img>
          <input
            name="password"
            className="text-field"
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
        <div className="text-field-container password-container">
          <img className="login-img" src="/images/lock.png"></img>
          <input
            name="confirmPassword"
            className="text-field"
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className="role-selector">
          <h3>Role:</h3>
          <input
            onChange={(e) => handleChange(e)}
            type="radio"
            id="student"
            name="role"
            value="student"
          />
          <label htmlFor="student">Student</label>
          <input
            onChange={(e) => handleChange(e)}
            type="radio"
            id="alumni"
            name="role"
            value="alumni"
          />
          <label htmlFor="alumni">Alumni</label>
          <input
            onChange={(e) => handleChange(e)}
            type="radio"
            id="faculty"
            name="role"
            value="faculty"
          />
          <label htmlFor="faculty">Faculty</label>
        </div>
        <div className="login-btn-container">
          <button className="login-btn" onClick={(e) => handleSubmit(e)}>
            Signup
          </button>
        </div>
      </div>
      <div className="msg-container">
        <p className="msg">{msg}</p>
      </div>
    </div>
  );
};

export default Signup;
