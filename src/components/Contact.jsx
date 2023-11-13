import React from 'react'

export default function Contact() {
  return (
    <>

    <section id="contact" class="section">
      <div class="sectionContainer" >

        <div class="contactdiv1">
          <h2 class="contacth2">Contact Me</h2>
          <h3><i class="fa-solid fa-envelope"></i>  Email : <span></span>harish1090prasad@gmail.com </h3>
          <h3><i class="fa-solid fa-phone"></i>  Contact no: <span></span> 7600922448 </h3>
        </div>

        <div class="ending">

          <div class="mybtns" >

            <a href="https://github.com/HarishTPrasad" >
              <button  class="mylinks"><i class="fa-brands fa-github fa-xl"></i> GITHUB</button>
              </a>

              <a href="https://www.linkedin.com/in/harish-prasad-75a680243/" >
                <button class="mylinks"><i class="fa-brands fa-linkedin-in fa-xl"></i> LINKEDIN</button>
              </a>

              <a href="https://www.instagram.com/harryyy._13/" >
                <button class="mylinks"><i class="fa-brands fa-instagram fa-xl"></i> INSTAGRAM</button>
              </a>

              <a href="https://wa.me/qr/IKL3YFWY4TZLP1" >
                <button class="mylinks"><i class="fa-brands fa-whatsapp fa-xl"></i> WHATS APP</button>
              </a>

          </div>

           <div class="contact-content">
            
            <p class="section-description">Feel free to reach out. I'd love to connect ! <i class="fa-regular fa-paper-plane"></i></p>

            <form action="#" method="post" class="contact-form">
                <label for="name"><i class="fa-solid fa-pen"></i> Your Name:</label>
                <input type="text" id="name" name="name" class="contact-input" required />

                <label for="email"><i class="fa-solid fa-pen"></i> Your Email:</label>
                <input type="email" id="email" name="email" class="contact-input" required />

                <label for="message"><i class="fa-solid fa-pen"></i> Your Message:</label>
                <textarea id="message" name="message" rows="4" class="contact-input" required></textarea>

               <div class="mysubmit">
                <input type="submit" value="Submit" class="contact-submit"/>
               </div>
            </form>

           </div>

        </div>
      
        </div>
      </section>


    </>
  )
}



