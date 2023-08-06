// let input = document.querySelector(`input`);
// let checkBtn = document.querySelector(`.check`);
// let taskList = document.querySelector(`.list`);
// let clearBtn = document.querySelector(`.clear`);
// let tasksArr = [];

// if(localStorage.getItem(`tasks`)) {
//   tasksArr = JSON.parse(localStorage.getItem(`tasks`));
//   addElementToPage(tasksArr);
// }
// checkBtn.addEventListener(`click` , (e) => {
//   if(input.value !=="") {
//     addElementToArr(input.value);
//     input.value = "";
//     addElementToPage(tasksArr);
//   }
// });

// clearBtn.addEventListener(`click` , (e) => {
//   let sure = prompt(`Do You Want To Clear The List ???` , `Type Y or N`);
//   if (sure.toUpperCase() == `Y` ){
//     localStorage.clear();
//     location.reload();
//     }
// })


// taskList.addEventListener(`click` , (e) => {
//   if(e.target.classList.contains(`delete`)) {
//     removeData(e.target.parentElement.getAttribute("data-id"));
//     e.target.parentElement.remove();
//   }
// })


// function addElementToArr(taskText) {
//   const task = {
//     id : Date.now(),
//     title : taskText,
//   }
//   tasksArr.push(task);
//   addElementToPage(tasksArr);
//   saveData(tasksArr);
// };

// function addElementToPage (tasksArr) {
//   taskList.innerHTML = "";
//   tasksArr.forEach((task) => {
//     let taskDiv = document.createElement(`div`);
//     taskDiv.classList = `task`;
//     taskDiv.setAttribute(`data-id`, task.id);
//     taskDiv.appendChild(document.createTextNode(task.title));
//     let delBtn = document.createElement(`span`);
//     delBtn.classList = `material-symbols-outlined delete`;
//     delBtn.textContent = `delete`;
//     taskDiv.appendChild(delBtn);
//     taskList.appendChild(taskDiv);
//   })
// }

// function saveData(tasksArr) {
//   localStorage.setItem(`tasks`, JSON.stringify(tasksArr));
// }

// function removeData(taskId) {
//   tasksArr = tasksArr.filter((task) => task.id != taskId );
//   saveData(tasksArr);
// }
