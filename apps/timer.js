//timer element
let timer = document.getElementById("timer");
let settings = document.getElementById("settings");
let timerMenu = document.getElementById("timerMenu")
let timerMenuTemp = 0;
let settingsData = {
    pomodro: 0.1, short: 5, long: 10, volume: 50,
    alert: new Audio("alerts/Alarm Kebakaran.mp3"), alertTemp: "", alertValue: "alerts/Alarm Kebakaran.mp3", finish: false, auto: false,
    pause: "",
}
let time = 1800;
let timerScreen = document.getElementById("timeScreen");
let pauseReset = document.getElementById("pauseReset")
let duration;
let startButton = document.getElementById("startButton");
let playPause = document.getElementById("playPause");
let resetButton = document.getElementById("resetButton")
let alarm = document.getElementsByTagName("alarm");
let save = document.getElementById("save");
//timer event 
document.getElementById("alerts").addEventListener("change", playAlarm)
startButton.addEventListener("click", timerStart);
playPause.addEventListener("click", timerPause);
resetButton.addEventListener("click", timerReset);
save.addEventListener("click", saveSettings)
//taskqueto element
let taskQueto = document.getElementById("taskQueto")
let taskQuetoMenuTemp = 0;
let taskForm = document.getElementById("taskForm")
let taskList = document.getElementById("taskList");
let tasks = document.getElementById("tasks");

let motivationQueto = document.getElementById("motivationQueto");
let taskQuetoMenu = document.getElementById("taskQuetoMenu");
let quetoInputForm = document.getElementById("quetoInputForm")
let spotify = document.getElementById("spotify");
let checkButton = document.getElementById("check");
let deleteButton = document.getElementById("delete")

quetoInputForm.addEventListener("submit", addQueto);
taskForm.addEventListener("submit", addTask)
getTasks();
setSettings();
quetoAnimate()
console.log(timerMenu.children[0]);
for (let index = 0; index < 4; index++) {
    console.log("z")
}
function addTask(e) {
    let input = e.target.children[0].children[0].value;
    if (!input == "") {
        let temp = document.getElementById("taskItem");
        let taskItem = temp.cloneNode(true);
        taskItem.children[0].innerText = input;
        taskItem.children[1].children[0].addEventListener("click", check)
        taskItem.children[1].children[1].addEventListener("click", remove)
        taskItem.style.display = "flex"

        taskList.appendChild(taskItem);
        storeTaskInLocalStorage(input);

    }

    e.preventDefault()
}
function addQueto(e) {
    let input = e.target.children[0].children[0].value;
    if (!input == "") {
        document.getElementById("queto").innerText = input;
    }
    e.preventDefault()
}
// Wrap every letter in a span
function quetoAnimate() {
    var textWrapper = document.querySelector('.ml3');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: true })
        .add({
            targets: '.ml3 .letter',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: (el, i) => 150 * (i + 1)
        }).add({
            targets: '.ml3',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 10000
        });
}
function getMenuScreenTime(index) {
    timerMenu.children[timerMenuTemp].children[1].style.width = "0"
    timerMenu.children[index].children[1].style.width = "100%"
    timerMenuTemp = index;

    if (index == 0) {
        time = settingsData.pomodro * 60
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        minutes = minutes < 10 ? ('0' + minutes) : minutes
        seconds = seconds < 10 ? ('0' + seconds) : seconds
        timerScreen.innerText = `${minutes}:${seconds}`;
        timer.style.display = "flex";
        settings.style.display = "none";


    } if (index == 1) {
        time = settingsData.short * 60
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        minutes = minutes < 10 ? ('0' + minutes) : minutes
        seconds = seconds < 10 ? ('0' + seconds) : seconds
        timerScreen.innerText = `${minutes}:${seconds}`;
        timer.style.display = "flex";
        settings.style.display = "none";


    } if (index == 2) {
        time = settingsData.long * 60
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        minutes = minutes < 10 ? ('0' + minutes) : minutes
        seconds = seconds < 10 ? ('0' + seconds) : seconds
        timerScreen.innerText = `${minutes}:${seconds}`;
        timer.style.display = "flex";
        settings.style.display = "none";


    } if (index == 3) {
        timer.style.display = "none";
        settings.style.display = "block";

    }
}
function getMenuScreenTaskQueto(index) {
    taskQuetoMenu.children[index].children[1].style.width = "100%"
    taskQuetoMenu.children[taskQuetoMenuTemp].children[1].style.width = "0"
    taskQuetoMenuTemp = index;
    if (index == 0) {
        tasks.style.display = "flex"
        motivationQueto.style.display = "none";
        spotify.style.display = "none"
    } if (index == 1) {
        tasks.style.display = "none"
        motivationQueto.style.display = "flex";
        spotify.style.display = "none"
    } if (index == 2) {
        tasks.style.display = "none"
        motivationQueto.style.display = "none";
        spotify.style.display = "flex"
    }
}
function timerStart() {
    startButton.style.display = "none"
    pauseReset.style.display = "flex"
    for (let i = 0; i < 4; i++) {
        timerMenu.children[i].disabled = true;
    }
    duration = setInterval(timerCountdown, 1000);
    timer.children[0].children[1].innerText = "Just Focus!";
    timer.children[0].children[1].style.display = "block";

}
function timerReset() {
    getMenuScreenTime(timerMenuTemp)
    startButton.style.display = "flex"
    pauseReset.style.display = "none"
    timer.children[0].children[1].style.display = "none";

    clearInterval(duration)
    for (let i = 0; i < 4; i++) {
        timerMenu.children[i].disabled = false;
    }
}
function timerPause() {
    clearInterval(duration);
    playPause.className == "bx bx-pause" ? (playPause.className = "bx bx-play", clearInterval(duration))
        : (playPause.className = "bx bx-pause", duration = setInterval(timerCountdown, 1000))
}
function timerCountdown() {

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    minutes = minutes < 10 ? ('0' + minutes) : minutes
    seconds = seconds < 10 ? ('0' + seconds) : seconds
    timerScreen.innerText = `${minutes}:${seconds}`;
    time--;
    if (time == 0) {
        timerReset();
        timer.children[0].children[1].style.display = "block";
        timer.children[0].children[1].innerText = "Take a break";
        timerMenu.children[timerMenuTemp].children[1].style.width = "0"
        timerMenu.children[1].children[1].style.width = "100%"
        time = settingsData.short * 60
        settingsData.short < 10 ? timerScreen.innerText = `0${settingsData.short}:00` : timerScreen.innerText = `${settingsData.short}:00`
        if (settingsData.finish)
            settingsData.alert.play();

        if (settingsData.auto && timerMenuTemp == 0) {

            startButton.style.display = "none"
            pauseReset.style.display = "flex"
            duration = setInterval(timerCountdown, 1000)

        }
        else {
            console.log("z")
        }
        timerMenuTemp = 1;

        /* startButton.style.display = "flex"
         pauseReset.style.display = "none"
         timer.children[0].children[1].innerText = "Take a break";
         time = settingsData.short * 60
                  settingsData.alert.play();

         settingsData.short < 10 ? timerScreen.innerText = `0${settingsData.short}:00` : timerScreen.innerText = `${settingsData.short}:00`
         timerMenu.children[timerMenuTemp].children[1].style.width = "0"
         timerMenu.children[1].children[1].style.width = "100%"
         timer.style.display = "flex";
         settings.style.display = "none";*/

    }
}
function getSetting() {
    settingsData.pomodro = parseFloat(document.getElementById("pomodro").value);
    settingsData.short = parseFloat(document.getElementById("short").value);
    settingsData.long = parseFloat(document.getElementById("long").value);
    settingsData.volume = parseFloat(document.getElementById("volumeInput").value);
    settingsData.alert = new Audio(document.getElementById("alerts").value)
    setSettings.alertValue = document.getElementById("alerts").value
    settingsData.finish = document.getElementById("switch").checked
    settingsData.auto = document.getElementById("switch1").checked
    console.log(settingsData)

}
function playAlarm() {
    if (settingsData.alertTemp.tagName == "AUDIO")
        pauseAlarm()

    settingsData.alertTemp = new Audio(document.getElementById("alerts").value)
    settingsData.alertTemp.play();

}
function pauseAlarm() {
    settingsData.alertTemp.pause();
    settingsData.alertTemp = "";
}
function saveSettings() {
    console.log("z")
    getSetting();
    localStorage.setItem("settingsData", JSON.stringify(settingsData));
    setSettings();
}
function setSettings() {
    if (JSON.parse(localStorage.getItem('settingsData')) == null)
        getSetting()
    else
        settingsData = JSON.parse(localStorage.getItem('settingsData')) == null
    document.getElementById("pomodro").value = settingsData.pomodro;
    document.getElementById("short").value = settingsData.short;
    document.getElementById("long").value = settingsData.long;
    document.getElementById("volumeInput").value = settingsData.volume;
    document.getElementById("alerts").value = settingsData.alertValue;
    settingsData.alert = new Audio(settingsData.alertValue);
    document.getElementById("switch").checked = settingsData.finish;
    document.getElementById("switch1").checked = settingsData.auto;
    console.log(settingsData);
}
function check(e) {

    console.log()
    e.target.parentElement.parentElement.children[0].style.textDecoration = "line-through"
}
function remove(e) {
    e.target.parentElement.parentElement.remove()
    removeTaskFromLocalStorage(e.target.parentElement.parentElement)
}
function storeTaskInLocalStorage(task) {
    let tasks;
    //for get array and update
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function (task, index) {
        console.log(taskItem.children[0].innerText);
        console.log(task);
        if (taskItem.children[0].innerText == task) {
            console.log("x");
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function getTasks() {
    let tasks;
    //for get array and update
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function (task) {
        let temp = document.getElementById("taskItem");
        let taskItem = temp.cloneNode(true);
        taskItem.children[0].innerText = task;
        taskItem.children[1].children[0].addEventListener("click", check)
        taskItem.children[1].children[1].addEventListener("click", remove)
        taskItem.style.display = "flex"

        taskList.appendChild(taskItem);
    })
}