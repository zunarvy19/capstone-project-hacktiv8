import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Indonesia from "./pages/Indonesia";
import Programming from "./pages/Programming";
import Covid from "./pages/Covid";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Latest from "./pages/Latest";
import DetailNews from "./pages/DetailNews";
import "./index.css";

function App() {
  return (
    <Router>
      <div id="root">
        <Navbar />
        <Routes>
          <Route path="/" element={<Latest />} />
          <Route path="/indonesia" element={<Indonesia />} />
          <Route path="/programming" element={<Programming />} />
          <Route path="/covid" element={<Covid />} />
          <Route path="/search" element={<Search />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/detail/:id" element={<DetailNews />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
