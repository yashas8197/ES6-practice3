console.log("ES1_HW_5");
console.log("\n");

const students = [
  { name: "Rahul", rollNo: 101, hindi: 80, english: 75, maths: 90 },
  { name: "Amit", rollNo: 102, hindi: 85, english: 70, maths: 95 },
  { name: "Priya", rollNo: 103, hindi: 78, english: 92, maths: 87 },
];

const marksForComputer = [88, 92, 95];
for (i = 0; i < students.length; i++) {
  students[i].computer = marksForComputer[i];
}

console.log("1.1 Student data with computer marks:\n", students);

const marksForScience = [82, 90, 88];
for (i = 0; i < students.length; i++) {
  students[i].science = marksForScience[i];
}

console.log("1.2: Student data with Science marks:\n", students);

const newStudent = {
  name: "Kaveri",
  rollNo: 104,
  hindi: 84,
  english: 88,
  maths: 78,
  computer: 90,
  science: 86,
};

console.log("2.1", newStudent);
students.push(newStudent);

console.log("\n");
console.log("2.2 Updated students data with kaveri:");
for (let i = 0; i < students.length; i++) {
  console.log(
    `Name: ${students[i].name}, Roll No: ${students[i].rollNo}, Hindi: ${students[i].hindi}, English: ${students[i].english}, Math: ${students[i].maths}, Computer: ${students[i].computer}, Science: ${students[i].science}`,
  );
}
console.log("\n");
console.log("2.3 updated students data with total marks");
let totalMarks = 0;
for (let i = 0; i < students.length; i++) {
  students[i].totalMarks =
    students[i].hindi +
    students[i].english +
    students[i].maths +
    students[i].computer +
    students[i].science;
  console.log(
    `Name: ${students[i].name}, Roll No: ${students[i].rollNo}, Total Marks: ${students[i].totalMarks}`,
  );
}

console.log("\n");
console.log("2.3 updated students data with Average marks");

let numSubjects = 5;

let avgMarks = 0;
for (let i = 0; i < students.length; i++) {
  students[i].avgMarks = students[i].totalMarks / numSubjects;

  console.log(
    `Name: ${students[i].name}, Roll No: ${students[i].rollNo}, Average Marks: ${students[i].avgMarks}`,
  );
}

function calculateGrade(avgMarks) {
  if (avgMarks >= 90 && avgMarks <= 100) {
    return "A";
  } else if (avgMarks >= 80 && avgMarks <= 89) {
    return "B";
  } else if (avgMarks >= 70 && avgMarks <= 79) {
    return "C";
  } else if (avgMarks >= 60 && avgMarks <= 69) {
    return "D";
  } else if (avgMarks >= 50 && avgMarks <= 59) {
    return "E";
  } else {
    return "F";
  }
}

function generateCard(students) {
  let reportCard = "";
  for (let i = 0; i < students.length; i++) {
    reportCard +=
      `============Report Card of ${students[i].name}===========\n` +
      `Roll No: ${students[i].rollNo}\n` +
      "---------------------\n" +
      "Marks\n" +
      "--------------------\n" +
      `Hindi: ${students[i].hindi}\n` +
      `English: ${students[i].english}\n` +
      `Maths: ${students[i].maths}\n` +
      `Computer: ${students[i].computer}\n` +
      `Science: ${students[i].science}\n` +
      "--------------------\n" +
      `Total: ${students[i].totalMarks}\n` +
      `Average: ${students[i].avgMarks}\n` +
      `Grade: ${calculateGrade(students[i].avgMarks)}\n`;
  }
  return reportCard;
}

console.log(generateCard(students));
