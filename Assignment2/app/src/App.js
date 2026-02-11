import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <img src="image.jpeg" alt="Logo" />
        </div>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="work.js">Work</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="content">
        <img src="image.jpeg" alt="College" className="college-img" />
        <h1 className="college-name">ABES Engineering College</h1>
      </div>
    </div>
  );
}

export default App;

