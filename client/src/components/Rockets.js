import React from 'react';
import falcon1 from '../img/falcon1.png';
import falcon9 from '../img/falcon9.png';
import falconheavy from '../img/falconheavy.png';
import starships from '../img/starships.png';

const Rockets = () => {
  return (
    <section class='rockets' id='rockets'>
      <div class='container-fluid'>
        <div class='section-heading text-light text-center'>
          <h2>Rockets</h2>
          <p class='text-muted'>Voici les célèbres fusées de Space X.</p>

          <hr />
        </div>
        <div className='row'>
          <div className='col-lg-3 border text-center'>
            <img src={falcon1} class='img-fluid' alt='' />
          </div>
          <div className='col-lg-3 border text-center'>
            <img src={falcon9} class='img-fluid' alt='' />
          </div>

          <div className='col-lg-3 border'>
            <img src={falconheavy} class='img-fluid' alt='' />
          </div>
          <div className='col-lg-3 border'>
            <img src={starships} class='img-fluid' alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rockets;
