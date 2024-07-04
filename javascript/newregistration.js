document.getElementById('registration-form').addEventListener('submit', function(event) {
    const inputs = document.querySelectorAll('#registration-form input[required], #registration-form select[required]');
    let valid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error-border');
            valid = false;
        } else {
            input.classList.remove('error-border');
        }
    });

    const contactNumber = document.getElementById('contact-number');
    if (contactNumber.value.trim().length !== 10) {
        contactNumber.classList.add('error-border');
        valid = false;
        alert("Contact Number is Invalid")
    } else {
        contactNumber.classList.remove('error-border');
    }

    if (!valid) {
        event.preventDefault();
    }
});