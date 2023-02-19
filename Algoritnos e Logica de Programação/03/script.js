 let student = prompt("Qual é o nome do(a) aluno(a) ?")
 let n1 = prompt("Qual a nota da primeira prova ?")
 let n2 = prompt("Qual a nota da segunda prova ?")
 let n3 = prompt("Qual a nota da terceira prova ?")

 let average = ((Number(n1) + Number(n2) + Number(n3)) / 3).toFixed(1);

 let result = average > 6

if (result) {
  alert("Parabéns, "  + student + " ! sua média foi de " + average)
} else {
  alert(student + " estude para a sua prova de recuperação! sua média foi de " + average)
}