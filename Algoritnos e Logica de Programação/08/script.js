const patients = [
  {
    name: "Marlison",
    age: 22,
    weight: 90,
    height: 165,
  },
  {
    name: "Marcos",
    age: 40,
    weight: 70,
    height: 178,
  },
  {
    name: "Jessica",
    age: 29,
    weight: 67,
    height: 155,
  },
];

function printPatientIMC(patient) {
  const imc = (patient.weight / ((patient.height / 100) ** 2)).toFixed(2)

  alert(`Pacient ${patient.name} possui o IMC de ${imc}`)
}

for (let patient of patients) {
  printPatientIMC(patient);
}