
import React from 'react';
import './Project.css';
import img1 from  './assets/atgworld.png';
import img2 from  './assets/sheshield.png';
import img3 from  './assets/spacecyphers.png';
import img4 from  './assets/storyfasion.JPG';


export default function Project() {
  return (
   <>


<div class="Head" id="projects">
  <div class="Head1">

  <h1 class="myprojecth">My Projects</h1>

  </div>
  <div class="Head2">

  <p class="myprojectp" ><i class="fa-brands fa-wpexplorer"></i> Explore some of my recent work.</p>

  </div>
</div>


<div class="Pro">
    <div class="UniqueProjects" >

    <div class="UniqueCard">

        <div class="UniqueProfilePic">
        <img src={img3} alt="https://wall.alphacoders.com/big.php?i=1334174"/>
        </div>

        <div class="UniqueDetails">
            <div class="UniqueContent">
                <h2>SPACE-C</h2>
                <p class="UniqueTag">TITAN CITY</p>
                <p class="UniqueAbout">  We're thrilled to present Space Cyphers as our entry for the NASA Space Apps Challenge 2023.</p>
            </div>

            <div class="UniqueButtons">
                <div class="UniqueSocial">
                <a href="https://github.com/HarishTPrasad/Space-Cyphers" >
        <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://github.com/HarishTPrasad/Space-Cyphers" >
        <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="https://github.com/HarishTPrasad/Space-Cyphers" >
        <i class="fa-brands fa-github"></i>
        </a>
    
                </div>
                <a href="https://space-cyphers.vercel.app/" class="link">project <i class="fa-solid fa-up-right-from-square"></i></a>
            </div>

        </div>

    </div>

    <div class="UniqueCard">

<div class="UniqueProfilePic">
<img src={img2} alt="https://wall.alphacoders.com/big.php?i=1334174"/>
</div>

<div class="UniqueDetails">
    <div class="UniqueContent">
        <h2>SHESHIELD</h2>
        <p class="UniqueTag">SOS AAP</p>
        <p class="UniqueAbout">Empowering women's safety with quick triggers, location sharing, and multimedia alerts.</p>
    </div>

    <div class="UniqueButtons">
        <div class="UniqueSocial">
        <a href="https://github.com/HarishTPrasad/SHE_SHIELD" >
        <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://github.com/HarishTPrasad/SHE_SHIELD" >
        <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="https://github.com/HarishTPrasad/SHE_SHIELD" >
        <i class="fa-brands fa-github"></i>
        </a>
    
    
  
        </div>
        <a href="https://github.com/HarishTPrasad/Space-Cyphers" class="link">project <i class="fa-solid fa-up-right-from-square"></i></a>
    </div>

</div>

</div>

<div class="UniqueCard">

<div class="UniqueProfilePic">
<img src={img4} alt="https://wall.alphacoders.com/big.php?i=1334174"/>
</div>

<div class="UniqueDetails">
    <div class="UniqueContent">
        <h2>STORY-F</h2>
        <p class="UniqueTag">LOCAL STORE</p>
        <p class="UniqueAbout"> Live webpage for a local Fasion store in Mumbai that wants to spread there reach digitally </p>
    </div>

    <div class="UniqueButtons">
        <div class="UniqueSocial">
        
        <a href="https://github.com/HarishTPrasad/StoryFashion" >
        <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://github.com/HarishTPrasad/StoryFashion" >
        <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="https://github.com/HarishTPrasad/StoryFashion" >
        <i class="fa-brands fa-github"></i>
        </a>
    
        </div>
        <a href="https://story-fashion.vercel.app/" class="link">project <i class="fa-solid fa-up-right-from-square"></i></a>
    </div>

</div>

</div>

<div class="UniqueCard">

<div class="UniqueProfilePic">
<img src={img1} alt="https://wall.alphacoders.com/big.php?i=1334174"/>
</div>

<div class="UniqueDetails">
    <div class="UniqueContent">
        <h2>ATG-W</h2>
        <p class="UniqueTag">WEB PAGE</p>
        <p class="UniqueAbout">Fully responsive professional webpage that has frontend with reponsive login and sign up pop-ups.</p>
    </div>

    <div class="UniqueButtons">
        <div class="UniqueSocial">
        <a href="https://github.com/HarishTPrasad/ATG-World" >
        <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://github.com/HarishTPrasad/ATG-World" >
        <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="https://github.com/HarishTPrasad/ATG-World" >
        <i class="fa-brands fa-github"></i>
        </a>
    
        </div>
        <a href="https://atg-worldharry.vercel.app/" class="link">project <i class="fa-solid fa-up-right-from-square"></i></a>
    </div>

</div>

</div> 

</div>
</div>

   </>
  )
}
