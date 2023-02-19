// variables for buttons
const $startStopBtn = document.querySelector("#start-stop-btn"),
  $reset = document.querySelector("#reset-btn");

// variables for time values
let seconds = 0,
  minutes = 0,
  hours = 0;

// variables for leading zero
let leadingSeconds = 0,
  leadingMinutes = 0,
  leadingHours = 0;

// variables for leading zero
let timeInterval = null;
let timerStatus = "stopped";
// stop watch function

function stopWatch() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }
  if (seconds < 10) {
    leadingSeconds = "0" + seconds.toString();
  } else {
    leadingSeconds = seconds;
  }
  if (minutes < 10) {
    leadingMinutes = "0" + minutes.toString();
  } else {
    leadingMinutes = minutes;
  }
  if (hours < 10) {
    leadingHours = "0" + hours.toString();
  } else {
    leadingHours = hours;
  }
  let displayTimer = (document.getElementById("timer").innerText =
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds);
}

$startStopBtn.addEventListener("click", function () {
  if (timerStatus === "stopped") {
    timeInterval = window.setInterval(stopWatch, 1000);
    $startStopBtn.innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
    timerStatus = "started";
  } else {
    window.clearInterval(timeInterval);
    $startStopBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    timerStatus = "stopped";
  }
});

$reset.addEventListener("click", () => {
  window.clearInterval(timeInterval);
  (seconds = 0), (minutes = 0), (hours = 0);
  document.getElementById("timer").innerHTML = "00:00:00";
});
