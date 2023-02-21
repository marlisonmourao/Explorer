const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

const randomNumber = Math.floor(Math.random() * 10)
let xAttempts = 1

function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#input-number")

  if (inputNumber.value == randomNumber) {
    handleToggleScreen()

    screen2.querySelector(
      "h2"
    ).innerText = `acetou em ${xAttempts} tentativas`
  }

  inputNumber.value = ""
  xAttempts++
}

function handleResetClick() {
  handleToggleScreen()
  xAttempts = 1;
}

function handleToggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
