// Function to validate the form on submit
function validateForm(event) {
    // Get the form element
    const form = document.querySelector('form');
  
    // Get the input elements
    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    const phoneInput = form.querySelector('#phone');
    const messageInput = form.querySelector('#message');
    const genderInput = form.querySelector('input[name=gender]:checked');
    const ratingInput = form.querySelector('input[name=rating]:checked');
    const reasonInputs = form.querySelectorAll('input[name=reason]:checked');
  
    // Get the error elements
    const nameError = form.querySelector('#name-error');
    const emailError = form.querySelector('#email-error');
    const phoneError = form.querySelector('#phone-error');
    const messageError = form.querySelector('#message-error');
    const genderError = form.querySelector('#gender-error');
    const ratingError = form.querySelector('#rating-error');
    const reasonError = form.querySelector('#reason-error');
  
    // Initialize the error count
    let errorCount = 0;
  
    // Validate the name field
    if (nameInput.value === '') {
      nameError.textContent = 'Please enter your name';
      errorCount++;
    } else {
      nameError.textContent = '';
    }
  
    // Validate the email field
    if (emailInput.value === '') {
      emailError.textContent = 'Please enter your email address';
      errorCount++;
    } else if (!isValidEmail(emailInput.value)) {
      emailError.textContent = 'Please enter a valid email address';
      errorCount++;
    } else {
      emailError.textContent = '';
    }
  
    // Validate the phone field
    if (phoneInput.value === '') {
      phoneError.textContent = 'Please enter your phone number';
      errorCount++;
    } else if (!isValidPhone(phoneInput.value)) {
      phoneError.textContent = 'Please enter a valid phone number';
      errorCount++;
    } else {
      phoneError.textContent = '';
    }
  
    // Validate the message field
    if (messageInput.value === '') {
      messageError.textContent = 'Please enter a message';
      errorCount++;
    } else {
      messageError.textContent = '';
    }
  
    // Validate the gender field
    if (!genderInput) {
      genderError.textContent = 'Please select your gender';
      errorCount++;
    } else {
      genderError.textContent = '';
    }
  
    // Validate the rating field
    if (!ratingInput) {
      ratingError.textContent = 'Please select a rating';
      errorCount++;
    } else {
      ratingError.textContent = '';
    }
  
    // Validate the reason field
    if (reasonInputs.length === 0) {
      reasonError.textContent = 'Please select at least one reason';
      errorCount++;
    } else {
      reasonError.textContent = '';
    }
  
    // Prevent the form from submitting if there are errors
    if (errorCount > 0) {
      event.preventDefault();
    }
  }
  
  // Function to validate an email address
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Function to validate a phone number
  function isValidPhone(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }
  
  // Add event listener to form submit event
  const form = document.querySelector('form');
  form.addEventListener('submit', validateForm);
  