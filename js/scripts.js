var numerals = ["I", "V", "X", "L", "C", "D", "M"];

var endNumeral = function(array){
  var romanNumeral = "";
  for (var i = 0; i < array.length; i++) {
    romanNumeral += numI(i, array.length, parseInt(array[i]));
  }
  return romanNumeral;
}

var numI = function(index, length, number) {
  debugger;

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
  }
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
//////////////////////////////////////////////////
var numberSeparator = function(numberString) {
  numberArray = numberString.split("");
  return numberArray;
}
/*
if string.length > 1
ex "15"
create array [1, 5]
array.length = 2
call on functions for 10s and 1s

or

ex "132"
create array [1,3,2]
array.length = 3
call on functions for 100s, 10s, 1s
*/

/*///////////////////////////////////////////////////////
var numI = function(number) {
  var newNumber = "V";
  if (number === 4) {
    newNumber = "I" + newNumber;
    return newNumber;
  } else if (number === 9) {
    newNumber = "IX"
    return newNumber;
  } else if (number < 5) {
    newNumber = "";
    for (number; number != 0; number--) {
      newNumber += "I";
    }
    return newNumber;
  } else if (number > 5) {
    for (number %= 5; number != 0; number--) {
      newNumber += "I";
    }
    return newNumber;
  } else {
    return newNumber;
  }
}
*/////////////////////////////////////////////////////



/*
1=I
5=V
10=X
50=L
100=C
500=D
1000=M

add and subtract to get values

5%3 = 2
5%4 = 1

19 = 10 + (10-1) = XIX
99 = (100-10) + (10-1) XCIX
*/
$(function() {
  $("#changeNumber").submit(function(event) {
    event.preventDefault();

    var inputArray = numberSeparator($("#number").val());
    console.log(inputArray);

    $("#output").text(endNumeral(inputArray));
    //var roman = numI(parseInt($("#number").val()));

    //$("#output").text(roman);
  });
});
