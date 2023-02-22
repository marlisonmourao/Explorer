import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height);

  if (weightOrHeightIsNotANumber) {
    AlertError.open();
    return;
  }

  AlertError.close();

  const result = calculateIMC(weight, height);
  displayResultMessage(result)
};

function calculateIMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}

function notNumber(value) {
  return isNaN(value) || value == "";
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`;

  Modal.message.innerText = message;
  Modal.open();
}
