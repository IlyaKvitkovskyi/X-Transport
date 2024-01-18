let currentStep = 1;
const totalSteps = 3;

// function updateStepIndicator() {
//   const stepIndicator = document.getElementById('stepIndicator');
//   stepIndicator.textContent = `${currentStep}`;
// }

function nextStep() {
  const currentStepElement = document.getElementById(`step${currentStep}`);
  currentStepElement.classList.remove('active');
  currentStep++;

  if (currentStep <= 3) {
    const nextStepElement = document.getElementById(`step${currentStep}`);
    nextStepElement.classList.add('active');
    updateStepIndicator();
  } else {
    alert('Квиз завершен!');
  }
}

function submitQuiz() {
  // Здесь можно обработать данные квиза, например, отправить на сервер
  alert('Квиз завершен!');
}

// Инициализация
// updateStepIndicator();