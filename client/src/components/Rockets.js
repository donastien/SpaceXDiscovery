import React from 'react';
import falcon1 from '../img/falcon1.png';
import falcon9 from '../img/falcon9.png';
import falconheavy from '../img/falconheavy.png';
import starships from '../img/starships.png';

const Rockets = () => {
  return (
    <section class='rockets' id='rockets'>
      <div class='container'>
        <div class='section-heading text-light text-center'>
          <h2>Rockets</h2>
          <p class='text-muted'>Les célèbres fusées Space X.</p>

          <hr />
        </div>
        <div className='row'>
          <div className='col-lg-3 text-center'>
            <img src={falcon1} class='falcon1 img-fluid' alt='' />
          </div>
          <div className='col-lg-3 text-center'>
            <img src={falcon9} class='img-fluid' alt='' />
          </div>

          <div className='col-lg-3 text-center'>
            <img src={falconheavy} class='img-fluid' alt='' />
          </div>
          <div className='col-lg-3 text-center border'>
            <img src={starships} class='starships img-fluid' alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rockets;
