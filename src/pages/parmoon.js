import React from 'react'
import Logo from '../components/logo'
import Navbar from '../components/Navbar'
import './parmoon.css'
function Parmoon() {
  return (
    <>
    <Logo/>
    <Navbar/>
    <div className='parmoon'>
    <h1 className='parHead'>ParMooN</h1>
    <p >ParMooN (Parallel Mathematics and object oriented Numerics) is an in-house finite element package. This package has been successfully used to solve the incompressible stationary and instationary Navier-Stokes equations, the large eddy simulation of turbulent flows, and the free boundary value problems in moving domains.</p>
    <br/>
    <p>If you are interested in this FEM package, please visit the <a href='https://cmg.cds.iisc.ac.in/parmoon/' className='parLink'> ParMooN </a> webpage.</p>
    </div>
    </>
  )
}

export default Parmoon