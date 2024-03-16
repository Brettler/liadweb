import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PreLoadAnimation from './preLoadAnimation/PreLoadAnimation';
import {useState, useEffect} from 'react';
import './App.css';
import Menu from './menuHeader/Menu';
import WindowDimensionsContext from './Contexts/WindowDimensionsContext/WindowDimensionsContext';


function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [updateProgressBarPosition, setUpdateProgressBarPosition] = useState(false); // Height of the menu;

  useEffect(() => {
    const updateSizeWindow = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', updateSizeWindow);
    return () => window.removeEventListener('resize', updateSizeWindow);
  },[]);
  
  // Responsible to update the progress bar's position (offset) depend on the menu's visibility;

  return (
    <WindowDimensionsContext.Provider value={{ windowWidth }}>
      <BrowserRouter>
        <Menu windowWidth={windowWidth} setUpdateProgressBarPosition={setUpdateProgressBarPosition}/>
        <Routes>
          <Route path="/" element={<PreLoadAnimation windowWidth={windowWidth} updateProgressBarPosition={updateProgressBarPosition}/>}/>
        </Routes>
      </BrowserRouter>
    </WindowDimensionsContext.Provider>

  );
}

export default App;
