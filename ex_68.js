//68. Write a JavaScript program to create a new string using the first and last n characters from a given sting. The string length must be greater or equal to n.



function moveChars(text) {

    var len = text.length;
    var mid = len /2;

    var lastThree = text.substr(text.length - 3);
    var slice = text.slice(0,-3);

    console.log(lastThree + slice);
}


console.log(moveChars('sample'));
