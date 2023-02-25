import { Element } from "./element.js";

const { btnMusicCoffeeShop, btnMusicFirePlace, btnMusicFlorest, btnMusicRain } = Element()

export function CardSelected() {
  const coffeeeSelect = () => {
    btnMusicCoffeeShop.classList.toggle("select");
    btnMusicFirePlace.classList.remove("select");
    btnMusicFlorest.classList.remove("select");
    btnMusicRain.classList.remove("select");
  };

  const fireSelect = () => {
    btnMusicFirePlace.classList.add("select");
    btnMusicCoffeeShop.classList.remove("select");
    btnMusicFlorest.classList.remove("select");
    btnMusicRain.classList.remove("select");
  };

  const florestSelect = () => {
    btnMusicFlorest.classList.add("select");
    btnMusicFirePlace.classList.remove("select");
    btnMusicCoffeeShop.classList.remove("select");
    btnMusicRain.classList.remove("select");
  };

  const raintSelect = () => {
    btnMusicRain.classList.add("select");
    btnMusicFlorest.classList.remove("select");
    btnMusicFirePlace.classList.remove("select");
    btnMusicCoffeeShop.classList.remove("select");
  };

  return {
    coffeeeSelect,
    fireSelect,
    florestSelect,
    raintSelect,
  }
}