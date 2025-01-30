"use strict";
var _a;
const signupForm = document.querySelector('.signUpForm');
const userEmail = document.querySelector('#emailId');
const errorMessage = document.querySelector('#error');
const successMessage = document.querySelector('#success');
const formContainer = document.querySelector('.formContainer');
var Message;
(function (Message) {
    Message["ERRORMESSAGE"] = "This email already exists in our records";
    Message["SUCCESSMESSAGE"] = "Thank you! You have been added to our records";
})(Message || (Message = {}));
let prevEmailValue = '';
if (signupForm &&
    userEmail &&
    errorMessage &&
    successMessage &&
    formContainer) {
    const signForm = function (event) {
        event.preventDefault();
        const emailValue = userEmail.value.trim();
        if (emailValue === prevEmailValue) {
            errorMessage.textContent = Message.ERRORMESSAGE;
            successMessage.textContent = '';
            errorMessage.className = 'error';
            formContainer.style.height = '212px';
        }
        else {
            prevEmailValue = emailValue;
            successMessage.textContent = Message.SUCCESSMESSAGE;
            errorMessage.textContent = '';
            successMessage.className = 'success';
            formContainer.style.height = '228px';
        }
        userEmail.value = '';
    };
    signupForm.addEventListener('submit', signForm);
}
else {
    console.error('One or more required elements are missing in the DOM.');
}
function testClickHandler(event) {
    console.log(event.target);
}
(_a = document.getElementById('testBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', testClickHandler);
// document.addEventListener('domContentLoaded', () => {
//   document
//     .getElementById('testBtn')
//     ?.addEventListener('click', testClickHandler);
// });
