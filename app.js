// import functions and grab DOM elements
import { signUpUser, signInUser } from './utils/fetch-utils.js';

const signUpForm = document.getElementById('sign-up');
const signInForm = document.getElementById('sign-in');


// let state

// set event listeners 
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(signUpForm);
    await signUpUser({
        username: formData.get('username'),
        password: formData.get('password'),
    });
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(signInForm);
    await signInUser({
        username: formData.get('username'),
        password: formData.get('password')
    });
});
// get user input
  // use user input to update state 
  // update DOM to reflect the new state
