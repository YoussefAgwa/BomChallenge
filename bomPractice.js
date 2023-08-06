let lis = document.querySelectorAll(`li`);
let exp = document.querySelector(`div`);

// localStorage.clear();

if(window.localStorage.getItem("color")){
  exp.style.backgroundColor = localStorage.getItem(`color`);
  lis.forEach(li => {
    li.classList.remove(`active`);
  });
  document.querySelector(`[id="${localStorage.getItem(`color`)}"]`).classList.add(`active`);

}

lis.forEach(li => {
  li.addEventListener(`click` , (e) => {
    // console.log(e.currentTarget.id);
    lis.forEach(li => {
      li.classList.remove(`active`);
    })
      e.currentTarget.classList.add(`active`);
      let exColor = e.currentTarget.id;
      localStorage.setItem(`color`,exColor);
    })
    
  })
  setInterval(function () {
    exp.style.backgroundColor = localStorage.getItem(`color`);
  })
  

