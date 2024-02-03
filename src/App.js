import logo from './logo.svg';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import WelcomeContainer from './HomePage/welcomeContainer/WelcomeContainer';


import './App.css';

function App() {





  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeContainer/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
