import React from 'react';
import Navbar from '../components/Navbar';
import './courses.css';
import { Link } from 'react-router-dom';
import csir from './csir';
import Logo from '../components/logo';
function Courses() {
  return (
    <div>
      <Logo/>
      <Navbar />
      <div className="courseHeader">
        <h1>Courses</h1>
      </div>
      <div class="coursesContainer">
        <div class="coursesCard">
          <div class="coursesBox">
            <div class="coursesContent">
              <h3>Numerical Methods</h3>

              <Link to="/nummet">Explore Course</Link>
            </div>
          </div>
        </div>

        <div class="coursesCard">
          <div class="coursesBox">
            <div class="coursesContent">
              <h3>Finite elements : Theory and Algorithms</h3>
              <Link to="/fem">Explore Course</Link>
            </div>
          </div>
        </div>

        <div class="coursesCard">
          <div class="coursesBox">
            <div class="coursesContent">
              <h3>Parallel Computing for FEM</h3>
              <Link to="/parcomp">Explore Course</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
