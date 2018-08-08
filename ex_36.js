// 36. Write a JavaScript program to check if the last digit of the three given positive integers is same.

function checkLastDigit(num1, num2, num3){

  var num1Last = num1.toString().split('').pop();

  var num2Last = num2.toString().split('').pop();

  var num3Last = num3.toString().split('').pop();

  if (num1Last == num2Last && num1Last == num3Last){
    console.log("the last digits are the same");
  } else {
    console.log("the last digits are NOT the same !!")
  }

}

console.log(checkLastDigit(001222223,234,124));
console.log(checkLastDigit(001222223,23,123));
