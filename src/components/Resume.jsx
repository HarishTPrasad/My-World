import React from 'react'
import myImage from './assets/isro.png'
import myImagea from './assets/google.png'
import myImagee from './assets/nasaapp.png'

export default function Resume() {


  return (
    <>

<section id="resume" class="section">
      <div class="sectionContainer" >


        <section id="resume" class="custom-section">
          <div class="custom-section-container">
            <h1 class="download"> <i class="fa-solid fa-download"></i> Download My Resume</h1>
            <div class="action__btns">
              <button onclick="downloadPDF()" class="downloadbt"><i class="fa-solid fa-file"></i> Resume</button>
            </div>
          </div>
        </section>

         
        <div class="project-section" >
          <h1 class="myprojecth" ><i class="fa-solid fa-award fa-bounce"></i> My Certifications !!!!</h1>
          <p class="myprojectp"  > Hey! have a look at my little achivements. </p>
      
          <div class="myprojectcard">

              <div class="project-card">
                  <h3 class="project-title">ISRO Certification on Remote Sensing and digital Image Analysis</h3>

                  <img src={myImage} alt="Project Image"/>


                  <a href="#" class="project-link"><i class="fa-solid fa-eye"></i> View</a>
              </div>
      
            <div class="project-card">
                  <h3 class="project-title">Google ads display Certification by Google </h3>

                  <img src={myImagea} alt="Project Image"/>


                  <a href="#" class="project-link"><i class="fa-solid fa-eye"></i> View</a>
              </div>
      
              <div class="project-card">
                  <h3 class="project-title">Galactic Prablem Solver By NASA and 12+ space Agencies</h3>

                  <img src={myImagee} alt="Project Image"/>


                  <a href="#" class="project-link"><i class="fa-solid fa-eye"></i> View</a>
              </div>
          </div>

          <div>
            <h3 class="space"> lot's of more Certifications on my Linkedin account.</h3>
          </div>
      </div>

      </div>
  </section>

    
    </>
  )
}
