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

const groceriesTrigger = document.querySelector(".itemTemplateSub");
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

// const input = document.getElementById("inputNewTask");
// const list = document.getElementById("lijstTemplate");

// console.log(list)

// document.addEventListener("keyup", function(event){
//   if(event.keyCode == 13){
//     const toDo = input.nodeValue;
//     if(toDo){
//       addToDo(toDo,id, false, false);

//       LIST.push(
//         {
//           name: toDo,
//           id: id,
//           done: false,
//           trash: false
//         }
//       )

//       input.value = "";
//       id++;
//     }
//   }
// })

// const check = "cDone";
// const uncheck = "circle"
// const lineThrough = "tStrike"

// function addToDo(toDo, id, done ) {

//   if(trash) { return; }

//   const DONE = done ? check : uncheck;
//   const LINE = done ? lineThrough : "";

//   const text = `  <li class="itemTemplate" job="complete" id="${id}">
//                     <div>
//                         <i class="${DONE}"></i>
//                         <p class="${LINE}">${toDo}</p>
//                     </div>
//                     <i class="delete" job="delete" id="${id}"></i>
//                 </li>`;

//   const position = "beforeend";

//   list.insertAdjacentHTML(position, text);
// }

// function completeToDo(element){
//   element.classList.toggle(check);
//   element.classList.toggle(uncheck);
//   element.parentNode.querySelector(".text".classList.toggle(lineThrough));
//   list[element.id].done = list[element.id].done ? false : true;
// }

// function removeToDo(element){
//   element.parentNode.parentNode.removeChild(element.parentNode)
//   list[element.id].trash = true;
// }


// addToDo("Drink Coffee")



const input = document.getElementById("inputNewTask");
const list = document.getElementById("lijstTemplate");

const CHECK = "cDone"
const UNCHECK = "circle"
const LINE_THROUGH = "tStrike"

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
  const LINE = done ? LINE_THROUGH: "";

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

document.addEventListener("keyup", function(event){
  if(event.keyCode == 13){
    const toDo = input.nodeValue;

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