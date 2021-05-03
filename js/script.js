const startButton = document.querySelector(".homepagebuttoncontainer");

const homepagesVisuals = document.querySelectorAll(".visualcontainer > div");

console.log(homepagesVisuals);

startButton.addEventListener("click", function () {
  homepagesVisuals.forEach(function (element) {
    element.classList.add("homepageAnim");
  });
  startButton.classList.add("homepagebuttonAnim");
});

// todo: homepage redirect link delay for anims