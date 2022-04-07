const signUpBtn = document.querySelector('.sign-up-btn');
const loginBtn = document.querySelector('.login-btn');
const signUp = document.querySelector('.register');
const login = document.querySelector('.login');

const signupHandler = function (event) {
  event.preventDefault();
  login.style.display = 'none';
  signUp.style.display = 'block';
};

const loginHandler = function (event) {
  event.preventDefault();
  signUp.style.display = 'none';
  login.style.display = 'block';
};

loginBtn.addEventListener('click', loginHandler);
signUpBtn.addEventListener('click', signupHandler);


