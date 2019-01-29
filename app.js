var wastEggs = 9;
//var wasteEggs = document.getElementById('waste-Eggs');
var left = 10;
var screenHeight = document.body.clientHeight;
var imagecontain = document.getElementById('imagecontain');
var h1 = document.getElementById('score');
var score = 0;
function dropegg() {
    var wasteEggs = document.getElementsByClassName('waste-egg');
    var currentPositionTop = 0;
    var currentpositionleft = Math.floor(Math.random() * (document.body.clientWidth - 60));
    var img = document.createElement('img');
    img.setAttribute('src', 'http://pngimg.com/uploads/egg/egg_PNG40798.png');
    img.setAttribute('class', 'image');
    img.style.left = currentpositionleft + 'px';
    imagecontain.appendChild(img);

    var timer = setInterval(function () {
        img.style.top = currentPositionTop++ + 'px';
        if (currentPositionTop === (document.body.clientHeight - 100)) {
            var eggLeft = Number(img.style.left.replace('px', ''));
            if (eggLeft > left && eggLeft < (left + 100)) {
                imagecontain.removeChild(img);
                score = score + 10;
                h1.innerHTML = ' score ' + score;
                console.log('score update!');
            }
        }
        if (currentPositionTop === screenHeight) {
            clearInterval(timer);
            imagecontain.removeChild(img);
            wasteEggs[wastEggs].src = 'broken-egg.png.png';
            wasteEggs[wastEggs].style.height = '40px';
            wasteEggs[wastEggs].style.width = '40px';
            wastEggs--;
            if (wastEggs === -1) {
                alert('Game over!!');
                window.location.reload();
            }
        }


    }, 0);
}
dropegg();
setInterval(dropegg, 1000);
var basket = document.getElementById('basket');
function Moveleft() {
    if (left >= 0) {
        left = left - 20;
        basket.style.left = left + 'px';
    }
}
function Moveright() {
    if (left <= document.body.clientWidth - 100) {
        left = left + 20;
        basket.style.left = left + 'px';
    }
}
document.onkeydown = positionchange;
function positionchange(e) {
    if (e.keyCode == '37') {
        Moveleft();
    }
    else if (e.keyCode == '39') {
        Moveright();
    }
}