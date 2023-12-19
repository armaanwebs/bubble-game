var rn = "";
timer = 60;
var hit = "";
function makeBubbles() {
  const screenWidth = window.innerWidth;

  let numberOfBubbles = 100; // Default number of bubbles
  if (screenWidth < 768) {
    // If the screen width is less than 768px (typical for mobile devices)
    numberOfBubbles = 40; // Set a lower number of bubbles for mobile screens
  }

  let bubble = "";
  for (let i = 0; i < numberOfBubbles; i++) {
    const rn = Math.floor(Math.random() * 10);
    bubble += `<div class="bubble">${rn}</div>`; // Changed ID to class for multiple bubbles
  }

  document.querySelector("#panel-bottom").innerHTML = bubble;
}

function runTimer() {
  let timeInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").innerHTML = timer;
    } else {
      document.querySelector(
        "#panel-bottom"
      ).innerHTML = `<h1 id="game-over">GAME OVER!</h1>`;
      clearInterval(timeInt);
    }
  }, 1000);
}

function getNewHit() {
  hit = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").innerHTML = hit;
}
score = 0;
function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").innerHTML = score;
}

document
  .querySelector("#panel-bottom")
  .addEventListener("click", function (dets) {
    var newHit = Number(dets.target.textContent);
    if (newHit === hit) {
      increaseScore();
      getNewHit();
      makeBubbles();
    }
  });

getNewHit();
runTimer();
makeBubbles();
