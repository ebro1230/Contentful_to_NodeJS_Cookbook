import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import NewNavBar from "./components/NewNavBar";
import Home from "./views/Home";
import Recipe from "./views/Recipe";

function App() {
  return (
    <div className="App">
      <NewNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:recipeId" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default App;
