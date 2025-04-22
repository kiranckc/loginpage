export function setupPasswordToggle() {
  const passwordInput = document.getElementById('password');
  const toggleButton = document.getElementById('toggle-password');
  
  toggleButton.addEventListener('click', () => {
    // Toggle password visibility
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Update the button icon (using the SVG that's already in the HTML)
    // In a real app, you might want to change the icon to represent the current state
    if (type === 'text') {
      toggleButton.classList.add('active');
      toggleButton.setAttribute('aria-label', 'Hide password');
    } else {
      toggleButton.classList.remove('active');
      toggleButton.setAttribute('aria-label', 'Show password');
    }
    
    // Add visual feedback
    toggleButton.classList.add('clicked');
    setTimeout(() => toggleButton.classList.remove('clicked'), 300);
  });
  
  // Add CSS for the toggle button visual feedback
  const style = document.createElement('style');
  style.textContent = `
    .toggle-password.active {
      color: var(--color-primary);
    }
    
    .toggle-password.clicked {
      transform: scale(1.2);
      transition: transform 0.2s ease;
    }
  `;
  document.head.appendChild(style);
}