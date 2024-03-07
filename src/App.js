import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PreLoadAnimation from './preLoadAnimation/PreLoadAnimation';
import {useState, useEffect} from 'react';

import './App.css';
import ProjectsPage from './Components/ProjectsPage/ProjectsPage';
import Menu from './menuHeader/Menu';
import ContactPage from './Components/ContactPage/ContactPage';
import IconsContact from './Components/HomePage/iconsContact/IconsContact';

function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateSizeWindow = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', updateSizeWindow);
    return () => window.removeEventListener('resize', updateSizeWindow);
  },[]);
  

  return (
    <BrowserRouter>
      <Menu windowWidth={windowWidth}/>
      <IconsContact/>
      <Routes>
        <Route path="/" element={<PreLoadAnimation windowWidth={windowWidth}/>}/>
        <Route path='/projects' element={<ProjectsPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
