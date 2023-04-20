import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Main/Home";
import { Login } from "./Page/Login";
import { NavBar } from "./Component/NavBar";
import { CreatePost } from "./Page/Createpost/CreatePost";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createpost" element={<CreatePost />} />

      </Routes>
    </div>
  );
}

export default App;
