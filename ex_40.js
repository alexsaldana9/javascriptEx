//40. Write a JavaScript program to check from two given integers if either one is 8 or their sum or difference is 8.

function checkInt (num1, num2) {

  var sum = num1 + num2;
  var diff =  Math.abs(num1 - num2);

  if (num1 == 8 || num2 == 8){
    return true;
  } else if (sum == 8) {
    return console.log("sum is 8");
  } else if (diff == 8){
    return console.log("diff is 8");
  } else {
    console.log("These are the sum: ", sum);
  }
}


console.log(checkInt(8,8));
console.log(checkInt(4,4));
console.log(checkInt(17,9));

console.log(checkInt(17,9));
