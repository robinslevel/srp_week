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
//back button template list

let backBtn = document.querySelector('span');

backBtn.addEventListener('click', () => {
  window.history.back();
});

// selectors
const todoinput = document.querySelector('.input');
//niet zeker of ik de <i> juist heb ingesteld
const todobutton = document.querySelector(".icon_add");
const todolist = document.querySelector('.lijst');
//event listeners
todobutton.addEventListener('click', addToDo);
//functions
function addToDo(event) {
  //prevent form from submitting
  event.preventDefault();
  //test
  console.log("hello");
  //todo DIV
  const todoDiv = documentcreateElement("div");
  todoDiv.classList.add("todo");
  //create li
  const newTodo = document.createElement('li');
  newTodo.innerText = 'hey';
  newTodo.classList.add('item')
  todoDiv.appendChild(newTodo);
  //option button
  const optionbutton = documentcreateElement('i');
  optionbutton.innerHTML = '<i class="menu"></i>'
  optionbutton.classList.add(".menu");
  todoDiv.appendChild(optionbutton);
  //append to list
  todolist.appendChild(todoDiv);
}

