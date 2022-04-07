const historyFormHandler = async (event) => {
  console.log('hello')
  event.preventDefault();
  const has_cancer = document.querySelector('#cancer').value.trim();
  const has_asthma = document.querySelector('#asthma').value.trim();
  const has_cardiac_disease = document.querySelector('#cardiac-disease').value.trim();
  const has_diabetes = document.querySelector('#diabetes').value.trim();
  const has_hypertension = document.querySelector('#hypertension').value.trim();
  const has_psychiatric_disorder = document.querySelector('#psychiatric').value.trim();
  const has_epilepsy = document.querySelector('#password-signup').value.trim();


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

document
  .querySelector('.family-history-form')
  .addEventListener('submit',
    historyFormHandler, console.log('hi'))