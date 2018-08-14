//66. Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.
function cityNameStart(text) {

  var firstThree = text.substring(0,3);

  if (firstThree == 'Los')
  {
    console.log("LOS");
  } else if (firstThree == 'New') {
    console.log("New");
  } else {
    console.log("NOTHING to show");
  }



}

console.log(cityNameStart("New York"));
console.log(cityNameStart("Los angeles"));
console.log(cityNameStart("New Jersey"));
