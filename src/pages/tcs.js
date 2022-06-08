import React from 'react'
import Logo from '../components/logo'
import Navbar from '../components/Navbar'

function TCS() {
  return (
    
    <div>
    <Logo/>
    <Navbar/>
    <div className="pageHeader">
        <h2>Finite Element Methods for Simulation of Complex Fluids
        </h2>
        <h3><a href='http://www.serb.gov.in/home.php'>supported by TATA Consultancy Service (TCS)</a></h3>
      </div>
      <div className='classParah'>
          <p>This research work focuses on development and implementation of stable, efficient and robust finite element scheme for free surface and/or interface flows with non-linear relation between shear stress and shear rate, commonly known as non-Newtonian or complex fluids.</p>
          <p>The mathematical model consists of time-dependent Navier-Stokes and viscoelastic constitutive equations in a time-dependent (moving) domain. Moreover, the partial differential equations are discretized by finite elements in space and by backward Euler scheme in time. Since the PDEs are convection dominated, a local projection stabilization (LPS) is used to obtained a stable finite element scheme.</p>
          <p>The developed numerical scheme can be used to get an insight into the effects of viscoelasticity on the flow dynamics of a droplet spreading upon impact on flat substrate and a bubble rising in a viscoelastic fluid due to buoyancy. Further, parametric studies will be performed to study the flow dynamics.</p>
          <p>Findings of this numerical study can be used to develop technologies related to polymer additives in controlled droplet deposition and enhanced oil recovery mechanisms. </p>
      </div>
    </div>
  )
}

export default TCS