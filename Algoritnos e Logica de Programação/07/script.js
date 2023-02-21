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

let patientsName = []

for(let patient of patients) {
 patientsName.push(patient.name)

 alert(`${patient.name} tem ${patient.age} anos, pesa ${patient.weight} e tem ${patient.height} de altura`)
}

alert(patientsName)