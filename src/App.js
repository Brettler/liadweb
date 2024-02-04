import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Sections from './HomePage/Sections';


import './App.css';

function App() {





  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sections/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
