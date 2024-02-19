// App.js
import React from "react";
import "./index.css";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Import Routes
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
  BrowserRouter,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import logo from "./imgs/logo.png";
import loginimg from "./imgs/loginimg.png";
import Home from "./pages/Home";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login loginimg={loginimg} logo={logo}/>} />
          <Route path="/signup" element={<Signup loginimg={loginimg} logo={logo}/>} />
          <Route element={<Header/>}>
            <Route path="/" element={<Home loginimg={loginimg}/>} />
            <Route path="/2nd-page" element={<p>hello</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const Header = () => (
  <section className="main vh-100">
    <div className="container">
      <div className="row vh-100 py-5">
        <div className="col-4 d-flex align-items-center  flex-column my-5">
          <img src={logo} className="w-100" alt="Example" />
          <div className="mt-auto">
            <Link
              className="py-2 d-block text-decoration-none text-center bg-grey border-0 mt-3 fw-md text-black rounded-pill py-2 px-5 w-100 max-200"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="py-2 d-block text-decoration-none text-center bg-grey border-0 mt-3 fw-md text-black rounded-pill py-2 px-5 w-100 max-200"
              to="/signup"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  </section>
);

export default App;
