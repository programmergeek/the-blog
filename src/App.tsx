import React from "react";
import "./App.css";
import { Articles, Home } from "./Pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<Articles />} />
      </Routes>
    </Router>
  );
}

export default App;
