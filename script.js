const holes = $('.hole');
const scoreBoard = $('.score');
const moles = $('.mole');

function randomise () {
    return x = 1+Math.floor(Math.random()*6);
}

randomise();

function startGame() {
    moles.css("display", "block");
    moleUp();
    countUp();
    score=0;
    scoreBoard.html(score);
}

function moleUp() {
    setTimeout(moleUp, 1000);
    setTimeout(moleDown, 1500);
    setTimeout(randomise, 1500)
    $('.hole' + x).addClass('up');
}

function moleDown() {
    $('.hole' + x).removeClass('up');
}

let sec=11;
let score = 0;

function countUp() {
    $("#startGame").css("display", "none");
    sec--;
    t = setTimeout(countUp, 1000);
    $('#sec').html(sec);
    if (sec === 0) {
        moles.css("display", "none");
        clearTimeout(t);
        $("#startGame").css("display", "block");
        sec=11;
    }
}

$(moles).click(function () {
    score++;
    scoreBoard.html(score);
});