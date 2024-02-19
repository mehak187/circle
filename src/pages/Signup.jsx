import React, { useState } from "react";
import BtnOne from "../components/BtnOne";
import Field from "../components/Field";

function signup({ loginimg, logo }) {
  return (
    <section className="">
    <div className="container">
      <div className="row justify-content-around vh-100 py-5 align-items-center">
        <div className="col-5 border border-1 py-4 px-4 rounded-4 d-flex flex-column justify-content-center h-100">
         <div className="mx-3">
         <h2 className="fs-3">A few details</h2>
          <form action="" className="my-3">
            <div className="">
            <Field
                fieldfor={"email"}
                type={"email"}
                text={"Email"}
                name="email"
              />
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
              <Field
                fieldfor={"password"}
                type={"password"}
                text={"Confirm Password"}
                name="cpassword"
              />
              <BtnOne data={"Register"} />
             
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
  )
}

export default signup