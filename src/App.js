import { Routes, Route } from "react-router-dom";

import Login from "./components/Login";

import "./App.css";
import Header from "./components/Header";
import { Fragment } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
