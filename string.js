
//Ex. 5 - Write a JavaScript program to rotate the string 
//'w3resource' in right direction by periodically 
//removing one letter from 
//the end of the string and attaching it to the front.

var s = "w3resource";

var chars_string = s.split("");

console.log("chars_string = > " , chars_string);

var new_array = [];
var letter;

for (i=0; i < chars_string.length +1; i++){

	letter = chars_string[chars_string.length - i];
	new_array.push(letter);
	console.log(new_array);	
}

new_array.shift();

var join = new_array.join("");
console.log(new_array);

console.log("join => ", join);