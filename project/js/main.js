import { setupAnimations } from './animations.js';
import { setupFormValidation } from './validation.js';
import { setupPasswordToggle } from './password.js';

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
  setupAnimations();
  setupFormValidation();
  setupPasswordToggle();
});