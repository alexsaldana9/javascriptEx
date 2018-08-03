// 32. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.


function findNearest100(intA, intB) {

  var distanceA_100 = 100 - intA;
  var distanceB_100 = 100 - intB;

  if (distanceA_100 > distanceB_100 ){
    console.log("Int B is closer to 100");
  } else {
    console.log("Int A is closer to 100");
  }

}


console.log(findNearest100(45, 50));
console.log(findNearest100(-45, 5));
console.log(findNearest100(200, 300));
