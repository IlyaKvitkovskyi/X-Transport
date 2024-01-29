// Burger Submenu
function toggleActiveClass(index) {
  var burger = document.getElementById('burger' + index);
  burger.classList.toggle('active');
}

var arrows = document.querySelectorAll('.arrow');

arrows.forEach(function (arrow, index) {
  arrow.addEventListener('click', function () {
    toggleActiveClass(index + 1);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var toggleElements = document.querySelectorAll('.burger__item-top');

  toggleElements.forEach(function(element) {
      element.addEventListener('click', function () {
          this.classList.toggle('active');
      });
  });
});
