import React from 'react';
import falcon1 from '../img/falcon1.png';
import falcon9 from '../img/falcon9.png';
import falconheavy from '../img/falconheavy.png';
import starships from '../img/starships.png';

const Rockets = () => {
  return (
    <section class='rockets' id='rockets'>
      <div class='container-fluid'>
        <div class='titlerockets section-heading text-light text-center'>
          <h2>Rockets</h2>
          <p class='text-muted'>Les célèbres fusées Space X.</p>
        </div>
        <div className='row'>
          <div className='col-lg-3 text-center'>
            <img src={falcon1} class='falcon1 img-fluid' alt='' />
            <h1 className='text-light'>Falcon 1</h1>
          </div>
          <div className='col-lg-3 text-center'>
            <img src={falcon9} class='falcon9 img-fluid' alt='' />
            <h1 className='text-light'>Falcon 9</h1>
          </div>

          <div className='col-lg-3 text-center'>
            <img src={falconheavy} class='falconh img-fluid' alt='' />
            <h1 className='text-light'>Falcon Heavy</h1>
          </div>
          <div className='col-lg-3 text-center'>
            <img src={starships} class='starships img-fluid' alt='' />
            <h1 className='starships text-light'>Starships</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rockets;
