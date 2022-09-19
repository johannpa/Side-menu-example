import React, { useState } from 'react';

function SideMenu() {
    //Declare a new state variable, which controls the visibility of the side menu
    const [isOpen, setIsOpen] = useState(false);
    
    // Toggle the menu
    // This function is triggered when the open button or the close button is clicked
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <>
      {/* Implement the menu */}
      <div className={`side-nav ${isOpen ? 'side-nav--active' : ''}`}>
        {/*  The close button */}
        <button className='close-button' onClick={toggleMenu}>
            &times;
        </button>

        {/* Just some dummy links */}
        <a href="https://johannpa.github.io/serpent/">Snake game</a>
        <a href="/">About Us</a>
        <a href="/">Contact Us</a>
        <a href="/">Privacy Policy</a>
        <div className='divider'></div>
        <a href="/">Dummy Link</a>
        <a href="/">Sign Up</a>
      </div>

      {/* Page content */}
      <div className='container'>
        <h2>Welcome to my site</h2>
        <p>Example: Closable, animated side drawer navigation</p>

        {/* The open button */}
        <button className='open-button' onClick={toggleMenu}>
            &#9776; open menu
        </button>
      </div>
    </>
  );
}

export default SideMenu;
