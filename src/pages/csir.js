import React from 'react';
import Logo from '../components/logo';
import Navbar from '../components/Navbar';

function Council() {
  return (
    <>
    <Logo />
      <Navbar />
      <div className="pageHeader">
        <h2>
          SUPG Finite Element Method for Parabolic Partial Differential
          Equations in Time-Dependent Domains
        </h2><h3>
          {' '}
          <a href="https://www.education.gov.in/en/higher_education">
            supported by Department of Higher Education, MHRD, India
          </a>
        </h3>
      </div>

      <div className="pageParah">
        <p>
          The aim of the project is to develop a Streamline Upwind
          Petrov–Galerkin finite element method for parabolic partial
          differential equations in a time-dependent domain, and to study the
          stability and convergence analysis of the SUPG-FEM. Further, an
          efficient and robust parallel algorithm will be developed for the
          proposed numerical scheme.
        </p>
      </div>
      </>
  );
}

export default Council;
