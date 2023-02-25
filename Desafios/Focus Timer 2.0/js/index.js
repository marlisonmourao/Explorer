import { Timer } from "./timer.js";
import { Element } from "./element.js";
import { BgSounds } from "./sounds.js";
import { CardSelected } from "./card-button.js";
import { EventCard } from "./event-card.js";

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


const minutesDisplay = document.querySelector(".minutes");
let secondsDisplay = document.querySelector(".seconds");

const configTimer = { minutesDisplay, secondsDisplay };

const timer = Timer(configTimer);

const { bgAudioFlorest, bgAudioCoffeeShop, bgAudioFirePlace, bgAudioRain } = BgSounds()

btnPlay.addEventListener("click", timer.coutdown);
btnStop.addEventListener("click", timer.hold);
btnAdd.addEventListener("click", timer.addTimer);
btnSubtract.addEventListener("click", timer.subtractTimer);


btnMusicFlorest.addEventListener("click", () => {
   EventCard().FlorestCard()
});

btnMusicCoffeeShop.addEventListener("click", () => {
   EventCard().CoffeeShopCard();
});

btnMusicFirePlace.addEventListener("click", () => {
   EventCard().FirePlaceCard();
});

btnMusicRain.addEventListener("click", () => {
   EventCard().RainCard();
});
