//Write a function that takes a number as in input.
  //If the number is a 'double number' --> simply return the number;
  //If the number us NOT a double number --> return the input number miltiplied by two.

//Double number
  //even length numbers whose left side digits === right side digits.

  function isDoubleNumber(number) {
    let numberString = String(number);
    if (numberString.length % 2 !== 0) return false;
    let middleIndex = numberString.length / 2;

    return numberString.slice(0, middleIndex) === numberString.slice(middleIndex);
  }

  function twice(number) {
    if (!isDoubleNumber(number)) {
      return number * 2;
    }
    return number;
  }

  twice(37);          // 74
  twice(44);          // 44
  twice(334433);      // 668866
  twice(444);         // 888
  twice(107);         // 214
  twice(103103);      // 103103
  twice(3333);        // 3333
  twice(7676);        // 7676