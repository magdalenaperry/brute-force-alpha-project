
// Successful Login!
const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
};
// Successful SignUp!
const signupFormHandler = async (event) => {
  try {

    
    event.preventDefault();
    let dataObject = {}
    const formInputs = document.querySelectorAll('.form-control');
    formInputs.forEach(form => {
      var idSplit = form.id.split('-')
      if (idSplit[1] == 'signup') {
        dataObject[idSplit[0]] = form.value
      }
    });

    // captures checkboxes for family history in sign up form
    const historyInputs = document.querySelectorAll('.history-form');
    const historyCheckbox = [];
    historyInputs.forEach(input =>{
      if(input.checked){
        historyCheckbox.push(input.value)
      }
    })
    dataObject["history"] = historyCheckbox.join(', ');
    //

    console.log(dataObject)
    const passwordAlert = document.querySelector('.passwordAlert');
    const generalAlert = document.querySelector('.generalAlert');


    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify(dataObject),
      headers: { 'Content-Type': 'application/json' },
    });

    console.log(response.statusText)


    // successful login, send to home
    if (response.ok) {
      document.location.replace('/');
    } else if (password.length < 8) {
      passwordAlert.style.display = 'block';
    } else if (response.status === 500) {
      generalAlert.style.display = 'block';
    }

  } catch (err) {
    console.log(err);
  }
}

const closeBtn = document.querySelector('.close');

const closeAlert = function () {
  $(".alert").alert('close')
};

closeBtn.addEventListener('click', closeAlert)


document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit',
    signupFormHandler);
