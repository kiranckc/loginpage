export function setupFormValidation() {
  const loginForm = document.getElementById('login-form');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const emailError = document.getElementById('email-error');
  const passwordError = document.getElementById('password-error');

  // Email validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return 'Email is required';
    }
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  // Password validation
  const validatePassword = (password) => {
    if (!password) {
      return 'Password is required';
    }
    if (password.length < 8) {
      return 'Password must be at least 8 characters';
    }
    return '';
  };

  // Real-time validation for email
  emailInput.addEventListener('input', () => {
    const error = validateEmail(emailInput.value);
    emailError.textContent = error;
    
    if (error) {
      emailInput.classList.add('error');
    } else {
      emailInput.classList.remove('error');
    }
  });

  // Real-time validation for password
  passwordInput.addEventListener('input', () => {
    const error = validatePassword(passwordInput.value);
    passwordError.textContent = error;
    
    if (error) {
      passwordInput.classList.add('error');
    } else {
      passwordInput.classList.remove('error');
    }
  });

  // Form submission
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const emailError = validateEmail(emailInput.value);
    const passwordError = validatePassword(passwordInput.value);
    
    // Show validation errors
    document.getElementById('email-error').textContent = emailError;
    document.getElementById('password-error').textContent = passwordError;
    
    // Check if form is valid
    if (!emailError && !passwordError) {
      // Simulate login success with animation
      const submitButton = loginForm.querySelector('button[type="submit"]');
      submitButton.textContent = 'Signing in...';
      submitButton.disabled = true;
      
      // In a real application, you would make an API call here
      setTimeout(() => {
        // Simulate successful login
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = 'Login successful!';
        
        // Insert the success message before the form
        loginForm.parentNode.insertBefore(successMessage, loginForm);
        
        // Hide the form
        loginForm.style.display = 'none';
        
        // Add CSS for the success message
        const style = document.createElement('style');
        style.textContent = `
          .success-message {
            padding: var(--space-4);
            background-color: var(--color-success);
            color: white;
            border-radius: var(--radius-md);
            text-align: center;
            font-weight: 600;
            animation: fadeIn 0.5s ease forwards;
            margin-bottom: var(--space-4);
          }
        `;
        document.head.appendChild(style);
        
        // In a real application, you would redirect to another page or update the UI
      }, 1500);
    } else {
      // Apply shake animation to invalid fields
      if (emailError) {
        emailInput.classList.add('shake');
        setTimeout(() => emailInput.classList.remove('shake'), 500);
      }
      
      if (passwordError) {
        passwordInput.classList.add('shake');
        setTimeout(() => passwordInput.classList.remove('shake'), 500);
      }
    }
  });

  // Add CSS for error state and shake animation
  const style = document.createElement('style');
  style.textContent = `
    input.error {
      border-color: var(--color-error) !important;
      box-shadow: 0 0 0 3px rgba(255, 59, 48, 0.15) !important;
    }
    
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
      20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    
    .shake {
      animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
    }
  `;
  document.head.appendChild(style);
}