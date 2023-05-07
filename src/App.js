import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRegistrationForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserRegistrationForm />} />
        <Route path="/table" element={<UserList />} />
      </Routes>
    </Router>
  );
}

export default App;
