import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import Tabs from '../pages/Tabs';
import Panel from './Panel';

import './styles.css';
import TabCard from '../pages/TabCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], userId: 4, array: [5, 1, 3, 4, 6] };
  }
  render() {
    const { data, array, userId } = this.state;
    return (
      <div className="main-container">
        <Tabs>
          <Panel title="Ongoing Projects">
            <div className="tableHeader">
              <h3>Ongoing Projects</h3>
            
            <h3>Our projects are supported by</h3>
            </div>
              <TabCard />          
          </Panel>
          <Panel title="Completed Projects">
            <div className='tableHeader'>
            <h3>Completed Projects</h3>
            </div>
            <div className='centerd'>
            <tr>
              <td>
                Stabilization schemes for convection dominated scalar problems
                with different time discretizations in time-dependent domains{' '}
                <br />
              <a href='http://cds.iisc.ac.in/admissions/course-degrees/'>
              PhD (submitteed by Shweta Srivastava, 2017){' '}
              </a>
              </td>
            </tr>
            <tr>
              <td>
                Projection based variational multiscale methods for
                incompressible Navier-Stokes equations to model turbulent fluid
                flows in time dependent domains
                <br />
                <a href='http://cds.iisc.ac.in/admissions/course-degrees/'>
                PhD (submitteed by Birupaksha Pal, 2017)
              </a>
              </td>
            </tr>
            <tr>
              <td>
                Numerical study of Magnetohydrodynamics for turbulent flow using
                variational multiscale method <br /> 
                <a href='http://cds.iisc.ac.in/admissions/course-degrees/'>
                MTech (Ankit Shrivastava,2017)
                </a>
              </td>
            </tr>
            <tr>
              <td>
                A Continuous/Discontinuous Finite Element Solver for the
                Reissner-Mindlin plate Problem
                <br />
                <a href='http://cds.iisc.ac.in/admissions/course-degrees/'>
                MTech (Prateek Kushwaha, 2017)
              </a>
              </td>
            </tr>
            <tr>
              <td>
                A Parallel Multigrid approach to incompressible Navier-Stokes
                equations using FEM
                <br />
                <a href='http://cds.iisc.ac.in/admissions/course-degrees/'>
                MTech (Meesala Raviteja, 2016)
              </a>
              </td>
            </tr>
            <tr>
              <td>
                Operator splitting finite element algorithm for multivariate
                population balance model
                <br />
                <a href='http://cds.iisc.ac.in/admissions/course-degrees/'>
                MTech (Satish kumar, 2016)
              </a>
              </td>
            </tr>
            <tr>
              <td>
                Finite Element based Charged Particle Tracking
                <br />
                <a href='http://cds.iisc.ac.in/admissions/course-degrees/'>
                MTech (M. Vijaya kumar, 2016)
              </a>
              </td>
            </tr>
            <tr>
              <td>
                Finite Element Algorithm for Massively Parallel Computing
                <br />
                <a href='http://cds.iisc.ac.in/admissions/course-degrees/'>
                MTech (Abdus Shamim, 2015)
              </a>
              </td>
            </tr>
            <tr>
              <td>
                Effects of temperature-dependent contact angle on the flow
                dynamics of an impinging droplet on a hot solid substrate
                <br />
                <a href='http://cds.iisc.ac.in/admissions/course-degrees/'>
                MTech (Anubhav Das, 2015)
              </a>
              </td>
            </tr>
            <tr>
              <td>
                Finite Element Simulation of Non-Isothermal Liquid Droplet
                Impact on a Heterogeneous Solid Substrate
                <br />
                <a href='http://cds.iisc.ac.in/admissions/course-degrees/'>
                MTech (Jagannath Venkatesan, 2014)
              </a>
              </td>
            </tr>
            <tr>
              <td>
                Finite Element Simulation with Parallel Multigrid Solver jointly
                guided with Dr. Bobby Phillip, ORNL,USA
                <br />
                <a href='http://cds.iisc.ac.in/admissions/course-degrees/'>
                 MTech (B M Pavan Kumar, 2014)
              </a>
              </td>
            </tr>
            <tr>
              <td>
            Efficiency of Finite Element stabilization schemes on parallel
            processors
            <br/>
            <a href='http://cds.iisc.ac.in/admissions/course-degrees/'>
            MTech (Harikrishna B S, 2013)
            </a>
            </td>
            </tr>
            
            <tr><td>
             Parallel Multigrid Solver for Large
            Sparse Linear Systems
            <br />
            <a href='http://cds.iisc.ac.in/admissions/course-degrees/'>
            MTech (Shiladitya Banerjee, 2013)
            </a></td>
            </tr>
            </div>
          </Panel>
        </Tabs>
      </div>
    );
  }
}

export default App;

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
