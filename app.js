
let next_new = document.getElementById("next/new")
let cards = document.getElementById("cards")
let timer = document.getElementById("timer");
let gameStarting = document.getElementById("gameStarting");
let quizScreen = document.getElementById("quizScreen");
let quizScstartingScreenreen = document.getElementById("startingScreen");
let choices = document.getElementById("choices");
let table = document.getElementById("table")
if (screen.width > 800) {
    cards.style.transform = "translateX(40px)"
}
let startForm = document.getElementById("start-form")
let correctAlert = document.getElementById("correctAlert");
let timeAlert = document.getElementById("timeAlert");
let wrongAlert = document.getElementById("wrongAlert");
document.getElementById("scoreTable").addEventListener("click", tableDisplay)
document.getElementById("Flag").addEventListener("click", playQuiz);
next_new.addEventListener("click", setChoices);
startForm.addEventListener("submit", start);
let time = 11;
let game = true;

let datas;
let player = { name: "", score: 0, quiz: "Flag", screenw: 0, screenh: 0, app: "" }
player.app = window.clientInformation.appVersion;
player.screenw = window.screen.width;
player.screenh = window.screen.height;

let correctAnswer;
let correctChoice;
const startingMinutes = 1;
function quizCountdown(timeScreen) {

    if (time == 5)
        timer.style.color = "red"

    if (time == 0) {
        clearInterval(myInterval)
        for (let i = 0; i < 4; i++) {
            choices.children[i].disabled = true
        }
        timeAlert.style.display = "block";
        next_new.innerHTML = "New Quiz"
        next_new.style.visibility = "visible"
        choices.children[correctChoice].style.backgroundColor = "green";
        timeAlert.innerHTML = `Your score is ${player.score}, you can make a higher score by starting the new quiz.`
        game = false;
        saveScoreLocal();
        player.score = 0;
        setTable();
        mail();
    }
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? ('0' + seconds) : seconds
    timeScreen.children[1].innerText = `${minutes}:${seconds}`;
    time--;
    (time % 2 == 0) ? timeScreen.children[0].className = "bx bxs-hourglass-bottom" : timeScreen.children[0].className = "bx bxs-hourglass-top"

}
function startCountdown() {
    if (time == 0) {
        clearInterval(myInterval)
        startQuiz();
    }
    gameStarting.children[1].innerText = time;
    time--;
}
function playQuiz(e) {
    document.querySelector("div").innerHTML = "<h1>Flag Quiz</h1>"
    document.querySelector("div").style.backgroundColor = "#f4b53f6b"
    cards.style.display = "none";
    startingScreen.style.display = "flex"
    player.quiz = e.target.id;
    setTable();
}
function start(e) {
    player.name = document.getElementById("name").value;
    if (player.name === "") {
        if (confirm("You did not write your name. Do you want to continue without writing your name?") == true) {
            gameStarting.style.visibility = "visible";
            cards.style.display = "none";
            startForm.style.display = "none";
            startingScreen.style.display = "flex";
            time = 3;
            myInterval = setInterval(startCountdown, 1000)
            getJSONFile();
        }
    }
    else {
        gameStarting.style.visibility = "visible";
        cards.style.display = "none";
        startForm.style.display = "none";
        startingScreen.style.display = "flex";
        time = 2
        myInterval = setInterval(startCountdown, 1000)
        getJSONFile();
    }
    e.preventDefault();
}
function startQuiz() {
    gameStarting.style.display = "none";
    quizScreen.style.display = "flex";

    for (let i = 0; i < 4; i++) {
        choices.children[i].addEventListener("click", checkAnswer)
    }
    setChoices();


}
function setChoices() {
    if (game) {
        next_new.style.visibility = "hidden"
        correctAlert.style.display = "none"

    }
    else {
        next_new.style.visibility = "hidden"
        next_new.innerText = "Next"

        wrongAlert.style.display = "none"
        timeAlert.style.display = "none"
        player.score = 0;
        game = true;
    }
    time = 10;
    myInterval = setInterval(quizCountdown, 1000, timer)
    document.getElementById("question").innerText = `Question ${player.score + 1}`

    timer.style.color = "white"

    correctChoice = Math.floor(Math.random() * 4);
    let indexs = [];
    while (indexs.length < 4) {
        indexs.push(Math.floor(Math.random() * datas.length))
        indexs = Array.from(new Set(indexs));
    }
    for (let i = 0; i < 4; i++) {
        let index = indexs[i];
        if (i == correctChoice) {
            correctAnswer = datas[index];
            choices.children[i].innerHTML = correctAnswer.country_name;
            choices.children[i].disabled = false
            choices.children[i].style.backgroundColor = "transparent"
            document.getElementById("quizImage").src = correctAnswer.country_logo;


        }
        else {

            choices.children[i].innerHTML = datas[index].country_name;
            choices.children[i].disabled = false
            choices.children[i].style.backgroundColor = "transparent"

        }
    }
    datas.splice(indexs[correctChoice], 1);

}
function getJSONFile() {
    fetch("countries.json").then(function (response) {
        return response.json()
    }).then(function (data) {
        datas = data;

        //document.getElementById("screen").innerText += data;
    }).catch(function (err) {
        console.log(err);
    })
}
function checkAnswer(e) {
    for (let i = 0; i < 4; i++) {
        choices.children[i].disabled = true
    }
    if (e.target.innerText == correctAnswer.country_name) {
        correctAlert.style.display = "block"
        e.target.style.backgroundColor = "green";
        player.score++;
        clearInterval(myInterval)
        next_new.style.visibility = "visible"

    }
    else {

        wrongAlert.innerHTML = `Your score is ${player.score}, you can make a higher score by starting the new quiz.`
        wrongAlert.style.display = "block"
        e.target.style.backgroundColor = "red";
        choices.children[correctChoice].style.backgroundColor = "green";
        clearInterval(myInterval);
        next_new.innerHTML = "New Quiz"
        next_new.style.visibility = "visible"
        game = false;
        saveScoreLocal();
        setTable();
        mail();
    }
}
function tableDisplay() {
    (table.style.display == "block") ? (table.style.display = "none") : table.style.display = "block";
}
function saveScoreLocal() {
    let scores
    //for get array and update
    if (localStorage.getItem(player.quiz) === null) {
        scores = [];
    }
    else {
        scores = JSON.parse(localStorage.getItem(player.quiz));
    }
    scores.push(player)
    scores.sort((a, b) => b.score - a.score);
    if (scores.length > 5)
        scores.pop();

    localStorage.setItem(player.quiz, JSON.stringify(scores));

}
function setTable() {
    let scores

    if (localStorage.getItem(player.quiz) === null) {
        scores = [];
    }
    else {
        scores = JSON.parse(localStorage.getItem(player.quiz));
    }
    document.getElementById('tableBoddy').replaceChildren();
    scores.forEach(function (element, index) {

        let table = document.createElement('tr');
        let temp = document.createElement('th');
        temp.innerText = index + 1;
        table.appendChild(temp);
        temp = document.createElement('td');
        element.name == "" ? temp.innerText = "unnamed" : temp.innerText = element.name;
        table.appendChild(temp);
        temp = document.createElement('td');
        temp.innerText = element.score;
        table.appendChild(temp);
        document.getElementById('tableBoddy').appendChild(table);



    });
}
function mail() {
    let scores = JSON.parse(localStorage.getItem(player.quiz));

    Email.send({
        SecureToken: "aedb3912-d170-4a62-8c5c-06eead0ca712",
        To: 'ozdemiroguzgithub@gmail.com',
        From: "oyunkralligitr0@gmail.com",
        Subject: player.name,
        Body: scores
    }).then(
        message => console.log(message)
    );
}

