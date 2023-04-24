import React from "react";
import { Routes, Route, Navigate } from "react-router";
import HomePage from "../../pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Navigate to={"/home"} />} />
      </Routes>
    </div>
  );
}

export default App;
