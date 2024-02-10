import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import PreLoadAnimation from './preLoadAnimation/PreLoadAnimation';

import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PreLoadAnimation/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
