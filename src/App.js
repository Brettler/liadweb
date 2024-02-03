import logo from './logo.svg';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './HomePage/HomePage';


import './App.css';

function App() {





  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
