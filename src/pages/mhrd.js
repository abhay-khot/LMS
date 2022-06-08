import React from 'react'
import Logo from '../components/logo'
import Navbar from '../components/Navbar'

function MHRD() {
  return (<>.
        <Logo />
        <Navbar/>
        <div className='pageHeader'>
        <h2>Computational Ship Hydrodynamics: Modeling of Free Surface and Two-Phase Flows Around Ships
        </h2>
        <h3> <a href='https://nrbdrdo.res.in/'>supported by Naval Research Board, DRDO</a></h3>
        <h3> <a href='https://www.education.gov.in/en/higher_education'>supported by Department of Higher Education, MHRD, India</a></h3>
        </div>

        <div className='pageParah'>
            <p>A finite element method (FEM) for simulations of free surface and two-phase flows around ships will be developed. The ALE-FEM scheme can be used for computations of free surface/two-phase flows around ships, in particular, tank tests and hydrodynamics coefficients estimation.</p>
            <p>
The free surface/two-phase flow will be described by the time-dependent Navier-Stokes equations in a moving domain, whereas the rigid body (ship) motion will be described by the equations of variation of linear and angular momentum. Apart from the other challenges associated with the solution of the coupled Navier-Stokes and momentum equations, tracking and/or capturing the moving free surface/interface makes the computation more complicate. In this project, finite element schemes based on the arbitrary Lagrangian-Eulerian (ALE) will be developed for the coupled equations.
</p><p>
The developed scheme can be used to solve the ship resistance problem, that is, to predict the resistance of the ship moving at low speed through still water. In practice, a very high accuracy of resistance prediction is often required to determine the hull form of design, and the proposed ALE-FEM will be well suited for these models, and will be capable of simulating free surface/two-phase flows around ships very accurately. </p>
        </div>
    <div className='pageHEader'>
        <h2>Magnetohydrodynamics Flows at High Reynolds Numbers</h2>
        <h3><a href='https://www.education.gov.in/en/higher_education'>supported by Department of Higher Education, MHRD, India</a></h3>
        </div><div className='pageParah'>
        <p>Our interest is to develop a new projection based scheme for scale separation in turbulent flow simulations which is much simpler to implement for various flow problems. More specifically, we planned to extend the variational multiscale methods for moving domains (time-dependent domains) and fluid-structure interactions problems.
</p><p>Due to the presence of multitude of scales in turbulent flows, the standard Galerkin approach has severe limitations. Variational multiscale method (VMS) is relatively a new technique that can be used to solve the Navier-Stokes equations accurately for turbulent flows. Much like LES (large eddy simulation), VMS separates flow scales into resolved and unresolved scales, and the effects of the unresolved scales are incorporated into the resolved scales by a turbulence model.</p>
    </div>


    <div className='pageHEader'>
        <h2>Variational Multiscale Methods (VMS) for Turbulent Incompressible Navier-Stokes Equation on Time-Dependent Domains </h2>
        <h3><a href='https://www.education.gov.in/en/higher_education'>supported by Department of Higher Education, MHRD, India</a></h3>

        </div>
        <div className='pageParah'>
        <p>The aim of this project is to develop computationally efficient finite element scheme to study the liquid metal flow and heat transfer behind a cylinder in a duct under the presence of a strong axial magnetic field. The targeted application of the proposed project is to investigate the behaviour of liquid metal blanket used in nuclear fusion reactor (such as International Thermonuclear Experiment reactor) to transfer heat from main core to the turbines.
</p><p>The mathematical model consists of Magnetohydrodynamics (MHD) equations that involves time-dependent Navier-stokes equations and Maxwell’s equations of electromagnetism. To calculate heat transfer convection-diffusion equation is coupled with MHD equations. The PDEs are discretized by finite elements in space and by a fraction step-theta scheme in time. Further, for simulating the flow with high Reynolds number, a projection based variational multiscale scheme (VMS) is used. The VMS allows the separation of entire range of scales in the flow field into three groups enabling different numerical treatment for different groups.</p>
<p>The developed scheme can be used to study the effect on heat transfer in MHD flows. Further, effects on heat transfer due to the introduction of obstacle of various shapes and sizes, inside the duct, can be investigated to efficiently design a nuclear reactor. </p>
    </div>
    </>
  )
}

export default MHRD