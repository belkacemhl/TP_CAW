import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contacts from './pages/Contacts';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/blog' element={<Blog />} />
      <Route exact path='/contacts' element={<Contacts />} />
    </Routes>
  )
}

export default App;
