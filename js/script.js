// JavaScript for the slideshow
const slides = document.querySelectorAll('.slideshow img');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds


const form = document.getElementById('contactForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const interest = document.getElementById('interest').value;

    // Validation
    let isValid = true;
    const errorMessages = [];

    if (name === '') {
      isValid = false;
      errorMessages.push('Name is required.');
    }

    if (email === '') {
      isValid = false;
      errorMessages.push('Email is required.');
    } else if (!isValidEmail(email)) {
      isValid = false;
      errorMessages.push('Please enter a valid email address.');
    }

    if (interest === '') {
      isValid = false;
      errorMessages.push('Please select an interest.');
    }

    // Display error messages
    const errorMessageContainer = document.getElementById('errorMessages');
    errorMessageContainer.innerHTML = '';

    if (!isValid) {
      errorMessages.forEach(message => {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = message;
        errorMessageContainer.appendChild(errorMessage);
      });
    } else {
      // Form submission logic can go here
      alert('Form submitted successfully!');
      form.reset(); // Reset the form after successful submission
    }
  });

  // Helper function to validate email address
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }