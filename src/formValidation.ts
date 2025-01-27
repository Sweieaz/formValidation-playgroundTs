const signupForm = document.querySelector<HTMLFormElement>('.signUpForm');
const userEmail = document.querySelector<HTMLInputElement>('#emailId');
const errorMessage = document.querySelector<HTMLElement>('#error');
const successMessage = document.querySelector<HTMLElement>('#success');
const userForm = document.querySelector<HTMLElement>('.userform');

enum Message {
  ERRORMESSAGE = 'This email already exists in our records',
  SUCCESSMESSAGE = 'Thank you! You have been added to our records',
}

let prevEmailValue: string = '';

if (signupForm && userEmail && errorMessage && successMessage && userForm) {
  const signForm = function (event: Event): void {
    event.preventDefault();

    const emailValue: string = userEmail.value.trim();

    if (emailValue === prevEmailValue) {
      errorMessage.textContent = Message.ERRORMESSAGE;
      successMessage.textContent = '';
      errorMessage.className = 'error';
      userForm.style.height = '212px';
    } else {
      prevEmailValue = emailValue;
      successMessage.textContent = Message.SUCCESSMESSAGE;
      errorMessage.textContent = '';
      successMessage.className = 'success';
      userForm.style.height = '228px';
    }
    userEmail.value = '';
  };

  signupForm.addEventListener('submit', signForm);
} else {
  console.error('One or more required elements are missing in the DOM.');
}
