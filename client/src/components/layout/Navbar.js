import React from 'react';

const Navbar = () => {
  return (
    <nav class='navbar navbar-expand-lg navbar-light bg-light'>
      <a class='navbar-brand' href='#'>
        SpaceX Discovery
      </a>
      <button
        class='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarColor01'
        aria-controls='navbarColor01'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span class='navbar-toggler-icon'></span>
      </button>

      <div class='collapse navbar-collapse' id='navbarColor01'>
        <ul class='navbar-nav mr-auto'>
          <li class='nav-item active'>
            <a class='nav-link' href='#'>
              Home <span class='sr-only'>(current)</span>
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='#'>
              Lancements
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='#'>
              Missions
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='#'>
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
