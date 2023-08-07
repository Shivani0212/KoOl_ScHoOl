import React,{useState} from "react";
import "../styles/SigninRegisterStyles.css";
import { Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //form handler
  const onfinishHandler = async() => {
    const values = {email,password}
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/signin", values);
      window.location.reload();
      dispatch(hideLoading());
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/Dashboard");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("something went wrong");
    }
  };
  return (
    <>
      <div className="form-container">
      <form className="form register-form" onSubmit={onfinishHandler}>
        <p className="title">Log In </p>
        <p className="message">Login to continue...... </p>
        <label>
          <input required={true} placeholder="" type="email" className="input" value={email}
              onChange={(e) => setEmail(e.target.value)}/>
          <span>Email</span>
        </label>
        <label>
          <input required={true} placeholder="" type="password" className="input" value={password}
              onChange={(e) => setPassword(e.target.value)}/>
          <span>Password</span>
        </label>
        <button className="submit">Login</button>
        <p className="signin">
        Not a user Register here? <Link to="/register">Signup</Link>{" "}
        </p>
      </form>
      </div>
    </>
  );
};

export default Login;
