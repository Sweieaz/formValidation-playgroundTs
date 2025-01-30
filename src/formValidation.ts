const signupForm = document.querySelector<HTMLFormElement>('.signUpForm');
const userEmail = document.querySelector<HTMLInputElement>('#emailId');
const errorMessage = document.querySelector<HTMLElement>('#error');
const successMessage = document.querySelector<HTMLElement>('#success');
const formContainer = document.querySelector<HTMLElement>('.formContainer');

enum Message {
  ERRORMESSAGE = 'This email already exists in our records',
  SUCCESSMESSAGE = 'Thank you! You have been added to our records',
}

let prevEmailValue: string = '';

if (
  signupForm &&
  userEmail &&
  errorMessage &&
  successMessage &&
  formContainer
) {
  const signForm = function (event: SubmitEvent): void {
    event.preventDefault();

    const emailValue: string = userEmail.value.trim();

    if (emailValue === prevEmailValue) {
      errorMessage.textContent = Message.ERRORMESSAGE;
      successMessage.textContent = '';
      errorMessage.className = 'error';
      formContainer.style.height = '212px';
    } else {
      prevEmailValue = emailValue;
      successMessage.textContent = Message.SUCCESSMESSAGE;
      errorMessage.textContent = '';
      successMessage.className = 'success';
      formContainer.style.height = '228px';
    }
    userEmail.value = '';
  };

  signupForm.addEventListener('submit', signForm);
} else {
  console.error('One or more required elements are missing in the DOM.');
}

function testClickHandler(event: Event) {
  console.log(event.target);
}

document.getElementById('testBtn')?.addEventListener('click', testClickHandler);

// document.addEventListener('domContentLoaded', () => {
//   document
//     .getElementById('testBtn')
//     ?.addEventListener('click', testClickHandler);
// });
