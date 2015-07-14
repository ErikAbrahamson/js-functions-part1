// 1
function sum(num1,num2) {
  return num1 + num2;
}

//2
function isEqual(num1,num2) {
  if (num1 === num2) {
    return true;
  } else {
    return false;
  }
}

//3
function discountPercentage(originalAmount,percent) {
  var appliedPercent = originalAmount * (percent/100);
  if (percent >= 100) {
    return alert('Applying this percent would make the item free.');
  } else if (percent <= 0) {
    return alert('You are applying a negative discount.');
  } else {
    return appliedPercent;
  }
}

//4
function stringCapitalize(string) {
  var wordArray = string.split(' ');
  for (var i = 0; i <= wordArray.length; i++) {
    var firstLetter = wordArray[i].charAt(0).toUpperCase();
    var fullWord = wordArray.split([1])
    firstLetter += fullWord;
  }
}

//5
function evenNumbers(randomNumber) {
  var randomNumber = (Math.ceil(Math.random() * 100));
  if (0 < randomNumber < 100) {
    for (var i = 0; i <= randomNumber; i++) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  }
}

//6
function isDivisible(largerNum,smallerNum) {
  if (largerNum % smallerNum === 0) {
    return true;
  } else {
    return false;
  }
}

//7
function oddNumbers(randomNumber) {
  var randomNumber = (Math.ceil(Math.random() * 100));
  if (randomNumber > 40) {
    for (var i = 0; i <= randomNumber; i++) {
      if (i % 2 != 0) {
        console.log(i);
      }
    }
  } else if (randomNumber < 40) {
    for (var i = 0; i <= 40; i++) {
      if (i % 2 != 0) {
        console.log(i);
      }
    }
  }
}
