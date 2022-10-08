import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import Home from './Pages/Home';
import 'bootstrap';
import 'popper.js';
import Login from './Pages/Login';
import HomeUser from './Pages/HomeUser';
import Posts from './Pages/Posts';
import Card from './components/Card';

function App() {
  
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="" element={<Home/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<HomeUser/>}/>
      <Route path='/Posts' element={<Posts/>} />
      <Route path='/card' element={<Card/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
