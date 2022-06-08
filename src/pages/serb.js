import React from 'react';
import Logo from '../components/logo';
import Navbar from '../components/Navbar';

function SERB() {
  return (
    <div>
      <Logo/>
        <Navbar/>
      <div className="pageHeader">
        <h2>Efficient and Robust Numerical Scheme for Computations of Liquidized
        Alloy
        </h2>
        <h3><a href='http://www.serb.gov.in/home.php'>supported by Science and Engineering Research Board, DST</a></h3>
      </div>
      <div className="classParah">
        <p>
          Aim of this project is to develop a robust and efficient finite
          element scheme for computations of dislocation and accumulation of
          liquidized alloy coating on a solid substrate. The targeted
          application of the proposed project is to investigate the dislocation
          and accumulation phenomenon of alloy coating from a hot region to a
          cold region during Hot Forming Die Quenching (HFDQ) in an
          ultra-high-strength steel production.
        </p>
        <br />
        <p>
          The mathematical model consists of time-dependent Navier-Stokes and
          energy equations in a time-dependent (moving) domain. Further, the
          Marangoni effect and a temperature-dependent dynamic contact angle
          will also be incorporated in the model. The domain will be handled by
          the arbitrary Lagrangian-Eulerian approach. Moreover, the PDEs will be
          discretized by finite elements in space and by a fractional step-theta
          scheme in time. Since the density of the alloy is very high, the PDEs
          become convection dominated, and therefore a local projection
          stabilization will be used.
        </p>
        <br />
        <p>
          The developed numerical scheme will be used to get an insight into the
          effects of Marangoni convection on the dislocation and accumulation of
          the liquidized alloy coating. Further, parametric studies will be
          performed to study the dislocation phenomenon. we believe that the
          findings of this numerical study will help to develop technologies to
          use high heating rates to increase ultra-high-strength steel
          production in HFDQ process.
        </p>
        <br />
        <p>
          In addition to the targeted application, the considered type of
          problems initiate new scientific questions in fundamental areas of
          computational mathematics. Moreover, the findings will have a huge
          impact in automobile industries.
        </p>
        <br />
      </div>

      <div className="pageHeader">
        <h2>Neural Networks for Machine Learning
        </h2>
        <h3><a href='http://www.serb.gov.in/home.php'>supported by Science and Engineering Research Board, DST</a></h3>
      </div>
      <div className='classParah'>
          <p>Artificial Neural Network algorithms are inspired by the human brain. The artificial neurons are interconnected and communicate with each other. Each connection is weighted by previous learning events and with each new input of data more learning takes place.</p>
          <p>Machine learning algorithms can be utilized through supervised and unsupervised learning. Supervised learning means to train the machine to translate the input data into a desired output value. Further, it assigns an inferred function to the data so that newer examples of data will give the same output for that “learned” interpretation. Unsupervised learning means discovering new patterns in the data without any prior information and training. The machine itself assigns an inferred function to the data through careful analysis and extrapolation of patterns from raw data. The layers are for analyzing the data in a hierarchical way. This is to extract, with hidden layers, the feature through supervised or unsupervised learning. Hidden layers are part of the data processing layers in a neural network.</p>
          <p>Neural networks and machine learning currently provide the best solutions to many problems in image recognition, natural language processing and speech recognition. 

</p>
      </div>
    </div>
  );
}

export default SERB;
