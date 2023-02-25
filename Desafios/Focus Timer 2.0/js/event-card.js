import { BgSounds } from "./sounds.js";
import { CardSelected } from "./card-button.js";

const { bgAudioFlorest, bgAudioCoffeeShop, bgAudioFirePlace, bgAudioRain } =
  BgSounds();

export function EventCard() {
  function FlorestCard() {
    bgAudioFlorest();
    CardSelected().florestSelect();
  }

  function CoffeeShopCard() {
    bgAudioCoffeeShop();
    CardSelected().coffeeeSelect();
  }
  function FirePlaceCard() {
    bgAudioFirePlace();
    CardSelected().fireSelect();
  }
  function RainCard() {
    bgAudioRain();
    CardSelected().raintSelect();
  }

  return {
    FlorestCard,
    CoffeeShopCard,
    FirePlaceCard,
    RainCard,
  };
}
