let percent = prompt("Enter your percentage");
let Grades;

if (percent == 90) {
  console.log("A1");
  Grades = "A1";
} else if (percent >= 90 && percent <= 100) {
  console.log("A1");
  Grades = "A1";
} else if (percent >= 80 && percent < 90) {
  console.log("A+");
  Grades = "A+";
} else if (percent >= 70 && percent < 80) {
  console.log("A");
  Grades = "A";
} else if (percent >= 60 && percent < 70) {
  console.log("B");
  Grades = "B";
} else if (percent >= 50 && percent < 60) {
  console.log("C");
  Grades = "C";
} else if (percent >= 40 && percent < 50) {
  console.log("D");
  Grades = "D";
} else if (percent >= 30 && percent < 40) {
  console.log("F");
  Grades = "F";
} else {
  console.log("You entered wrong value");
}

switch (Grades) {
  case "A1":
    console.log("You have done Excellent work");
    break;

  case "A+":
    console.log("You have done Great work");
    break;

  case "A":
    console.log("You have done Good work");
    break;

  case "B":
    console.log("satisfactory performance");
    break;

  case "C":
    console.log("keep it up");
    break;

  case "D":
    console.log("You have just passed");
    break;

  case "F":
    console.log("Sorry you are Failed in exam");
    break;

  default:
    console.log("You have entered wrong value");
    break;
}
