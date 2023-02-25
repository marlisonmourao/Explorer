export function Element() {
  const btnPlay = document.querySelector(".play");
  const btnStop = document.querySelector(".stop");
  const btnAdd = document.querySelector(".add");
  const btnSubtract = document.querySelector(".subtract");

  const btnMusicFlorest = document.querySelector(".florest");
  const btnMusicRain = document.querySelector(".rain");
  const btnMusicCoffeeShop = document.querySelector(".coffeeShop");
  const btnMusicFirePlace = document.querySelector(".fireplace");

  return {
    btnPlay,
    btnStop,
    btnAdd,
    btnSubtract,
    btnMusicFlorest,
    btnMusicRain,
    btnMusicCoffeeShop,
    btnMusicFirePlace,
  };
}

export const Sound = {
  Forest: new Audio("../assets/forest.wav"),
  Rain: new Audio("../assets/rain.wav"),
  CoffeeShop: new Audio("../assets/coffee-shop.wav"),
  Fireplace: new Audio("../assets/fireplace.wav"),
  TimeEnd: new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  ),
};
