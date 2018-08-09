//51. Write a JavaScript program to convert a given number to hours and minutes.

function convertHM (number) {

  var hours = Math.floor(number/60);

  var minutes = number %60;

  return console.log("Hours {hours}")
}
