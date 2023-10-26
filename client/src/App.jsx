import React from "react";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Details from "./pages/Details";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="user-details" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
