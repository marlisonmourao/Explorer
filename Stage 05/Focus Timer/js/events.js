import { 
  buttonPlay,
  buttonPauser,
  buttonStop,
  buttonSet,
  buttonSoundOff,
  buttonSoundOn
 } from './element.js'

export default function ({ controls, sound, timer,}) {
  buttonPlay.addEventListener("click", () => {
    controls.play();
    timer.countdown();
    sound.pressButon();
  });

  buttonPauser.addEventListener("click", () => {
    controls.pauser();
    timer.hold();
    sound.pressButon();
  });

  buttonStop.addEventListener("click", () => {
    controls.reset();
    timer.reset();
    sound.pressButon();
  });

  buttonSoundOff.addEventListener("click", () => {
    buttonSoundOn.classList.remove("hide");
    buttonSoundOff.classList.add("hide");

    sound.bgAudio.pause();
  });

  buttonSoundOn.addEventListener("click", () => {
    buttonSoundOn.classList.add("hide");
    buttonSoundOff.classList.remove("hide");
    sound.bgAudio.play();
  });

  buttonSet.addEventListener("click", () => {
    let newMinutes = controls.getMinutes();

    if (!newMinutes) {
      timer.reset();
      return;
    }

    timer.updateDisplay(newMinutes, 0);
    timer.updateMinutes(newMinutes);
  });
}
