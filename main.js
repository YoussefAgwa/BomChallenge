let input = document.querySelector(`input`);
let checkBtn = document.querySelector(`.check`);
let clearBtn = document.querySelector(`.clear`);
let tasklList = document.querySelector('.list');

let taskArr = [];

checkBtn.onclick = function () {
  if(input.value != "") {
    addTaskToArr(input.value);
    input.value = "";
  }
}

clearBtn.addEventListener(`click` , (e) => {
  localStorage.clear();
  taskArr = []; 
  saveData(taskArr);
  tasklList.innerHTML = "";
})


tasklList.addEventListener(`click` , (e) => {
  if(e.target.textContent === "delete"){
    deleteElement(e.target.parentNode.parentNode.getAttribute(`data-id`));
    e.target.parentNode.parentNode.remove();
  }
})

tasklList.addEventListener(`click`, (e) => {
  if(e.target.textContent === "done") {
    e.target.parentNode.parentNode.classList = `task complete`;
  }
})

if(localStorage.getItem(`tasks`)) {
  taskArr = JSON.parse(localStorage.getItem(`tasks`));
  addElement(taskArr);
}

function addTaskToArr(taskSub) {
  const task = {
    id : Date.now(),
    subject : taskSub,
    done : false
  }
  taskArr.push(task);
  addElement(taskArr);
  saveData(taskArr);
}

function addElement(taskArr) {
  tasklList.innerHTML = "";
  taskArr.forEach((task) => {
    let taskDiv = document.createElement(`div`);
    taskDiv.classList= `task`;
    taskDiv.appendChild(document.createTextNode(task.subject));
    taskDiv.setAttribute(`data-id` , task.id);
    let delBtn = document.createElement(`span`);
    delBtn.classList = `delete material-symbols-outlined`;
    delBtn.textContent = `delete`;
    let controlDiv = document.createElement(`div`);
    controlDiv.classList = `control`;
    let done = document.createElement(`span`);
    done.classList = `done material-symbols-outlined`;
    done.textContent = `done`;
    controlDiv.appendChild(delBtn);
    controlDiv.appendChild(done);
    taskDiv.appendChild(controlDiv);
    tasklList.appendChild(taskDiv);
  })
}



function toggleDone(taskId) {
  taskArr.map((task) => task.id == taskId)
}


function saveData(taskArr) {
  localStorage.setItem(`tasks` , JSON.stringify(taskArr));
}

function deleteElement(taskId) {
  taskArr = taskArr.filter((task) => task.id != taskId); 
  saveData(taskArr);
}