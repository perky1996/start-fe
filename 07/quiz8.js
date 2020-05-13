var $btn = document.querySelector('#btn');
var $min = document.querySelector('#min');
var $max = document.querySelector('#max');
var $box = document.querySelector('#box');
var start;
var ranNum;

$btn.addEventListener('click', function () {
  ranNum =
    Math.floor(
      Math.random() * (parseInt($max.value) - parseInt($min.value) + 1),
    ) + 1;

  start = ranNum - 25;
  $btn.disabled = true;
  var setInt = setInterval(function () {
    start++;
    $box.innerHTML = start;
    if (start == ranNum) {
      $btn.disabled = false;
      clearInterval(setInt);
    }
  }, 100);
});
