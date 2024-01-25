
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
