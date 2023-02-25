import {  Sound } from "./element.js";

export function BgSounds() {
  Sound.Forest.loop = true
  Sound.CoffeeShop.loop = true
  Sound.Fireplace.loop = true
  Sound.Rain.loop = true;

  const bgAudioFlorest = () => { Sound.Forest.play() }
  const bgAudioCoffeeShop = () => { Sound.CoffeeShop.play() }
  const bgAudioFirePlace = () => { Sound.Fireplace.play() }
  const bgAudioRain = () => { Sound.Rain.play() }
  const bgAudioTimerEnd = () => { Sound.TimeEnd.play() }

  return {
    bgAudioFlorest,
    bgAudioCoffeeShop,
    bgAudioFirePlace,
    bgAudioRain,
    bgAudioTimerEnd,
  }
}