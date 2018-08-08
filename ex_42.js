//42. Write a JavaScript program to check if three given numbers (integers) are increasing in strict mode and flag is "false", however if "true" is false the numbers will in soft mode.

function check(num1, num2, num3) {
  if (num1 < num2 && num2 < num3){
    return true;
  } else {
    return false;
  }
}

console.log(check(1,2,3));
console.log(check(15,2,3));
console.log(check(3,2,1));
