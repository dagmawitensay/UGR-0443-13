// toggle button handler

const toggleButton = document.getElementsByClassName("header__nav__toggle-button")[0]
const navLinks = document.getElementsByClassName("header__nav__nav-links")[0]
toggleButton.addEventListener('click', function(){
    navLinks.classList.toggle('active');
})

// form validation

var errorMessage = document.getElementById("form-error");
var form = document.getElementById("#form");
var f_name = document.getElementById('first-name');
var _email = document.getElementById("email");
var _message = document.getElementById("message");

function validateForm() {
    var fname = document.getElementById('first-name').value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    errorMessage.style.color = "red";
    if (fname.length == 0) {
        errorMessage.innerHTML = 'First name should not be empty!';
        f_name.focus();
        return false;
    }else if (fname.length < 3) {
        errorMessage.innerHTML = 'First name is too short!';
        f_name.focus();
        return false;
    }
    if (email.length == 0) {
        _email.focus();
        errorMessage.innerHTML = 'Email is required!';
        return false;
    }else if (!email.toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )){
        errorMessage.innerHTML = 'Email is Invalid!';
        _email.focus();
        return false;
    }
    if (message.length == 0) {
        errorMessage.innerHTML = 'Message should not be empty!';
        _message.focus();
        return false;
    } else if (message.length < 10) {
        errorMessage.innerHTML = 'Message should be at least 10 characters long!';
        _message.focus();
        return false;
    }
    errorMessage.style.color = "green";
    errorMessage.innerHTML = 'sucessful!';
    return true;
}

