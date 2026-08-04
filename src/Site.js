import "./styles/index.css";
import React from "react";
import Author from "./pages/Author";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/author" element={<Author />} />
      </Routes>
    </div>
  );
}

export default App;
