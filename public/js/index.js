const signUpBtn = document.querySelector('.sign-up-btn');
const loginBtn = document.querySelector('.login-btn');
const signUp = document.querySelector('.register');
const login = document.querySelector('.login');
const moreQuestions = document.querySelector('#moreQuestions');
const secondaryQuestions = document.querySelector('#secondaryQuestions');
const submitBtn = document.querySelector('#signupBtn');

const showQuestions = function () {
  secondaryQuestions.style.display = 'block';
  submitBtn.style.display = 'block'
  moreQuestions.style.display = 'none';
}


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

moreQuestions.addEventListener('click', showQuestions)
loginBtn.addEventListener('click', loginHandler);
signUpBtn.addEventListener('click', signupHandler);


