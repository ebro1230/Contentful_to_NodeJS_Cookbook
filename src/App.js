import { useEffect, useState } from 'react';
import { Route, Router, Routes } from 'react-router';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Recipe from './views/Recipe';


function App() {

  const [recipe, setRecipe] = useState()

  useEffect(() => {
    fetch('http://cdn.contentful.com/spaces/6glkdf3annwq/entries?access_token=Jnkx10iYp0IcHRc1oSLDugcZtEKE1N2qdz_HEnKeeRU')
      .then(res => res.json())
      .then(data => setRecipe(data.items));
    console.log(recipe)
  }, [])

  console.log(recipe);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default App;
