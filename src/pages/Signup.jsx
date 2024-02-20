import React, { useState } from "react";
import BtnOne from "../components/BtnOne";
import Field from "../components/Field";

function Signup({ loginimg, logo }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const intialstate={
    email:'',
    username:'',
    password:'',
    confirmPassword:'',
    role:'1',
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
          formdata
        }),
      });

      if (response.ok) {
        console.log('Registration successful!');
      } else {
        const data = await response.json();
        setErrorMessage(data.message);
        console.error('Registration failed:', data.message);
      }
    } catch (error) {
      console.error('Error:', error.message);
      // Handle network error, e.g., show error message to user
      setErrorMessage('Network error. Please try again later.');
    }
  };
console.log(formdata)
  return (
    <section className="">
      <div className="container">
        <div className="row justify-content-around vh-100 py-5 align-items-center">
          <div className="col-5 border border-1 py-4 px-4 rounded-4 d-flex flex-column justify-content-center h-100">
            <div className="mx-3">
              <h2 className="fs-3">A few details</h2>
              <form onSubmit={handleSubmit} className="my-3">
                
                <div className="">
                  <input
                    fieldfor={"email"}
                    type={"email"}
                    text={"Email"}
                    name="email"
                    value={formdata.email}
                    onChange={(e)=>handleOnchange('email',e.target.value)}
                  />
                  <input
                    fieldfor={"name"}
                    type={"text"}
                    text={"User Name"}
                    name="name"
                    value={formdata.username}
                    onChange={(e)=>handleOnchange('username',e.target.value)}
                  />
                  <input
                    fieldfor={"password"}
                    type={"password"}
                    text={"Password"}
                    name="password"
                    value={formdata.password}
                    onChange={(e)=>handleOnchange('password',e.target.value)}
                  />
                  <input
                    fieldfor={"password"}
                    type={"password"}
                    text={"Confirm Password"}
                    name="cpassword"
                    value={formdata.confirmPassword}
                    onChange={(e)=>handleOnchange('confirmPassword',e.target.value)}
                  />
                  
                  {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
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
  );
}

export default Signup;
