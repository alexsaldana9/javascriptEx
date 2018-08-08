//45. Write a JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15.

function check(num1, num2) {
  var sum = num1 + num2;
  var diff = Math.abs(num1 - num2);

  if (num1 == 15 || num2 == 15){
    return true;
  } else if(sum == 15 || diff == 15){
    return true;
  } else {
    return false;
  }
}

console.log(check(15,15));

console.log(check(30,15));
console.log(check(10,5));
console.log(check(25,5));
