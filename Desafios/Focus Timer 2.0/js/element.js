export function Element() {
  const btnPlay = document.querySelector(".play");
  const btnStop = document.querySelector(".stop");
  const btnAdd = document.querySelector(".add");
  const btnSubtract = document.querySelector(".subtract");
  const btnMusicDay = document.querySelector(".day");
  const btnMusicRain = document.querySelector(".rain");
  const btnMusicTavern = document.querySelector(".tavern");
  const btnMusicFire = document.querySelector(".fire");

  return {
    btnPlay,
    btnStop,
    btnAdd,
    btnSubtract,
    btnMusicDay,
    btnMusicRain,
    btnMusicTavern,
    btnMusicFire,
  };

}