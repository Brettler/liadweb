import PreLoadAnimation from './preLoadAnimation/PreLoadAnimation.js';
import './App.css';
import Menu from './menuHeader/Menu.js';
import WindowDimensionsContext from './Contexts/WindowDimensionsContext/WindowDimensionsContext';
import {
  useState,
  useEffect,
  useCallback
} from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';


function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [updateProgressBarPosition, setUpdateProgressBarPositionState] = useState(false);

  const setUpdateProgressBarPosition = useCallback((value) => {
    setUpdateProgressBarPositionState(value);
  }, []);

  useEffect(() => {
    const updateSizeWindow = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', updateSizeWindow);
    return () => window.removeEventListener('resize', updateSizeWindow);
  },[]);
  

  const [windowDimensions, setWindowDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  useEffect(() => {
    const updateDimensions = () => {
      setWindowDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    };
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <WindowDimensionsContext.Provider value={{ windowDimensions }}>
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
