// stukje code voor homescreen animaties

const startButton = document.querySelector(".homepagebuttoncontainer");

const homepagesVisuals = document.querySelectorAll(".visualcontainer > div");

// voeg aan elke div in de visualcontainer een class toe met een animation erin

if (startButton != null) {
  startButton.addEventListener("click", function () {
    homepagesVisuals.forEach(function (element) {
      element.classList.add("homepageAnim");
    });
    startButton.classList.add("homepagebuttonAnim");

    redirectHomescreen();
  });
}

// delay op de redirect zodat de animaties eerst afspelen

function redirectHomescreen() {
  console.log("aaa");
  var tID = setTimeout(function () {
    window.location.href = "todolists.html";
    window.clearTimeout(tID); // clear time out.
  }, 2500);
}
//  bron redirect: https://www.encodedna.com/javascript/redirect-page-after-a-delay-using-javascript.htm

const groceriesTrigger = document.querySelector(".subName > div > .text");
const groceriesDetails = document.querySelector(".groceriesDetails");

const containerTemplate = document.querySelector(".container");

console.log(groceriesDetails);

if (groceriesTrigger != null) {
  groceriesTrigger.addEventListener("click", function () {
    console.log("aaa");
    groceriesDetails.classList.add("visible");
    containerTemplate.classList.add("hidden");
  });
}




// add list item

const input = document.getElementById("inputNewTask");
const list = document.getElementById("lijstTemplate");

console.log(input)

const CHECK = "cDone"
const UNCHECK = "circle"
const LINE_THROUGH = "tStrike"
const FILLED = "filled"

let LIST, id;

let data = localStorage.getItem("TODO");

if(data){
  LIST = JSON.parse(data);
  id = LIST.length;
  loadList(LIST);
}else {
  LIST = [];
  id = 0;
}

function loadList(array){
  array.forEach(function(item){
      addToDo(item.name, item.id, item.done, item.trash);
  });
}


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

document.addEventListener("keypress", function(event){
 
  if(13 == event.keyCode){

    const toDo = input.value;

    if(toDo){
      addToDo(toDo, id, false, false);

      LIST.push({
        name: toDo,
        id: id,
        done: false,
        trash: false
      });

      id++;
    }
  }
})

function completeToDo(element){
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
  element.parentNode.parentNode.classList.toggle(FILLED)

  LIST[element.id].done = LIST[element.id].done ? false : true;
}

function removeToDo(element){
  element.parentNode.parentNode.removeChild(element.parentNode);

  LIST[element.id].trash = true;
}

list.addEventListener("click", function(event){
  const element = event.target;
  const elementJob = element.attributes.job.value;

  if(elementJob == "complete"){
    completeToDo(element);
  }else if(elementJob == "delete"){
    removeToDo(element);
  }
})