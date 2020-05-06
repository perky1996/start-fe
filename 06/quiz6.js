
var $btn = document.querySelector('#btn');
var $num = document.querySelector('#num');
var $result = document.querySelector('#result');

$btn.addEventListener('click', function() {
    printGugudan($num.value);
})

function printGugudan(number) {
    
    var gugudan = '';

    if (isNaN(number)) {
        alert('숫자를 입력하세요');
    }
    else {
        for (var i = 1; i < 10; i++){
            gugudan += 
    
            `${number} X ${i} = ${number * i}<br>`;
        }    
    }

    $result.innerHTML = gugudan;
}