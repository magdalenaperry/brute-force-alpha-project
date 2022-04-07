const historyFormHandler = async (event) => {
  console.log('hello')
  event.preventDefault();
  const has_cancer = document.querySelector('#cancer').value.trim();
  const has_asthma = document.querySelector('#asthma').specified
  // const has_cardiac_disease = document.querySelector('#cardiac-disease').value.trim();
  // const has_diabetes = document.querySelector('#diabetes').value.trim();
  // const has_hypertension = document.querySelector('#hypertension').value.trim();
  // const has_psychiatric_disorder = document.querySelector('#psychiatric').value.trim();
  // const has_epilepsy = document.querySelector('#epilepsy').value.trim();


  // if () {
    const response = await fetch('/api/history/forms', {
      method: 'POST',
      body: JSON.stringify({
        has_cancer,
        has_asthma
        // has_cardiac_disease,
        // has_diabetes,
        // has_hypertension,
        // has_psychiatric_disorder,
        // has_epilepsy
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    if (response.ok) {
      document.location.replace('/');
      console.log(response);
    } else {
      alert('Failed to add patient history.');
    }
  }
// };

document
  .querySelector('.family-history-form')
  .addEventListener('submit',
    historyFormHandler, console.log('hi'))