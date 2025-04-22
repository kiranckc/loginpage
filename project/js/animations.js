export function setupAnimations() {
  const header = document.querySelector('.header');
  const circles = document.querySelectorAll('.circle');

  // Additional animation effects for the circles
  circles.forEach((circle, index) => {
    // Randomize starting positions slightly
    setTimeout(() => {
      // Add slight random movement to make animation more organic
      const randomMovement = Math.random() * 3 - 1.5; // -1.5 to 1.5px
      circle.style.transform = `translate(${randomMovement}px, ${randomMovement}px)`;
    }, index * 150);
  });

  // Add scroll effect to header
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.style.backgroundColor = 'rgba(0, 102, 204, 0.9)';
      header.style.boxShadow = 'var(--shadow-md)';
    } else {
      header.style.backgroundColor = 'transparent';
      header.style.boxShadow = 'none';
    }
  });

  // Add subtle interaction when clicking on the logo
  const logoAnimation = document.querySelector('.logo-animation');
  logoAnimation.addEventListener('click', () => {
    circles.forEach(circle => {
      // Create a subtle burst effect
      circle.style.animation = 'none';
      circle.offsetHeight; // Trigger reflow
      
      // Apply a quick scaling animation
      circle.style.animation = `pulse 2s infinite alternate, float 3s infinite ease-in-out, burst 0.5s ease-out`;
    });
    
    // Reset to original animation after the burst effect
    setTimeout(() => {
      circles[0].style.animation = 'pulse 2s infinite alternate, float 3s infinite ease-in-out';
      circles[1].style.animation = 'pulse 2.5s infinite alternate-reverse, float 3.5s infinite ease-in-out';
      circles[2].style.animation = 'pulse 3s infinite alternate, float 4s infinite ease-in-out';
    }, 500);
  });
}

// Add CSS for the burst animation
const style = document.createElement('style');
style.textContent = `
  @keyframes burst {
    0% { transform: scale(1); }
    50% { transform: scale(1.5); opacity: 0.7; }
    100% { transform: scale(1); }
  }
`;
document.head.appendChild(style);