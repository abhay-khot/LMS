import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Courses from './pages/courses';
import Research from './pages/research';
import Members from './pages/members';
import Home from './pages/home';
import Publications from './pages/publications';
import Parmoon from './pages/parmoon';
import Opportunities from './pages/opportunities';
import Sparsh from './pages/sparsh';
import csir from './pages/csir';
import Council from './pages/csir';
import FEM from './pages/fem';
import Nummet from './pages/nummet';
import Parcomp from './pages/parcomp';
import SERB from './pages/serb';
import MHRD from './pages/mhrd';
import DRDO from './pages/drdo';
import Logo from './components/logo';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/courses" element={<Courses />}></Route>
      <Route path="/research" element={<Research />}></Route>
      <Route path="/members" element={<Members />}></Route>
      <Route path="/publications" element={<Publications />}></Route>
      <Route path="/parmoon" element={<Parmoon />}></Route>
      <Route path="/opportunities" element={<Opportunities />}></Route>
      <Route path="/sparsh" element={<Sparsh />}></Route>
      <Route path="/fem" element={<FEM />}></Route>
      <Route path="/nummet" element={<Nummet />}></Route>
      <Route path="/parcomp" element={<Parcomp />}></Route>
      <Route path="/serb" element={<SERB />}></Route>
      <Route path="/mhrd" element={<MHRD />}></Route>drdo
      <Route path="/csir" element={<Council />}></Route>
      <Route path="/drdo" element={<DRDO />}></Route>
      <Route path="/logo" element={<Logo/>}></Route>
    </Routes>
  );
};

export default App;
