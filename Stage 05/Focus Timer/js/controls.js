export function Controls({
  buttonPlay,
  buttonPauser,
  buttonSet,
  buttonStop
}) {

  function play() {
    buttonPlay.classList.toggle('hide');
    buttonPauser.classList.toggle('hide');
    buttonSet.classList.add('hide');
    buttonStop.classList.remove('hide');
  }

  function pauser() {
    buttonPlay.classList.toggle('hide');
    buttonPauser.classList.toggle('hide');
  }

  function reset() {
    buttonPlay.classList.remove('hide');
    buttonPauser.classList.add('hide');
    buttonSet.classList.remove('hide');
    buttonStop.classList.add('hide');
  }

  function getMinutes() {
    let newMinutes = prompt('Quantos minutes?') || 0;
    if (!newMinutes) {
      return false
    }

    return newMinutes
  }

  return {
    reset,
    play,
    pauser,
    getMinutes,
  };
}