import { Timer } from "./timer.js";
import { Element } from "./element.js";

const { btnPlay, btnStop, btnAdd, btnSubtract } = Element();

const btnMusicDay = document.querySelector(".day");
const btnMusicRain = document.querySelector(".rain");
const btnMusicTavern = document.querySelector(".tavern");
const btnMusicFire = document.querySelector(".fire");

const minutesDisplay = document.querySelector(".minutes");
let secondsDisplay = document.querySelector(".seconds");

const configTimer = { minutesDisplay, secondsDisplay };

const timer = Timer(configTimer);

btnPlay.addEventListener("click", timer.coutdown);
btnStop.addEventListener("click", timer.hold);
btnAdd.addEventListener("click", timer.addTimer);
btnSubtract.addEventListener("click", timer.subtractTimer);
