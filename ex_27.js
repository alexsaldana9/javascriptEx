//27. Write a JavaScript program to check if a string starts with 'Java' //and false otherwise


function checkForJava (string) {

  if (string.length < 4 ){

    console.log("string is too short");
    return string;
  } else if (string.substring(0,4) == "Java") {
    console.log("contains the Java at the start")
    return string;
  } else {
    console.log("does NOT start with Java")
    return string;

  }

}


console.log(checkForJava("Javalisto"));
console.log(checkForJava("Javascript"));

console.log(checkForJava("notspecific"));
