
import { Routes,Route } from 'react-router-dom'
import Home from './Componentsheader.js/Home'
import Bollywood from './Componentsheader.js/Bollywood'
import Technology from './Componentsheader.js/Technology'
import Hollywood from './Componentsheader.js/Hollywood'
import Fitness from './Componentsheader.js/Fitness'
import Food from './Componentsheader.js/Food'
import './App.css';
import {ProvideData} from "./Componentsheader.js/ContextApi";

function App() {
  return (
    <div className="App">
      <h1><span>The</span>Siren</h1>
     <ProvideData>
      <Routes>
        
            <Route path='/' element={<Home />} />
             <Route path='/b' element={<Bollywood />} />
             <Route path='/t' element={<Technology />} />
             <Route path='/h' element={<Hollywood />} />
             <Route path='/f' element={<Fitness />} />
             <Route path='/food' element={<Food />} />
        
        
        </Routes>
        </ProvideData>
    </div>
  );
}

export default App;
