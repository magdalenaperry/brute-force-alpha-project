const historyFormHandler = async (event) => {
  event.preventDefault();
  const first_name = document.querySelector('#first-name-signup').value.trim();
  const last_name = document.querySelector('#last-name-signup').value.trim();
  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (first_name && last_name && username && email && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        username,
        email,
        password,
        first_name,
        last_name
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document.querySelector('.family-history').addEventListener('submit', historyFormHandler, console.log('hello'))