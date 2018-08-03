// 31. Write a JavaScript program to find the largest of three given integers.

function largestInteger (intA, intB, intC ) {
  if (intA > intB && intA > intC )
  {
    console.log("intA is the largest ");
    return intA;
  } else if (intB > intA && intB > intC ) {
    console.log("intB is the largest ");
    return intB;
  } else {
    console.log("intC is the largest ");
    return intC;
  }
}


console.log(largestInteger(1,2,4));

console.log(largestInteger(12,450,50));
