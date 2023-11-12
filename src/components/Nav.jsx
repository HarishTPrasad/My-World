import React from 'react'



export default function Nav() {



  const handleNavClick = (targetId) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };


  return (


    <>

    <nav>
      <div class="nav__content">
        <div class="logo"><a href="#"><i class="fa-solid fa-microchip fa-beat fa-lg"></i>   CopyNinja </a></div>
        <label for="check" class="checkbox">
          <i class="ri-menu-line"></i>
        </label>
        <input type="checkbox" name="check" id="check" />
        <ul>
        
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


  )
}



