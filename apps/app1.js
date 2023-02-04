//Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load all event listeners
loadEventListeners();
//Load all event listeners
function loadEventListeners() {
    //dom load event
    document.addEventListener('DOMContentLoaded', getTasks);
    //add task 
    form.addEventListener('submit', addTask);
    //remove task event 
    taskList.addEventListener('click', removeTask);
    //clear tasks
    clearBtn.addEventListener('click', clearTasks);
    //task filter
    filter.addEventListener('keyup', taskFilter);
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
        const li = document.createElement('li');
        //Add class
        li.className = 'collection-item';

        //create text node
        li.appendChild(document.createTextNode(task));
        //create new link element 
        const link = document.createElement('a');
        //add  class
        link.className = 'delete-item secondary-content ';
        //add icon html
        link.innerHTML = ' <i class="fa fa-remove"></i>';
        //append the link to li
        li.appendChild(link);
        //append li to ul
        taskList.appendChild(li);
        //clear input
        taskInput.value = '';
    })
}
//Add task
function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a task');
    }
    else {
        //create li element
        const li = document.createElement('li');
        //Add class
        li.className = 'collection-item';

        //create text node
        li.appendChild(document.createTextNode(taskInput.value));
        //create new link element 
        const link = document.createElement('a');
        //add  class
        link.className = 'delete-item secondary-content ';
        //add icon html
        link.innerHTML = ' <i class="fa fa-remove"></i>';
        //append the link to li
        li.appendChild(link);

        //append li to ul
        taskList.appendChild(li);
        storeTaskInLocalStorage(taskInput.value);
        //clear input
        taskInput.value = '';
    }
    //removetask
    e.preventDefault();
}

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure?')) {
            e.target.parentElement.parentElement.remove();

            // Remove from LS
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
    e.preventDefault();
}
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function (task, index) {
        console.log(taskItem.textContent);
        task = task + ' ';
        console.log(task);
        if (taskItem.textContent === task) {
            console.log("x");
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
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
function clearTasks() {
    //taskList.innerHTML = "";
    while (taskList.firstChild) {
        taskList.firstChild.remove();
        localStorage.clear();
    }
}
function taskFilter(e) {
    const text = e.target.value.toUpperCase();
    document.querySelectorAll('.collection-item').forEach
        (function (task) {
            const item = task.firstChild.textContent;
            if (item.toUpperCase().indexOf(text) != -1) {
                task.style.display = 'block';
            }
            else {
                task.style.display = 'none';
            }
        })
}