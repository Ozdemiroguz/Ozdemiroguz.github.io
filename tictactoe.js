let playerText = document.getElementById("playerText");
let resetButton = document.getElementById("resetButton");
let gameBoard = document.getElementById("gameBoard");
let boxes = document.querySelectorAll(".box");
let player = { xplayer: [], oplayer: [], turn: "X", win: false }
boxes.forEach(element => {
    element.addEventListener("click", click)
});
const winningCombos = [
    ['1', '2', '3'],
    ['1', '4', '7'],
    ['1', '5', '9'],
    ['2', '5', '8'],
    ['3', '6', '9'],
    ['3', '5', '7'],
    ['4', '5', '6'],
    ['7', '8', '9'],
]

function click(e) {
    if (!(player.xplayer.includes(e.target.id) || player.oplayer.includes(e.target.id))) {

        player.turn == "X" ? player.xplayer.push(e.target.id) : player.oplayer.push(e.target.id)
        document.getElementById(e.target.id).innerText = player.turn
        if (player.xplayer.length > 2 || player.oplayer.length > 2) {

            player.turn == "X" ? check(player.xplayer) : check(player.oplayer);

        }
        else {
            player.turn == "X" ? player.turn = "0" : player.turn = "X";
            playerText.innerText = `${player.turn} Player Turn.`

        }

    }


}
function check(array) {
    winningCombos.forEach(element => {
        if (element.every(i => array.includes(i))) {
            player.win = true;
            element.forEach(element => {
                document.getElementById(element).style.backgroundColor = "#2e2f31"
            });
            playerText.innerText = `${player.turn} Player Won!`
            boxes.forEach(element => {
                element.removeEventListener("click", click)
            });
            return false;
        }


    });
    if ((player.oplayer.length + player.xplayer.length) == 9 && player.win == false)
        playerText.innerText = "Draw!"
    else if (player.win == false) {
        player.turn == "X" ? player.turn = "0" : player.turn = "X";
        playerText.innerText = `${player.turn} Player Turn.`

    }

}


function reset() {
    boxes.forEach(element => {
        element.addEventListener("click", click)
        element.innerHTML = "";
        element.style.backgroundColor = "#393E46"
    });
    player.oplayer = [];
    player.xplayer = [];
    player.turn = "X";
    player.win = false;
    playerText.innerText = "Tic Tac Toe";

}