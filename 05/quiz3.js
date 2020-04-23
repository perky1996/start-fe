function changecolor() {
    var $red = document.querySelectorAll('.box');
    if ($red) {
        for (var i = 0; i < $red.length; i++){
            $red[i].classList.add('red');
        }
    }
}

function addbox() {
    const add = document.createElement('div');
    add.className = 'box';

    document.body.appendChild(add);
}

function deletebox() {
    var $red = document.querySelectorAll('.box');

    $red[$red.length - 1].remove();
}

function addtext() {
    var $red = document.querySelectorAll('.box');
    var $txt = document.querySelector('.txt');
    if ($red) {
        for (var i = 0; i < $red.length; i++){
            $red[i].innerHTML += $txt.value;
        }
    }
}

function reset() {
    var $red = document.querySelectorAll('.box');

    for (var i = $red.length - 1; i >= 0; i--){
        $red[i].remove();
    }
}

function toggle() {
    var $red = document.querySelectorAll('.box');
    if ($red) {
        for (var i = 0; i < $red.length; i++){
            $red[i].classList.toggle('toggle');
        }
    }
}

function addimage() {
    var $red = document.querySelectorAll('.box');
    
    if ($red.length != 0) {
        for (var i = 0; i < $red.length; i++){
            var tag = document.createElement("img");
            tag.setAttribute("src", "https://i.imgur.com/69NjYBH.png");
            $red[i].appendChild(tag);
        }
    }
    else {
        addbox();
        $red = document.querySelectorAll('.box');
        var tag = document.createElement("img");
        tag.setAttribute("src", "https://i.imgur.com/69NjYBH.png");
        $red[0].appendChild(tag);
    }
}


document.querySelector('.add-red').addEventListener('click', changecolor);
document.querySelector('.add-btn').addEventListener('click', addbox);
document.querySelector('.delete-btn').addEventListener('click', deletebox);
document.querySelector('.text-btn').addEventListener('click', addtext);
document.querySelector('.reset-btn').addEventListener('click', reset);
document.querySelector('.toggle-btn').addEventListener('click', toggle);
document.querySelector('.image-btn').addEventListener('click', addimage);
