import { Timer } from "./timer.js";
import { Element } from "./element.js";
import { Sound } from "./element.js";
import { BgSounds } from "./sounds.js";


const {
  btnPlay,
  btnStop,
  btnAdd,
  btnSubtract,
  btnMusicFlorest,
  btnMusicCoffeeShop,
  btnMusicFirePlace,
  btnMusicRain
} = Element();
const {  } = Element();


const minutesDisplay = document.querySelector(".minutes");
let secondsDisplay = document.querySelector(".seconds");

const configTimer = { minutesDisplay, secondsDisplay };

const timer = Timer(configTimer);

const { bgAudioFlorest, bgAudioCoffeeShop, bgAudioFirePlace, bgAudioRain, bgAudioTimerEnd } = BgSounds()

btnPlay.addEventListener("click", timer.coutdown);
btnStop.addEventListener("click", timer.hold);
btnAdd.addEventListener("click", timer.addTimer);
btnSubtract.addEventListener("click", timer.subtractTimer);


btnMusicFlorest.addEventListener("click", () => {
  bgAudioFlorest();
});

btnMusicCoffeeShop.addEventListener("click", () => {
  bgAudioCoffeeShop();
});

btnMusicFirePlace.addEventListener("click", () => {
  bgAudioFirePlace();
});

btnMusicRain.addEventListener("click", () => {
  bgAudioRain();
});
