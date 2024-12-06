import React from 'react'

export default function Contact() {
  return (
    <>

            <section id="contact" className="section">
              <div className="sectionContainer" >

                <div className="contactdiv1">
                  <h2 className="contacth2">Contact Me</h2>
                  <h3 className="contacth2"> <i className="fa-solid fa-envelope"></i>  Email : <span></span>harish1090prasad@gmail.com </h3>
                  <h3 className="contacth2"> <i className="fa-solid fa-phone"></i>  Contact no: <span></span> 7600922448 </h3>
                </div>

                <div className="ending">


                  <div className="mybtns" >

                    <a href="https://github.com/HarishTPrasad" >
                      <button  className="mylinks"><i className="fa-brands fa-github fa-xl"></i> GITHUB</button>
                      </a>

                      <a href="https://www.linkedin.com/in/harish-prasad-75a680243/" >
                        <button className="mylinks"><i className="fa-brands fa-linkedin-in fa-xl"></i> LINKEDIN</button>
                      </a>

                      <a href="https://www.instagram.com/harryyy._13/" >
                        <button className="mylinks"><i className="fa-brands fa-instagram fa-xl"></i> INSTAGRAM</button>
                      </a>

                      <a href="https://wa.me/qr/IKL3YFWY4TZLP1" >
                        <button className="mylinks"><i className="fa-brands fa-whatsapp fa-xl"></i> WHATS APP</button>
                      </a>

                  </div>

                  <div className="contact-content">
                    
                    <p className="section-description">Feel free to reach out. I'd love to connect ! <i className="fa-regular fa-paper-plane"></i></p>

                    <form className="contact-form">
                        <label for="name"><i className="fa-solid fa-pen"></i> Your Name:</label>
                        <input type="text" id="name" name="name" className="contact-input" required />

                        <label for="email"><i className="fa-solid fa-pen"></i> Your Email:</label>
                        <input type="email" id="email" name="email" className="contact-input" required />

                        <label for="message"><i className="fa-solid fa-pen"></i> Your Message:</label>
                        <textarea id="message" name="message" rows="4" className="contact-input" required></textarea>

                      <div className="mysubmit">
                        <input type="submit" value="Submit" className="contact-submit"/>
                      </div>
                    </form>

                  </div>

                </div>
              
                </div>
              </section>


    </>
  )
}