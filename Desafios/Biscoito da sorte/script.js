const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnImg = document.querySelector(".screen1 button");
const message = document.querySelector(".screen2 p");
const btnTryMessage = document.querySelector(".screen2 button");

const luckMessages = [
  "A vida trará coisas boas se tiver paciência.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Uma bela flor é incompleta sem as suas folhas.",
  "O riso é a menor distância entre duas pessoas.",
  "Os defeitos são mais fortes quando o amor é fraco.",
  "A sorte favorece a mente bem preparada.",
  "Quem olha para fora sonha; quem olha para dentro acorda.",
  "Espere pelo mais sábio dos conselhos: o tempo.",
  "Deixe de lado as preocupações e seja feliz.",
  "A maior barreira para o sucesso é o medo do fracasso.",
  "A inspiração vem dos outros. A motivação vem de dentro de nós.",
  "Você sempre será a sua melhor companhia!",
];

let randomMessage =
  luckMessages[Math.round(Math.random() * luckMessages.length)];

btnImg.addEventListener("click", handleClick);
btnTryMessage.addEventListener("click", handleTryMessage);

function handleClick() {
  screen1.classList.add("open");
  screen2.classList.remove("open");
  message.innerHTML = randomMessage;
}

function handleTryMessage() {
  screen1.classList.remove("open")
  screen2.classList.add("open")

  randomMessage = luckMessages[Math.round(Math.random() * luckMessages.length)];
}
