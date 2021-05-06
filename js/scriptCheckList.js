// code to add, check, uncheck and remove list items

const input = document.getElementById("inputNewTask");
const list = document.getElementById("lijstTemplate");

//variables met classnames
const CHECK = "cDone"
const UNCHECK = "circle"
const LINE_THROUGH = "tStrike"
const FILLED = "filled"

let LIST, id;


// add item function
function addToDo(toDo, id, done, trash){
  
  if(trash){return;}

  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH: "text";

  const item = `  <li class="itemTemplate">
                      <div>
                          <i class="${DONE}" job="complete" id="${id}"></i>
                          <p class="${LINE}">${toDo}</p>
                      </div>
                      <i class="delete" job="delete" id="${id}"></i>
                  </li>`;
  
  const position = "beforeend";

  list.insertAdjacentHTML(position, item);

}


// add list item when enter key is pressed
document.addEventListener("keypress", function(event){
 
  if(13 == event.keyCode){

    const toDo = input.value;

    if(toDo){
      addToDo(toDo, id, false, false);

      id++;
      
      //clear input after enter is pressed
      input.value = ""
    }
  }
})


//complete list item
function completeToDo(element){
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
  element.parentNode.parentNode.classList.toggle(FILLED)
}


// remove list item
function removeToDo(element){
  element.parentNode.parentNode.removeChild(element.parentNode);
}


// target list items created dynamically
list.addEventListener("click", function(event){
  const element = event.target;
  // check if item clicked is complete or delete
  const elementJob = element.attributes.job.value;

  if(elementJob == "complete"){
    completeToDo(element);
  }else if(elementJob == "delete"){
    removeToDo(element);
  }
})

//voor een groot deel van deze code is een bron gebruikt: https://www.youtube.com/watch?v=b8sUhU_eq3g&t=936s