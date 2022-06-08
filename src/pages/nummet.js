import React from 'react';
import Logo from '../components/logo';
import Navbar from '../components/Navbar';
import './induvidualCourses.css'

function Nummet() {
  return (<>
  <Logo />
    <Navbar />
    <div className="courseHeader">
      <h1>Parallel Computing for FEM</h1>
    </div>
    <div className='courseSubHeader'>
      <h2>Parallel Computing for Finite Element Methods : DS 323 (Aug) 1:1</h2>
    </div>
    <div className='courseParah'>
      <p>
        This course will provide an introduction to parallel finite element data
        structure and its efficient implementation in ParMooN (Parallel
        Mathematics and object oriented Numerics), an open source parallel
        finite element package. Further, the implementation of the parallel
        (MPI/OpenMPI) geometric multigrid solver will also be taught. Parallel
        finite element solution of scalar and incompressible Navier-Stokes
        equations in two- and three-dimensions using ParMooN
        will also be a part of this course.
      </p>
      </div>
      <div className='courseSubHeader'>
      <h2>Topics:</h2>
      </div>
      <div className='courseParah'>
      <p>
        Introduction to parallel computer architectures, Message Passing
        Interface (MPI) and OpenMPI, hybrid (MPI/OpenMPI) concepts. Basics of
        finite element methods, hierarchical mesh partition/decomposition,
        scalable solvers/smothers (Jacobi, Gauss-Seidel, SOR, Vanka-type) and
        parallel geometric multigrid solver/preconditioner, parallel
        visualization using ParaView/VTK.{' '}
      </p>
      </div>
      <div className='courseParah'>
      <br />
      <p>
        <b>Prerequisites: </b> Good knowledge of finite element methods and
        C/C++.
      </p>
      <br />
      </div>
      
         
      <div className='courseParah'>
        <b>Reference Text books:</b>
      </div>
        <div className='courseParah'>
       
      <p>
        1. Sashikumaar Ganesan, Lutz Tobiska: Finite elements: Theory and
        Algorithms, Cambridge-IISc Series, Cambridge University Press, 2017
        <br />
        2. An Introduction to Parallel Programming. Peter S Pacheco. Publisher:
        Morgan Kauffman. ISBN: 978-93-80931-75-3. 2011
        <br />
        3. Current literature
      </p>
      
      </div>
      <div className ='courseSubHeader'>
      <h2>Course information</h2>
      </div>
      <div className='courseParah'>
      <p>
        <b>Title:</b> Parallel Computing for Finite Element Methods : DS 323
        (1:1)
        <br />
        <b>Instructor:</b> Prof. Sashikumaar Ganesan, CDS
        <br />
        <b>Time/Place: </b> MW 10:00-11:00 am / CDS Lecture Hall 202
        <br />
        <b>Office hours: </b> F 12 noon -1 pm
        <br />
      </p>

    </div>
    </>
  );
}

export default Nummet;
