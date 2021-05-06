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

// zero state popups

const popUp1 = document.querySelector(".popUp1");
const popUp2 = document.querySelector(".popUp2")
const popUp1Exit = document.querySelector(".popUp1Exit");
const popUp2Exit = document.querySelector(".popUp2Exit");

if (window.location.pathname=='/todolists.html') {
  setTimeout(popUp1Vis, 3000);

  function popUp1Vis() {
    console.log(popUp1)
    popUp1.classList.add("visible");

    popUp1Exit.addEventListener("click", function () {
      popUp1.classList.remove("visible");
    });
  }
}

if (window.location.pathname=='/templatelist.html') {
  setTimeout(popUp2Vis, 3000);

  function popUp2Vis() {
    popUp2.classList.add("visible");

    popUp2Exit.addEventListener("click", function () {
      popUp2.classList.remove("visible");
    });
  }
}
