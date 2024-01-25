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
