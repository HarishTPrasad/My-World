   // Smooth scrolling for anchor links
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});





// script for connecting resume

function downloadPDF() {
  
    var pdfURL = "https://drive.google.com/file/d/1lj-nb5fMp3o-LZUmRjrJMQszbIw5Y6q6/view?usp=sharing";
    
    var anchor = document.createElement("a");
    anchor.style.display = "none";
    anchor.href = pdfURL;
    anchor.download = "HarishPrasadResume.pdf"; 
    
    
    document.body.appendChild(anchor);
    anchor.click();
    
    
    document.body.removeChild(anchor);
}




// JavaScript to add the 'active' class when the element is in the viewport
const elements = document.querySelectorAll('.project-card');
const windowHeight = window.innerHeight;

function checkScroll() {
  elements.forEach((element) => {
    const position = element.getBoundingClientRect();

    if (position.top < windowHeight && position.bottom >= 0) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('resize', checkScroll);




// JavaScript code to close the navbar on list item click
document.addEventListener("DOMContentLoaded", function () {
 
  var checkbox = document.getElementById("check");

  var listItems = document.querySelectorAll("nav ul li a");

  listItems.forEach(function (item) {
    item.addEventListener("click", function () {
      
      if (checkbox.checked) {
       
        checkbox.checked = false;
      }
    });
  });
});







// // const colors = ['#ff6f61', '#6b5b95', '#88b04b', '#f7cac9', '#92a8d1'];
// const colors = ['#ff9999', '#b0c4de', '#c1e0d7', '#f0e68c', '#afeeee'];

// const numParticles = 200; // Number of particles in the animation

// for (let i = 0; i < numParticles; i++) {
//   createParticle();
// }

// function createParticle() {
//   const particle = document.createElement('div');
//   particle.classList.add('particle');
//   document.body.appendChild(particle);

//   animateParticle(particle);
// }

// function animateParticle(particle) {
//   const size = Math.random() * 20 + 5;
//   const color = colors[Math.floor(Math.random() * colors.length)];
//   const duration = Math.random() * 5 + 2;

//   // const startTop = Math.random() * (window.innerHeight * 14.9);
//   // const startLeft = Math.random() * (window.innerWidth * 0.96); 
//   const startTop = Math.random() * (window.innerHeight * 1);
//   const startLeft = Math.random() * (window.innerWidth * 1); 


//   particle.style.background = color;
//   particle.style.width = size + 'px';
//   particle.style.height = size + 'px';
//   particle.style.top = startTop + 'px';
//   particle.style.left = startLeft + 'px';

//   moveParticle(particle);
// }

// function moveParticle(particle) {
//   const duration = Math.random() * 5 + 2;

//   setTimeout(() => {
//     particle.remove();
//     createParticle();
//   }, duration * 1000);
// }

// function addParticles() {
//   const particles = document.querySelectorAll('.particle');
//   if (particles.length < numParticles) {
//     createParticle();
//   }
// }

// setInterval(addParticles, 500); // Adjust the interval as needed



// animation by java script

window.onload = function () {
  const particles = document.getElementById('particles');

  function createParticle() {
    const particle = document.createElement('particle');
    particle.className = 'particle';

    const { innerWidth , innerHeight } = window;

    const size = Math.random() * 100;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.background = `rgba(168, 85, 247, ${Math.random()})`;

    particle.style.top = `${Math.random() * innerHeight}px`;
    particle.style.left = `${Math.random() * innerWidth * 0.4}px`;

    particle.style.animation = `particleAnimation ${Math.random() * 3 + 2}s linear infinite`;

    particles.appendChild(particle);

    setTimeout(() => {
      particles.removeChild(particle);
    }, Math.random() * 5000);
  }

  setInterval(createParticle, 150);
};
