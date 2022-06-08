import React from 'react';
import Logo from '../components/logo';
import Navbar from '../components/Navbar';
import './home.css';
import Cards from './homecards';
function Home() {
  return (
    <>
      <Logo />
      <Navbar />
      <div>
        {/* <div className="container">
          <div className="text-box">
            <p> Welcome to </p>
            <h1>Computation Mathematics Group</h1>
          </div>
        </div> */}

        <div className="firstContainer">
          <div className="leftside">
            <div className="typeText">
              <h3> Who we are </h3>
            </div>
          </div>
          <div className="rightside">
            <p>
              <span>Computaional Mathematics Group (CMG)
                at the Department of Computational and Data Sciencesis under the
                Division of Interdisciplinary Research at Indian Institute{' '}
              </span>
              <span> of Science Bangalore, India.</span>
            </p>
          </div>
        </div>

        <div className="secondContainer">
          <div className="rightside">
            <div className="typeText">
              <h3> What we do</h3>
            </div>
          </div>
          <div className="leftside">
            {' '}
            <p>
              {' '}
              <span>
                We develop accurate, efficient and robust parallel numerical
                (finite element) schemes for solving partial differential
                equations (PDEs) that model several physical and industrial
                processes.{' '}
              </span>
            </p>
          </div>
        </div>

        <div className="thirdContainer">
          <div className="leftside">
            <div className="typeText">
              <h3>How we do it</h3>
            </div>
          </div>

          <div className="rightside">
            <span>
              <p className='parm'><a href='https://cmg.cds.iisc.ac.in/parmoon/'>ParMooN</a> </p>
            </span>
          </div>
        </div>
      </div>
      <Cards />
    </>
  );
}

export default Home;
