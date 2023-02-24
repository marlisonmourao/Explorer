export function Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeout,
  resetControls,
  minutes
}) {
  
  function reset() {
    updateDisplay(minutes, 0);
    clearTimeout(timerTimeout);
  }

  function updateDisplay(minutes, seconds) {
    minutesDisplay.innerText = String(minutes).padStart(2, "0");
    secondsDisplay.innerText = String(seconds).padStart(2, "0");
  }

  function countdown() {
    timerTimeout = setTimeout(() => {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);

      updateDisplay(minutes, 0);

      if (minutes <= 0) {
        resetControls();
        return;
      }

      if (seconds <= 0) {
        seconds = 2;
        --minutes;
      }

      updateDisplay(minutes, String(seconds - 1));

      countdown();
    }, 1000);
  }

  return {
    countdown,
    reset,
    updateDisplay
  }
}


