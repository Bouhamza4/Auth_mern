import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Users from "./pages/Users";
import HomePage from "./pages/HomePage";
import ThemeToggle from "./pages/ThemeToggle";
// import UserList from "./components/UserList";
import UserDetails from "./pages/UserDetails";
import UserForm from "./pages/UserForm";
import UpdatePassword from "./pages/UpdatePassword";

function App() {
  return (
    <Router>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<Users />} />
        {/* <Route path="/user-list" element={<UserList />} /> */}
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="/add-user" element={<UserForm />} />
        <Route path="/update-pass/:id" element={<UpdatePassword />} />
      </Routes>
    </Router>
  );
}

export default App;
