import React from 'react';

const Navbar = () => {
  return (
    <nav class='navbar navbar-expand-lg navbar-light fixed-top' id='mainNav'>
      <div class='container'>
        <a class='navbar-brand js-scroll-trigger' href='#page-top'>
          Space X Discovery
        </a>
        <button
          class='navbar-toggler navbar-toggler-right'
          type='button'
          data-toggle='collapse'
          data-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          Menu
          <i class='fas fa-bars'></i>
        </button>
        <div class='collapse navbar-collapse' id='navbarResponsive'>
          <ul class='navbar-nav ml-auto'>
            <li class='nav-item'>
              <a class='nav-link js-scroll-trigger' href='#missions'>
                Missions
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link js-scroll-trigger' href='#features'>
                Rockets
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
