import React, { useState, useEffect } from 'react';
import myImage from './assets/team.png'

export default function Team() {


  const [text, setText] = useState(' HELLO ');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText((prevText) => (prevText === ' HELLO ' ? ' HEYY!! ' : ' HELLO '));
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);




  return (

    <>

            
        <section id="team" class="section">
            <div class="section__container" >
              <div class="image"  >
                <img src={myImage} alt="profile" />
              </div>
              <div class="content">
                <p class="subtitle">{text}</p>
                <h1 class="title">
                  We are <span><i class="fa-solid fa-earth-asia fa-spin"></i> CYPHER ELITES<br />the</span> Tech Freaks
                </h1>
                <p class="description"> <i class="fa-solid fa-code"></i>
                  Welcome to the Cypher Elites – your ticket to the future of space exploration! 🚀<br/><br/>

                  Join us in crafting a revolutionary website or software, the Planetary Tourism Office, as we embark on an exciting journey to make the universe accessible to all. Whether you're a coder, designer, or simply a space enthusiast, your unique talents can help us redefine how we explore the cosmos.<br/><br/>
                  
                  Let's create history together and reach for the stars! 🌌🌟 
                </p>
                <div class="action__btns">

                  <a href="https://chat.whatsapp.com/J3eguflen8L62OtgXBHQC4" rel="noopener noreferrer">
                    <button class="hire__me"><i class="fa-solid fa-people-group fa-fade"></i> Join Us</button>
                  </a>
                  <a href="https://chat.whatsapp.com/J3eguflen8L62OtgXBHQC4" rel="noopener noreferrer">
                    <button class="portfolio"><i class="fa-solid fa-microchip"></i> Cypher Elites</button>
                  </a>
                </div>
              </div>
            
            </div>
          </section>
    
    
    </>
    


  )
}
