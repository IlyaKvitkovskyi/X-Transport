// Popup
document.addEventListener('DOMContentLoaded', function () {
  const btns = document.querySelectorAll('.popup-open');
  const popup = document.getElementById('popupWrapper');
  const closeBtn = document.getElementById('closeBtn');
  const htmlElement = document.documentElement;

  btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      htmlElement.classList.add('lock');
      popup.style.display = 'block';
    });
  });

  closeBtn.addEventListener('click', function () {
    htmlElement.classList.remove('lock');
    popup.style.display = 'none';
  });
});

const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');

emailInput.addEventListener('input', function () {
  if (isValidEmail(emailInput.value)) {
    emailError.style.display = 'none';
  } else {
    emailError.style.display = 'block';
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Burger menu
function toggleMenu() {
  let burgerMenu = document.getElementById('burgerMenu');
  burgerMenu.style.display =
    burgerMenu.style.display === 'none' || burgerMenu.style.display === '' ? 'block' : 'none';
}

document.getElementById('burger-btn').addEventListener('click', function () {
  this.classList.toggle('active');

  let burgerMenu = document.getElementById('burgerMenu');
  burgerMenu.classList.toggle('active');

  let header = document.querySelector('.header');
  header.classList.toggle('active');
});

// Accordion
var element = document.querySelector('.info__body--item-hide');
var btn = document.getElementById('btn-open');

if (element && btn) {
  document.getElementById('btn-open').addEventListener('click', function () {
    if (element.classList.contains('active')) {
      element.classList.remove('active');
      btn.innerText = 'Развернуть';
    } else {
      element.classList.add('active');
      btn.innerText = 'Свернуть';
    }
  });
}
