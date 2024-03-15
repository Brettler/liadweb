import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PreLoadAnimation from './preLoadAnimation/PreLoadAnimation';
import {useState, useEffect} from 'react';
import './App.css';
import ProjectsPage from './Components/ProjectsPage/ProjectsPage';
import Menu from './menuHeader/Menu';
import ContactPage from './Components/ContactPage/ContactPage';


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
    <BrowserRouter>
      <Menu windowWidth={windowWidth} setUpdateProgressBarPosition={setUpdateProgressBarPosition}/>
      <Routes>
        <Route path="/" element={<PreLoadAnimation windowWidth={windowWidth} updateProgressBarPosition={updateProgressBarPosition}/>}/>
        <Route path='/projects' element={<ProjectsPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
