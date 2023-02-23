const buttonPlay = document.querySelector('.play')
const buttonPauser = document.querySelector('.pauser')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector(".sound-off");

function playTime() {
  buttonPlay.classList.toggle('hide')
  buttonPauser.classList.toggle('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')
}

function pauserTime() {
  buttonPlay.classList.toggle('hide')
  buttonPauser.classList.toggle('hide')
}

buttonPlay.addEventListener('click', playTime)
buttonPauser.addEventListener('click', pauserTime)
buttonStop.addEventListener('click', () => {
  buttonPlay.classList.remove('hide')
  buttonPauser.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonStop.classList.add('hide')
})

buttonSoundOff.addEventListener('click', () => {
  buttonSoundOn.classList.remove("hide");
  buttonSoundOff.classList.add("hide");
})

buttonSoundOn.addEventListener("click", () => {
  buttonSoundOn.classList.add("hide");
  buttonSoundOff.classList.remove("hide");
});