import React from "react";
import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Images from "./components/Images";
import "./App.css";
import { useNavigate } from "react-router";
import { Link } from "react-router";

function App() {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <Header />
            <Images />
            <button onClick={() => navigate("/about")}>Перейти на About</button>
            <Link to="/about">Про нас</Link>
          </div>
        }
      />
      <Route path="/about" element={"Про сторінку"} />
      <Route path="*" element={"Сторінка 404"} />
    </Routes>
  );
}

export default App;
