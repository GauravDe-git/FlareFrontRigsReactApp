import React from "react";
import Navbar from '../Components/Navbar'
import { Link } from "react-router-dom";
import  './auth.css'

export default function Signup() {
  return (
    <div>
        <Navbar></Navbar>
      <main className="login-main">
        <form className="form-main">
          <h2>Signup</h2>
          <div className="user-input">
            <label htmlFor="">Email Adress:</label>
            <input
              type="text"
              className="input-box"
              name=""
              id=""
              placeholder="Enter your Email"
            />
            <label htmlFor="">Password:</label>
            <input
              type="password"
              className="input-box"
              name=""
              id=""
              placeholder="Enter your password"
            />
          </div>
          <div className="alt-input">
            <div>
              <input type="checkbox" name="" id="remember" />
              <label htmlFor="remember">
                I accept all terms and conditions
              </label>
            </div>
          </div>
          <div className="submit-input">
            <a href="/">
              <button type="button" className="btn btn-primary">
                Create new account
              </button>
            </a>
            <Link to="Login/">
              Already have an account? <i className="fa-solid fa-angle-right" />
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}
