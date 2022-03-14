import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Ehelp from './pages/Ehelp';
import Alert from './pages/Alert';
import Basket from './pages/Basket';
import Blog from './pages/Blog';
import Signup0 from './pages/Signup0';
import Ngosignup from './pages/Ngosignup';
import Contact from './pages/Contact'

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>

        <Route exact path='/' element={<Home />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/ehelp' element={<Ehelp />} />
        <Route path='/alert' element={<Alert />} />
        <Route path='/blog' element={<Blog />} />
        <Route exact path='/signup0' element={<Signup0 />} />
        <Route path='/signup0/ngosignup' element={<Ngosignup />} />
        <Route path='/contact' element={<Contact/>} />

      </Routes>
      <Footer/>
    </>
  );
}

export default App;
