import React from "react";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import "./Login.css";
function Login() {
  return (
    <div className="loginPage container">
      <form action="" className="form">
        <h2>Login</h2>
        <div className="inputDiv">
          <label htmlFor="username">Username</label>
          <div className="input flex">
            <FaUserShield className="icon" />
            <input type="text" id="username" placeholder="Enter Username" />
          </div>
        </div>
        <div className="inputDiv">
          <label htmlFor="password">Password</label>
          <div className="input flex">
            <BsFillShieldLockFill className="icon" />
            <input type="text" id="password" placeholder="Enter Password" />
          </div>
        </div>
        <button type="submit" className="btn flex">
          <span>Login</span>
          <AiOutlineSwapRight className="icon" />
        </button>
         
      </form>
    </div>
  );
}

export default Login;
