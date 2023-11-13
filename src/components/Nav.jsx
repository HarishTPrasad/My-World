
import React, { useState, useEffect } from 'react';

export default function Nav() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (targetId) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });


      closeMobileMenu();
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };


  return (




    <>
      <nav style={{ cursor: 'pointer' }}>
        <div className="nav__content">
          <div className="logo" >
            <a href="#">
              <i className="fa-solid fa-microchip fa-beat fa-lg"></i> Copy Ninja
            </a>
          </div>
          <label htmlFor="check" className="checkbox">
            <i className="fa-solid fa-bars fa-xl" onClick={toggleMobileMenu}></i>
          </label>
          <input type="checkbox" name="check" id="check" checked={isMobileMenuOpen} />
          <ul className={isMobileMenuOpen ? 'mobile-menu-open' : ''}>
            <li>
              <a onClick={() => handleNavClick('home')}>
                <i className="fa-solid fa-house-chimney"></i> Home
              </a>
            </li>
            <li>
              <a onClick={() => handleNavClick('about')}>
                <i className="fa-solid fa-wrench "></i> Tech
              </a>
            </li>
            <li>
              <a onClick={() => handleNavClick('team')}>
                <i className="fa-solid fa-people-group"></i> Team
              </a>
            </li>
            <li>
              <a onClick={() => handleNavClick('resume')}>
                <i className="fa-solid fa-file"></i> Resume
              </a>
            </li>
            <li>
              <a onClick={() => handleNavClick('projects')}>
                <i className="fa-solid fa-gears"></i> Projects
              </a>
            </li>
            <li>
              <a onClick={() => handleNavClick('contact')}>
                <i className="fa-solid fa-id-badge"></i> Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
