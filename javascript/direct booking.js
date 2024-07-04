// Function to validate the form


function validateForm() {
    // Get form elements
    var firstName = document.getElementById('firstname');
    var contactNumber = document.getElementById('contactnumber');
    var email = document.getElementById('email');

    // Regular expression patterns for validation
    var namePattern = /^[a-zA-Z ]+$/;
    var phonePattern = /^\d{10}$/;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation flags
    var isValid = true;

    // Validate First Name
    if (!namePattern.test(firstName.value)) {
        isValid = false;
        firstName.nextElementSibling.innerHTML = 'Please enter a valid first name.';
        firstName.nextElementSibling.style.color = 'red'
        firstName.style.borderColor = 'red'; // Error border color
        alert("Check the input fields")
    } else {
        firstName.nextElementSibling.innerHTML = '';
        firstName.style.borderColor = ''; // Reset border color
    }

    // Validate Contact Number
    if (!phonePattern.test(contactNumber.value)) {
        isValid = false;
        contactNumber.nextElementSibling.innerHTML = 'Please enter a valid 10-digit phone number.';
        contactNumber.nextElementSibling.style.color = 'red'
        contactNumber.style.borderColor = 'red'; // Error border color
        alert("Check the input fields")
    } else {
        contactNumber.nextElementSibling.innerHTML = '';
        contactNumber.style.borderColor = ''; // Reset border color
    }

    // Validate Email
    if (!emailPattern.test(email.value)) {
        isValid = false;
        email.nextElementSibling.innerHTML = 'Please enter a valid email address.';
        email.nextElementSibling.style.color = 'red';
        email.style.borderColor = 'red'; // Error border color
        alert("Check the input fields")
        
    } else {
        email.nextElementSibling.innerHTML = '';
        email.style.borderColor = ''; // Reset border color
    }

    return isValid;
    
}

function scrollToElement(element) {
    var yOffset = -100; 
    var elementPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({
        top: elementPosition,
        behavior: 'smooth' // Smooth scrolling
    });
}