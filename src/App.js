import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./components/User";
import Admin from "./components/Admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
