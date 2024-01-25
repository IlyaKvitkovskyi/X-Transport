let currentStep = 1;
const totalSteps = 3;

function nextStep() {
  const currentStepElement = document.getElementById(`step${currentStep}`);
  const inputs = currentStepElement.querySelectorAll('input[required]');
  let isValid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      isValid = false;
    }
  });

  if (!isValid) {
    return;
  }

  currentStepElement.classList.remove('active', 'current-step');
  currentStep++;

  if (currentStep <= totalSteps) {
    const nextStepElement = document.getElementById(`step${currentStep}`);
    nextStepElement.classList.add('active', 'current-step');
    updateStepIndicator();
  } else {
    // alert('Квиз завершен!');
  }
}


function prevStep() {
  if (currentStep > 1) {
    const currentStepElement = document.getElementById(`step${currentStep}`);
    currentStepElement.classList.remove('active', 'current-step');
    currentStep--;

    const prevStepElement = document.getElementById(`step${currentStep}`);
    prevStepElement.classList.add('active', 'current-step');
    updateStepIndicator();
  }
}

function updateStepIndicator() {
  const stepIndicatorElement = document.getElementById('stepIndicator');
  stepIndicatorElement.textContent = currentStep;
}

function submitQuiz() {
  const currentStepElement = document.getElementById(`step${currentStep}`);
  const inputs = currentStepElement.querySelectorAll('input[required]');
  let isValid = true;

  inputs.forEach(input => {
      if (!input.value.trim()) {
          isValid = false;
      }
  });

  if (isValid) {
      alert('Квиз завершен!');
  } else {
      alert('Пожалуйста, заполните все обязательные поля.');
  }
}
