import React from 'react';
import Logo from '../components/logo';
import Navbar from '../components/Navbar';
import './induvidualCourses.css'
function FEM() {
  return (
  <>
  <Logo/>
  <Navbar />
    <div className='fem'>
      <h1>FEM</h1>
      <h2>Finite elements : Theory and Algorithms : DS 291 (Aug) 3:1</h2>
      <p>
        This course will provide an introduction to the finite element methods
        and their applications to the scalar convection diffusion equations and
        to the Navier-Stokes equations. The course will cover the basic
        mathematical theory of the finite element methods, and the development
        of fully practical finite element algorithms for solving partial
        differential equations elliptic and parabolic scalar PDES, linear
        elasticity, Mindlin-Reissner plate problem, Navier-Stokes equations.
        Further, the lab component will consists of programming assignments
        including the implementation of the finite element algorithms, solving
        scalar and Navier-Stokes equations using the in-house package ParMooN
      </p>

      <h2>Topics:</h2>
      <p>Generalized (weak) derivatives, Sobolev norms and associated spaces, inner-product spaces, Hilbert spaces, construction of finite element spaces, mapped finite elements, two- and three-dimensional finite elements, Interpolation and discretization error, variational formulation of second order elliptic boundary value problems, finite element algorithms and implementation for linear elasticity, Mindlin-Reissner plate problem, two-dimensional stationary incompressible Navier-Stokes equations systems in fluid mechanics. </p>
      <br/>
      <p><b>Prerequisites: </b> Good knowledge of numerical analysis and/or consent from the instructor. 
      </p>
        <br/>
      <p><b>Reference Text books:</b></p>
      <p>
      1. Sashikumaar Ganesan, Lutz Tobiska: Finite elements: Theory and Algorithms, Cambridge-IISc Series, Cambridge University Press, 2017
      <br/>
2. Dietrich Braess, Finite Elements: Theory, Fast Solvers, and Applications in Solid Mechanics, Cambridge University Press, 3rd ed., 2007
      </p>

      <h2>Course information</h2>
      <p>
      <b>Title:</b> Finite Elements: Theory and Algorithms : DS 291 (3:1)
    <br/>
<b>Instructor:</b> Prof. Sashikumaar Ganesan, CDS 
<br/>
<b>Time/Place: </b>TTH 8:30-10:00 am / CDS Lecture Hall 202
<br/>
<b>
Office hours: </b> 10 -12 am 
<br/>
<b>
Grading: </b>Assignments 25%, Midterm Exam 25% and Final Exam 50%. 
<br/><b>
Homework: </b>There will be three assignments and most of the assignment problems require computer programming. Matlab/Fortran/C/C++ can be used. Late submission (beyond the deadline) of assignment will result in zero credit.
<br/><b>
Midterm/Final Exam: </b> Both midterm and final written exams will examine the understanding of the finite element theory and algorithms. Students will NOT be allowed to carry any text materials for both midterm and final exams.
      </p>
      </div>
      </>
  );
}

export default FEM;
