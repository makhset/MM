// const numbers = [1, 2, 3, 4, 5, 6]; 

// const cubedNumbers = numbers.map(num => num ** 3);


// for (const number of cubedNumbers) {
//   if (number % 2 !== 0) {
//     console.log(number); 
//   }
// }

//tap2




const studentCount = parseInt(prompt("Студенттер санын енгізіңіз: "), 10);

const grades = [];
for (let i = 0; i < studentCount; i++) {
  const grade = parseFloat(prompt(`Студент ${i + 1} бағасын енгізіңіз: `));
  grades.push(grade);
}


const total = grades.reduce((sum, grade) => sum + grade, 0);
const average = total / studentCount;
console.log(`Орташа баға: ${average}`);

const highGrades = grades.filter(grade => grade > 85);
console.log("85-тен жоғары бағалар:", highGrades);