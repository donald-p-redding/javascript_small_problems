//Write a function that will take a floating point number that will represent
//the degrees of an angle.
//return a string that will display the angle in 
  //degrees
  //minuets
  //seconds

//NOTE
//There are 60 min in a degree AND 60 seconds in a min

// function padZero(number) {
//   const numberString = String(number);
//   return numberString.length < 2 ? (`0${numberString}`) : numberString;
// }

// function dms(float) {
//   const CONVERISON_FACTOR = 60;
//   let degrees = parseInt(float, 10);
//   let remainder = (float - degrees) * CONVERISON_FACTOR;
//   let minutes = parseInt(remainder);
//   let seconds = parseInt((remainder - minutes) * CONVERISON_FACTOR);
  
//   console.log(`${degrees}˚${padZero(minutes)}'${padZero(seconds)}"`);
// }

  dms(30);           // 30°00'00"
  dms(76.73);        // 76°43'48"
  dms(254.6);        // 254°35'59"
  dms(93.034773);    // 93°02'05"
  dms(0);            // 0°00'00"
  dms(360);          // 360°00'00" or 0°00'00"

  //REFACTOR
  //Can you refactor our code so that the function can handle values that are
    //negative
    //greater than 360

function padZero(number) {
  const numberString = String(number);
  return numberString.length < 2 ? (`0${numberString}`) : numberString;
}

function dms(float) {
  if (float > 360) {
    float = float - 360;
  } else if (float < 0) {
    float = Math.abs(float) > 360 ? ((360 + float) + 360) : (360 + float);
  }

  const CONVERISON_FACTOR = 60;
  let degrees = parseInt(float, 10);
  let remainder = (float - degrees) * CONVERISON_FACTOR;
  let minutes = parseInt(remainder);
  let seconds = parseInt((remainder - minutes) * CONVERISON_FACTOR);
  
  console.log(`${degrees}˚${padZero(minutes)}'${padZero(seconds)}"`);
}

dms(-1);   // 359°00'00"
dms(400);  // 40°00'00"
dms(-40);  // 320°00'00"
dms(-420); // 300°00'00"
