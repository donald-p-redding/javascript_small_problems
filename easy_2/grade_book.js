//Write a function that determines the mean (average) of the three scores 
//passed to it, and returns the letter associated with that grade.

function getGrade(grade1, grade2, grade3) {
  let meanScore = (grade1 + grade2 + grade3) / 3.0;
  if (meanScore >= 90) {
    return 'A';
  } else if (meanScore >= 80) {
    return 'B';
  } else if (meanScore >= 70) {
   return 'C'; 
  } else if (meanScore >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"