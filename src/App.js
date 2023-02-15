import './App.css';
import Author from './components/Author';
import Ingridients from './components/Ingridients';
import data from './data.js';

function App() {
  return (
    <div className="App">
      <Author />
      <Ingridients />
    </div>
  );
}

export default App;
