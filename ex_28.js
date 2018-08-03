// 28. Write a JavaScript program to check if two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.

//   if (intA && intB >= 50) && (intA && intB <= 99)



function checkRange(intA, intB) {

   if (intA >= 50 && intA <= 99)
   {
     console.log("IntA is within range");

   } else if (intB >= 50 && intB <= 99) {
     console.log("IntB is within range");

     return true;
   } else {
     return false;
   }

}

console.log(checkRange(14,5));

console.log(checkRange(50,99));

console.log(checkRange(49,98));
