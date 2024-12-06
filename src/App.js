import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Indonesia from "./pages/Indonesia";
import Programming from "./pages/Programming";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import DetailNews from "./pages/DetailNews";
import "./index.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Indonesia />} />
          <Route path="/programming" element={<Programming />} />
          <Route path="/search" element={<Search />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/detail/:id" element={<DetailNews />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
