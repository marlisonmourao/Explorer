import { Sound } from "./element.js";

export function BgSounds() {
  Sound.Forest.loop = true;
  Sound.CoffeeShop.loop = true;
  Sound.Fireplace.loop = true;
  Sound.Rain.loop = true;

  const bgAudioFlorest = () => {
    Sound.Forest.play();
    Sound.CoffeeShop.pause();
    Sound.Fireplace.pause();
    Sound.Rain.pause();
  };

  const bgAudioCoffeeShop = () => {
    Sound.CoffeeShop.play();
    Sound.Forest.pause();
    Sound.Fireplace.pause();
    Sound.Rain.pause();
  };
  const bgAudioFirePlace = () => {
    Sound.Fireplace.play();
    Sound.CoffeeShop.pause();
    Sound.Forest.pause();
    Sound.Rain.pause();
  };
  const bgAudioRain = () => {
    Sound.Rain.play();
    Sound.CoffeeShop.pause();
    Sound.Forest.pause();
    Sound.Fireplace.pause();
  };
  const bgAudioTimerEnd = () => {
    Sound.TimeEnd.play();
  };

  return {
    bgAudioFlorest,
    bgAudioCoffeeShop,
    bgAudioFirePlace,
    bgAudioRain,
    bgAudioTimerEnd,
  };
}
