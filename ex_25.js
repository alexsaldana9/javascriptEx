//25. Write a JavaScript program check if a given positive number is a //multiple of 3 or a multiple of 7


function multiple7or3 (number)
{
  if (number % 3 == 0 && number % 7 == 0)
  {
    console.log("it is multiple of 3 and 7")
  } else if (number % 3 == 0 ) {
    console.log("it is multiple of 3")
  } else if (number % 7 == 0) {
    console.log("it is multiple of 7")
  } else {
    console.log("It is noT multiple of 7 or 3")
  }

}

console.log(multiple7or3(21));
console.log(multiple7or3(4));
