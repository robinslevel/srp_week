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

if (groceriesTrigger != null) {
  groceriesTrigger.addEventListener("click", function () {
    console.log("aaa");
    groceriesDetails.classList.add("visible");
    containerTemplate.classList.add("hidden");
  });
}

// zero state popups

const popUp1 = document.querySelector(".popUp1");
const popUp2 = document.querySelector(".popUp2")
const popUp1Exit = document.querySelector(".popUp1Exit");
const popUp2Exit = document.querySelector(".popUp2Exit");

//check if on correct html page
if (window.location.pathname=='/todolists.html') {
  //run function after 3 seconds
  setTimeout(popUp1Vis, 3000);

  function popUp1Vis() {
    console.log(popUp1)
    popUp1.classList.add("visible");

    // remove popup when "x" is clicked
    popUp1Exit.addEventListener("click", function () {
      popUp1.classList.remove("visible");
    });
  }
}

//check if on correct html page
if (window.location.pathname=='/templatelist.html') {
    //run function after 3 seconds
  setTimeout(popUp2Vis, 3000);

  function popUp2Vis() {
    popUp2.classList.add("visible");

    // remove popup when "x" is clicked
    popUp2Exit.addEventListener("click", function () {
      popUp2.classList.remove("visible");
    });
  }
}

//back button template list line 54 breekt de code maar doet het wel 
//var backBtn = document.querySelector('span');
//backBtn.addEventListener("click", function () {
//  document.location.href = 'todolists.html';
//})


if (window.location.pathname == '/todolists.html') {

  // selectors
  // var input = document.querySelector('.addNewInput');
  var mainTodoContainer = document.querySelector('.content');
  var addingButton = document.querySelector('.icon_add')
  //event listeners

  addingButton.addEventListener('click', function () {
    addNewBtn()
  })

  document.addEventListener("keypress", function (event) {
    if (13 == event.keyCode) {

      addNewBtn()

    }
  })

  function addNewBtn(e) {

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
      const addedItem = document.querySelector(".content > .item")

      addedItem.addEventListener("click", function () {
        window.location.href = "templatelist-blank.html"
      })
    }
  }

  //template list page


}

function addNewBtn(e) {

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
    const addedItem = document.querySelector(".content > .item")

    addedItem.addEventListener("click", function(){
      window.location.href = "templatelist-blank.html"
    })
  }
}






