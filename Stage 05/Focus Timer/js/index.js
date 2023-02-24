import { Timer } from './timer.js'
import { Controls } from './controls.js'

const buttonPlay = document.querySelector('.play')
const buttonPauser = document.querySelector('.pauser')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const configControls = {
  buttonPlay,
  buttonPauser,
  buttonSet,
  buttonStop,
}; 

const controls = Controls(configControls);

const configTimer = {
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
};

const timer = Timer(configTimer)

buttonPlay.addEventListener('click', () => {
  controls.play()
  timer.countdown();
})

buttonPauser.addEventListener('click', () => {
  controls.pauser()
  timer.hold()
})

buttonStop.addEventListener('click', () => {
  controls.reset()
  timer.reset()
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
  let newMinutes = controls.getMinutes()

  if(!newMinutes) {
    timer.reset()
    return
  }

  timer.updateDisplay(newMinutes, 0);
  timer.updateMinutes(newMinutes);
})