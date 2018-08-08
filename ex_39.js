//39. Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

function sumCheck(num1, num2) {
  var sum = num1 + num2;
    if (sum > 50 && sum < 80){
      return console.log("65");
    } else {
      return console.log("80");
    }
}


console.log(sumCheck(30, 30));
console.log(sumCheck(40, 30));
console.log(sumCheck(0, 30));
