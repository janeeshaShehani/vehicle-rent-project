var nameError = document.getElementById("name-error") ;
var emailError = document.getElementById("email-error") ;
var numberError = document.getElementById("number-error");
var messageError = document.getElementById("message-error") ;
var submitError = document.getElementById("submit-error") ;

function validateName() {
    var name = document.getElementById("name").value ;
    var nameInput = document.getElementById("name");

    if (name.length == 0) {
        nameError.innerHTML = 'Name is Required';
        nameInput.style.borderColor = 'red';
        return false;
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameInput.style.borderColor = 'red';
        nameError.innerHTML = 'Write Full Name';
        return false ;
    }

    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>' ;
    return true ;
}

function validateEmail() {
    var email = document.getElementById("email").value ;
    var emailInput = document.getElementById("email");

    if (email.length == 0) {
        emailError.innerHTML = 'Email is Required';
        emailInput.style.borderColor = 'red';
        return false;    
    }

    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        emailInput.style.borderColor = 'red';
        emailError.innerHTML = 'Email is Invalid';
        return false ;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>' ;
    return true ;
}

function validateNumber() {
    var phoneNumber = document.getElementById("phone-number").value ;
    var numberInput = document.getElementById("phone-number");

    if (!phoneNumber.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) {
        numberError.innerHTML = "Invalid Phone Number";
        numberInput.style.borderColor = 'red';
        return false ;
    }

    numberError.innerHTML = '<i class="fa-solid fa-circle-check"></i>' ;
    return true ;
}

function validateMessage() {
    var message = document.getElementById("message").value ;
    var messageInput = document.getElementById("your-message");

    if (message.length == 0){
        messageError.innerHTML = "Message is Required"
        messageInput.style.borderColor = 'red';
        return false ;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true ;

}

function validateForm() {
    if (!validateName() || !validateEmail() || !validateNumber() || !validateMessage) {
        submitError.style.display = 'block' ;
        submitError.innerHTML = 'Fix Error Before Submit' ;

        setTimeout( () => {
            submitError.style.display = 'none' ;
        }, 5000) ;

        return false ;
    }
}