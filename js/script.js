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
//back button template list line 54 breekt de code maar doet het wel 
//var backBtn = document.querySelector('span');
//backBtn.addEventListener("click", function () {
//  document.location.href = 'todolists.html';
//})


// selectors
var input = document.querySelector('.addNewInput');
var mainTodoContainer = document.querySelector('.content');
var addingButton = document.querySelector('.icon_add')
//event listeners

addingButton.addEventListener('click', function (e) {
  //create elements

  if (input.value.trim()) {
    //ul tag
    var ultag = document.createElement('ul');
    ultag.classList.add('lijst');

    //div tag
    var containerDiv = document.createElement('div');
    containerDiv.classList.add('todo');

    //li tag
    var litag = document.createElement('li');
    litag.innerHTML = input.value;
    litag.classList.add('item');

    //add button
    var addingButton = document.createElement('button');
    addingButton.classList.add('icon_add');
    addingButton.innerHTML = '<i class="icon_add"></i>'

    //edit button 2
    var menuButton = document.createElement('i');
    menuButton.classList.add('menu');

    //combiningen

    containerDiv.appendChild(litag);
    containerDiv.appendChild(menuButton);

    //voeg toe aan main div
    mainTodoContainer.appendChild(litag);
    // to test: console.log(ultag);
    input.value = '';
    //menu button working
    menuButton.addEventListener('click', function (e) {
      menuButton[i].addEventListener("click, function ()")
    })
  }
})

//template list page



