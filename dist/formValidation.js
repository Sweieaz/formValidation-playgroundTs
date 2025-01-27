"use strict";
const signupForm = document.querySelector('.signUpForm');
const userEmail = document.querySelector('#emailId');
const errorMessage = document.querySelector('#error');
const successMessage = document.querySelector('#success');
const userForm = document.querySelector('.userform');
var Message;
(function (Message) {
    Message["ERRORMESSAGE"] = "This email already exists in our records";
    Message["SUCCESSMESSAGE"] = "Thank you! You have been added to our records";
})(Message || (Message = {}));
let prevEmailValue = '';
if (signupForm && userEmail && errorMessage && successMessage && userForm) {
    const signForm = function (event) {
        event.preventDefault();
        const emailValue = userEmail.value.trim();
        if (emailValue === prevEmailValue) {
            errorMessage.textContent = Message.ERRORMESSAGE;
            successMessage.textContent = '';
            errorMessage.className = 'error';
            userForm.style.height = '212px';
        }
        else {
            prevEmailValue = emailValue;
            successMessage.textContent = Message.SUCCESSMESSAGE;
            errorMessage.textContent = '';
            successMessage.className = 'success';
            userForm.style.height = '228px';
        }
        userEmail.value = '';
    };
    signupForm.addEventListener('submit', signForm);
}
else {
    console.error('One or more required elements are missing in the DOM.');
}
