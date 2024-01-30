import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Main from "./components/Main";
import Home from "./Pages/Home/Home";
import "./Stylesheet/Style.css";
import "./Fonts/style.css";
import "./Fonts/style.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Main />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
