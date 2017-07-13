var numerals = ["I", "V", "X", "L", "C", "D", "M"];

//endNumeral() goes through the array split from the input and calls on numI() to create a roman numeral string to return
var endNumeral = function(array){
  var romanNumeral = "";
  for (var i = 0; i < array.length; i++) {
    romanNumeral += numI(i, array.length, parseInt(array[i]));
  }
  return romanNumeral;
}

//numI() takes the digit at the array index and translates it into a roman numeral
var numI = function(index, length, number) {
///////////////Initialize based on array length
  if (length === 1) {
    var newNumber = numerals[1];
    var minorNumber = numerals[0];
    var majorNumber = numerals[2];
  } else if(length === 2) {
    if (index === 0) {
      var newNumber = numerals[3];
      var minorNumber = numerals[2];
      var majorNumber = numerals[4];
    } else {
      var newNumber = numerals[1];
      var minorNumber = numerals[0];
      var majorNumber = numerals[2];
    }
  } else if (length === 3) {
    if (index === 0) {
      var newNumber = numerals[5];
      var minorNumber = numerals[4];
      var majorNumber = numerals[6];
    } else if (index === 1) {
      var newNumber = numerals[3];
      var minorNumber = numerals[2];
      var majorNumber = numerals[4];
    } else {
      var newNumber = numerals[1];
      var minorNumber = numerals[0];
      var majorNumber = numerals[2];
    }
  } else if (length === 4) {
    if (index === 0) {
      var newNumber = "";
      var minorNumber = numerals[6];
      for (number; number != 0; number--) {
        newNumber += minorNumber;
      }
      return newNumber;
    } else if (index === 1) {
      var newNumber = numerals[5];
      var minorNumber = numerals[4];
      var majorNumber = numerals[6];
    } else if (index === 2) {
      var newNumber = numerals[3];
      var minorNumber = numerals[2];
      var majorNumber = numerals[4];
    } else {
      var newNumber = numerals[1];
      var minorNumber = numerals[0];
      var majorNumber = numerals[2];
    }
  } ///////// End of initialize segment
  if (number === 4) {
    newNumber = minorNumber + newNumber;
    return newNumber;
  } else if (number === 9) {
    newNumber = minorNumber + majorNumber;
    return newNumber;
  } else if (number < 5) {
    newNumber = "";
    for (number; number != 0; number--) {
      newNumber += minorNumber;
    }
    return newNumber;
  } else if (number > 5) {
    for (number %= 5; number != 0; number--) {
      newNumber += minorNumber;
    }
    return newNumber;
  } else {
    return newNumber;
  }
}

//numberSeparator() separates the string of digits into an array of each individual digit
var numberSeparator = function(numberString) {
  numberArray = numberString.split("");
  return numberArray;
}

$(function() {
  $("#changeNumber").submit(function(event) {
    event.preventDefault();

    var inputArray = numberSeparator($("#number").val());
    console.log(inputArray);

    $("#output").text(endNumeral(inputArray));
  });
});
