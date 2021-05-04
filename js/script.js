
// stukje code voor homescreen animaties

const startButton = document.querySelector(".homepagebuttoncontainer");

const homepagesVisuals = document.querySelectorAll(".visualcontainer > div");

// voeg aan elke div in de visualcontainer een class toe met een animation erin

startButton.addEventListener("click", function () {
  homepagesVisuals.forEach(function (element) {
    element.classList.add("homepageAnim");
  });
  startButton.classList.add("homepagebuttonAnim");
  
  redirectHomescreen()
});

// delay op de redirect zodat de animaties eerst afspelen

function redirectHomescreen() {
    console.log("aaa")
  var tID = setTimeout(function () {
    window.location.href =
      "todolists.html";
    window.clearTimeout(tID); // clear time out.
  }, 2500);
}
//  bron redirect: https://www.encodedna.com/javascript/redirect-page-after-a-delay-using-javascript.htm