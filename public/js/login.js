// mult-step sign up form

//DOM elements
const DOMstrings = {
  stepsBtnClass: 'multisteps-form__progress-btn',
  stepsBtns: document.querySelectorAll(`.multisteps-form__progress-btn`),
  stepsBar: document.querySelector('.multisteps-form__progress'),
  stepsForm: document.querySelector('.multisteps-form__form'),
  stepsFormTextareas: document.querySelectorAll('.multisteps-form__textarea'),
  stepFormPanelClass: 'multisteps-form__panel',
  stepFormPanels: document.querySelectorAll('.multisteps-form__panel'),
  stepPrevBtnClass: 'js-btn-prev',
  stepNextBtnClass: 'js-btn-next'
};


//remove class from a set of items
const removeClasses = (elemSet, className) => {

  elemSet.forEach(elem => {

    elem.classList.remove(className);

  });

};

//return exect parent node of the element
const findParent = (elem, parentClass) => {

  let currentNode = elem;

  while (!currentNode.classList.contains(parentClass)) {
    currentNode = currentNode.parentNode;
  }

  return currentNode;

};

//get active button step number
const getActiveStep = elem => {
  return Array.from(DOMstrings.stepsBtns).indexOf(elem);
};

//set all steps before clicked (and clicked too) to active
const setActiveStep = activeStepNum => {

  //remove active state from all the state
  removeClasses(DOMstrings.stepsBtns, 'js-active');

  //set picked items to active
  DOMstrings.stepsBtns.forEach((elem, index) => {

    if (index <= activeStepNum) {
      elem.classList.add('js-active');
    }

  });
};

//get active panel
const getActivePanel = () => {

  let activePanel;

  DOMstrings.stepFormPanels.forEach(elem => {

    if (elem.classList.contains('js-active')) {

      activePanel = elem;

    }

  });

  return activePanel;

};

//open active panel (and close unactive panels)
const setActivePanel = activePanelNum => {

  //remove active class from all the panels
  removeClasses(DOMstrings.stepFormPanels, 'js-active');

  //show active panel
  DOMstrings.stepFormPanels.forEach((elem, index) => {
    if (index === activePanelNum) {

      elem.classList.add('js-active');

      setFormHeight(elem);

    }
  });
};
//set form height equal to current panel height
const formHeight = activePanel => {

  const activePanelHeight = activePanel.offsetHeight;

  DOMstrings.stepsForm.style.height = `${activePanelHeight}px`;

};

const setFormHeight = () => {
  const activePanel = getActivePanel();

  formHeight(activePanel);
};

//STEPS BAR CLICK FUNCTION
DOMstrings.stepsBar.addEventListener('click', e => {

  //check if click target is a step button
  const eventTarget = e.target;

  if (!eventTarget.classList.contains(`${DOMstrings.stepsBtnClass}`)) {
    return;
  }

  //get active button step number
  const activeStep = getActiveStep(eventTarget);

  //set all steps before clicked (and clicked too) to active
  setActiveStep(activeStep);

  //open active panel
  setActivePanel(activeStep);
});

//PREV/NEXT BTNS CLICK
DOMstrings.stepsForm.addEventListener('click', e => {

  const eventTarget = e.target;

  //check if we clicked on `PREV` or NEXT` buttons
  if (!(eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`) || eventTarget.classList.contains(`${DOMstrings.stepNextBtnClass}`))) {
    return;
  }

  //find active panel
  const activePanel = findParent(eventTarget, `${DOMstrings.stepFormPanelClass}`);

  let activePanelNum = Array.from(DOMstrings.stepFormPanels).indexOf(activePanel);

  //set active step and active panel onclick
  if (eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`)) {
    activePanelNum--;

  } else {
    activePanelNum++;
  }
  setActiveStep(activePanelNum);
  setActivePanel(activePanelNum);
});

//SETTING PROPER FORM HEIGHT ONLOAD
window.addEventListener('load', setFormHeight, false);

//SETTING PROPER FORM HEIGHT ONRESIZE
window.addEventListener('resize', setFormHeight, false);

//changing animation via animation select !!!YOU DON'T NEED THIS CODE (if you want to change animation type, just change form panels data-attr)

const setAnimationType = newType => {
  DOMstrings.stepFormPanels.forEach(elem => {
    elem.dataset.animation = newType;
  });
};

//selector onchange - changing animation
const animationSelect = document.querySelector('.pick-animation__select');

// ======= SIGN UP & LOGIN FUNCTIONALITY =======


const loginAlert = function () {
  const alertEL = document.createElement('div');
  alertEL.classList.add('alert', 'alert-warning', 'alert-dismissable', 'fade', 'show');
  alertEL.setAttribute('role', 'alert')
  const alertBtn = document.createElement('button');
  alertBtn.classList.add('btn-close');
  alertBtn.setAttribute('type', '')
}

// Successful Login!
const loginFormHandler = async (event) => {
  event.preventDefault();

  const passwordAlert = document.querySelector('.passwordAlert');
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace('/');
    } else {
      // alert('Failed to log in.');
      passwordAlert.style.display = 'block';
      const generalAlert = document.querySelector('.generalAlert');

    }
  }
};


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
    historyInputs.forEach(input => {
      if (input.checked) {
        historyCheckbox.push(input.value)
      }
    })
    dataObject["history"] = historyCheckbox.join(', ');
    //


    // captures checkboxes for family history in sign up form
    const drugInputs = document.querySelectorAll('.drug-form');
    const drugCheckbox = [];
    drugInputs.forEach(input => {
      if (input.checked) {
        drugCheckbox.push(input.value);
      }
    });
    dataObject["drug_use"] = drugCheckbox.join(', ');
    //

    // captures radio buttons for alcohol use in sign up form
    const alcoholInputs = document.querySelectorAll('.alcohol-form');
    const alcoholCheckbox = [];
    alcoholInputs.forEach(input => {
      if (input.checked) {
        alcoholCheckbox.push(input.value);
      };
    });
    dataObject["alcohol_use"] = alcoholCheckbox.join(', ')

    console.log(dataObject)
    // const passwordAlert = document.querySelector('.passwordAlert');
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
    } else if (dataObject.password.length < 8) {
      console.log(dataObject.password)
      console.log("password length is smaller than 8")
      generalAlert.style.display = 'block';
      // passwordAlert.style.display = 'block';
    } else if (response.status === 500) {

    }

  } catch (err) {
    console.log(err);
  }
}

document
  .querySelector('.login-form')
  .addEventListener('submit',
    loginFormHandler,
    console.log('clickedme'));

document
  .querySelector('.signup-form')
  .addEventListener('submit',
    signupFormHandler);
