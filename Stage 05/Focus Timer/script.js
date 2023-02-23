const buttonPlay = document.querySelector('.play')
const buttonPauser = document.querySelector('.pauser')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

let minutes

function resetControls() {
  buttonPlay.classList.remove("hide");
  buttonPauser.classList.add("hide");
  buttonSet.classList.remove("hide");
  buttonStop.classList.add("hide");
}

function updateTimerDispla(minutes, seconds) {
  minutesDisplay.innerText = String(minutes).padStart(2, "0")
  secondsDisplay.innerText = String(seconds).padStart(2, "0")
}

function countdown() {
  setTimeout(() => {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    
    updateTimerDispla(minutes, 0)
    
    if (minutes <= 0) {
      resetControls()
      return
    }
    
    if (seconds <= 0) {
      seconds = 2
      --minutes
    }
    
    updateTimerDispla(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}

function playTime() {
  buttonPlay.classList.toggle('hide')
  buttonPauser.classList.toggle('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')

  countdown()
}

function pauserTime() {
  buttonPlay.classList.toggle('hide')
  buttonPauser.classList.toggle('hide')
}

buttonPlay.addEventListener('click', playTime)
buttonPauser.addEventListener('click', pauserTime)
buttonStop.addEventListener('click', () => {
  resetControls() 
})

buttonSoundOff.addEventListener('click', () => {
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
})

buttonSoundOn.addEventListener('click', () => {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
})

buttonSet.addEventListener('click', () => {
  minutes = prompt('Quantos minutes?')
  updateTimerDispla(minutes, 0)
})