//11. Write a JavaScript program to convert 
//temperatures to and from Celsius, Fahrenheit. 
//[ Formula : 
//c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] 
//Expected Output : 
//60°C is 140 °F
//45°F is 7.222222222222222°C 


//30°C x 1.8 + 32 = 86°F
// (50°F - 32) x .5556 = 10°C

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter Celcius temp : ', (celcius_temp) => {
    rl.question('Please enter the Fahrenheit temp : ', (far_temp) => {
        var cel_to_far = (+celcius_temp) * (1.8) + 32;
        var far_to_cel = ((+far_temp)-32) * 0.5556;
        console.log(`The conversion from celcius ${celcius_temp} to Fahrenheit: ${cel_to_far} F`);
        console.log(`The conversion from Fahrenheit ${far_temp} to celcius: ${far_to_cel} C`);
        rl.close();
    });
});