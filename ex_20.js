
//20. Write a JavaScript program to check from 
//two given integers, if one is positive and one is negative. 


function checkPosNeg(int1, int2) {

	if (int1 < 0){
		console.log("int1 is negative");
	}else if(int2 < 0){
		console.log("int2 is negative");
	} else {
		console.log("none is negative");
	}
}
console.log("Passing 2 , 2");
console.log(checkPosNeg(2,2));

console.log("Passing -2 , 4");
console.log(checkPosNeg(-2,4));

console.log("Passing 2 , -4");
console.log(checkPosNeg(2,-4));