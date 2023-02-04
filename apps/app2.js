const start = document.getElementById('start-form')
const game = document.getElementById('game-form');
start.addEventListener('submit', startGame);
game.addEventListener('submit', check);
let randomnumber;
let leftguess = 10;
function startGame(e) {
    const min = document.getElementById('min');
    const max = document.getElementById('max');
    if (min.value == '' || max.value == '') {

        console.log("chek your number")
        document.getElementById("empty-number").style.display = "block";
        setTimeout(clearAlert, 2500, "empty-number")
    }
    else {
        min.disabled = true;
        max.disabled = true;
        document.getElementById("start-text").style.display = "none"
        document.getElementById("start-button").style.display = "none"
        game.className = "game-input";
        randomnumber = Math.floor(Math.random() * (parseInt(max.value) - parseInt(min.value))) + parseInt(min.value);
    }
    e.preventDefault();
}
function check(e) {

    const number = document.getElementById("guess-number");
    if (number.value === '') {
        document.getElementById("empty-number").style.display = "block";
        setTimeout(clearAlert, 2500, "empty-number")

    }
    else {
        if (parseInt(number.value) == randomnumber) {
            document.getElementById('danger').style.display = "none";
            document.getElementById('succes').style.display = "block";
            document.getElementById("guess-input").style.display = "none";
            document.getElementById("reset-button").className = "btn btn-danger mt-4";
            document.getElementById("gues").textContent = randomnumber;
        }
        else {
            document.getElementById('danger').style = "display";
            leftguess--;
            document.getElementById("guesses-left").textContent = leftguess;
            if (leftguess == 0) {
                document.getElementById('danger').textContent = "GAME OVER!!!"
                document.getElementById("guess-input").style.display = "none";
                document.getElementById("reset-button").className = "btn btn-danger mt-4";
                document.getElementById("gues").textContent = randomnumber;

            }
            console.log(number.value);
            console.log("checking ...");
        }

    }
    e.preventDefault();

}
function clearAlert(alert) {
    console.log("clearing")
    document.getElementById(alert).style.display = "none";
}