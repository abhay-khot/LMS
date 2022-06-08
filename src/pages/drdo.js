import React from 'react';
import Logo from '../components/logo';
import Navbar from '../components/Navbar';

function DRDO() {
  return (<>
    <Logo/>
      <Navbar/>
    <div>
      <div className="pageHeader">
        <h2>
          Computational Ship Hydrodynamics: Modeling of Free Surface and
          Two-Phase Flows Around Ships
        </h2>
        <h3>
          {' '}
          <a href="https://nrbdrdo.res.in/">
            supported by Naval Research Board, DRDO
          </a>
        </h3>
        <h3>
          {' '}
          <a href="https://www.education.gov.in/en/higher_education">
            supported by Department of Higher Education, MHRD, India
          </a>
        </h3>
      </div>

      <div className="pageParah">
        <p>
          A finite element method (FEM) for simulations of free surface and
          two-phase flows around ships will be developed. The ALE-FEM scheme can
          be used for computations of free surface/two-phase flows around ships,
          in particular, tank tests and hydrodynamics coefficients estimation.
        </p>
        <p>
          The free surface/two-phase flow will be described by the
          time-dependent Navier-Stokes equations in a moving domain, whereas the
          rigid body (ship) motion will be described by the equations of
          variation of linear and angular momentum. Apart from the other
          challenges associated with the solution of the coupled Navier-Stokes
          and momentum equations, tracking and/or capturing the moving free
          surface/interface makes the computation more complicate. In this
          project, finite element schemes based on the arbitrary
          Lagrangian-Eulerian (ALE) will be developed for the coupled equations.
        </p>
        <p>
          The developed scheme can be used to solve the ship resistance problem,
          that is, to predict the resistance of the ship moving at low speed
          through still water. In practice, a very high accuracy of resistance
          prediction is often required to determine the hull form of design, and
          the proposed ALE-FEM will be well suited for these models, and will be
          capable of simulating free surface/two-phase flows around ships very
          accurately.{' '}
        </p>
      </div>
    </div>
    </>
  );
}

export default DRDO;
