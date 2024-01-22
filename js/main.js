// Burger menu
function toggleMenu() {
  var burgerMenu = document.getElementById('burgerMenu');
  burgerMenu.style.display =
    burgerMenu.style.display === 'none' || burgerMenu.style.display === '' ? 'block' : 'none';
}

document.getElementById('burger').addEventListener('click', function () {
  this.classList.toggle('active');
  document.documentElement.classList.toggle('lock');
});

// Accordion
document.getElementById('btn-open').addEventListener('click', function () {
  var element = document.querySelector('.info__body--item-hide');
  var btn = document.getElementById('btn-open');

  if (element.classList.contains('active')) {
    element.classList.remove('active');
    btn.innerText = 'Развернуть';
  } else {
    element.classList.add('active');
    btn.innerText = 'Свернуть';
  }
});



