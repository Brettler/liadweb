import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import PreLoadAnimation from './preLoadAnimation/PreLoadAnimation';
import {useState, useEffect} from 'react';

import './App.css';

function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateSizeWindow = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', updateSizeWindow);
    return () => window.removeEventListener('resize', updateSizeWindow);
  },[]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PreLoadAnimation windowWidth={windowWidth}/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
