//board
var blocksize = 25;
var rows = 20;
var cols = 20;
var board;
var context;
//score
let player = { score: 0, name: "", date: "" };

//snake head
var snakeX = blocksize * 5;
var snakeY = blocksize * 5;

var velocityX = 0;
var velocityY = 0;

var snakeBoddy = [];
//food
var foodX;
var foodY;

function setParam() {
    if (screen.width < 767) {
        blocksize = 20;
        rows = 15;
        cols = 15;

        document.getElementById('scoreTable').style.position = "static";
        document.getElementById("control").style.marginTop = "5vh"
        document.getElementById("score").style.position = "static";
        document.querySelector("#gameOver div").style.width = "300px"
        document.querySelector("#gameOver div").style.height = "290px"
        document.querySelector("#gameOver div").style.marginTop = "-8vh"

    }
    else {

        blocksize = 25;
        rows = 20;
        cols = 20;

    }
    snakeX = blocksize * 5;
    snakeY = blocksize * 5;

}
var gameOver = false
//load func
window.onload = function () {
    document.querySelector('#gameOver-form').addEventListener('submit', Over)

    setParam();
    setInTable();
    var buttons = document.querySelectorAll("button");
    board = document.getElementById("board");
    board.height = rows * blocksize;
    board.width = cols * blocksize;
    context = board.getContext("2d");
    placeFood();
    document.addEventListener("keyup", changeDirection);

    buttons.forEach(function (button) {
        button.addEventListener("click", changeDirectionMobile);
    })


    setInterval(update, 1000 / 10)

    update();
}
//upade func
function update() {
    if (gameOver) {

        return;
    }

    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = "red";
    context.fillRect(foodX, foodY, blocksize, blocksize);


    if (snakeX == foodX && snakeY == foodY) {
        snakeBoddy.push([foodX, foodY]);
        player.score++;
        document.querySelector("#score h1").innerText = player.score;
        placeFood();
    }

    for (let i = snakeBoddy.length - 1; i > 0; i--) {
        snakeBoddy[i] = snakeBoddy[i - 1];
    }
    if (snakeBoddy.length) {
        snakeBoddy[0] = [snakeX, snakeY];
    }

    context.fillStyle = "lime";
    snakeX += velocityX * blocksize;
    snakeY += velocityY * blocksize;

    context.fillRect(snakeX, snakeY, blocksize, blocksize);


    for (let i = 0; i < snakeBoddy.length; i++) {

        context.fillRect(snakeBoddy[i][0], snakeBoddy[i][1], blocksize, blocksize);
        context.bor

    }
    if (snakeX < 0) {
        snakeX = (cols - 1) * blocksize;
        velocityX = -1;
    }

    if (snakeX >= cols * blocksize) {
        snakeX = 0;
        velocityX = 1;

    }

    if (snakeY < 0) {
        snakeY = (rows - 1) * blocksize;
        velocityY = -1;
    }

    if (snakeY >= rows * blocksize) {
        snakeY = 0;
        velocityY = 1;
    }
    //Game over
    for (let i = 0; i < snakeBoddy.length; i++) {
        if (snakeX == snakeBoddy[i][0] && snakeY == snakeBoddy[i][1]) {
            document.getElementById("gameOver").style.visibility = "visible";
            gameOver = true;
        }
    }
}
function placeFood() {
    foodX = blocksize * Math.floor(Math.random() * cols);
    foodY = blocksize * Math.floor(Math.random() * rows);

}
function changeDirection(e) {

    if (e.code == 'ArrowUp' && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.code == 'ArrowDown' && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    }
    else if (e.code == 'ArrowRight' && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
    else if (e.code == 'ArrowLeft' && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    }

}
function changeDirectionMobile(e) {

    if (e.target.id == 'up' && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.target.id == 'down' && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    }
    else if (e.target.id == 'right' && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
    else if (e.target.id == 'left' && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    }

}
function Over(e) {
    document.querySelector('#saveScore').style.display = "none";
    let name = document.getElementById("name").value;
    if (name == '')
        document.querySelector("#overText p").innerText = "Please enter a name!";
    else {
        player.name = name;
        player.date = new Date().getDate() + '.' + new Date().getMonth() + '.' + new Date().getFullYear();
        console.log(player);
        setInLocalStorage(player);

    }
    e.preventDefault();

}
function setInLocalStorage(player) {
    let players;
    //for get array and update
    if (localStorage.getItem('players') === null) {
        players = [];
        players.push(player);
        console.log(players);
    }
    else {
        players = JSON.parse(localStorage.getItem('players'));
        for (let i = 0; i < players.length; i++) {
            if (player.score > players[i].score) {
                if (player.name == players[i].name) {
                    players[i].score = player.score;
                }
                else {
                    players.splice(i, 0, player);
                    console.log(players);
                }
                i = players.length;

            }
            else if (i == players.length - 1) {
                if (player.name == players[i].name) {
                    players[i].score = player.score;

                }
                else {
                    players.push(player);
                    console.log(players);
                }

                i = players.length;
            }

        }
    }
    console.log("x");
    localStorage.setItem('players', JSON.stringify(players));
    setInTable();
}

function setInTable() {
    let players;
    //for get array and update
    if (localStorage.getItem('players') === null) {
        players = [];
    }
    else {
        players = JSON.parse(localStorage.getItem('players'));
    }
    document.getElementById('tableBoddy').replaceChildren();
    for (let i = 0; i < players.length; i++) {

        let table = document.createElement('tr');
        let temp = document.createElement('th');
        temp.innerText = i + 1;
        table.appendChild(temp);
        temp = document.createElement('td');
        temp.innerText = players[i].date;
        table.appendChild(temp);
        temp = document.createElement('td');
        temp.innerText = players[i].name;
        table.appendChild(temp);
        temp = document.createElement('td');
        temp.innerText = players[i].score;
        table.appendChild(temp);
        document.getElementById('tableBoddy').appendChild(table);

        if (i == 4)
            i = players.length
    }
}
