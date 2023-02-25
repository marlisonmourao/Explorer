export function Timer({ minutesDisplay, secondsDisplay }) {
  let timerTimerOut
  let minutes = Number(minutesDisplay.textContent)

  function coutdown() {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    timerTimerOut = setTimeout(() => {
      if (minutes <= 0 && seconds <= 0) {
        hold()
        return
      }

      if (seconds <= 0) {
        seconds = 2
        --minutes
      }

      updateDisplay(minutes, String(seconds - 1))

      coutdown()
    }, 1000)
  }

  function updateDisplay(newMinutes, seconds) {
    minutesDisplay.innerText = String(newMinutes).padStart(2, "0")
    secondsDisplay.innerText = String(seconds).padStart(2, "0")
  }

  function hold() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimerOut)
  }

  function addTimer() {
    updateDisplay(++minutes, 0)
  }

  function subtractTimer() {
    updateDisplay(--minutes, 0)
  }

  return {
    coutdown,
    updateDisplay,
    hold,
    addTimer,
    subtractTimer,
  }
}
