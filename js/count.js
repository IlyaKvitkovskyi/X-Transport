// Функция для анимации чисел
function animateValue(id, start, end, duration) {
  let obj = document.getElementById(id);
  let range = end - start;
  let current = start;
  let increment = end > start ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));
  let timer = setInterval(function () {
    current += increment;
    obj.innerHTML = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

animateValue('number', 0, 6, 2000);
animateValue('number-2', 14000, 15000, 30);
animateValue('number-3', 1000, 2000, 30);