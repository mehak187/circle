import React, { useState } from "react";
import BtnOne from "../components/BtnOne";
import Field from "../components/Field";
import { Navigate, useNavigate } from "react-router-dom";

function Signup({ loginimg, logo }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
const navi= useNavigate()

  const intialstate={
    "email": "",
    "first_name": "",
    "password": "",
    "role": "PLA",
    "sign_up_code": "0000000000000000"

  }
  const [formdata, setformdata]=useState(intialstate)
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
const handleOnchange=(key, value)=>{
setformdata({...formdata, [key]:value})
}
  const handleSubmit = async (e) => {
    e.preventDefault();
console.log(formdata,"email")
    try {
      const response = await fetch('http://mpruv.us-east-2.elasticbeanstalk.com/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formdata
        }),
      });

      if (response.ok) {
        console.log('Registration successful!');
        navi("/login")
      } else {
        const data = await response.json();
        setErrorMessage(data.message);
        console.error('Registration failed:', data);
        navi("/login")
      }
    } catch (error) {
      console.error('Error:', error.message);
      // Handle network error, e.g., show error message to user
      // setErrorMessage('Network error. Please try again later.');
    }
  };
console.log(formdata)
  return (
    <section className="">
      <div className="mycontainer">
        <div className="row justify-content-around vh-100 py-5 mx-3 align-items-center">
          <div className="col-md-6 col-lg-5 border border-1 py-4 px-2 px-sm-4 rounded-4 d-flex flex-column justify-content-center h-100">
            <div className="mx-3">
              <h2 className="fs-3">A few details</h2>
              <form onSubmit={handleSubmit} className="my-3">
                <div className="my-3">
                <label className='w-100'>Email</label>
                  <input
                    fieldfor={"email"}
                    className='w-100 border border-1 rounded-3 py-2 px-3 mt-1 border-dark' 
                    type={"email"}
                    text={"Email"}
                    name="email"
                    value={formdata.email}
                    onChange={(e)=>handleOnchange('email',e.target.value)} required
                  />
                </div>
                <div className="my-3">
                <label className='w-100'>Name</label>
                  <input
                    fieldfor={"name"}
                    className='w-100 border border-1 rounded-3 py-2 px-3 mt-1 border-dark' 
                    type={"text"}
                    text={"User Name"}
                    name="name"
                    value={formdata.first_name}
                    onChange={(e)=>handleOnchange('first_name',e.target.value)} required
                  />
                </div>
                <div className="my-3">
                <label className='w-100'>Password</label>
                  <input
                    fieldfor={"password"}
                    className='w-100 border border-1 rounded-3 py-2 px-3 mt-1 border-dark' 
                    type={"password"}
                    text={"Password"}
                    name="password"
                    value={formdata.password}
                    onChange={(e)=>handleOnchange('password',e.target.value)} required
                  />
                  </div>
                <div className="my-3">
                <label className='w-100'>Confirm Password</label>
                  <input
                    fieldfor={"password"}
                    className='w-100 border border-1 rounded-3 py-2 px-3 mt-1 border-dark' 
                    type={"password"}
                    text={"Confirm Password"}
                    name="cpassword"
                    value={formdata.confirmPassword}
                    onChange={(e)=>handleOnchange('confirmPassword',e.target.value)} required
                  />
                  </div>
                  {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                  <button type='submit' className='py-2 d-block text-decoration-none text-center bg-black border-0 mt-4 fw-md text-white rounded-3 py-2 px-4 w-100'>Register</button>
              </form>
            </div>
          </div>
          <div className="col-6 col-lg-5 d-none d-md-block">
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

export default Signup;
