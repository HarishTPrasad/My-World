import React, { useEffect } from 'react';
import './ParticleAnimation.css'; // Create this CSS file to style your particles

const ParticleAnimation = () => {
  useEffect(() => {
    const particlesContainer = document.getElementById('particles');

    function createParticle() {
      const particle = document.createElement('div');
      particle.className = 'particle';

      const { innerWidth, innerHeight } = window;

      const size = Math.random() * 100;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.background = `rgba(168, 85, 247, ${Math.random()})`;

      particle.style.top = `${Math.random() * innerHeight}px`;
      particle.style.left = `${Math.random() * innerWidth * 0.73}px`;

      particle.style.animation = `particleAnimation ${Math.random() * 3 + 2}s linear infinite`;

      particlesContainer.appendChild(particle);

      setTimeout(() => {
        particlesContainer.removeChild(particle);
      }, Math.random() * 5000);
    }

    const intervalId = setInterval(createParticle, 150);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return <div id="particles" className="particles-container" />;
};

export default ParticleAnimation;