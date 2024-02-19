// App.js
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Import Routes
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <section className="main">
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
          </nav>
          <Routes>
            {" "}
            {}
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </section>
  );
}

export default App;
