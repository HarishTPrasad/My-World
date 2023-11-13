
import React from 'react';
import myImage from './assets/she.png'
import myImagee from './assets/cypher.png'
import myImagea from './assets/supermarket.png'

export default function Project() {
  return (
   <>

<section id="projects" class="section">
      <div class="sectionContainer">

        <div class="project-section">
          <h1 class="myprojecth">My Projects</h1>
          <p class="myprojectp" ><i class="fa-brands fa-wpexplorer"></i> Explore some of my recent work.</p>
      
          <div class="myprojectcard">

              <div class="project-card">
                  <h3 class="project-title"><i class="fa-solid fa-shield-heart"></i> SHE SHIELD</h3>

                  <img src={myImage} alt="Project Image"/>


                  <p class="project-description"><i class="fa-solid fa-circle-right"></i> Project SheShield: Empowering women's safety with quick triggers, location sharing, and multimedia alerts.The application is built using Java in Android Studio and leverages the device's sensors, audio recording capabilities, and location services to provide a quick and efficient safety solution for women.</p>
                  <a href="https://github.com/HarishTPrasad/SHE_SHIELD.git" class="project-link" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-eye"></i> View</a>
              </div>
      
            <div class="project-card">
                  <h3 class="project-title"><i class="fa-solid fa-comments"></i>Space-Cyphers
                  </h3>

                  <img src={myImagee} alt="Project Image"/>


                  <p class="project-description"><i class="fa-solid fa-circle-right"></i> Space Cyphers is a groundbreaking educational space app that boldly ventures into the vast cosmos, offering users of all ages an immersive and captivating journey through the wonders of space. Our mission is to ignite a passion for space exploration, foster scientific curiosity, and educate while captivating users with an awe-inspiring, interactive experience. We're thrilled to present Space Cyphers as our entry for the NASA Space Apps Challenge 2023, where we aim to inspire the next generation of space enthusiasts.</p>
                  <a href="https://github.com/HarishTPrasad/Space-Cyphers.git" class="project-link" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-eye"></i> View</a>
              </div>
      
              <div class="project-card">
                  <h3 class="project-title"><i class="fa-solid fa-store"></i> SUPERMARKET Management</h3>

                  <img src={myImagea} alt="Project Image"/>



                  <p class="project-description"><i class="fa-solid fa-circle-right"></i> Super Market Management System Welcome to the Super Market Management System repository! This project aims to provide a comprehensive solution for managing and streamlining the operations of a super market.</p>
                  <a href="https://github.com/HarishTPrasad/SuperMarketWebApp.git" class="project-link" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-eye"></i> View</a>
              </div>
          </div>

          <div>
            <h3 class="space" ><i class="fa-solid fa-star"></i> lot's of exciting works on my github account.</h3>
          </div>

      </div>
       
      </div>
  </section>


   </>
  )
}
