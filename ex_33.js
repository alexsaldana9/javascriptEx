// 33. Write a JavaScript program to check if two numbers are in range 40..60 or in the range 70..100 inclusive.


function range(intA, intB){

  if (intA >= 40 && intA <= 60)
  {
    if (intB >= 40 && intB <= 60)
    {
        console.log("A and B are in the 40 - 60 range");
        console.log()
        return
    }
  }

  if (intA >= 70 && intA <= 100)
  {
    if (intB >= 70 && intB <= 100)
    {
        console.log("A and B are in the 70 - 100 range");
        return
    }
  }

}

console.log(range(45,50));
