var nameError = document.getElementById("name-error") ;
var emailError = document.getElementById("email-error") ;
var messageError = document.getElementById("message-error") ;
var submitError = document.getElementById("submit-error") ;

function validateName() {
    var name = document.getElementById("name").value ;

    if (name.length == 0) {
        nameError.innerHTML = 'Name is Required';
        return false;
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write Full Name';
        return false ;
    }

    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>' ;
    return true ;
}

function validateEmail() {
    var email = document.getElementById("email").value ;

    if (email.length == 0) {
        emailError.innerHTML = 'Email is Required';
        return false;    
    }

    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        emailError.innerHTML = 'Email is Invalid';
        return false ;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>' ;
    return true ;
}

function validateMessage() {
    var message = document.getElementById("message").value ;

    if (message.length == 0){
        messageError.innerHTML = "Message is Required"
        return false ;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true ;

}

function validateForm() {
    if (!validateName() || !validateEmail() || !validateMessage) {
        submitError.style.display = 'block' ;
        submitError.innerHTML = 'Fix Error Before Submit' ;

        setTimeout(function () {
            submitError.style.display = 'none' ;
        }, 5000) ;

        return false ;
    }
}