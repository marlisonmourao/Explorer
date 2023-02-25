const btnPlay = document.querySelector(".play");
const btnStop = document.querySelector(".stop");
const btnAdd = document.querySelector(".add");
const btnSubtract = document.querySelector(".subtract");
const btnMusicDay = document.querySelector(".day");
const btnMusicRain = document.querySelector(".rain");
const btnMusicTavern = document.querySelector(".tavern");
const btnMusicFire = document.querySelector(".fire");

const minutesDisplay = document.querySelector(".minutes");
let secondsDisplay = document.querySelector(".seconds");

btnPlay.addEventListener("click", coutdown);
btnStop.addEventListener("click", hold);

let timerTimerOut
  let minutes = Number(minutesDisplay.textContent);

function coutdown() {
  let minutes = Number(minutesDisplay.textContent);
  let seconds = Number(secondsDisplay.textContent);

  timerTimerOut = setTimeout(() => {

    if(minutes <= 0 && seconds <= 0) {
      return console.log('fjskj')
    }

    if (seconds <= 0) {
      seconds = 2;
      --minutes;
    }

    updateDisplay(minutes, String(seconds - 1))

    coutdown();
  }, 1000);
}

function updateDisplay(newMinutes, seconds) {
  minutesDisplay.innerText = String(newMinutes).padStart(2, "0");
  secondsDisplay.innerText = String(seconds).padStart(2, "0");
}

function hold() {
  updateDisplay(minutes, 0);
  clearTimeout(timerTimerOut)
}
