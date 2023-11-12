import React from 'react';
import myImage from './assets/profile.jpg';


export default function Home() {
  return (
    <>


<section id="home" class="section"  >
    <div class="section__container">
     
      <div class="content" >
        <p class="subtitle">HELLO</p>
        <h1 class="title">
          I'm <span>Harish Prasad<br/>a</span> Tech Enthusiast
        </h1>
        <p class="description"> <i class="fa-solid fa-wand-magic-sparkles"></i>
          Welcome to my Tech Stack portfolio! I'm Harish Prasad, a skilled and
          creative Tech Enthusiast with a passion for creating beautiful,
          responsive, and user-friendly websites. I've worked on a variety of
          web projects, ranging from personal blogs to e-commerce platforms.
        </p>
        <div class="action__btns">
          <button class="hire__me"><i class="fa-solid fa-bolt fa-fade"></i>Hire Me </button>
          <button class="portfolio">Portfolio</button>
        </div>
      </div>

      <div class="image">
        <img src={myImage} alt="profile" />
      </div>
     
    </div>
  </section>
    
    
    </>

  )
}
