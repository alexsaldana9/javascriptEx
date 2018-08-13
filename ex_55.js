//55. Write a JavaScript program to check if a given string contains equal number of p's and t's present.


function countTandP(text) {

  var newArray = text.split('')

  var countP  = 0;
  var countT  = 0;

  for (var i = 0; i < newArray.length; i++){

    if (newArray[i] == 'p' | newArray[i] == 'P')
    {
        countP = countP +1;
    }

    if (newArray[i] == 't' | newArray[i] == 'T')
    {
        countT = countT +1;
    }

  }

  return console.log("Count of P: ", countP, " | Count of T: ", countT);

}


console.log(countTandP('to do '));
console.log(countTandP('tp'))
