
import styled from 'styled-components'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  Dashboard,
    Error,
    Register,
    Landing
} from './pages'




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<div><Dashboard /></div>} />
      <Route path='/register' element={<div><Register /></div>} />
      <Route path='/landing' element={<Landing />} />
      <Route path="*" element={<div><Error /></div>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
