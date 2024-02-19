// import React from 'react';
import React, { useState } from "react";
import BtnOne from "../components/BtnOne";
import Field from "../components/Field";

// import loginimg from "./imgs/loginimg.png";

function login({ loginimg, logo }) {
  return (
    <section className="">
      <div className="container">
        <div className="row justify-content-around vh-100 py-5 align-items-center">
          <div className="col-5 border border-1 py-4 px-4 rounded-4 d-flex flex-column justify-content-center h-100">
           <div className="mx-3">
           <h2 className="fs-3">Welcome back!</h2>
            <form action="" className="my-3">
              <div className="">
                <Field
                  fieldfor={"name"}
                  type={"text"}
                  text={"User Name"}
                  name="name"
                />
                <Field
                  fieldfor={"password"}
                  type={"password"}
                  text={"Password"}
                  name="password"
                />
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      name=""
                      id="remember"
                      className="me-2"
                    />
                    <label htmlFor="remember">Remember me</label>
                  </div>
                  <a href="#" className="text-secondary text-decoration-none">
                    Forgot Password?
                  </a>
                </div>
                <BtnOne data={"Login"} />
                <p className="mb-0 mt-3 text-secondary text-center">
                  Don't have an account{" "}
                  <a href="" className="text-dark text-decoration-none">
                    Register
                  </a>
                </p>
              </div>
            </form>
           </div>
          </div>
          <div className="col-5">
            <div className="d-flex flex-column">
              <img src={logo} className="w-100 h-100" alt="Example" />
              <img src={loginimg} className="w-100 h-100" alt="Example" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default login;
