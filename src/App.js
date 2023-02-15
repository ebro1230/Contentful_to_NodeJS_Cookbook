import {Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './views/Home';
import Recipe from './views/Recipe';


function App() {
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
