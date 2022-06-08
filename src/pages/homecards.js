import React from 'react';
import './homecards.css';

function Cards() {
  return (
    <>
      <div className="secHeader">
        <h3> Finite Element Analysis</h3>
      </div>
      <section class="hero-section">
        <div class="homeCard-grid">
          <a class="homeCard">
            <div class="homeCard__content">
              <h3 class="homeCard__heading">
                Finite element methods for the solution of PDEs and surface PDEs
              </h3>
            </div>
          </a>
          <a class="homeCard">
            <div class="homeCard__content">
              <h3 class="homeCard__heading">
                Multigrid methods, ALE approach for moving meshes
              </h3>
            </div>
          </a>
          <a class="homeCard">
            <div class="homeCard__content">
              <h3 class="homeCard__heading">
                Splitting methods for high-dimensional (>3) PDEs
              </h3>
            </div>
          </a>
          <a class="homeCard">
            <div class="homeCard__content">
              <h3 class="homeCard__heading">
                Stability, convergence analysis and error estimates
              </h3>
            </div>
          </a>

          <a class="homeCard">
            <div class="homeCard__content">
              <h3 class="homeCard__heading">
                Stabilization (SUPG, LPS) and variational multiscale methods
              </h3>
            </div>
          </a>
        </div>
      </section>

      <div className="secHeader">
        <h3>High Performance Computing:</h3>
      </div>
      <section class="hero-section">
        <div class="homeCard-grid">
          <a class="homeCard">
            <div class="homeCard__content">
              <h3 class="homeCard__heading">
                ParMooN, an open-source finite element software development
              </h3>
            </div>
          </a>
          <a class="homeCard">
            <div class="homeCard__content">
              <h3 class="homeCard__heading">
                Efficient, robust, scalable finite element algorithms
              </h3>
            </div>
          </a>
          <a class="homeCard">
            <div class="homeCard__content">
              <h3 class="homeCard__heading">
                OpenMP and MPI based hybrid parallel algorithms
              </h3>
            </div>
          </a>
          <a class="homeCard">
            <div class="homeCard__content">
              <h3 class="homeCard__heading">Parallel geometric multigrid solver</h3>
            </div>
          </a>
        </div>
      </section>

      <div className="secHeader">
        <h3>Computational Fluid Dynamics:</h3>
      </div>
      <section class="hero-section">
        <div class="homeCard-grid">
          <a class="homeCard">
            <div class="homeCard__content">
              <h3 class="homeCard__heading">
                Free surface and two-phase flows with surfactants and heat
                transfer
              </h3>
            </div>
          </a>
          <a class="homeCard">
            <div class="homeCard__content">
              <h3 class="homeCard__heading">Complex (viscoelastic) fluid flows</h3>
            </div>
          </a>
          <a class="homeCard">
            <div class="homeCard__content">
              <h3 class="homeCard__heading">
                Flows in reactors, fluid-structure interaction problems
              </h3>
            </div>
          </a>
          <a class="homeCard">
            <div class="homeCard__content">
              <h3 class="homeCard__heading">
                Flows with boundary and interior layers
              </h3>
            </div>
          </a>

          <a class="homeCard">
            <div class="homeCard__content">
              <h3 class="homeCard__heading">
                Flows with floating bodies, ship hydrodynamics
              </h3>
            </div>
          </a>

          <a class="homeCard">
            <div class="homeCard__content">
              <h3 class="homeCard__heading">
                Moving contact line problems, dynamics contact angles
              </h3>
            </div>
          </a>

          <a class="homeCard">
            <div class="homeCard__content">
              <h3 class="homeCard__heading">
                Population balance systems in crystallizers
              </h3>
            </div>
          </a>

          <a class="homeCard">
            <div class="homeCard__content">
              <h3 class="homeCard__heading">
                Turbulent flows with moving/ deforming solid bodies
              </h3>
            </div>
          </a>
        </div>
      </section>

      <div className="secHeader">
        <h3>Bio-medical Applications:</h3>
      </div>
      <section class="hero-section">
        <div class="homeCard-grid">
          <a class="homeCard">
            <div class="homeCard__content">
              <h3 class="homeCard__heading">Computational models for eye</h3>
            </div>
          </a>
          <a class="homeCard">
            <div class="homeCard__content">
              <h3 class="homeCard__heading">
                Biophysical model of cancer invasion
              </h3>
            </div>
          </a>
          <a class="homeCard">
            <div class="homeCard__content">
              <h3 class="homeCard__heading">
                Flow through nasal cavities and respiratory tract
              </h3>
            </div>
          </a>
          <a class="homeCard">
            <div class="homeCard__content">
              <h3 class="homeCard__heading">
                Terahertz heating effects in realistic tissues
              </h3>
            </div>
          </a>
        </div>
      </section>
      {/* <section class="hero-section">
  <div class="card-grid">
    <a class="card">
      <div class="card__background" ></div>
      <div class="card__content">
        <p class="card__category">Category</p>
        <h3 class="card__heading">Finite element methods for the solution of PDEs and surface PDEs</h3>
      </div>
    </a>
    <a class="card">
      <div class="card__background"></div>
      <div class="card__content">
        <p class="card__category">Category</p>
        <h3 class="card__heading">Example Card Heading</h3>
      </div>
    </a>
    <a class="card">
      <div class="card__background"></div>
      <div class="card__content">
        <p class="card__category">Category</p>
        <h3 class="card__heading">Example Card Heading</h3>
      </div>
    </a>
    <a class="card">
      <div class="card__background"></div>
      <div class="card__content">
        <p class="card__category">Category</p>
        <h3 class="card__heading">Example Card Heading</h3>
      </div>
    </a>
    <a class="card">
      <div class="card__background"></div>
      <div class="card__content">
        <p class="card__category">Category</p>
        <h3 class="card__heading">Example Card Heading</h3>
      </div>
    </a>
  </div>

 
  </section>

  <section class="hero-section">
  <div class="card-grid">
 
    <a class="card">
      <div class="card__background" ></div>
      <div class="card__content">
        <p class="card__category">Category</p>
        <h3 class="card__heading">Finite element methods for the solution of PDEs and surface PDEs</h3>
      </div>
    </a>
    <a class="card">
      <div class="card__background"></div>
      <div class="card__content">
        <p class="card__category">Category</p>
        <h3 class="card__heading">Example Card Heading</h3>
      </div>
    </a>
    <a class="card">
      <div class="card__background"></div>
      <div class="card__content">
        <p class="card__category">Category</p>
        <h3 class="card__heading">Example Card Heading</h3>
      </div>
    </a>
    <a class="card">
      <div class="card__background"></div>
      <div class="card__content">
        <p class="card__category">Category</p>
        <h3 class="card__heading">Example Card Heading</h3>
      </div>
    </a>

  </div>
  </section>
  <section class="hero-section">
  <div class="card-grid">
    <a class="card">
      <div class="card__background" ></div>
      <div class="card__content">
        <p class="card__category">Category</p>
        <h3 class="card__heading">Finite element methods for the solution of PDEs and surface PDEs</h3>
      </div>
    </a>
    <a class="card">
      <div class="card__background"></div>
      <div class="card__content">
        <p class="card__category">Category</p>
        <h3 class="card__heading">Example Card Heading</h3>
      </div>
    </a>
    <a class="card">
      <div class="card__background"></div>
      <div class="card__content">
        <p class="card__category">Category</p>
        <h3 class="card__heading">Example Card Heading</h3>
      </div>
    </a>
    <a class="card">
      <div class="card__background"></div>
      <div class="card__content">
        <p class="card__category">Category</p>
        <h3 class="card__heading">Example Card Heading</h3>
      </div>
    </a>
    <a class="card">
      <div class="card__background" ></div>
      <div class="card__content">
        <p class="card__category">Category</p>
        <h3 class="card__heading">Finite element methods for the solution of PDEs and surface PDEs</h3>
      </div>
    </a>
    <a class="card">
      <div class="card__background"></div>
      <div class="card__content">
        <p class="card__category">Category</p>
        <h3 class="card__heading">Example Card Heading</h3>
      </div>
    </a>
    <a class="card">
      <div class="card__background"></div>
      <div class="card__content">
        <p class="card__category">Category</p>
        <h3 class="card__heading">Example Card Heading</h3>
      </div>
    </a>
    <a class="card">
      <div class="card__background"></div>
      <div class="card__content">
        <p class="card__category">Category</p>
        <h3 class="card__heading">Example Card Heading</h3>
      </div>
    </a>
  </div>
  </section>
  
  <section class="hero-section">
  <div class="card-grid">
 
    <a class="card">
      <div class="card__background" ></div>
      <div class="card__content">
        <p class="card__category">Category</p>
        <h3 class="card__heading">Finite element methods for the solution of PDEs and surface PDEs</h3>
      </div>
    </a>
    <a class="card">
      <div class="card__background"></div>
      <div class="card__content">
        <p class="card__category">Category</p>
        <h3 class="card__heading">Example Card Heading</h3>
      </div>
    </a>
    <a class="card">
      <div class="card__background"></div>
      <div class="card__content">
        <p class="card__category">Category</p>
        <h3 class="card__heading">Example Card Heading</h3>
      </div>
    </a>
    <a class="card">
      <div class="card__background"></div>
      <div class="card__content">
        <p class="card__category">Category</p>
        <h3 class="card__heading">Example Card Heading</h3>
      </div>
    </a>
  </div>
  </section> */}
    </>
  );
}
export default Cards;
