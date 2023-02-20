

let result = prompt("Adivinhe o número que estou pensando? Está entre 0 e 10")
const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

while (Number(result) != randomNumber) {
  result = prompt("Erro, tente novamente");

  xAttempts++
}

alert(`Parabéns, o número que eu pensei foi ${randomNumber}. você adivinhou em ${xAttempts} tentativas.`);