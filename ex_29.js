// 29. Write a JavaScript program to check if three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range


function checkRange(intA, intB, intC) {

   if (intA >= 50 && intA <= 99)
   {
     console.log("IntA is within range");

   } else if (intB >= 50 && intB <= 99) {
     console.log("IntB is within range");

   } else if (intC >= 50 && intC <= 99) {
     console.log("IntC is within range");
   } else {
     return false;
   }
}

console.log(checkRange(14,5,5));

console.log(checkRange(50,99,45));

console.log(checkRange(55,98,60));
