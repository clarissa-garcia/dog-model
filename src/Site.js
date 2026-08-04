import "./styles/index.css";
import React from "react";
import AuthorPage from "./pages/AuthorPage";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/author" element={<AuthorPage />} />
      </Routes>
    </div>
  );
}

export default App;
