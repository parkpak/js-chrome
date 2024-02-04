const loginForm = document.getElementById('login-form');
const loginInput = loginForm.querySelector('input');
const greeting = document.getElementById('greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    printGreeting(username);

    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
}

function printGreeting(username) {
    greeting.innerHTML = `Hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener('submit', onLoginSubmit);

const username = localStorage.getItem(USERNAME_KEY);
if (username !== null) {
    printGreeting(username);
} else {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}