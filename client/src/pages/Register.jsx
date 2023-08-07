import React, {useState} from "react";
import "../styles/SigninRegisterStyles.css";
import { message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //form handler
  const onfinishHandler = async () => {
    try {
      dispatch(showLoading());
      const name = firstName+ " " + lastName;
      const res = await axios.post("/api/v1/user/register", {name,email,password});
      dispatch(hideLoading());
      if (res.data.success) {
        message.success("Register Successfully!");
        navigate("/signin");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something Went Wrong");
    }
  };
  return (
    <>
      <div className="form-container ">
        <form className="form register-form" onSubmit={onfinishHandler}>
          <p className="title">Register </p>
          <p className="message">Register to continue...... </p>
          <div className="form-flex">
              <label>
                <input
                  required={true}
                  placeholder=""
                  type="text"
                  className="input"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <span>Firstname</span>
              </label>
              <label>
                <input
                  required={true}
                  placeholder=""
                  type="text"
                  className="input"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <span>Lastname</span>
              </label>
          </div>
          <label>
            <input
              required={true}
              placeholder=""
              type="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>Email</span>
          </label>
          <label>
            <input
              required={true}
              placeholder=""
              type="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>Password</span>
          </label>
          <button className="submit">Register</button>
          <p className="signin">
            Already have an acount ? <Link to="/signin">Login</Link>{" "}
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
