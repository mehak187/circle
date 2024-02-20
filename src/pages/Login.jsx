// import React from 'react';
import React, { useState } from "react";
import BtnOne from "../components/BtnOne";
import { Link, useNavigate } from "react-router-dom";


// import loginimg from "./imgs/loginimg.png";

const  Login =({ loginimg, logo })=> {
const Navigate= useNavigate()
  const intialstate={
  
    username:'',
    password:'',
 
  }
  const [formdata, setformdata]=useState(intialstate)

  const handleOnchange=(key, value)=>{
    setformdata({...formdata, [key]:value})
    }
  const handleSubmit = async (e) => {
    e.preventDefault();
console.log(formdata,"email")
    try {
      const response = await fetch('http://mpruv.us-east-2.elasticbeanstalk.com/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          formdata
        ),
      });

      if (response.ok) {
        console.log('Registration successful!');
        Navigate("/")
      } else {
        const data = await response.json();
        // setErrorMessage(data.message);
        console.error('Registration failed:', data.message);
      }
    } catch (error) {
      console.error('Error:', error.message);
      // Handle network error, e.g., show error message to user
      // setErrorMessage('Network error. Please try again later.');
    }
  };
  
  return (
    <section className="">
      <div className="container">
        <div className="row justify-content-around vh-100 py-5 align-items-center">
          <div className="col-5 border border-1 py-4 px-4 rounded-4 d-flex flex-column justify-content-center h-100">
           <div className="mx-3">
           <h2 className="fs-3">Welcome back!</h2>
            <form action="" onSubmit={handleSubmit} className="my-3">
              <div className="">
                <input
                  onChange={(e)=>handleOnchange('username',e.target.value)}
                  fieldfor={"name"}
                  type={"text"}
                  text={"User Name"}
                  name="name"
                />
                <input
                   onChange={(e)=>handleOnchange('password',e.target.value)}
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
                  <Link to="/signup" className="text-dark text-decoration-none">
                    Register
                  </Link>
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

export default Login;
