//41. Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 40 and if two numbers are same return 20

function checkInt (num1, num2, num3){
  if (num1 == num2 && num2 == num3){
    return 30;
  }else if (num1 == num2 || num2 == num3 || num3 == num1) {
    return 20;
  } else {
    return 40;
  }
}


console.log(checkInt(10,10,10));
console.log(checkInt(20,20,10));
console.log(checkInt(10,20,20));
console.log(checkInt(10,20,300));
