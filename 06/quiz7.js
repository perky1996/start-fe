var box, bug, point, life;
var width, height, score, chance;
var intervalFunc;
var intervalTime = 1000;

window.onload = function() {
    box = document.getElementsByClassName("box")[0];
    bug = document.getElementById("bug");
    point = document.getElementById("point");
    life = document.getElementById("life");
    width = box.clientWidth - bug.clientWidth;
    height = box.clientHeight - bug.clientHeight;
    score = 0, chance = 10;
    
    bug.addEventListener('click', click);

    intervalFunc = setInterval(function() { 
        notClick() 
    }, 
    intervalTime);
}

function update() {
    point.innerText = score;
    life.innerText = chance;
    bug.style.left = parseInt(Math.random() * (width + 1)) + "px";
    bug.style.top = parseInt(Math.random() * (height + 1)) + "px";
}

function click() {
    score++;
    update();
    clearInterval(intervalFunc);
    intervalFunc = setInterval(function() { 
        notClick() 
    }, 
    intervalTime);
}

function notClick() {
    chance--;
    update();
    if (chance == 0) {
        clearInterval(intervalFunc);
        bug.removeEventListener('click', click);

        alert("gameover");
    }
}